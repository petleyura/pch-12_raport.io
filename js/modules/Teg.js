export class Teg {
    constructor(teg, text = "", attribut = {}) {
        this.teg = teg;
        this.text = text;
        this.attribut = attribut;
    }

    render() {
        const someTeg = document.createElement(this.teg);
        if (this.attribut) {
            for (const nameAttr in this.attribut) {
                someTeg.setAttribute(nameAttr, this.attribut[nameAttr]);
            }
        }
        someTeg.innerText = this.text;
        return someTeg;
    }
}