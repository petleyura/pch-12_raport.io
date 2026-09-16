import { Teg } from './Teg.js';

export class RenderListNorm {
    constructor(norm, id) {
        this.id = id;
        this.norm = norm;
        this.sortNormTool = [];
        this.getModelTools = this.getModelTools.bind(this);
    }

    getModelTools(event) {
        this.model = event?.detail?.[0]?.model;
        this.getArrNormTools();
    }

    getArrNormTools() {
        this.sortNormTool = this.norm.filter(el => el.model == this.model);
        this.renderNormTable();
    }

    renderNormTable() {
        if (this.sortNormTool.length === 0) {
            this.id.innerText = "Норми не знайдено";
            return;
        }
        this.id.innerText = "";
        this.table = new Teg("table").render();
        const tBody = new Teg("tbody").render();

        const tRow_1 = new Teg("tr").render();
        const tRow_2 = new Teg("tr").render();

        tRow_1.append(new Teg("th", "№", { rowspan: "2" }).render());
        tRow_1.append(new Teg("th", "Марка", { rowspan: "2" }).render());
        tRow_1.append(new Teg("th", "Марка Двигуна", { rowspan: "2" }).render());
        tRow_1.append(new Teg("th", "Норма витрат палива", { colspan: "3" }).render());

        const first = this.sortNormTool[0];
        if (first["name_norm"] && first["name_norm"].length > 0) {
            first["name_norm"].forEach(name => {
                tRow_2.append(new Teg("th", name).render());
            });
        } else {
            tRow_2.append(new Teg("th", "мото.години").render());
        }

        tBody.append(tRow_1, tRow_2);
        this.table.append(tBody);
        this.id.append(this.table);

        let count = 1;
        this.sortNormTool.forEach((item, i) => {
            const tRow_i = new Teg("tr").render();
            tRow_i.append(new Teg("td", `${i + 1}`).render());
            tRow_i.append(new Teg("td", `${item["tools"]}`).render());
            tRow_i.append(new Teg("td", `${item["motor-model"]}`).render());

            const norms = Array.isArray(item["norm"]) ? item["norm"] : [item["norm"]];
            norms.forEach(normVal => {
                const tdNorm = new Teg("td").render();
                const id = `${item["tools"]}-${item["model"]}-${normVal}-${count}`;
                const input = new Teg("input", "", {
                    type: "radio",
                    id,
                    name: "norm",
                    value: `${normVal}`
                }).render();
                const label = new Teg("label", `${normVal} л.`, { for: id }).render();
                tdNorm.append(input, label);
                tRow_i.append(tdNorm);
                ++count;
            });
            tBody.append(tRow_i);
        });

        this.table.addEventListener("input", (event) => {
            const teg = event.target;
            if (teg.getAttribute("name") === "norm") {
                this.normTool = parseFloat(teg.value.replace(",", "."));
                this.exportNorm();
            }
        });
    }

    exportNorm() {
        this.id.dispatchEvent(new CustomEvent("getNorm", {
            detail: { norm: this.normTool }
        }));
    }
}