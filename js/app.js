import { masterTools } from './data/masterTools.js';
import { normTools } from './data/normTools.js';
import { ListMaster } from './modules/ListMaster.js';
import { ListTools } from './modules/ListTools.js';
import { RadioList } from './modules/RadioList.js';
import { RenderListNorm } from './modules/RenderListNorm.js';
import { ItemList } from './modules/ItemList.js';
import { FuelConsumptionCalculations } from './modules/FuelConsumptionCalculations.js';
import { Slider } from './modules/Slider.js';

function isWebp() {
    const webP = new Image();
    webP.onload = webP.onerror = () => {
        document.documentElement.classList.add(webP.height === 2 ? "webp" : "no-webp");
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

// DOM-елементи зібрані в одному місці
const $ = id => document.getElementById(id);

window.addEventListener('DOMContentLoaded', () => {
    const workshops = $('workshops');
    const tool = $('tool');
    const form = $('form');
    const tableNorm = $('tableNorm');
    const refueling1 = $('refueling1');
    const job1 = $('job1');
    const inputFuel = $('inputFuel');
    const tableResult = $('tableResult');
    const spanRemainingFuel = $('spanRemainingFuel');
    const spanWork = $('spanWork');
    const spanMonth = $('spanMonth');
    const spanYear = $('spanYear');
    const nameTool = $('nameTool');
    const modelTool = $('modelTool');
    const toolId = $('toolId');
    const normTolsHours = $('normTolsHours');
    const fuelRemainTool = $('fuelRemainTool');
    const gasRafueling = $('gasRafueling');
    const sumWorkHours = $('sumWorkHours');
    const sumWorkNorm = $('sumWorkNorm');
    const factSumWorkGas = $('factSumWorkGas');
    const restGasTheMonth = $('restGasTheMonth');
    const nameMaster = $('nameMaster');
    const back = $('back');
    const next = $('next');

    const list = new ListMaster(masterTools, workshops);
    const listTools = new ListTools(masterTools, tool);
    list.id.addEventListener("changeWorkshops", listTools.addWorkshops);

    const radioImput = new RadioList(masterTools, form);
    listTools.id.addEventListener("chengeTools", radioImput.newArrMasterTools);

    const getObgTool = new RenderListNorm(normTools, tableNorm);
    radioImput.id.addEventListener("toolObg", getObgTool.getModelTools);

    new ItemList(refueling1);
    new ItemList(job1);

    const normCalculator = new FuelConsumptionCalculations({
        refID: inputFuel,
        idRefueling: refueling1,
        idJob: job1,
        table: tableResult,
        spanIDRemainingFuel: spanRemainingFuel,
        spanIDWork: spanWork,
        spanIDMonth: spanMonth,
        spanIDYear: spanYear,
        nameIDTool: nameTool,
        modelIDTool: modelTool,
        toolId,
        normTolsHours,
        fuelRemainToolID: fuelRemainTool,
        gasRafueling,
        sumWorkHours,
        sumWorkNorm,
        factSumWorkGas,
        restGasTheMonth,
        classWork: ".mhTool",
        classJOB: ".workToolJob",
        nameMaster
    });

    getObgTool.id.addEventListener("getNorm", normCalculator.getNorm);
    radioImput.id.addEventListener("sendMasterTool", normCalculator.getModelTools);

    new Slider(back, next, ".slide.active");
});

// Актуальний рік у заголовку H1 — без ручного оновлення
function setCurrentYear() {
    const yearEl = document.getElementById('currentYear');
    if (yearEl) yearEl.textContent = new Date().getFullYear();
}

window["FLS"] = true;
setCurrentYear();
isWebp();