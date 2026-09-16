export class Slider {
    constructor(back, next, slideractive) {
        this.back = back;
        this.next = next;
        this.active = document.querySelector(slideractive);
        this.activeSlide();
    }

    activeSlide() {
        this.next.addEventListener("click", this.nexEl.bind(this));
        this.back.addEventListener("click", this.backEl.bind(this));
    }

    nexEl() {
        if (this.active.nextElementSibling) {
            const nextEl = this.active.nextElementSibling;
            nextEl.classList.add("active");
            if (nextEl.classList.contains("next")) nextEl.classList.remove("next");
            this.active.classList.remove("active");
            this.active.classList.add("back");
            this.active = nextEl;
        }
    }

    backEl() {
        if (this.active.previousElementSibling) {
            const backEl = this.active.previousElementSibling;
            backEl.classList.add("active");
            if (backEl.classList.contains("back")) backEl.classList.remove("back");
            this.active.classList.remove("active");
            this.active.classList.add("next");
            this.active = backEl;
        }
    }
}