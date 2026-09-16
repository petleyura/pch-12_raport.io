import { Teg } from './Teg.js';

export class FuelConsumptionCalculations {
    constructor(opts) {
        this.norm = undefined;
        this.master = null;
        this.refueling = [];
        this.toolOperation = [];
        this.allOperations = [];
        this.starGas = 0;
        this.endGas = 0;
        this.remainingFuel = 0;

        this.getNorm = this.getNorm.bind(this);
        this.getModelTools = this.getModelTools.bind(this);
        this.recalculate = this.recalculate.bind(this);

        Object.assign(this, opts);

        this.classWork = document.querySelectorAll(opts.classWork);
        this.tableClassJob = document.querySelectorAll(opts.classJOB);

        this.refuelingTool();
        this.arrClassMCH(); // одразу чистимо шаблонні цифри в .mhTool до першого вводу
    }

    getNorm(event) {
        this.norm = event?.detail?.norm;
        this.recalculate();
    }

    getModelTools(event) {
        this.master = event?.detail;
        this.recalculate();
    }

    // Слухачі: будь-яка зміна в блоці заправок або робіт = повний перерахунок.
    // change/input — правка дати чи літрів, click — кнопки "+" і "-" (додати/видалити рядок).
    refuelingTool() {
        [this.idRefueling, this.idJob].forEach(container => {
            if (!container) return;
            container.addEventListener("change", this.recalculate);
            container.addEventListener("input", this.recalculate);
            container.addEventListener("click", this.recalculate);
        });
    }

    // Єдиний ланцюжок перерахунку. Викликається з усіх слухачів,
    // тому спан і таблиця завжди синхронні з даними в DOM.
    recalculate() {
        this.collectRefueling();
        this.collectToolOperation();

        this.sumRefueling();
        this.sumJomToolOperation();
        this.resultJomNorm();
        this.resultJobFact();
        this.fuelRemainingTotal();
        this.renderTable();
        this.arrClassMCH(); // мотогодини по днях місяця (слайд 3) — після повного збору toolOperation

        return this.remainingFuel;
    }

    collectRefueling() {
        this.refueling = this.collectItems(this.idRefueling);
    }

    collectToolOperation() {
        this.toolOperation = this.collectItems(this.idJob);
    }

    // Збирає пари "дата + число" з контейнера, ігнорує порожні дати
    // і сортує за датою за зростанням — щоб порядок введення не впливав на результат.
    collectItems(container) {
        const items = [];
        if (!container) return items;

        const inputDateAll = container.querySelectorAll('input[type="date"]');
        const inputNumAll = container.querySelectorAll('input[type="number"]');

        for (let i = 0; i < inputDateAll.length; i++) {
            const date = inputDateAll[i].value;
            if (!date) continue;
            items.push({
                date,
                number: parseFloat(inputNumAll[i]?.value) || 0
            });
        }

        items.sort((a, b) => this.dateToTime(a.date) - this.dateToTime(b.date));
        return items;
    }

    dateToTime(date) {
        const time = new Date(date).getTime();
        return Number.isNaN(time) ? Infinity : time;
    }

    getFirstDate() {
        const all = [...this.refueling, ...this.toolOperation].filter(el => el.date);
        if (all.length === 0) return null;
        return all.reduce(
            (min, el) => (this.dateToTime(el.date) < this.dateToTime(min) ? el.date : min),
            all[0].date
        );
    }

    // Літри палива — цілі числа, як і було раніше
    toLiters(value) {
        const num = parseFloat(value);
        return Number.isFinite(num) ? Math.floor(num) : 0;
    }

    startFuel() {
        return this.toLiters(this.refID.value);
    }

    // Лише повертає число і запам'ятовує його. У DOM тут більше нічого не пишеться!
    sumRefueling() {
        let sumOil = this.startFuel();
        this.refueling.forEach(el => { sumOil += this.toLiters(el.number); });
        this.starGas = sumOil;
        return this.starGas;
    }

    sumJomToolOperation() {
        let sumJob = 0;
        this.toolOperation.forEach(el => {
            const num = parseFloat(el.number);
            if (Number.isFinite(num)) sumJob += num;
        });
        return Math.round(sumJob * 100) / 100;
    }

    resultJomNorm() {
        const norm = Number.isFinite(this.norm) ? this.norm : 0;
        return (this.sumJomToolOperation() * norm).toFixed(2);
    }

    // Спеціальне правило округлення літрів:
    // дробова частина ,1–,7 → у меншу сторону, ,8–,9 → у більшу.
    // 13.6 → 13; 8.8 → 9; 15.0 → 15; 7.2 → 7; 12.9 → 13; 0.7 → 0
    roundFuel(value) {
        const frac = value - Math.floor(value);
        return frac >= 0.8 ? Math.ceil(value) : Math.floor(value);
    }

