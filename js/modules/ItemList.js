import { Teg } from './Teg.js';

export class ItemList {
    static arrID = [];
    static arrQquantity = [];
    static idClassObg = 1;

    constructor(id) {
        this.idObg = this.idCountObg();
        this.id = id;

        this.divItem = new Teg("div", "", { class: "container__fuel-input" }).render();
        this.divDate = new Teg("div").render();
        this.divInput = new Teg("div").render();
        this.divButton = new Teg("div").render();

        this.date = new Teg("input", "", { type: "date", value: "" }).render();
        this.input = new Teg("input", "", { type: "number", value: 0 }).render();
        this.buttonToAddItemList = new Teg("button", "+").render();
        this.buttonToRemoveItemList = new Teg("button", "-").render();

        this.renderItem();

        this.date.addEventListener("input", (e) => { this.inputDate = e.target.value; });
        this.input.addEventListener("change", (e) => {
            if (this.inputDate) this.inputNum = e.target.value;
            else { alert("Спочатку потрібно обрати дату!!!!"); this.input.value = 0; }
        });

        this.addIDStayic();
    }

    idCountObg() {
        return "ItemListID_" + (++ItemList.idClassObg);
    }

    addIDStayic() {
        if (!ItemList.arrID.includes(this.id)) {
            ItemList.arrID.push(this.id);
            ItemList.arrQquantity.push(1);
        }
    }

    renderItem() {
        this.divDate.append(this.date);
        this.divInput.append(this.input);
        this.divButton.append(this.buttonToAddItemList, this.buttonToRemoveItemList);
        this.divItem.append(this.divDate, this.divInput, this.divButton);
        this.id.append(this.divItem);
        this.buttonToAddItemList.addEventListener("click", this.addToAddItemLis.bind(this));
        this.buttonToRemoveItemList.addEventListener("click", this.toRemoveItemList.bind(this));
    }

    addToAddItemLis() {
        const idx = ItemList.arrID.indexOf(this.id);
        if (idx !== -1) {
            ItemList.arrQquantity[idx]++;
            if (ItemList.arrQquantity[idx] > 1) this.buttonToRemoveItemList.removeAttribute("disabled");
        }
        this.newItem = new ItemList(this.id);
        this.sehdObgect();
    }

    toRemoveItemList() {
        const idx = ItemList.arrID.indexOf(this.id);
        if (idx === -1) return;
        if (ItemList.arrQquantity[idx] > 1) {
            this.divItem.remove();
            ItemList.arrQquantity[idx]--;
        }
        if (ItemList.arrQquantity[idx] === 1) {
            this.buttonToRemoveItemList.setAttribute("disabled", true);
        }
    }

    sehdObgect() {
        this.buttonToAddItemList.dispatchEvent(new CustomEvent("sendObg", {
            detail: this.newItem
        }));
    }
}