(() => {
    "use strict";
    function isWebp() {
        function testWebP(callback) {
            let webP = new Image;
            webP.onload = webP.onerror = function() {
                callback(webP.height == 2);
            };
            webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        }
        testWebP((function(support) {
            let className = support === true ? "webp" : "no-webp";
            document.documentElement.classList.add(className);
        }));
    }
    let addWindowScrollEvent = false;
    setTimeout((() => {
        if (addWindowScrollEvent) {
            let windowScroll = new Event("windowScroll");
            window.addEventListener("scroll", (function(e) {
                document.dispatchEvent(windowScroll);
            }));
        }
    }), 0);
    let masterTools = [ {
        "id-tool": "1760601000835",
        "name-tool": "кущоріз  SHTIL",
        workshops: "ПД-1",
        model: "STIHL",
        tool: "Кущоріз",
        "master-workhop": "Бучковський Антон Володимирович",
        count: "1.000 ",
        "write-off": "1.000 "
    }, {
        "id-tool": "1760411000456",
        "name-tool": "бензоагрегат АБ-2",
        workshops: "ПД-1",
        model: "АБ-2",
        tool: "Пересувна електростанція 2 кВт (АБ-2)",
        "master-workhop": "Бучковський Антон Володимирович",
        count: "1.000 ",
        "write-off": "0.000 "
    }, {
        "id-tool": "1760401000308",
        "name-tool": "бензоагрегат АБ-4",
        workshops: "ПД-1",
        model: "АБ-4",
        tool: "Пересувна електростанція 4 кВт (АБ-4)",
        "master-workhop": "Бучковський Антон Володимирович",
        count: "1.000 ",
        "write-off": "1.000 "
    }, {
        "id-tool": "1760602001370",
        "name-tool": "Верстат рейкорiзний РРС (К1270Rail 16/400мм 1)",
        workshops: "ПД-1",
        model: "РРС",
        tool: "Рейкорізні верстати з абразивними кру­гами",
        "master-workhop": "Бучковський Антон Володимирович",
        count: "1.000 ",
        "write-off": "0.000 "
    }, {
        "id-tool": "1760602001373",
        "name-tool": "Верстат рейкосвердлильний PСС",
        workshops: "ПД-1",
        model: "РРС",
        tool: "Рейкосвердлильні верстати з ДВЗ",
        "master-workhop": "Бучковський Антон Володимирович",
        count: "1.000 ",
        "write-off": "0.000 "
    }, {
        "id-tool": "1760601000827",
        "name-tool": "кущоріз Husqvarna",
        workshops: "ПД-10",
        model: "Husqvarna ",
        tool: "Кущоріз",
        "master-workhop": "Соколенко Володимир ",
        count: "1.000 ",
        "write-off": "0.000 "
    }, {
        "id-tool": "1760402000316",
        "name-tool": "Електроагрегат ЕД-2 -Т- 230-1",
        workshops: "ПД-10",
        model: "ЕД-2",
        tool: "Пересувна електростанція 2 кВт (АБ-2)",
        "master-workhop": "Соколенко Володимир ",
        count: "1.000 ",
        "write-off": "0.000 "
    }, {
        "id-tool": "1760410000452",
        "name-tool": "агрегат зварювальний АДД-4001",
        workshops: "ПД-12",
        model: "АДД-4001",
        tool: "Електрозварювальні агрегати",
        "master-workhop": "Ластеженко Олександр ",
        count: "1.000 ",
        "write-off": "0.000 "
    }, {
        "id-tool": "1760412000513",
        "name-tool": "агрегат зварювальний",
        workshops: "ПД-12",
        model: "АДД-4001",
        tool: "Електрозварювальні агрегати",
        "master-workhop": "Ластеженко Олександр ",
        count: "1.000 ",
        "write-off": "1.000 "
    }, {
        "id-tool": "1760412000514",
        "name-tool": "зварювальний агрегат",
        workshops: "ПД-12",
        model: "АДД-4001",
        tool: "Електрозварювальні агрегати",
        "master-workhop": "Ластеженко Олександр ",
        count: "1.000 ",
        "write-off": "0.000 "
    }, {
        "id-tool": "1760401000292",
        "name-tool": "Бензоагрегат АБ-4",
        workshops: "ПД-12",
        model: "АБ-4",
        tool: "Пересувна електростанція 4 кВт (АБ-4)",
        "master-workhop": "Ластеженко Олександр ",
        count: "1.000 ",
        "write-off": "0.000 "
    }, {
        "id-tool": "1760601000843",
        "name-tool": "Кущоріз HUSQVARNA 535",
        workshops: "ПД-13",
        model: "Husqvarna 535 ",
        tool: "Кущоріз",
        "master-workhop": "Трофімов О. В.",
        count: "1.000 ",
        "write-off": "0.000 "
    }, {
        "id-tool": "1760401000290",
        "name-tool": "електроагрегат АД-1",
        workshops: "ПД-13",
        model: "АД-2",
        tool: "Пересувна електростанція 2 кВт (АБ-2)",
        "master-workhop": "Трофімов О. В.",
        count: "1.000 ",
        "write-off": "0.000 "
    }, {
        "id-tool": "1760401000295",
        "name-tool": "бензоагрегат АБ-2",
        workshops: "ПД-13",
        model: "АБ-2",
        tool: "Пересувна електростанція 2 кВт (АБ-2)",
        "master-workhop": "Трофімов О. В.",
        count: "1.000 ",
        "write-off": "0.000 "
    }, {
        "id-tool": "1760401000301",
        "name-tool": "бензоагрегат АБ-2",
        workshops: "ПД-13",
        model: "АБ-2",
        tool: "Пересувна електростанція 2 кВт (АБ-2)",
        "master-workhop": "Трофімов О. В.",
        count: "1.000 ",
        "write-off": "1.000 "
    }, {
        "id-tool": "1760401000305",
        "name-tool": "Бензоагрегат АБ-4",
        workshops: "ПД-13",
        model: "АБ-4",
        tool: "Пересувна електростанція 4 кВт (АБ-4)",
        "master-workhop": "Трофімов О. В.",
        count: "1.000 ",
        "write-off": "1.000 "
    }, {
        "id-tool": "1760602001369",
        "name-tool": "Верстат рейкорiзний РРС (К1270Rail 16/400мм 1)",
        workshops: "ПД-13",
        model: "РРС",
        tool: "Рейкорізні верстати з абразивними кру­гами",
        "master-workhop": "Трофімов О. В.",
        count: "1.000 ",
        "write-off": "0.000 "
    }, {
        "id-tool": "1760602001366",
        "name-tool": "Верстат рейкосвердлильний PСС (типу РСС-П)",
        workshops: "ПД-13",
        model: "РСС",
        tool: "Рейкосвердлильні верстати з ДВЗ",
        "master-workhop": "Трофімов О. В.",
        count: "1.000 ",
        "write-off": "0.000 "
    }, {
        "id-tool": "1760601000840",
        "name-tool": "Кущоріз Husgvarna 335 RX",
        workshops: "ПД-14",
        model: "Husqvarna 333R",
        tool: "Кущоріз",
        "master-workhop": "Чорний Віктор Володимирович",
        count: "1.000 ",
        "write-off": "0.000 "
    }, {
        "id-tool": "1760902002879",
        "name-tool": "Травокосарка Husqvarna 535  RX",
        workshops: "ПД-14",
        model: "Husqvarna 535 ",
        tool: "Кущоріз",
        "master-workhop": "Чорний Віктор Володимирович",
        count: "1.0000",
        "write-off": "0.0000"
    }, {
        "id-tool": "1760401000296",
        "name-tool": "бензоагрегат АБ-2",
        workshops: "ПД-15",
        model: "АБ-2",
        tool: "Пересувна електростанція 2 кВт (АБ-2)",
        "master-workhop": "Тесленко Євгеній Вікторович",
        count: "1.000 ",
        "write-off": "1.000 "
    }, {
        "id-tool": "1760601000881",
        "name-tool": "гайковерт КШГ-1",
        workshops: "ПД-2",
        model: "КШГ-1Б",
        tool: "Гайковерт універсальний",
        "master-workhop": "Чуприна С. А.",
        count: "1.000 ",
        "write-off": "0.000 "
    }, {
        "id-tool": "1760601000826",
        "name-tool": "кущоріз Husqvarna",
        workshops: "ПД-2",
        model: "Husqvarna ",
        tool: "Кущоріз",
        "master-workhop": "Чуприна С. А.",
        count: "1.000 ",
        "write-off": "0.000 "
    }, {
        "id-tool": "1760601000830",
        "name-tool": "кущоріз SOLO",
        workshops: "ПД-2",
        model: "SOLO",
        tool: "Кущоріз",
        "master-workhop": "Чуприна С. А.",
        count: "1.000 ",
        "write-off": "1.000 "
    }, {
        "id-tool": "1760601000841",
        "name-tool": "Газонокосилка 535 RX",
        workshops: "ПД-2",
        model: "Husqvarna 535 ",
        tool: "Кущоріз",
        "master-workhop": "Чуприна С. А.",
        count: "1.000 ",
        "write-off": "0.000 "
    }, {
        "id-tool": "1760403000328",
        "name-tool": "бензоагрегат АБ-2",
        workshops: "ПД-2",
        model: "АБ-2",
        tool: "Пересувна електростанція 2 кВт (АБ-2)",
        "master-workhop": "Чуприна С. А.",
        count: "1.000 ",
        "write-off": "0.000 "
    }, {
        "id-tool": "1760401000291",
        "name-tool": "бензоагрегат АБ-4",
        workshops: "ПД-2",
        model: "АБ-4",
        tool: "Пересувна електростанція 4 кВт (АБ-4)",
        "master-workhop": "Чуприна С. А.",
        count: "1.000 ",
        "write-off": "0.000 "
    }, {
        "id-tool": "1760401000293",
        "name-tool": "бензоагрегат АБ-4",
        workshops: "ПД-2",
        model: "АБ-4",
        tool: "Пересувна електростанція 4 кВт (АБ-4)",
        "master-workhop": "Чуприна С. А.",
        count: "1.000 ",
        "write-off": "1.000 "
    }, {
        "id-tool": "1760402000318",
        "name-tool": "Електростанція дизельна ЭД - 4",
        workshops: "ПД-2",
        model: "ЕД-4",
        tool: "Пересувна електростанція 4 кВт (АБ-4)",
        "master-workhop": "Чуприна С. А.",
        count: "1.000 ",
        "write-off": "0.000 "
    }, {
        "id-tool": "1760601000857",
        "name-tool": "дизельний агрегат АД-4",
        workshops: "ПД-2",
        model: "АД-4",
        tool: "Пересувна електростанція 4 кВт (АБ-4)",
        "master-workhop": "Чуприна С. А.",
        count: "1.000 ",
        "write-off": "1.000 "
    }, {
        "id-tool": "1760601000745",
        "name-tool": "Рейкоріз бензиновий РР-80",
        workshops: "ПД-2",
        model: "РР-80",
        tool: "Рейкорізні верстати з абразивними кру­гами",
        "master-workhop": "Чуприна С. А.",
        count: "1.000 ",
        "write-off": "0.000 "
    }, {
        "id-tool": "1760601001539",
        "name-tool": "Верстат рейкорізний (ВРРТ)",
        workshops: "ПД-2",
        model: "STIHL TS-800",
        tool: "Рейкорізні верстати з абразивними кру­гами",
        "master-workhop": "Чуприна С. А.",
        count: "1.000 ",
        "write-off": "0.000 "
    }, {
        "id-tool": "1760602001371",
        "name-tool": "Верстат рейкорiзний РРС (К1270Rail 16/400мм 1)",
        workshops: "ПД-2",
        model: "РРС",
        tool: "Рейкорізні верстати з абразивними кру­гами",
        "master-workhop": "Чуприна С. А.",
        count: "1.000 ",
        "write-off": "0.000 "
    }, {
        "id-tool": "1760601000791",
        "name-tool": "гайковерт КШГ-1",
        workshops: "ПД-3",
        model: "КШГ-1Б",
        tool: "Гайковерт універсальний",
        "master-workhop": "Бойко Олександр Миколайович",
        count: "1.000 ",
        "write-off": "0.000 "
    }, {
        "id-tool": "1760601000831",
        "name-tool": "кущоріз SOLO",
        workshops: "ПД-3",
        model: "SOLO",
        tool: "Кущоріз",
        "master-workhop": "Бойко Олександр Миколайович",
        count: "1.000 ",
        "write-off": "1.000 "
    }, {
        "id-tool": "1760601000839",
        "name-tool": "Кущоріз Husgvarna 335 RX",
        workshops: "ПД-3",
        model: "Husqvarna 333R",
        tool: "Кущоріз",
        "master-workhop": "Бойко Олександр Миколайович",
        count: "1.000 ",
        "write-off": "0.000 "
    }, {
        "id-tool": "1760601000844",
        "name-tool": "Мотокоса HUSQVARNA 535 RX",
        workshops: "ПД-3",
        model: "Husqvarna 535 ",
        tool: "Кущоріз",
        "master-workhop": "Бойко Олександр Миколайович",
        count: "1.000 ",
        "write-off": "0.000 "
    }, {
        "id-tool": "1760401000302",
        "name-tool": "бензоагрегат АБ-2",
        workshops: "ПД-3",
        model: "АБ-2",
        tool: "Пересувна електростанція 2 кВт (АБ-2)",
        "master-workhop": "Бойко Олександр Миколайович",
        count: "1.000 ",
        "write-off": "1.000 "
    }, {
        "id-tool": "1760402000315",
        "name-tool": "бензоагрегат АБ-2",
        workshops: "ПД-3",
        model: "АБ-2",
        tool: "Пересувна електростанція 2 кВт (АБ-2)",
        "master-workhop": "Бойко Олександр Миколайович",
        count: "1.000 ",
        "write-off": "1.000 "
    }, {
        "id-tool": "1760401000310",
        "name-tool": "агрегат АД-4",
        workshops: "ПД-3",
        model: "АД-4",
        tool: "Пересувна електростанція 4 кВт (АБ-4)",
        "master-workhop": "Бойко Олександр Миколайович",
        count: "1.000 ",
        "write-off": "0.000 "
    }, {
        "id-tool": "1760402001519",
        "name-tool": "Електростанція дизельна 4 кВт (тип ТР6500DGF)",
        workshops: "ПД-3",
        model: "АД-4",
        tool: "Пересувна електростанція 4 кВт (АБ-4)",
        "master-workhop": "Бойко Олександр Миколайович",
        count: "1.000 ",
        "write-off": "0.000 "
    }, {
        "id-tool": "1760403000327",
        "name-tool": "дизельний агрегат АД-2",
        workshops: "ПД-3",
        model: "АД-2",
        tool: "Пересувна електростанція 4 кВт (АБ-4)",
        "master-workhop": "Бойко Олександр Миколайович",
        count: "1.000 ",
        "write-off": "1.000 "
    }, {
        "id-tool": "1760601001026",
        "name-tool": "Рейкорізка К-1250 ТС800-Т",
        workshops: "ПД-3",
        model: "Husqwarna К1250",
        tool: "Рейкорізні верстати з абразивними кру­гами",
        "master-workhop": "Бойко Олександр Миколайович",
        count: "1.000 ",
        "write-off": "0.000 "
    }, {
        "id-tool": "1760602001372",
        "name-tool": "Верстат рейкорiзний РРС (К1270Rail 16/400мм 1)",
        workshops: "ПД-3",
        model: "РРС",
        tool: "Рейкорізні верстати з абразивними кру­гами",
        "master-workhop": "Бойко Олександр Миколайович",
        count: "1.000 ",
        "write-off": "0.000 "
    }, {
        "id-tool": "1760602001362",
        "name-tool": "Верстат рейкосвердлильний TFR 330 P",
        workshops: "ПД-3",
        model: "РРС",
        tool: "Рейкосвердлильні верстати з ДВЗ",
        "master-workhop": "Бойко Олександр Миколайович",
        count: "1.000 ",
        "write-off": "0.000 "
    }, {
        "id-tool": "1760601000837",
        "name-tool": "Кущоріз Husgvarna 333 RX",
        workshops: "ПД-4",
        model: "Husqvarna 333R",
        tool: "Кущоріз",
        "master-workhop": "Матющенко Анатолій Павлович",
        count: "1.000 ",
        "write-off": "1.000 "
    }, {
        "id-tool": "1760601000842",
        "name-tool": "Кущоріз HUSQVARNA 535",
        workshops: "ПД-4",
        model: "Husqvarna 535 ",
        tool: "Кущоріз",
        "master-workhop": "Матющенко Анатолій Павлович",
        count: "1.000 ",
        "write-off": "0.000 "
    }, {
        "id-tool": "1760402000312",
        "name-tool": "бензоагрегат АБ-2",
        workshops: "ПД-4",
        model: "АБ-2",
        tool: "Пересувна електростанція 2 кВт (АБ-2)",
        "master-workhop": "Матющенко Анатолій Павлович",
        count: "1.000 ",
        "write-off": "0.000 "
    }, {
        "id-tool": "1760401000306",
        "name-tool": "бензоагрегат АБ-4",
        workshops: "ПД-4",
        model: "АБ-4",
        tool: "Пересувна електростанція 4 кВт (АБ-4)",
        "master-workhop": "Матющенко Анатолій Павлович",
        count: "1.000 ",
        "write-off": "1.000 "
    }, {
        "id-tool": "1760401000311",
        "name-tool": "агрегат АД-4",
        workshops: "ПД-4",
        model: "АД-4",
        tool: "Пересувна електростанція 4 кВт (АБ-4)",
        "master-workhop": "Матющенко Анатолій Павлович",
        count: "1.000 ",
        "write-off": "0.000 "
    }, {
        "id-tool": "1760402000314",
        "name-tool": "бензоагрегат АБ-4",
        workshops: "ПД-4",
        model: "АБ-4",
        tool: "Пересувна електростанція 4 кВт (АБ-4)",
        "master-workhop": "Матющенко Анатолій Павлович",
        count: "1.000 ",
        "write-off": "0.000 "
    }, {
        "id-tool": "1760601001029",
        "name-tool": "Електростанція дизельна АД4-Т230-Т",
        workshops: "ПД-4",
        model: "АД-4",
        tool: "Пересувна електростанція 4 кВт (АБ-4)",
        "master-workhop": "Матющенко Анатолій Павлович",
        count: "1.000 ",
        "write-off": "0.000 "
    }, {
        "id-tool": "1760602001348",
        "name-tool": "Рейкоріз ТС800-Т (верстат рейкорізний ВР-1)",
        workshops: "ПД-4",
        model: "STIHL TS-800",
        tool: "Рейкорізні верстати з абразивними кру­гами",
        "master-workhop": "Матющенко Анатолій Павлович",
        count: "1.000 ",
        "write-off": "0.000 "
    }, {
        "id-tool": "1760602001361",
        "name-tool": "Верстат рейкосвердлильний TFR 330 Р (типу РСС-П)",
        workshops: "ПД-4",
        model: "РСС",
        tool: "Рейкосвердлильні верстати з ДВЗ",
        "master-workhop": "Матющенко Анатолій Павлович",
        count: "1.000 ",
        "write-off": "0.000 "
    }, {
        "id-tool": "1760601000829",
        "name-tool": "кущоріз SOLO",
        workshops: "ПД-5",
        model: "SOLO",
        tool: "Кущоріз",
        "master-workhop": "Омельченко М. М.",
        count: "1.000 ",
        "write-off": "1.000 "
    }, {
        "id-tool": "1760601000834",
        "name-tool": "кущоріз  SHTIL",
        workshops: "ПД-5",
        model: "STIHL",
        tool: "Кущоріз",
        "master-workhop": "Омельченко М. М.",
        count: "1.000 ",
        "write-off": "1.000 "
    }, {
        "id-tool": "1760401000304",
        "name-tool": "бензоагрегат АБ-2",
        workshops: "ПД-5",
        model: "АБ-2",
        tool: "Пересувна електростанція 2 кВт (АБ-2)",
        "master-workhop": "Омельченко М. М.",
        count: "1.000 ",
        "write-off": "1.000 "
    }, {
        "id-tool": "1760401000307",
        "name-tool": "бензоагрегат АБ-4",
        workshops: "ПД-5",
        model: "АБ-4",
        tool: "Пересувна електростанція 4 кВт (АБ-4)",
        "master-workhop": "Омельченко М. М.",
        count: "1.000 ",
        "write-off": "1.000 "
    }, {
        "id-tool": "1760602001367",
        "name-tool": "Верстат рейкорiзний РРС (К1270Rail 16/400мм 1)",
        workshops: "ПД-5",
        model: "РРС",
        tool: "Рейкорізні верстати з абразивними кру­гами",
        "master-workhop": "Омельченко М. М.",
        count: "1.000 ",
        "write-off": "0.000 "
    }, {
        "id-tool": "1760601001535",
        "name-tool": "Верстат рейкосвердлильний (станок NZG-31)",
        workshops: "ПД-5",
        model: "РРС",
        tool: "Рейкосвердлильні верстати з ДВЗ",
        "master-workhop": "Омельченко М. М.",
        count: "1.000 ",
        "write-off": "0.000 "
    }, {
        "id-tool": "1760601000995",
        "name-tool": "Гайковерт моторний бензиновий БГ1",
        workshops: "ПД-6",
        model: "БГ-1",
        tool: "Гайковерт універсальний",
        "master-workhop": "Гаврилів Ю.М.",
        count: "1.000 ",
        "write-off": "0.000 "
    }, {
        "id-tool": "1760601000836",
        "name-tool": "кущоріз SHTIL",
        workshops: "ПД-6",
        model: "STIHL",
        tool: "Кущоріз",
        "master-workhop": "Гаврилів Ю.М.",
        count: "1.000 ",
        "write-off": "0.000 "
    }, {
        "id-tool": "1760401000303",
        "name-tool": "бензоагрегат АБ-2",
        workshops: "ПД-6",
        model: "АБ-2",
        tool: "Пересувна електростанція 2 кВт (АБ-2)",
        "master-workhop": "Гаврилів Ю.М.",
        count: "1.000 ",
        "write-off": "0.000 "
    }, {
        "id-tool": "1760403000329",
        "name-tool": "електроагрегат АД-2",
        workshops: "ПД-6",
        model: "АД-2",
        tool: "Пересувна електростанція 2 кВт (АБ-2)",
        "master-workhop": "Гаврилів Ю.М.",
        count: "1.000 ",
        "write-off": "0.000 "
    }, {
        "id-tool": "1760602001368",
        "name-tool": "Верстат рейкорiзний РРС (К1270Rail 16/400мм 1)",
        workshops: "ПД-6",
        model: "РРС",
        tool: "Рейкорізні верстати з абразивними кру­гами",
        "master-workhop": "Гаврилів Ю.М.",
        count: "1.000 ",
        "write-off": "0.000 "
    }, {
        "id-tool": "1760602001341",
        "name-tool": "Верстат рейкосвердлильний РСС з ДВЗ",
        workshops: "ПД-6",
        model: "РСС",
        tool: "Рейкосвердлильні верстати з ДВЗ",
        "master-workhop": "Гаврилів Ю.М.",
        count: "1.000 ",
        "write-off": "0.000 "
    }, {
        "id-tool": "1760601000832",
        "name-tool": "кущоріз SOLO",
        workshops: "ПД-7",
        model: "SOLO",
        tool: "Кущоріз",
        "master-workhop": "Ващенко В. В.",
        count: "1.000 ",
        "write-off": "1.000 "
    }, {
        "id-tool": "1760401000300",
        "name-tool": "бензоагрегат АБ-2",
        workshops: "ПД-7",
        model: "АБ-2",
        tool: "Пересувна електростанція 2 кВт (АБ-2)",
        "master-workhop": "Ващенко В. В.",
        count: "1.000 ",
        "write-off": "1.000 "
    }, {
        "id-tool": "1760401000309",
        "name-tool": "дизельний агрегат АД-4",
        workshops: "ПД-7",
        model: "АД-4",
        tool: "Пересувна електростанція 4 кВт (АБ-4)",
        "master-workhop": "Ващенко В. В.",
        count: "1.000 ",
        "write-off": "1.000 "
    }, {
        "id-tool": "1760402000313",
        "name-tool": "електричний агрегат АБ-4",
        workshops: "ПД-7",
        model: "АБ-4",
        tool: "Пересувна електростанція 4 кВт (АБ-4)",
        "master-workhop": "Ващенко В. В.",
        count: "1.000 ",
        "write-off": "0.000 "
    }, {
        "id-tool": "1760601001534",
        "name-tool": "Рейкорiз К1270RAIL 14",
        workshops: "ПД-7",
        model: "STIHL TS-800",
        tool: "Рейкорізні верстати з абразивними кру­гами",
        "master-workhop": "Ващенко В. В.",
        count: "1.000 ",
        "write-off": "0.000 "
    }, {
        "id-tool": "1760602001333",
        "name-tool": "Рейкорізний верстат ТС800",
        workshops: "ПД-7",
        model: "STIHL TS-800",
        tool: "Рейкорізні верстати з абразивними кру­гами",
        "master-workhop": "Ващенко В. В.",
        count: "1.000 ",
        "write-off": "0.000 "
    }, {
        "id-tool": "1760602001365",
        "name-tool": "Верстат рейкосвердлильний PСС (типу РСС-П)",
        workshops: "ПД-7",
        model: "РСС",
        tool: "Рейкосвердлильні верстати з ДВЗ",
        "master-workhop": "Ващенко В. В.",
        count: "1.000 ",
        "write-off": "0.000 "
    }, {
        "id-tool": "1760601000823",
        "name-tool": "кущоріз SOLO",
        workshops: "ПД-8",
        model: "SOLO",
        tool: "Кущоріз",
        "master-workhop": "Монастирний Антон Петрович",
        count: "1.000 ",
        "write-off": "1.000 "
    }, {
        "id-tool": "1760601000824",
        "name-tool": "кущоріз SOLO",
        workshops: "ПД-8",
        model: "SOLO",
        tool: "Кущоріз",
        "master-workhop": "Монастирний Антон Петрович",
        count: "1.000 ",
        "write-off": "1.000 "
    }, {
        "id-tool": "1760601000833",
        "name-tool": "кущоріз SHTIL",
        workshops: "ПД-8",
        model: "STIHL",
        tool: "Кущоріз",
        "master-workhop": "Монастирний Антон Петрович",
        count: "1.000 ",
        "write-off": "1.000 "
    }, {
        "id-tool": "1760401000297",
        "name-tool": "бензоагрегат АБ-2",
        workshops: "ПД-8",
        model: "АБ-2",
        tool: "Пересувна електростанція 2 кВт (АБ-2)",
        "master-workhop": "Монастирний Антон Петрович",
        count: "1.000 ",
        "write-off": "0.000 "
    }, {
        "id-tool": "1760401000299",
        "name-tool": "бензоагрегат АБ-1",
        workshops: "ПД-8",
        model: "АБ-2",
        tool: "Пересувна електростанція 2 кВт (АБ-2)",
        "master-workhop": "Монастирний Антон Петрович",
        count: "1.000 ",
        "write-off": "1.000 "
    }, {
        "id-tool": "1760601001030",
        "name-tool": "Електростанція дизельна ЕД-4-Т230",
        workshops: "ПД-8",
        model: "ЕД-4",
        tool: "Пересувна електростанція 4 кВт (АБ-4)",
        "master-workhop": "Монастирний Антон Петрович",
        count: "1.000 ",
        "write-off": "0.000 "
    }, {
        "id-tool": "1760602001349",
        "name-tool": "Рейкоріз ТС800-Т (верстат рейкорізний ВР-1)",
        workshops: "ПД-8",
        model: "STIHL TS-800",
        tool: "Рейкорізні верстати з абразивними кру­гами",
        "master-workhop": "Монастирний Антон Петрович",
        count: "1.000 ",
        "write-off": "0.000 "
    }, {
        "id-tool": "1760602001374",
        "name-tool": "Верстат рейкосвердлильний PСС",
        workshops: "ПД-8",
        model: "РРС",
        tool: "Рейкосвердлильні верстати з ДВЗ",
        "master-workhop": "Монастирний Антон Петрович",
        count: "1.000 ",
        "write-off": "0.000 "
    }, {
        "id-tool": "1760601000838",
        "name-tool": "Кущоріз Husgvarna 335 RX",
        workshops: "ПД-9",
        model: "Husqvarna 333R",
        tool: "Кущоріз",
        "master-workhop": "Сальніков Сергій Миколайович",
        count: "1.000 ",
        "write-off": "1.000 "
    }, {
        "id-tool": "1760401000294",
        "name-tool": "бензоагрегат АБ-2",
        workshops: "ПД-9",
        model: "АБ-2",
        tool: "Пересувна електростанція 2 кВт (АБ-2)",
        "master-workhop": "Сальніков Сергій Миколайович",
        count: "1.000 ",
        "write-off": "0.000 "
    }, {
        "id-tool": "1760601000746",
        "name-tool": "Рейкоріз бензиновий STIНL TS800",
        workshops: "ПД-9",
        model: "STIHL TS-800",
        tool: "Рейкорізні верстати з абразивними кру­гами",
        "master-workhop": "Сальніков Сергій Миколайович",
        count: "1.000 ",
        "write-off": "0.000 "
    }, {
        "id-tool": "1760601001538",
        "name-tool": "Верстат рейкорізний (ВРРТ)",
        workshops: "ПД-9",
        model: "STIHL TS-800",
        tool: "Рейкорізні верстати з абразивними кру­гами",
        "master-workhop": "Сальніков Сергій Миколайович",
        count: "1.000 ",
        "write-off": "0.000 "
    }, {
        "id-tool": "1760601001536",
        "name-tool": "Верстат рейкосвердлильний (станок NZG-31)",
        workshops: "ПД-9",
        model: "РРС",
        tool: "Рейкосвердлильні верстати з ДВЗ",
        "master-workhop": "Сальніков Сергій Миколайович",
        count: "1.000 ",
        "write-off": "0.000 "
    }, {
        "id-tool": "1760602001334",
        "name-tool": "Верстат рейкосвердлильний СТР2Д",
        workshops: "ПД-9",
        model: "СТР-2Д",
        tool: "Рейкосвердлильні верстати з ДВЗ",
        "master-workhop": "Сальніков Сергій Миколайович",
        count: "1.000 ",
        "write-off": "0.000 "
    }, {
        "id-tool": "1760602001350",
        "name-tool": "Ключ шурупогайковий КШГ1Б (КШГ-БМ)",
        workshops: "ПДУ-1",
        model: "КШГ-БМ",
        tool: "Гайковерт універсальний",
        "master-workhop": "Штепа С. С.",
        count: "1.000 ",
        "write-off": "0.000 "
    }, {
        "id-tool": "1760602001335",
        "name-tool": "Рейкоріз ТС8000-Т",
        workshops: "ПДУ-1",
        model: "STIHL TS-800",
        tool: "Рейкорізні верстати з абразивними кру­гами",
        "master-workhop": "Штепа С. С.",
        count: "1.000 ",
        "write-off": "0.000 "
    }, {
        "id-tool": "1760602001340",
        "name-tool": "Верстат рейкосвердлильний РСС з ДВЗ",
        workshops: "ПДУ-1",
        model: "РСС",
        tool: "Рейкосвердлильні верстати з ДВЗ",
        "master-workhop": "Штепа С. С.",
        count: "1.000 ",
        "write-off": "0.000 "
    }, {
        "id-tool": "1760601000806",
        "name-tool": "Колійний моторний гайковерт HONDA ГМК-1",
        workshops: "ПДУ-2",
        model: "КШГ-1Б",
        tool: "Гайковерт універсальний",
        "master-workhop": "Димар С. А.",
        count: "1.000 ",
        "write-off": "0.000 "
    }, {
        "id-tool": "1760601000899",
        "name-tool": "гайковерт КШГ-1",
        workshops: "ПДУ-2",
        model: "КШГ-1Б",
        tool: "Гайковерт універсальний",
        "master-workhop": "Димар С. А.",
        count: "1.000 ",
        "write-off": "0.000 "
    }, {
        "id-tool": "1760601000926",
        "name-tool": "Колійний моторний гайковерт HONDA ГМК-1",
        workshops: "ПДУ-2",
        model: "КШГ-1Б",
        tool: "Гайковерт універсальний",
        "master-workhop": "Димар С. А.",
        count: "1.000 ",
        "write-off": "0.000 "
    }, {
        "id-tool": "1760602001351",
        "name-tool": "Ключ шурупогайковий КШГ1Б (КШГ-БМ)",
        workshops: "ПДУ-2",
        model: "КШГ-БМ",
        tool: "Гайковерт універсальний",
        "master-workhop": "Димар С. А.",
        count: "1.000 ",
        "write-off": "0.000 "
    }, {
        "id-tool": "1760402000317",
        "name-tool": "Електростанція дизельна  ЭД - 2",
        workshops: "ПДУ-2",
        model: "ЕД-2",
        tool: "Пересувна електростанція 2 кВт (АБ-2)",
        "master-workhop": "Димар С. А.",
        count: "1.000 ",
        "write-off": "0.000 "
    }, {
        "id-tool": "1760601000874",
        "name-tool": "Електроагрегат АБ 4",
        workshops: "ПДУ-2",
        model: "АБ-4",
        tool: "Пересувна електростанція 4 кВт (АБ-4)",
        "master-workhop": "Димар С. А.",
        count: "1.000 ",
        "write-off": "0.000 "
    }, {
        "id-tool": "1760602001363",
        "name-tool": "Ключ колійний шурупогайковий КШГ-1Б (КШГ-БМ)",
        workshops: "ПДУ-3",
        model: "КШГ-БМ",
        tool: "Гайковерт універсальний",
        "master-workhop": "Коваленко О. В.",
        count: "1.000 ",
        "write-off": "0.000 "
    }, {
        "id-tool": "1760602001364",
        "name-tool": "Ключ колійний шурупогайковий КШГ-1Б (КШГ-БМ)",
        workshops: "ПДУ-3",
        model: "КШГ-БМ",
        tool: "Гайковерт універсальний",
        "master-workhop": "Коваленко О. В.",
        count: "1.000 ",
        "write-off": "0.000 "
    } ];
    const normTools = [ {
        tools: "Husqvarna ",
        model: "Husqvarna ",
        "motor-model": "",
        norm: [ 1, `0,7`, ` 0,3` ],
        name_norm: [ `ліска`, `3-х лепест.`, ` диск` ]
    }, {
        tools: "Husqvarna 235",
        model: "Husqvarna 235",
        "motor-model": "",
        norm: [ `1`, `0,7`, ` 0,7` ],
        name_norm: [ `ліска`, `3-х лепест.`, ` диск` ]
    }, {
        tools: "Husqvarna 245RX",
        model: "Husqvarna 245RX",
        "motor-model": "",
        norm: [ `1,1`, `0,8`, ` 0,8` ],
        name_norm: [ `ліска`, `3-х лепест.`, ` диск` ]
    }, {
        tools: "Husqvarna 333R",
        model: "Husqvarna 333R",
        "motor-model": "",
        norm: [ `1,1`, `0,8`, ` 0,8` ],
        name_norm: [ `ліска`, `3-х лепест.`, ` диск` ]
    }, {
        tools: "Husqvarna 335 ",
        model: "Husqvarna 335 ",
        "motor-model": "",
        norm: [ `1,1`, `0,8`, ` 0,8` ],
        name_norm: [ `ліска`, `3-х лепест.`, ` диск` ]
    }, {
        tools: "Husqvarna 343 ",
        model: "Husqvarna 343 ",
        "motor-model": "",
        norm: [ `1,2`, `0,9`, ` 0,9` ],
        name_norm: [ `ліска`, `3-х лепест.`, ` диск` ]
    }, {
        tools: "Husqvarna 345 ",
        model: "Husqvarna 345 ",
        "motor-model": "",
        norm: [ `1,2`, `0,9`, ` 0,9` ],
        name_norm: [ `ліска`, `3-х лепест.`, ` диск` ]
    }, {
        tools: "Husqvarna 535 ",
        model: "Husqvarna 535 ",
        "motor-model": "",
        norm: [ `1,1`, `0,8`, ` 0,8` ],
        name_norm: [ `ліска`, `3-х лепест.`, ` диск` ]
    }, {
        tools: "Husqvarna 545FR ",
        model: "Husqvarna 545FR ",
        "motor-model": "",
        norm: [ `1,4`, `1,1`, ` 1,1` ],
        name_norm: [ `ліска`, `3-х лепест.`, ` диск` ]
    }, {
        tools: "STIHL 250",
        model: "STIHL",
        "motor-model": "",
        norm: [ `1`, `0,7`, ` 0,7` ],
        name_norm: [ `ліска`, `3-х лепест.`, ` диск` ]
    }, {
        tools: "STIHL 300",
        model: "STIHL",
        "motor-model": "",
        norm: [ `1,1`, `0,8`, ` 0,8` ],
        name_norm: [ `ліска`, `3-х лепест.`, ` диск` ]
    }, {
        tools: "STIHL FS450",
        model: "STIHL",
        "motor-model": "",
        norm: [ `1,1`, `0,8`, ` 0,8` ],
        name_norm: [ `ліска`, `3-х лепест.`, ` диск` ]
    }, {
        tools: "SOLO 130",
        model: "SOLO",
        "motor-model": "",
        norm: [ `1`, `0,6`, ` 0,6` ],
        name_norm: [ `ліска`, `3-х лепест.`, ` диск` ]
    }, {
        tools: "SOLO 140",
        model: "SOLO",
        "motor-model": "",
        norm: [ `1`, `0,7`, ` 0,7` ],
        name_norm: [ `ліска`, `3-х лепест.`, ` диск` ]
    }, {
        tools: "Протон БТ-1500",
        model: "Протон БТ-1500",
        "motor-model": "",
        norm: [ `1`, `0,7`, ` 0,7` ],
        name_norm: [ `ліска`, `3-х лепест.`, ` диск` ]
    }, {
        tools: "Протон БТ-2500",
        model: "Протон БТ-2500",
        "motor-model": "",
        norm: [ `1,5`, `1`, ` 1` ],
        name_norm: [ `ліска`, `3-х лепест.`, ` диск` ]
    }, {
        tools: "Урал",
        model: "Урал",
        "motor-model": "",
        norm: [ `1,3`, `1`, ` 1` ],
        name_norm: [ `ліска`, `3-х лепест.`, ` диск` ]
    }, {
        tools: "Senniu UA141FA-S",
        model: "Senniu UA141FA-S",
        "motor-model": "",
        norm: [ `1,2`, `1`, ` 1` ],
        name_norm: [ `ліска`, `3-х лепест.`, ` диск` ]
    }, {
        tools: "Мотококоси (Китай)",
        model: "Мотококоси (Китай)",
        "motor-model": "",
        norm: [ `1,1`, `0,7`, ` 0,7` ],
        name_norm: [ `ліска`, `3-х лепест.`, ` диск` ]
    }, {
        tools: "АБ-2Т/230",
        model: "АБ-2",
        "motor-model": "УД-15",
        norm: [ `1,1` ],
        name_norm: ""
    }, {
        tools: "АБ-2Т/230",
        model: "АБ-2",
        "motor-model": "GE-200",
        norm: [ `1,2` ],
        name_norm: ""
    }, {
        tools: "ЕД-2Т/230",
        model: "ЕД-2",
        "motor-model": "LD400",
        norm: [ `1,1` ],
        name_norm: ""
    }, {
        tools: "ЕД-2Т/230",
        model: "ЕД-2",
        "motor-model": "CE186F",
        norm: [ `1,5` ],
        name_norm: ""
    }, {
        tools: "АД-2Т/230",
        model: "АД-2",
        "motor-model": "АД-2",
        norm: [ `0,9` ],
        name_norm: ""
    }, {
        tools: "АД-2Т/230",
        model: "АД-2",
        "motor-model": "LA178FAG",
        norm: [ `1,1` ],
        name_norm: ""
    }, {
        tools: "АБ-4Т/230",
        model: "АБ-4",
        "motor-model": "УД-25",
        norm: [ `2,1` ],
        name_norm: ""
    }, {
        tools: "АБ-4Т/230",
        model: "АБ-4",
        "motor-model": "DE-440E",
        norm: [ `1,8` ],
        name_norm: ""
    }, {
        tools: "ЕД-4Т/230",
        model: "ЕД-4",
        "motor-model": "LD435",
        norm: [ `2,1` ],
        name_norm: ""
    }, {
        tools: "ЕД-4Т/230",
        model: "ЕД-4",
        "motor-model": "CE186F",
        norm: [ `1,8` ],
        name_norm: ""
    }, {
        tools: "ЕД-4Т/230",
        model: "ЕД-4",
        "motor-model": "ВСН-6Д",
        norm: [ `2` ],
        name_norm: ""
    }, {
        tools: "ЕД-4Т/230",
        model: "ЕД-4",
        "motor-model": "KM186F",
        norm: [ `1,7` ],
        name_norm: ""
    }, {
        tools: "АД-4Т/230",
        model: "АД-4",
        "motor-model": "АД-4",
        norm: [ `2,1` ],
        name_norm: ""
    }, {
        tools: "АД-4Т/230",
        model: "АД-4",
        "motor-model": "CE186F",
        norm: [ `1,8` ],
        name_norm: ""
    }, {
        tools: "АД-4Т/230",
        model: "АД-4",
        "motor-model": "LA186FAG",
        norm: [ `1,8` ],
        name_norm: ""
    }, {
        tools: "Husqwarna К1250",
        model: "Husqwarna К1250",
        "motor-model": "-",
        norm: [ `0,4`, `0,4`, ` 0,6` ],
        name_norm: [ `Р-43,49`, `Р65 Азов`, ` Р65 Тагіл` ]
    }, {
        tools: "STIHL TS-800",
        model: "STIHL TS-800",
        "motor-model": "-",
        norm: [ `0,3`, `0,3`, ` 0,4` ],
        name_norm: [ `Р-43,49`, `Р65 Азов`, ` Р65 Тагіл` ]
    }, {
        tools: "РРС",
        model: "РРС",
        "motor-model": "GX200",
        norm: [ `0,3`, `0,3`, ` 0,4` ],
        name_norm: [ `Р-43,49`, `Р65 Азов`, ` Р65 Тагіл` ]
    }, {
        tools: "РРС",
        model: "РРС",
        "motor-model": "Tiger",
        norm: [ `0,4`, `0,4`, ` 0,6` ],
        name_norm: [ `Р-43,49`, `Р65 Азов`, ` Р65 Тагіл` ]
    }, {
        tools: "РР-80",
        model: "РР-80",
        "motor-model": "Stihl",
        norm: [ `0,3`, `0,3`, ` 0,4` ],
        name_norm: [ `Р-43,49`, `Р65 Азов`, ` Р65 Тагіл` ]
    }, {
        tools: "РМ-3",
        model: "РМ-3",
        "motor-model": "Урал-2",
        norm: [ `0,5`, `0,5`, ` 0,8` ],
        name_norm: [ `Р-43,49`, `Р65 Азов`, ` Р65 Тагіл` ]
    }, {
        tools: "РСС",
        model: "РСС",
        "motor-model": "GX35",
        norm: [ `0,05` ],
        name_norm: ""
    }, {
        tools: "СТР-2Д",
        model: "СТР-2Д",
        "motor-model": "B&S",
        norm: [ `0,1` ],
        name_norm: ""
    }, {
        tools: "СТР-2Д",
        model: "СТР-2Д",
        "motor-model": "GX200",
        norm: [ `0,1` ],
        name_norm: ""
    }, {
        tools: "СТР-2Д",
        model: "СТР-2Д",
        "motor-model": "GE-200",
        norm: [ `0,1` ],
        name_norm: ""
    }, {
        tools: "РМК",
        model: "РМК",
        "motor-model": "-",
        norm: [ `0,1` ],
        name_norm: ""
    }, {
        tools: "КШГ-1Б",
        model: "КШГ-1Б",
        "motor-model": "GX200",
        norm: [ `1,8` ],
        name_norm: ""
    }, {
        tools: "КШГ-1Б",
        model: "КШГ-1Б",
        "motor-model": "B&S",
        norm: [ `1,4` ],
        name_norm: ""
    }, {
        tools: "КШГ-БМ",
        model: "КШГ-БМ",
        "motor-model": "KG282/GF177E",
        norm: [ `1,4` ],
        name_norm: ""
    }, {
        tools: "БГ-1",
        model: "БГ-1",
        "motor-model": "Stihl",
        norm: [ `0,6` ],
        name_norm: ""
    }, {
        tools: "ГМП-1",
        model: "ГМП-1",
        "motor-model": "GX160",
        norm: [ `1,3` ],
        name_norm: ""
    }, {
        tools: "ГМК-1",
        model: "ГМК-1",
        "motor-model": "Stihl",
        norm: [ `0,9` ],
        name_norm: ""
    }, {
        tools: "ТВ-2",
        model: "ТВ-2",
        "motor-model": "-",
        norm: [ `3,5` ],
        name_norm: ""
    }, {
        tools: "ТВ-2",
        model: "ТВ-3",
        "motor-model": "GE-200",
        norm: [ `1,5` ],
        name_norm: ""
    }, {
        tools: "ТВ-2",
        model: "ТВ-4",
        "motor-model": "GE-390",
        norm: [ `1,8` ],
        name_norm: ""
    }, {
        tools: "АСБ-300",
        model: "АСБ-300",
        "motor-model": "407Д1",
        norm: [ `3,8` ],
        name_norm: ""
    }, {
        tools: "АДД-3112",
        model: "АДД-3112",
        "motor-model": "Д144",
        norm: [ `6,8` ],
        name_norm: ""
    }, {
        tools: "АДД-4001",
        model: "АДД-4001",
        "motor-model": "Д144-81",
        norm: [ `6` ],
        name_norm: ""
    }, {
        tools: "АДД-4001",
        model: "АДД-4001",
        "motor-model": "Д144",
        norm: [ `3,8` ],
        name_norm: ""
    }, {
        tools: "АДД-4004",
        model: "АДД-4004",
        "motor-model": "Д144",
        norm: [ `4,6` ],
        name_norm: ""
    }, {
        tools: "STURM",
        model: "STURM",
        "motor-model": "-",
        norm: [ `2,5` ],
        name_norm: ""
    } ];
    class ListMaster {
        constructor(arrMasterTools, id) {
            this.arrMasterTools = arrMasterTools;
            this.id = id;
            this.sortMasterWorkShops = [];
            this.arrayListMaster();
            this.renderOptionList();
            this.flag = true;
        }
        arrayListMaster() {
            for (let i = 0; i < this.arrMasterTools.length; i++) if (this.sortMasterWorkShops.length === 0) this.sortMasterWorkShops.push(this.arrMasterTools[i].workshops); else if (!this.sortMasterWorkShops.includes(this.arrMasterTools[i].workshops)) this.sortMasterWorkShops.push(this.arrMasterTools[i].workshops);
            this.sortMasterWorkShops.sort();
        }
        renderOptionList() {
            for (let i = 0; i < this.sortMasterWorkShops.length; i++) if (this.id.children.length === 0) {
                let teg = new Teg("option", "Оберіть цех");
                let firstTeg = teg.render();
                this.id.append(firstTeg);
                i -= 1;
            } else {
                let teg = new Teg("option", this.sortMasterWorkShops[i]);
                this.id.append(teg.render());
            }
            this.id.addEventListener("input", this.changeInput.bind(this));
        }
        changeInput() {
            let change = new CustomEvent("changeWorkshops", {
                detail: {
                    workshops: this.id.value
                }
            });
            this.id.dispatchEvent(change);
            if (this.flag) {
                this.id.firstElementChild.remove();
                this.flag = false;
            }
        }
    }
    class Teg {
        constructor(teg, text = "", attribut = {}) {
            this.teg = teg;
            this.text = text;
            this.attribut = attribut;
        }
        render() {
            const someTeg = document.createElement(this.teg);
            if (this.attribut ?? {}) for (const nameAttr in this.attribut) someTeg.setAttribute(nameAttr, this.attribut[nameAttr]);
            someTeg.innerText = this.text;
            return someTeg;
        }
    }
    class ListTools {
        constructor(arrMasterTools, id) {
            this.arrMasterTools = arrMasterTools;
            this.id = id;
            this.arrListTools = [];
            this.addWorkshops = this.addWorkshops.bind(this);
            this.flag = true;
        }
        pushArrListTools(workshop) {
            if (this.arrListTools.length !== 0) this.arrListTools = [];
            for (let i = 0; i < this.arrMasterTools.length; i++) if (this.arrMasterTools[i].workshops === workshop) if (this.arrListTools.length == 0) this.arrListTools.push(this.arrMasterTools[i].tool); else if (!this.arrListTools.includes(this.arrMasterTools[i].tool)) this.arrListTools.push(this.arrMasterTools[i].tool);
            this.renderListTools();
        }
        addWorkshops(event) {
            const workshop = event?.detail.workshops;
            this.idWorkshop = event?.detail.workshops;
            this.pushArrListTools(workshop);
            this.id.parentElement.style.opacity = 1;
            this.id.addEventListener("input", this.chengSelectTools.bind(this));
        }
        renderListTools() {
            this.id.innerText = "";
            for (let y = 0; y < this.arrListTools.length; y++) if (this.id.children.length === 0) {
                let teg = new Teg("option", "Оберіть тип інструменту");
                let firstTeg = teg.render();
                this.id.append(firstTeg);
                y -= 1;
                this.flag = true;
            } else {
                let option = new Teg("option", this.arrListTools[y]);
                this.id.append(option.render());
            }
        }
        chengSelectTools() {
            const selectTools = new CustomEvent("chengeTools", {
                detail: {
                    workshop: this.idWorkshop,
                    tool: this.id.value
                }
            });
            this.id.dispatchEvent(selectTools);
            if (this.flag) {
                this.id.firstElementChild.remove();
                this.flag = false;
            }
        }
    }
    class RadioList {
        constructor(arrayMasterTools, id) {
            this.id = id;
            this.arrayMasterTools = arrayMasterTools;
            this.filterMasterTools = [];
            this.newArrMasterTools = this.filterArrWorksopsAndTools.bind(this);
            this.input;
            this.tools = [];
        }
        filterArrWorksopsAndTools(event) {
            if (this.filterMasterTools.length > 0) this.filterMasterTools = [];
            let worskhops = event?.detail.workshop;
            let tool = event?.detail.tool;
            this.filterMasterTools = this.arrayMasterTools.filter((el => el.workshops === worskhops)).filter((el => el.tool === tool));
            this.renderListFilterMasterTool();
        }
        renderListFilterMasterTool() {
            if (!document.querySelector(".container__list-tools")) this.divForm = new Teg("div", "", {
                class: "container__list-tools"
            }).render(); else this.divForm.innerText = "";
            for (let i = 0; i < this.filterMasterTools.length; i++) {
                const span = new Teg("span").render();
                this.input = new Teg("input", "", {
                    type: "radio",
                    id: `${this.filterMasterTools[i]["id-tool"]}`,
                    name: "tools",
                    value: `${this.filterMasterTools[i]["name-tool"]}`
                }).render();
                let string;
                if (this.filterMasterTools[i]["write-off"] != 0) string = "Знаходиться на списанні!!!"; else string = "Справний!";
                const lable = new Teg("label", `${this.filterMasterTools[i]["name-tool"]} Інв.№${this.filterMasterTools[i]["id-tool"]}. ${string}`, {
                    for: this.filterMasterTools[i]["id-tool"]
                }).render();
                if (this.filterMasterTools[i]["write-off"] != 0) lable.style.color = "red";
                span.append(this.input);
                span.append(lable);
                this.input.addEventListener("input", (event => {
                    this.tools = this.filterMasterTools.filter((el => el["id-tool"] == event.target.id));
                }));
                this.input.addEventListener("click", (event => {
                    this.masterToolObg = this.filterMasterTools.filter((el => el["id-tool"] == event.target.id));
                    this.sendMasterToolObg();
                }));
                this.input.addEventListener("input", this.sendObg.bind(this));
                this.divForm.append(span);
            }
            this.id.append(this.divForm);
        }
        sendObg() {
            const obg = new CustomEvent("toolObg", {
                detail: this.tools
            });
            this.id.dispatchEvent(obg);
        }
        sendMasterToolObg() {
            const obg = new CustomEvent("sendMasterTool", {
                detail: this.masterToolObg[0]
            });
            this.id.dispatchEvent(obg);
        }
    }
    class RenderListNorm {
        constructor(norm, id) {
            this.id = id;
            this.norm = norm;
            this.sortNormTool = [];
            this.getModelTools = this.getModelTools.bind(this);
            this.model;
            this.normTool;
            this.inputNorm;
        }
        getModelTools(event) {
            const someOb = event?.detail[0].model;
            this.model = someOb;
            this.getArrNormTools();
        }
        getArrNormTools() {
            if (this.sortNormTool.length > 0) this.sortNormTool = [];
            this.sortNormTool = this.norm.filter((el => el.model == this.model));
            this.renderNormTable();
        }
        renderNormTable() {
            if (this.id.children) this.id.innerText = "";
            this.table = new Teg("table").render();
            let tBody = new Teg("tbody").render();
            let tRow_1 = new Teg("tr").render();
            let thNum = new Teg("th", "№", {
                rowspan: "2"
            }).render();
            let thTools = new Teg("th", "Марка", {
                rowspan: "2"
            }).render();
            let thMotor = new Teg("th", "Марка Двигуна", {
                rowspan: "2"
            }).render();
            let thNorm = new Teg("th", "Норма витрат палива", {
                colspan: "3"
            }).render();
            let tRow_2 = new Teg("tr").render();
            if (this.sortNormTool[0]["name_norm"].length > 0) {
                let arrNameNorm = this.sortNormTool[0]["name_norm"];
                for (let i = 0; i < arrNameNorm.length; i++) {
                    let th = new Teg("th", `${arrNameNorm[i]}`).render();
                    tRow_2.append(th);
                }
            } else {
                let th = new Teg("th", "мото.години").render();
                tRow_2.append(th);
            }
            tRow_1.append(thNum);
            tRow_1.append(thTools);
            tRow_1.append(thMotor);
            tRow_1.append(thNorm);
            tBody.append(tRow_1);
            tBody.append(tRow_2);
            this.table.append(tBody);
            this.id.append(this.table);
            let count = 1;
            for (let i = 0; i < this.sortNormTool.length; i++) {
                let tRow_i = new Teg("tr").render();
                let tdNum = new Teg("td", `${i + 1}`).render();
                let tdtool = new Teg("td", `${this.sortNormTool[i]["tools"]}`).render();
                let tdMotor = new Teg("td", `${this.sortNormTool[i]["motor-model"]}`).render();
                tRow_i.append(tdNum);
                tRow_i.append(tdtool);
                tRow_i.append(tdMotor);
                if (this.sortNormTool[i]["name_norm"].length > 0) for (let y = 0; y < this.sortNormTool[i]["norm"].length; y++) {
                    let tdNorm = new Teg("td").render();
                    this.input = new Teg("input", "", {
                        type: "radio",
                        id: `${this.sortNormTool[i]["tools"]}-${this.sortNormTool[i]["model"]}-${this.sortNormTool[i]["norm"][y]}-${count}`,
                        name: "norm",
                        value: `${this.sortNormTool[i]["norm"][y]}`
                    }).render();
                    this.label = new Teg("label", `${this.sortNormTool[i]["norm"][y]} л.`, {
                        for: `${this.sortNormTool[i]["tools"]}-${this.sortNormTool[i]["model"]}-${this.sortNormTool[i]["norm"][y]}-${count}`
                    }).render();
                    tdNorm.append(this.input);
                    tdNorm.append(this.label);
                    tRow_i.append(tdNorm);
                    ++count;
                } else {
                    let tdNorm = new Teg("td").render();
                    this.input = new Teg("input", "", {
                        type: "radio",
                        id: `${this.sortNormTool[i]["tools"]}-${this.sortNormTool[i]["model"]}-${this.sortNormTool[i]["norm"]}-${count}`,
                        name: "norm",
                        value: `${this.sortNormTool[i]["norm"]}`
                    }).render();
                    this.label = new Teg("label", `${this.sortNormTool[i]["norm"]} л.`, {
                        for: `${this.sortNormTool[i]["tools"]}-${this.sortNormTool[i]["model"]}-${this.sortNormTool[i]["norm"]}-${count}`
                    }).render();
                    tdNorm.append(this.input);
                    tdNorm.append(this.label);
                    tRow_i.append(tdNorm);
                    ++count;
                }
                tBody.append(tRow_i);
            }
            this.table.addEventListener("input", (event => {
                let teg = event.target;
                this.inputNorm = teg;
                if (teg.getAttribute("name") == "norm") {
                    let num = teg.value.replace(",", ".");
                    this.normTool = parseFloat(num);
                    this.exportNorm();
                }
            }));
        }
        exportNorm() {
            const normExport = new CustomEvent("getNorm", {
                detail: {
                    norm: this.normTool
                }
            });
            this.id.dispatchEvent(normExport);
        }
    }
    class ItemList {
        static arrID=[];
        static arrQquantity=[];
        static idClassObg=1;
        constructor(id) {
            this.idObg = this.idCountObg();
            this.id = id;
            this.divItem = new Teg("div", "", {
                class: "container__fuel-input"
            }).render();
            this.divDate = new Teg("div").render();
            this.divInput = new Teg("div").render();
            this.divButton = new Teg("div").render();
            this.date = new Teg("input", "", {
                type: "date",
                value: ""
            }).render();
            this.input = new Teg("input", "", {
                type: "number",
                value: 0
            }).render();
            this.buttonToAddItemList = new Teg("button", "+").render();
            this.buttonToRemoveItemList = new Teg("button", "-").render();
            this.renderItem();
            this.date.addEventListener("input", (event => {
                this.inputDate = event.target.value;
            }));
            this.input.addEventListener("change", (event => {
                if (this.inputDate) this.inputNum = event.target.value; else {
                    alert("Спочатку потрібно обрати дату!!!!");
                    this.input.value = 0;
                }
            }));
            this.inputDate;
            this.inputNum;
            this.addIDStayic();
        }
        idCountObg() {
            let countId = ++ItemList.idClassObg;
            return "ItemListID_" + countId;
        }
        addIDStayic() {
            if (ItemList.arrID.length == 0) {
                ItemList.arrID.push(this.id);
                ItemList.arrQquantity.push(1);
            } else for (let i = 0; i < ItemList.arrID.length; i++) if (!ItemList.arrID.includes(this.id)) {
                ItemList.arrID.push(this.id);
                ItemList.arrQquantity.push(1);
            }
        }
        renderItem() {
            this.divDate.append(this.date);
            this.divInput.append(this.input);
            this.divButton.append(this.buttonToAddItemList);
            this.divButton.append(this.buttonToRemoveItemList);
            this.divItem.append(this.divDate);
            this.divItem.append(this.divInput);
            this.divItem.append(this.divButton);
            this.id.append(this.divItem);
            this.buttonToAddItemList.addEventListener("click", this.addToAddItemLis.bind(this));
            this.buttonToRemoveItemList.addEventListener("click", this.toRemoveItemList.bind(this));
        }
        addToAddItemLis() {
            for (let i = 0; i < ItemList.arrID.length; i++) if (ItemList.arrID[i] == this.id) {
                ItemList.arrQquantity[i]++;
                if (ItemList.arrQquantity[i] > 1) this.buttonToRemoveItemList.removeAttribute("disabled");
            }
            this.newItem = new ItemList(this.id);
            if (ItemList.quantity > 1) this.buttonToRemoveItemList.removeAttribute("disabled");
            this.sehdObgect();
        }
        toRemoveItemList() {
            for (let i = 0; i < ItemList.arrID.length; i++) if (ItemList.arrID[i] == this.id) {
                if (ItemList.arrQquantity[i] > 1) {
                    this.divItem.remove();
                    ItemList.arrQquantity[i]--;
                }
                if (ItemList.arrQquantity[i] == 1) this.buttonToRemoveItemList.setAttribute("disabled", true);
            }
        }
        sehdObgect() {
            const sendItem = new CustomEvent("sendObg", {
                detail: this.newItem
            });
            this.buttonToAddItemList.dispatchEvent(sendItem);
        }
    }
    class FuelConsumptionCalculations {
        constructor(remeningFuil, idRefueling, idJob, table, spanIDRemainingFuel, spanIDWork, spanIDMonth, spanIDYear, nameIDTool, modelIDTool, toolId, normTolsHours, fuelRemainToolID, refID, gasRafueling, sumWorkHours, sumWorkNorm, factSumWorkGas, restGasTheMonth, classWork, classJOB, nameMaster) {
            this.norm;
            this.getNorm = this.getNorm.bind(this);
            this.remeningFuil = remeningFuil;
            this.idRefueling = idRefueling;
            this.table = table;
            this.idJob = idJob;
            this.refueling = [];
            this.toolOperation = [];
            this.allOperations = [];
            this.spanIDRemainingFuel = spanIDRemainingFuel;
            this.spanIDWork = spanIDWork;
            this.master;
            this.getModelTools = this.getModelTools.bind(this);
            this.workshops = workshops;
            this.spanIDMonth = spanIDMonth;
            this.spanIDYear = spanIDYear;
            this.nameIDTool = nameIDTool;
            this.modelIDTool = modelIDTool;
            this.toolId = toolId;
            this.normTolsHours = normTolsHours;
            this.fuelRemainToolID = fuelRemainToolID;
            this.refID = refID;
            this.gasRafueling = gasRafueling;
            this.sumWorkHours = sumWorkHours;
            this.sumWorkNorm = sumWorkNorm;
            this.factSumWorkGas = factSumWorkGas;
            this.restGasTheMonth = restGasTheMonth;
            this.classWork = document.querySelectorAll(classWork);
            this.tableClassJob = document.querySelectorAll(classJOB);
            this.nameMaster = nameMaster;
            this.starGas;
            this.endGas;
            this.refuelingTool();
        }
        getNorm(event) {
            this.norm = event?.detail.norm;
        }
        refuelingTool() {
            this.idRefueling.addEventListener("change", (() => {
                if (this.refueling.length !== 0) this.refueling = [];
                let inputDateAll = this.idRefueling.querySelectorAll('input[type="date"]');
                let inputNumAll = this.idRefueling.querySelectorAll('input[type="number"]');
                for (let i = 0; i < inputDateAll.length; i++) {
                    let obg = {
                        date: inputDateAll[i].value,
                        number: inputNumAll[i].value
                    };
                    this.refueling.push(obg);
                }
                this.sumRefueling();
            }));
            this.idJob.addEventListener("change", (() => {
                if (this.toolOperation.length !== 0) this.toolOperation = [];
                let inputDateAll = this.idJob.querySelectorAll('input[type="date"]');
                let inputJobAll = this.idJob.querySelectorAll('input[type="number"]');
                for (let i = 0; i < inputDateAll.length; i++) {
                    let obg2 = {
                        date: inputDateAll[i].value,
                        number: inputJobAll[i].value
                    };
                    if (this.refueling.length == 0) {
                        let obg = {
                            date: inputDateAll[i].value,
                            number: 0
                        };
                        this.refueling.push(obg);
                    }
                    this.toolOperation.push(obg2);
                    this.arrClassMCH();
                }
                this.sumJomToolOperation();
                this.resultJomNorm();
                this.resultJobFact();
                this.fuelRemainingTotal();
                this.renderTable();
            }));
        }
        sumRefueling() {
            let sumOil = 0;
            console.log(`${this.refID.value} - залишок напочаток місяця`);
            if (this.refID.value) sumOil = Math.floor(this.refID.value);
            if (this.refueling.length > 0) this.refueling.forEach((el => sumOil += Math.floor(el.number)));
            console.log(`Отримано пального - ${sumOil}`);
            this.starGas = sumOil;
            this.spanIDRemainingFuel.innerText = `${this.starGas} л.`;
            return this.starGas;
        }
        sumJomToolOperation() {
            let sumJob = 0;
            this.toolOperation.forEach((el => sumJob += parseFloat(el.number)));
            console.log(`Відпрацьовано мотогодин (різів) - ${sumJob}`);
            return sumJob;
        }
        resultJomNorm() {
            let resultSumNorm = this.sumJomToolOperation() * this.norm;
            console.log(`сума витрат пального за період по нормі - ${resultSumNorm}`);
            return resultSumNorm.toFixed(2);
        }
        resultJobFact() {
            let fact = 0;
            this.toolOperation.forEach((el => fact += Math.round(this.norm * Math.floor(el.number))));
            console.log(`сума витрат пального за період FACT - ${fact}`);
            return fact;
        }
        fuelRemainingTotal() {
            this.spanIDRemainingFuel.innerText = "";
            let fuel = this.sumRefueling() - Math.floor(this.resultJobFact());
            console.log(`Залишок пального на кінець звітного періоду - ${fuel}`);
            this.spanIDRemainingFuel.innerText = `${fuel} л.`;
            return fuel;
        }
        getModelTools(event) {
            const obgToolMaster = event?.detail;
            this.master = obgToolMaster;
        }
        getMonthName(monthNumber) {
            const monthNames = [ "Січень", "Лютий", "Березень", "Квітень", "Травень", "Червень", "Липень", "Серпень", "Вересень", "Жовтень", "Листопад", "Грудень" ];
            return monthNames[monthNumber];
        }
        funArr(i) {
            let text = " ";
            for (let y = 0; y < this.toolOperation.length; y++) {
                const date = new Date(`${this.toolOperation[y].date}`);
                let day = date.getDate();
                if (day == i + 1) text = this.toolOperation[y].number;
            }
            return text;
        }
        arrClassMCH() {
            this.classWork.forEach(((el, index, arr) => el.innerText = `${this.funArr(index)}`));
        }
        renderTableMain() {
            this.tableClassJob.forEach(((tr, i, arrTr) => this.trInnerText(tr, i)));
        }
        trInnerText(tr, i) {
            tr.innerText = "";
            let tdIndex = new Teg("td", `${this.allOperations[i].tdIndex}`, {
                height: "25",
                style: "height:19.35pt;"
            }).render();
            let tdNameWorker = new Teg("td", `${this.allOperations[i].tdNameWorker}`, {
                colspan: "6",
                style: "border-right:1px solid windowtext;border-bottom:1px solid windowtext;"
            }).render();
            let tdStarWork = new Teg("td", `${this.allOperations[i].tdStarWork}`).render();
            let tdEndWork = new Teg("td", `${this.allOperations[i].tdEndWork}`).render();
            let tdRemainderGasStart = new Teg("td", `${this.allOperations[i].tdRemainderGasStart}`).render();
            let tdGatPetrol = new Teg("td", `${this.allOperations[i].tdGatPetrol}`, {
                colspan: "1"
            }).render();
            let tdGetDiesel = new Teg("td", `${this.allOperations[i].tdGetDiesel}`, {
                colspan: "1"
            }).render();
            let tdMasterPainting = new Teg("td", ``, {
                colspan: "2",
                style: "border-right:1px solid windowtext;border-bottom:1px solid windowtext; position: relative;"
            }).render();
            if (this.allOperations[i].tdMasterPainting) {
                let img = new Teg("img", "", {
                    src: "img/master.png",
                    style: "width: 120%; height: 120%; position: absolute; top: -10%; left: -10%;"
                }).render();
                tdMasterPainting.append(img);
            }
            let tdNormWorkGasLitr = new Teg("td", `${this.allOperations[i].tdNormWorkGasLitr}`).render();
            let tdFactWorkGasLitr = new Teg("td", `${this.allOperations[i].tdFactWorkGasLitr}`).render();
            let tdRemainderGasEnd = new Teg("td", `${this.allOperations[i].tdRemainderGasEnd}`).render();
            let tdWorkerPainting = new Teg("td", ``, {
                colspan: "3",
                style: "border-right:1px solid windowtext;border-bottom:1px solid windowtext; position: relative;"
            }).render();
            if (this.allOperations[i].tdWorkerPainting) {
                let img = new Teg("img", "", {
                    src: "img/Working.png",
                    style: "width: 120%; height: 120%; position: absolute; top: -10%; left: -10%;"
                }).render();
                tdWorkerPainting.append(img);
            }
            let arr = [ tdIndex, tdNameWorker, tdStarWork, tdEndWork, tdRemainderGasStart, tdGatPetrol, tdGetDiesel, tdMasterPainting, tdNormWorkGasLitr, tdNormWorkGasLitr, tdFactWorkGasLitr, tdRemainderGasEnd, tdWorkerPainting ];
            arr.forEach((el => tr.append(el)));
            return tr;
        }
        operationsArrayTool() {
            let toolModel = [ "АД-2", "АД-4", "ЕД-2", "ЕД-4", "АДД-4001" ];
            this.allOperations = [];
            for (let i = 0; i < 31; i++) {
                let obg = {
                    tdIndex: `${i + 1}`,
                    tdNameWorker: "",
                    tdStarWork: "",
                    tdEndWork: "",
                    tdRemainderGasStart: "",
                    tdGatPetrol: "",
                    tdGetDiesel: "",
                    tdMasterPainting: false,
                    tdNormWorkGasLitr: "",
                    tdFactWorkGasLitr: "",
                    tdRemainderGasEnd: "",
                    tdWorkerPainting: false
                };
                for (let y = 0; y < this.refueling.length; y++) {
                    let el = this.refueling[y];
                    let date = new Date(el.date);
                    let day = date.getDate();
                    if (i + 1 == day) if (toolModel.some((model => model === this.master.model))) {
                        obg.tdGatPetrol = ` `;
                        obg.tdGetDiesel = parseInt(el.number);
                        obg.tdMasterPainting = true;
                    } else {
                        obg.tdGatPetrol = parseInt(el.number);
                        obg.tdGetDiesel = ` `;
                        obg.tdMasterPainting = true;
                    }
                }
                for (let w = 0; w < this.toolOperation.length; w++) {
                    if (!this.toolOperation[w].number) break;
                    let el = this.toolOperation[w];
                    let date = new Date(el.date);
                    let day = date.getDate();
                    if (i + 1 == day) {
                        obg.tdNameWorker = "Ігорь МАНЗЯК";
                        obg.tdStarWork = `8:${Math.floor(Math.random() * 59)}`;
                        obg.tdEndWork = `16:${Math.floor(Math.random() * 59)}`;
                        obg.tdRemainderGasStart = parseFloat(this.endGas);
                        console.log(`залишок до початку роботи, літр - ${obg.tdRemainderGasStart}`);
                        obg.tdNormWorkGasLitr = (this.norm * el.number).toFixed(2);
                        obg.tdFactWorkGasLitr = Math.round(this.norm * el.number);
                        let gas = obg.tdGatPetrol != " " ? obg.tdGatPetrol : obg.tdGetDiesel != " " ? obg.tdGetDiesel : 0;
                        console.log(`бензин - ${gas}`);
                        this.endGas = obg.tdRemainderGasStart + gas - obg.tdFactWorkGasLitr;
                        console.log(`Остаток на кінець дня ${i + 1} - ${this.endGas}`);
                        obg.tdRemainderGasEnd = this.endGas;
                        obg.tdWorkerPainting = true;
                    }
                }
                if (!obg.tdWorkerPainting && obg.tdMasterPainting) {
                    obg.tdRemainderGasStart = parseFloat(this.endGas);
                    let gas = obg.tdGatPetrol != " " ? obg.tdGatPetrol : obg.tdGetDiesel != " " ? obg.tdGetDiesel : 0;
                    this.endGas = obg.tdRemainderGasStart + parseInt(gas);
                    obg.tdRemainderGasEnd = this.endGas;
                }
                this.allOperations.push(obg);
            }
        }
        renderTable() {
            this.spanIDWork.innerText = `${this.master["workshops"]}`;
            this.spanIDWork.style = "text-decoration:underline";
            if (this.toolOperation.length != 0) {
                const period = this.toolOperation[0].date;
                let date = new Date(`${period}`);
                this.spanIDMonth.innerText = `.       ${this.getMonthName(date.getMonth())}       .`;
                this.spanIDMonth.style = "text-decoration:underline";
                this.spanIDYear.innerText = `${date.getFullYear()}`;
                this.spanIDYear.style = "text-decoration:underline";
            }
            this.nameIDTool.innerText = `${this.master["tool"]}`;
            this.modelIDTool.innerText = `${this.master["model"]}`;
            this.toolId.innerText = `${this.master["id-tool"]}`;
            this.normTolsHours.innerText = `${this.norm}`;
            let fuerFuer = this.refID.value ? this.refID.value : 0;
            this.endGas = fuerFuer;
            this.fuelRemainToolID.innerText = `${fuerFuer} л.`;
            this.gasRafueling.innerText = `${this.starGas - this.refID.value} л.`;
            this.sumWorkHours.innerText = `${this.sumJomToolOperation()}`;
            this.sumWorkNorm.innerText = `${this.resultJomNorm()} л.`;
            this.factSumWorkGas.innerText = `${this.resultJobFact()} л.`;
            this.restGasTheMonth.innerText = `${this.fuelRemainingTotal()} л.`;
            if (this.toolOperation[0].number) {
                this.operationsArrayTool();
                this.renderTableMain();
            }
            this.nameMaster.innerText = `${this.master["master-workhop"]}`;
        }
    }
    class Slider {
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
    window.onload = () => {
        const list = new ListMaster(masterTools, workshops);
        const listTools = new ListTools(masterTools, tool);
        list.id.addEventListener("changeWorkshops", listTools.addWorkshops);
        const radioImput = new RadioList(masterTools, form);
        listTools.id.addEventListener("chengeTools", radioImput.newArrMasterTools);
        const getObgTool = new RenderListNorm(normTools, tableNorm);
        radioImput.id.addEventListener("toolObg", getObgTool.getModelTools);
        new ItemList(refueling1);
        new ItemList(job1);
        let normCalculator = new FuelConsumptionCalculations(inputFuel, refueling1, job1, tableResult, spanRemainingFuel, spanWork, spanMonth, spanYear, nameTool, modelTool, toolId, normTolsHours, fuelRemainTool, inputFuel, gasRafueling, sumWorkHours, sumWorkNorm, factSumWorkGas, restGasTheMonth, ".mhTool", ".workToolJob", nameMaster);
        getObgTool.id.addEventListener("getNorm", normCalculator.getNorm);
        radioImput.id.addEventListener("sendMasterTool", normCalculator.getModelTools);
        new Slider(back, next, ".slide.active");
    };
    window["FLS"] = true;
    isWebp();
})();