import { Teg } from './Teg.js';

export class ListTools {
    constructor(arrMasterTools, id) {
        this.arrMasterTools = arrMasterTools;
        this.id = id;
        this.arrListTools = [];
        this.addWorkshops = this.addWorkshops.bind(this);
        this.flag = true;
    }

    pushArrListTools(workshop) {
        this.arrListTools = [];
        for (let i = 0; i < this.arrMasterTools.length; i++) {
            const t = this.arrMasterTools[i];
            if (t.workshops === workshop && !this.arrListTools.includes(t.tool)) {
                this.arrListTools.push(t.tool);
            }
        }
        this.renderListTools();
    }

    addWorkshops(event) {
        const workshop = event?.detail?.workshops;
        this.idWorkshop = workshop;
        this.pushArrListTools(workshop);
        this.id.parentElement.style.opacity = 1;
        this.id.addEventListener("input", this.chengSelectTools.bind(this));
    }

    renderListTools() {
        this.id.innerText = "";
        let placeholder = new Teg("option", "Оберіть тип інструменту").render();
        this.id.append(placeholder);
        this.flag = true;

        for (let y = 0; y < this.arrListTools.length; y++) {
            let option = new Teg("option", this.arrListTools[y]);
            this.id.append(option.render());
        }
    }

    chengSelectTools() {
        this.id.dispatchEvent(new CustomEvent("chengeTools", {
            detail: {
                workshop: this.idWorkshop,
                tool: this.id.value
            }
        }));
        if (this.flag) {
            this.id.firstElementChild.remove();
            this.flag = false;
        }
    }
}