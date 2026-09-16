import { Teg } from './Teg.js';

export class RadioList {
    constructor(arrayMasterTools, id) {
        this.id = id;
        this.arrayMasterTools = arrayMasterTools;
        this.filterMasterTools = [];
        this.newArrMasterTools = this.filterArrWorksopsAndTools.bind(this);
        this.tools = [];
    }

    filterArrWorksopsAndTools(event) {
        this.filterMasterTools = [];
        const worskhops = event?.detail?.workshop;
        const tool = event?.detail?.tool;
        this.filterMasterTools = this.arrayMasterTools
            .filter(el => el.workshops === worskhops)
            .filter(el => el.tool === tool);
        this.renderListFilterMasterTool();
    }

    renderListFilterMasterTool() {
        let divForm = document.querySelector(".container__list-tools");
        if (divForm) {
            divForm.innerText = "";
        } else {
            divForm = new Teg("div", "", { class: "container__list-tools" }).render();
        }
        this.divForm = divForm;

        for (let i = 0; i < this.filterMasterTools.length; i++) {
            const item = this.filterMasterTools[i];
            const span = new Teg("span").render();

            const input = new Teg("input", "", {
                type: "radio",
                id: item["id-tool"],
                name: "tools",
                value: item["name-tool"]
            }).render();

            const status = item["write-off"] != 0
                ? "Знаходиться на списанні!!!"
                : "Справний!";

            const lable = new Teg("label",
                `${item["name-tool"]} Інв.№${item["id-tool"]}. ${status}`,
                { for: item["id-tool"] }
            ).render();

            if (item["write-off"] != 0) lable.style.color = "red";

            input.addEventListener("input", (event) => {
                this.tools = this.filterMasterTools.filter(el => el["id-tool"] == event.target.id);
                this.sendObg();
            });

            input.addEventListener("click", (event) => {
                const masterToolObg = this.filterMasterTools.filter(el => el["id-tool"] == event.target.id);
                this.sendMasterToolObg(masterToolObg[0]);
            });

            span.append(input);
            span.append(lable);
            this.divForm.append(span);
        }
        this.id.append(this.divForm);
    }

    sendObg() {
        this.id.dispatchEvent(new CustomEvent("toolObg", { detail: this.tools }));
    }

    sendMasterToolObg(masterTool) {
        this.id.dispatchEvent(new CustomEvent("sendMasterTool", { detail: masterTool }));
    }
}