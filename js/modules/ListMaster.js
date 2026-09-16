import { Teg } from './Teg.js';

export class ListMaster {
    constructor(arrMasterTools, id) {
        this.arrMasterTools = arrMasterTools;
        this.id = id;
        this.sortMasterWorkShops = [];
        this.arrayListMaster();
        this.renderOptionList();
        this.flag = true;
    }

    arrayListMaster() {
        for (let i = 0; i < this.arrMasterTools.length; i++) {
            const ws = this.arrMasterTools[i].workshops;
            if (!this.sortMasterWorkShops.includes(ws)) {
                this.sortMasterWorkShops.push(ws);
            }
        }
        this.sortMasterWorkShops.sort();
    }

    renderOptionList() {
        // одразу додаємо placeholder
        let placeholder = new Teg("option", "Оберіть цех").render();
        this.id.append(placeholder);

        for (let i = 0; i < this.sortMasterWorkShops.length; i++) {
            let teg = new Teg("option", this.sortMasterWorkShops[i]);
            this.id.append(teg.render());
        }
        this.id.addEventListener("input", this.changeInput.bind(this));
    }

    changeInput() {
        this.id.dispatchEvent(new CustomEvent("changeWorkshops", {
            detail: { workshops: this.id.value }
        }));
        if (this.flag) {
            this.id.firstElementChild.remove();
            this.flag = false;
        }
    }
}