    resultJobFact() {
        const norm = Number.isFinite(this.norm) ? this.norm : 0;
        let fact = 0;
        this.toolOperation.forEach(el => {
            const num = parseFloat(el.number);
            if (Number.isFinite(num)) fact += this.roundFuel(norm * Math.floor(num));
        });
        return fact; // завжди ціле число
    }

    // залишок = поч.місяця + всі заправки − фактичні витрати (цілі літри)
    fuelRemainingTotal() {
        const fuel = this.sumRefueling() - this.roundFuel(this.resultJobFact());
        this.remainingFuel = fuel;
        this.spanIDRemainingFuel.innerText = `${fuel} л.`;
        return fuel;
    }

    getMonthName(m) {
        return ["Січень","Лютий","Березень","Квітень","Травень","Червень",
                "Липень","Серпень","Вересень","Жовтень","Листопад","Грудень"][m];
    }

    // Мотогодини конкретного дня. Порожні та невалідні дати пропускаємо,
    // а якщо запису за цей день немає — повертаємо "" (комірка очищується).
    funArr(dayIndex) {
        let text = "";
        for (const op of this.toolOperation) {
            if (!op.date) continue;
            const date = new Date(op.date);
            if (isNaN(date.getTime())) continue;
            if (date.getDate() === dayIndex + 1) {
                text = op.number ?? "";
            }
        }
        return text;
    }

    // Заповнює комірки .mhTool (дні 1–31) на 3-му слайді.
    // Викликається лише тоді, коли this.toolOperation повністю зібраний і відсортований.
    arrClassMCH() {
        this.classWork.forEach((el, index) => {
            el.innerText = `${this.funArr(index)}`;
        });
    }

    renderTableMain() {
        this.tableClassJob.forEach((tr, i) => this.trInnerText(tr, i));
    }

    trInnerText(tr, i) {
        tr.innerText = "";
        const op = this.allOperations[i];
        const tdIndex = new Teg("td", `${op.tdIndex}`, { height: "25", style: "height:19.35pt;" }).render();
        const tdNameWorker = new Teg("td", `${op.tdNameWorker}`, {
            colspan: "6",
            style: "border-right:1px solid windowtext;border-bottom:1px solid windowtext;"
        }).render();
        const tdStarWork = new Teg("td", `${op.tdStarWork}`).render();
        const tdEndWork = new Teg("td", `${op.tdEndWork}`).render();
        const tdRemainderGasStart = new Teg("td", `${op.tdRemainderGasStart}`).render();
        const tdGatPetrol = new Teg("td", `${op.tdGatPetrol}`, { colspan: "1" }).render();
        const tdGetDiesel = new Teg("td", `${op.tdGetDiesel}`, { colspan: "1" }).render();

        const tdMasterPainting = new Teg("td", "", {
            colspan: "2",
            style: "border-right:1px solid windowtext;border-bottom:1px solid windowtext; position: relative;"
        }).render();
        if (op.tdMasterPainting) {
            tdMasterPainting.append(new Teg("img", "", {
                src: "img/master.png",
                style: "width: 120%; height: 120%; position: absolute; top: -10%; left: -10%;"
            }).render());
        }

        const tdNormWorkGasLitr = new Teg("td", `${op.tdNormWorkGasLitr}`).render();
        const tdFactWorkGasLitr = new Teg("td", `${op.tdFactWorkGasLitr}`).render();
        const tdRemainderGasEnd = new Teg("td", `${op.tdRemainderGasEnd}`).render();

        const tdWorkerPainting = new Teg("td", "", {
            colspan: "3",
            style: "border-right:1px solid windowtext;border-bottom:1px solid windowtext; position: relative;"
        }).render();
        if (op.tdWorkerPainting) {
            tdWorkerPainting.append(new Teg("img", "", {
                src: "img/Working.png",
                style: "width: 120%; height: 120%; position: absolute; top: -10%; left: -10%;"
            }).render());
        }

        // ✅ tdNormWorkGasLitr додається лише раз
        [
            tdIndex, tdNameWorker, tdStarWork, tdEndWork, tdRemainderGasStart,
            tdGatPetrol, tdGetDiesel, tdMasterPainting,
            tdNormWorkGasLitr, tdFactWorkGasLitr, tdRemainderGasEnd,
            tdWorkerPainting
        ].forEach(el => tr.append(el));

        return tr;
    }

    // Наскрізний endGas рахується строго по днях 1 → 31,
    // тому порядок введення записів значення не має.
    operationsArrayTool() {
        const toolModel = ["АД-2", "АД-4", "ЕД-2", "ЕД-4", "АДД-4001"];
        const norm = Number.isFinite(this.norm) ? this.norm : 0;
        this.allOperations = [];

        for (let i = 0; i < 31; i++) {
            const obg = {
                tdIndex: `${i + 1}`,
                tdNameWorker: "", tdStarWork: "", tdEndWork: "",
                tdRemainderGasStart: "", tdGatPetrol: "", tdGetDiesel: "",
                tdMasterPainting: false,
                tdNormWorkGasLitr: "", tdFactWorkGasLitr: "", tdRemainderGasEnd: "",
                tdWorkerPainting: false
            };

            for (const el of this.refueling) {
                const day = new Date(el.date).getDate();
                if (i + 1 !== day) continue;

                if (toolModel.some(m => m === this.master.model)) {
                    obg.tdGatPetrol = " ";
                    obg.tdGetDiesel = this.toLiters(el.number);
                } else {
                    obg.tdGatPetrol = this.toLiters(el.number);
                    obg.tdGetDiesel = " ";
                }
                obg.tdMasterPainting = true;
            }

            for (const op of this.toolOperation) {
                const number = parseFloat(op.number);
                // був break — через це всі наступні записи ігнорувались
                if (!Number.isFinite(number) || number <= 0) continue;

                const day = new Date(op.date).getDate();
                if (i + 1 !== day) continue;

                obg.tdNameWorker = "Ігорь МАНЗЯК";
                obg.tdStarWork = `8:${Math.floor(Math.random() * 59)}`;
                obg.tdEndWork = `16:${Math.floor(Math.random() * 59)}`;
                obg.tdRemainderGasStart = this.endGas;
                obg.tdNormWorkGasLitr = (norm * number).toFixed(2); // по нормі — дробове, для довідки
                obg.tdFactWorkGasLitr = this.roundFuel(norm * number); // факт — цілі літри
                const gas = obg.tdGatPetrol !== " " ? obg.tdGatPetrol
                          : obg.tdGetDiesel !== " " ? obg.tdGetDiesel : 0;
                this.endGas = obg.tdRemainderGasStart + gas - obg.tdFactWorkGasLitr;
                obg.tdRemainderGasEnd = this.endGas;
                obg.tdWorkerPainting = true;
            }

            if (!obg.tdWorkerPainting && obg.tdMasterPainting) {
                obg.tdRemainderGasStart = this.endGas;
                const gas = obg.tdGatPetrol !== " " ? obg.tdGatPetrol
                          : obg.tdGetDiesel !== " " ? obg.tdGetDiesel : 0;
                this.endGas = obg.tdRemainderGasStart + gas;
                obg.tdRemainderGasEnd = this.endGas;
            }

            this.allOperations.push(obg);
        }
    }

    renderTable() {
        // інструмент ще не обрано — заповнювати бланк немає чим
        if (!this.master) return;

        this.spanIDWork.innerText = `${this.master["workshops"]}`;
        this.spanIDWork.style = "text-decoration:underline";

        const firstDate = this.getFirstDate();
        if (firstDate) {
            const date = new Date(firstDate);
            this.spanIDMonth.innerText = `.       ${this.getMonthName(date.getMonth())}       .`;
            this.spanIDMonth.style = "text-decoration:underline";
            this.spanIDYear.innerText = `${date.getFullYear()}`;
            this.spanIDYear.style = "text-decoration:underline";
        }

        this.nameIDTool.innerText = `${this.master["tool"]}`;
        this.modelIDTool.innerText = `${this.master["model"]}`;
        this.toolId.innerText = `${this.master["id-tool"]}`;
        this.normTolsHours.innerText = `${this.norm}`;

        const startFuel = this.startFuel();
        this.endGas = startFuel;

        this.fuelRemainToolID.innerText = `${startFuel} л.`;
        this.gasRafueling.innerText = `${this.starGas - startFuel} л.`;
        this.sumWorkHours.innerText = `${this.sumJomToolOperation()}`;
        this.sumWorkNorm.innerText = `${this.roundFuel(parseFloat(this.resultJomNorm()))} л.`;
        this.factSumWorkGas.innerText = `${this.resultJobFact()} л.`;
        this.restGasTheMonth.innerText = `${this.remainingFuel} л.`;

        // таблицю перемальовуємо завжди, коли є хоч один запис (заправка або робота)
        if (this.refueling.length > 0 || this.toolOperation.length > 0) {
            this.operationsArrayTool();
            this.renderTableMain();
        }

        this.nameMaster.innerText = `${this.master["master-workhop"]}`;
    }
}
