const locStor = localStorage;
const windows = window;
const docc = document;
const hTMLE = document.documentElement;
const dEle = docc.head;
const newEle = namee => docc.createElement(namee);
const newIm = _ => new Image();
const aEM = (elementt, eventss, callbackk) => elementt[`on${eventss}`] = callbackk;// elementt.addEventListener(eventss,callbackk);
const gEO = elementt => elementt.getBoundingClientRect();
const messages = {
    English: {
        message: {
            data_level_5: 'Lived here',
            data_level_4: 'Stayed here',
            data_level_3: 'Visited here',
            data_level_2: 'Stopped here',
            data_level_1: 'Passed here',
            data_level_0_alt: 'Want to be here',
            data_level_0: 'Never been here',
            pt: 'pt | pts',
        },
        country_name: {
            ad: "Andorra",
            ae: "United Arab Emirates",
            af: "Afghanistan",
            ag: "Antigua and Barbuda",
            al: "Albania",
            am: "Armenia",
            ao: "Angola",
            aq: "Antarctica",
            ar: "Argentina",
            at: "Austria",
            au: "Australia",
            az: "Azerbaijan",
            ba: "Bosnia and Herzegovina",
            bb: "Barbados",
            bd: "Bangladesh",
            be: "Belgium",
            bf: "Burkina Faso",
            bg: "Bulgaria",
            bh: "Bahrain",
            bi: "Burundi",
            bj: "Benin",
            bn: "Brunei Darussalam",
            bo: "Bolivia, Plurinational State of",
            br: "Brazil",
            bs: "Bahamas",
            bt: "Bhutan",
            bw: "Botswana",
            by: "Belarus",
            bz: "Belize",
            ca: "Canada",
            cd: "Congo, The Democratic Republic of the",
            cf: "Central African Republic",
            cg: "Congo",
            ch: "Switzerland",
            ci: "Côte d'Ivoire",
            cl: "Chile",
            cm: "Cameroon",
            cn: "China",
            co: "Colombia",
            cr: "Costa Rica",
            cu: "Cuba",
            cv: "Cabo Verde",
            cy: "Cyprus",
            cz: "Czechia",
            de: "Germany",
            dj: "Djibouti",
            dk: "Denmark",
            dm: "Dominica",
            do: "Dominican Republic",
            dz: "Algeria",
            ec: "Ecuador",
            ee: "Estonia",
            eg: "Egypt",
            er: "Eritrea",
            es: "Spain",
            et: "Ethiopia",
            fi: "Finland",
            fj: "Fiji",
            fm: "Micronesia, Federated States of",
            fo: "Faroe Islands",
            fr: "France",
            ga: "Gabon",
            gb: "United Kingdom",
            gd: "Grenada",
            ge: "Georgia",
            gh: "Ghana",
            gl: "Greenland",
            gm: "Gambia",
            gn: "Guinea",
            gq: "Equatorial Guinea",
            gr: "Greece",
            gt: "Guatemala",
            gu: "Guam",
            gw: "Guinea-Bissau",
            gy: "Guyana",
            hn: "Honduras",
            hr: "Croatia",
            ht: "Haiti",
            hu: "Hungary",
            id: "Indonesia",
            ie: "Ireland",
            il: "Israel",
            in: "India",
            iq: "Iraq",
            ir: "Iran, Islamic Republic of",
            is: "Iceland",
            it: "Italy",
            jm: "Jamaica",
            jo: "Jordan",
            jp: "Japan",
            ke: "Kenya",
            kg: "Kyrgyzstan",
            kh: "Cambodia",
            ki: "Kiribati",
            km: "Comoros",
            kn: "Saint Kitts and Nevis",
            kp: "Korea, Democratic People's Republic of",
            kr: "Korea, Republic of",
            kw: "Kuwait",
            kz: "Kazakhstan",
            la: "Lao People's Democratic Republic",
            lb: "Lebanon",
            lc: "Saint Lucia",
            li: "Liechtenstein",
            lk: "Sri Lanka",
            lr: "Liberia",
            ls: "Lesotho",
            lt: "Lithuania",
            lu: "Luxembourg",
            lv: "Latvia",
            ly: "Libya",
            ma: "Morocco",
            mc: "Monaco",
            md: "Moldova, Republic of",
            me: "Montenegro",
            mg: "Madagascar",
            mh: "Marshall Islands",
            mk: "North Macedonia",
            ml: "Mali",
            mm: "Myanmar",
            mn: "Mongolia",
            mr: "Mauritania",
            mt: "Malta",
            mu: "Mauritius",
            mv: "Maldives",
            mw: "Malawi",
            mx: "Mexico",
            my: "Malaysia",
            mz: "Mozambique",
            na: "Namibia",
            ne: "Niger",
            ng: "Nigeria",
            ni: "Nicaragua",
            nl: "Netherlands",
            no: "Norway",
            np: "Nepal",
            nr: "Nauru",
            nu: "Niue",
            nz: "New Zealand",
            om: "Oman",
            pa: "Panama",
            pe: "Peru",
            pg: "Papua New Guinea",
            ph: "Philippines",
            pk: "Pakistan",
            pl: "Poland",
            pt: "Portugal",
            pw: "Palau",
            py: "Paraguay",
            qa: "Qatar",
            ro: "Romania",
            rs: "Serbia",
            ru: "Russian Federation",
            rw: "Rwanda",
            sa: "Saudi Arabia",
            sb: "Solomon Islands",
            sc: "Seychelles",
            sd: "Sudan",
            se: "Sweden",
            sg: "Singapore",
            si: "Slovenia",
            sk: "Slovakia",
            sl: "Sierra Leone",
            sm: "San Marino",
            sn: "Senegal",
            so: "Somalia",
            sr: "Suriname",
            ss: "South Sudan",
            st: "Sao Tome and Principe",
            sv: "El Salvador",
            sy: "Syrian Arab Republic",
            sz: "Eswatini",
            td: "Chad",
            tf: "French Southern Territories",
            tg: "Togo",
            th: "Thailand",
            tj: "Tajikistan",
            tk: "Tokelau",
            tl: "Timor-Leste",
            tm: "Turkmenistan",
            tn: "Tunisia",
            to: "Tonga",
            tr: "Turkey",
            tt: "Trinidad and Tobago",
            tv: "Tuvalu",
            tz: "Tanzania, United Republic of",
            ua: "Ukraine",
            ug: "Uganda",
            us: "United States",
            uy: "Uruguay",
            uz: "Uzbekistan",
            va: "Holy See (Vatican City State)",
            vc: "Saint Vincent and the Grenadines",
            ve: "Venezuela, Bolivarian Republic of",
            vn: "Viet Nam",
            vu: "Vanuatu",
            ws: "Samoa",
            ye: "Yemen",
            za: "South Africa",
            zm: "Zambia",
            zw: "Zimbabwe",
            aruba: "Aruba",
            bermuda: "Bermuda",
            bonaire: "Bonaire, Sint Eustatius and Saba",
            brit_ind_ocean: "British Indian Ocean Territory",
            caledonia: "New Caledonia",
            cayman: "Cayman Islands",
            christmas: "Christmas Island",
            cocos: "Cocos (Keeling) Islands",
            cook: "Cook Islands",
            curacao: "Curaçao",
            falkland: "Falkland Islands (Islas Malvinas)",
            french_guiana: "French Guiana",
            french_poly: "French Polynesia",
            gaza: "Gaza",
            gibraltar: "Gibraltar",
            guadeloupe: "Guadeloupe",
            guernsey: "Guernsey",
            heard: "Heard Island and McDonald Islands",
            jersey: "Jersey",
            hong_kong: "Hong Kong",
            isle_of_man: "Isle of Man",
            macao: "Macao",
            martinique: "Martinique",
            mayotte: "Mayotte",
            montserrat: "Montserrat",
            norfolk: "Norfolk Island",
            northern_mariana: "Northern Mariana Islands",
            pitcairn: "Pitcairn Islands",
            puerto: "Puerto Rico",
            reunion: "Reunion",
            sahrawi: "Sahrawi Arab Democratic Republic",
            saint_barth: "Saint Barthélemy",
            saint_martin: "Saint Martin (French Part)",
            sandwich: "South Georgia and the South Sandwich Islands",
            shat: "Saint Helena, Ascension and Tristan da Cunha",
            sint_maarten: "Sint Maarten",
            sp_and: "Saint Pierre and Miquelon",
            taiwan: "Taiwan",
            turks_and: "Turks and Caicos Islands",
            us_samoa: "American ",
            us_virgin: "U.S. Virgin Islands",
            virgin_british: "British Virgin Islands",
            wallis_and: "Wallis and Futuna",
            west_bank: "West Bank",
            western_sahara: "Western Sahara",
            crimea: "Crimea",
        }
    }
}
const i18n = VueI18n.createI18n({
    locale: 'English',
    fallbackLocale: 'English',
    messages,
})
const app1 = Vue.createApp().use(i18n).mount("#Layer_4")
const app2 = Vue.createApp().use(i18n).mount("#setLevel")
const app3 = Vue.createApp().use(i18n).mount("#Texts")
const sLT = setLevel.children[0];
// random background color on refresh
// const colors = ['#F9CDC7', '#C5F9CB', '#CDE8F4', '#FDE8C4', '#D0DCD7', '#E1CEF5', '#D6D6D6'];
// const colors_randomizer = Math.floor(Math.random() * 7);
// hTMLE.style.backgroundColor = colors[colors_randomizer]
// aEM(hTMLE,'click',e=>{
//     if (e.target == docc.body) {
//         const colorsa = Math.floor(Math.random() * 50) + 176;
//         const colorsb = Math.floor(Math.random() * 50) + 176;
//         const colorsc = Math.floor(Math.random() * 50) + 176;
//         hTMLE.style.backgroundColor = '#' + colorsa.toString(16) + colorsb.toString(16) + colorsc.toString(16)
//     }
// })
const allC = _ => {
    sCS.display = '';
    sLS.display = '';
};
const dataa = {};
const gAPE = _ => [...aRea.children];
const gAPR = _ => gAPE().map(el => +el.getAttribute('level') || 0);
const lSCK = 'world-levels';
const sTG = _ => {
    let locStorvalue = ""
    for (const provEle of gAPE()) {
        if (provEle.getAttribute('alt') == "true") {
            locStorvalue += '-'
        }
        else locStorvalue += provEle.getAttribute('level') || 0
    }
    locStor.setItem(lSCK, locStorvalue);
};
const pGAR = /^[\d|-]+$/;
const gLTE = _ => {
    let lS = locStor.getItem(lSCK);
    // console.log(lS.length) # to-do: error handling
    // if(/^[\d|-]{49}$/.test(lS)) lS+='0'; // handling legacy localstorage
    console.log(lS)
    if (!pGAR.test(lS)) return;
    const levels = lS.split('');
    gAPE().forEach((elementt, subScript) => {
        elementt.setAttribute('level', levels[subScript] == '-' ? '0' : levels[subScript])
        if (levels[subScript] == '-') elementt.setAttribute('alt', true);
        if (elementt.nodeName == 'g') {
            for (const child of elementt.children) {
                child.setAttribute('level', levels[subScript] == '-' ? '0' : levels[subScript]);
                if (levels[subScript] == '-') child.setAttribute('alt', true);
            }
        }
    })
};
const graphicc = docc.querySelector('svg');
const sCS = setLevel.style;
const minSpace = 6;
aEM(graphicc, 'click', e => {
    allC()
    e.stopPropagation();
    let { target: provEle } = e;
    if (provEle.parentElement.id == provEle.id) {
        provEle = provEle.parentElement
    }
    const pEO = gEO(provEle);
    const { id } = provEle;
    dataa.provEle = provEle;
    dataa.id = id;
    sLT.innerHTML = messages[Lang.textContent].country_name[id];
    sCS.display = 'block';
    const sLEO = gEO(setLevel);

    let leftt = Math.round(pEO.left + pEO.width / 2 - sLEO.width / 2);
    leftt = Math.min(
        leftt,
        document.body.offsetWidth - sLEO.width - minSpace
    );
    leftt = Math.max(
        leftt,
        minSpace
    );
    let superiorr = Math.round(pEO.top + pEO.height / 2 - sLEO.height / 2);
    superiorr = Math.min(
        superiorr,
        document.body.offsetHeight - sLEO.height - minSpace
    );
    superiorr = Math.max(
        superiorr,
        minSpace
    );
    sCS.left = leftt + 'px';
    sCS.top = superiorr + 'px';
});
aEM(docc, 'click', allC);
const scoree = _ => {
    const pointt = gAPR().reduce((completee, currentt) => {
        return +completee + currentt;
    }, 0);
    // Total.innerHTML = `World Level ${pointt}`;
    totalpp.innerHTML = `World Level ${pointt}`;
    webtitle.innerHTML = `World Level ${pointt}`;
}
aEM(setLevel, 'click', e => {
    e.stopPropagation();
    const grades = e.target.getAttribute('data-level');
    if (!grades) return false;
    if (dataa.provEle.nodeName == "g") {
        for (const child of dataa.provEle.children) {
            child.setAttribute('level', grades)
        }
    }
    dataa.provEle.setAttribute('level', grades);
    const alt = e.target.hasAttribute('alt');
    if (dataa.provEle.nodeName == "g") {
        for (const child of dataa.provEle.children) {
            if (alt) child.setAttribute('alt', true)
            else child.setAttribute('alt', false);
        }
    }
    if (alt) dataa.provEle.setAttribute('alt', true)
    else dataa.provEle.setAttribute('alt', false);
    allC();
    scoree();
    sTG();
})
aEM(Reset, 'click', e => {
    gAPE().forEach((elementt, subScript) => {
        elementt.setAttribute('level', '0')
        elementt.setAttribute('alt', false);
        if (elementt.nodeName == 'g') {
            for (const child of elementt.children) {
                child.setAttribute('level', '0');
                child.setAttribute('alt', false);
            }
        }
    })
    allC();
    scoree();
    sTG();
    window.location.reload();

})
const languagee = docc.querySelector('#Lang');
const sLS = Set_Lang.style;
aEM(languagee, 'click', e => {
    allC()
    e.stopPropagation();
    sLS.display = 'block';
    const sLO = gEO(Set_Lang);
    const btnO = gEO(languagee);
    const cL = Lang.textContent;
    for (const child of Set_Lang.children) {
        if (child.getAttribute('lang') == cL) {
            child.style.background = "#aaa";
        }
        else {
            child.style.background = "#fff";
        }
    }

    let leftt = Math.round(btnO.left + btnO.width / 2 - sLO.width / 2);
    leftt = Math.min(
        leftt,
        document.body.offsetWidth - sLO.width - minSpace
    );
    leftt = Math.max(
        leftt,
        minSpace
    );
    let superiorr = Math.round(btnO.top - sLO.height - minSpace);
    superiorr = Math.min(
        superiorr,
        document.body.offsetHeight - sLO.height - minSpace
    );
    superiorr = Math.max(
        superiorr,
        minSpace
    );
    sLS.left = leftt + 'px';
    sLS.top = superiorr + 'px';
});
const chL = (newLang) => {
    i18n.global.locale = newLang
}
aEM(Set_Lang, 'click', e => {
    e.stopPropagation();
    const languagee = e.target.getAttribute('lang');
    if (!languagee) return false;
    Lang.textContent = languagee;
    allC();
    chL(languagee);
})
gLTE();
scoree();
// const rFIA = (rD,callbackk)=>{
//     const readd = new FileReader();
//     readd.onload = e => callbackk(e.target.result);
//     readd.readAsDataURL(rD);
// };
// const gFDA = (addresss,callbackk)=>{
//     fetch(addresss).then(r => r.blob()).then(rD => rFIA(rD,callbackk));
// };
// const gFS = (fontN,callbackk)=>{
//     gFDA(`${fontN}.woff?v=9`,addresss => callbackk(`@font-face {
//         font-family: ${fontN};
//         src: url(${addresss});
//     };`));
// };
// gFS('slice',styStr=>{
//     graphicc.querySelector('style').innerHTML = styStr;
//     const stylee = newEle('style');
//     stylee.innerHTML = styStr;
//     dEle.appendChild(stylee);
//     setTimeout(_=>hTMLE.removeAttribute('data-loading'),0);
// });
const styStr = `body { font-family: 'Petrona', sans-serif; }`;
graphicc.querySelector('style').textContent = styStr;
const stylee = newEle('style');
stylee.textContent = styStr;
dEle.appendChild(stylee);
setTimeout(_ => hTMLE.removeAttribute('data-loading'), 0);
const widthh = 2755 / 2;
const highh = 1500 / 2;
const comparee = 2;
const panels = newEle('canvas');
panels.width = widthh * comparee;
panels.height = widthh * comparee;
const ctxt = panels.getContext('2d');
const createNewGraphic = docT => {
    const rD = new Blob([docT], { type: 'image/svg+xml' });
    return URL.createObjectURL(rD);
};
const dF = (linkk, fileN, elementt = newEle('a')) => {
    elementt.download = fileN;
    elementt.href = linkk;
    elementt.click();
};

const URLimEl = (addresss, callbackk) => {
    const picturee = newIm();
    aEM(picturee, 'load', _ => callbackk(picturee));
    picturee.src = addresss;
};

const sI = _ => {
    var docT;
    var scoreTxt;
    var checkbox = document.getElementById("groupToggle");
    if (checkbox.checked) {
        console.log(widthh, highh, "Yes")
        scoreTxt = `<text x="10" y="30" font-size="60" font-family="Arial" fill="black" transform="translate(1200, 1050) scale(4)">${totalpp.innerHTML}</text>`;
        console.log(widthh, highh)
        guide = `		<svg version="1.1" class="levelGuide" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 2755.1 1500.5" style="enable-background:new 2755.1 1500.5"
    xml:space="preserve">
    <g id="Layer_4" transform="translate(0, -570) scale(2)">
        <path class="st6" d="M56.9,933.1H273c1.7,0,3,1.3,3,3v26c0,1.7-1.3,3-3,3H56.9c-1.7,0-3-1.3-3-3v-26
C53.9,934.5,55.3,933.1,56.9,933.1z" />
        <path class="st2" d="M56.93,870.03h216.1c1.66,0,3,1.34,3,3v26c0,1.66-1.34,3-3,3H56.93c-1.66,0-3-1.34-3-3v-26
C53.93,871.37,55.27,870.03,56.93,870.03z" />
        <path class="st3" d="M56.93,742.03h216.1c1.66,0,3,1.34,3,3v26c0,1.66-1.34,3-3,3H56.93c-1.66,0-3-1.34-3-3v-26
C53.93,743.37,55.27,742.03,56.93,742.03z" />
        <path class="st4" d="M56.93,838.03h216.1c1.66,0,3,1.34,3,3v26c0,1.66-1.34,3-3,3H56.93c-1.66,0-3-1.34-3-3v-26
C53.93,839.37,55.27,838.03,56.93,838.03z" />
        <path class="st5" d="M56.93,774.03h216.1c1.66,0,3,1.34,3,3v26c0,1.66-1.34,3-3,3H56.93c-1.66,0-3-1.34-3-3v-26
C53.93,775.37,55.27,774.03,56.93,774.03z" />
        <path class="st24" d="M56.93,902.03h216.1c1.66,0,3,1.34,3,3v26c0,1.66-1.34,3-3,3H56.93c-1.66,0-3-1.34-3-3v-26
C53.93,903.37,55.27,902.03,56.93,902.03z" />
        <path class="st7" d="M56.93,806.03h216.1c1.66,0,3,1.34,3,3v26c0,1.66-1.34,3-3,3H56.93c-1.66,0-3-1.34-3-3v-26
C53.93,807.37,55.27,806.03,56.93,806.03z" />
        <path class="st8" d="M56.9,742H273c1.7,0,3,1.5,3,3.5V962c0,2-1.3,3.5-3,3.5H56.9c-1.7,0-3-1.5-3-3.5V745.5
C53.9,743.6,55.3,742,56.9,742z" />
        <path class="st9" d="M64.4,749.6h90.2c1.7,0,3,1.3,3,3v10.6c0,1.7-1.3,3-3,3H64.4c-1.7,0-3-1.3-3-3v-10.6
C61.4,751,62.8,749.6,64.4,749.6z" />
        <text transform="matrix(1 0 0 1 61.4438 764.5048)" class="st10 st11">Lived here</text>
        <path class="st9" d="M65.03,781.83h117.9c1.66,0,3,1.34,3,3v10.6c0,1.66-1.34,3-3,3H65.03c-1.66,0-3-1.34-3-3v-10.6
C62.03,783.17,63.37,781.83,65.03,781.83z" />
        <text transform="matrix(1 0 0 1 61.9937 796.6229)" class="st10 st11">Stayed here</text>
        <path class="st9" d="M65.43,813.83h117.9c1.66,0,3,1.34,3,3v10.6c0,1.66-1.34,3-3,3H65.43c-1.66,0-3-1.34-3-3v-10.6
C62.43,815.17,63.77,813.83,65.43,813.83z" />
        <text transform="matrix(1 0 0 1 62.4503 828.6221)" class="st10 st11">Visited here</text>
        <path class="st9" d="M64.43,845.83h117.9c1.66,0,3,1.34,3,3v10.6c0,1.66-1.34,3-3,3H64.43c-1.66,0-3-1.34-3-3v-10.6
C61.43,847.17,62.77,845.83,64.43,845.83z" />
        <text transform="matrix(1 0 0 1 62.4503 860.6222)" class="st10 st11">Stopped here</text>
        <path class="st9" d="M65.43,877.83h117.9c1.66,0,3,1.34,3,3v10.6c0,1.66-1.34,3-3,3H65.43c-1.66,0-3-1.34-3-3v-10.6
C62.43,879.17,63.77,877.83,65.43,877.83z" />
        <text transform="matrix(1 0 0 1 62.4503 892.6222)" class="st10 st11">Passed here</text>
        <path class="st9" d="M65.43,909.83h165.5c1.66,0,3,1.34,3,3v10.6c0,1.66-1.34,3-3,3H65.43c-1.66,0-3-1.34-3-3v-10.6
C62.43,911.17,63.77,909.83,65.43,909.83z" />
        <text transform="matrix(1 0 0 1 62.4503 924.6222)" class="st10 st11">Want to be here</text>
        <path class="st9" d="M65.4,909.8h165.5c1.7,0,3,1.3,3,3v10.6c0,1.7-1.3,3-3,3H65.4c-1.7,0-3-1.3-3-3v-10.6
C62.4,911.2,63.8,909.8,65.4,909.8z" />
        <text transform="matrix(1 0 0 1 62.8503 954.9222)" class="st10 st11">Never been here</text>
        <path class="st9" d="M209.33,750.23h53.4c1.66,0,3,1.34,3,3v10.6c0,1.66-1.34,3-3,3h-53.4c-1.66,0-3-1.34-3-3v-10.6
C206.33,751.57,207.67,750.23,209.33,750.23z" />
        <text transform="matrix(1 0 0 1 228.9265 765.0421)" class="st10 st11">5 pts</text>
        <path class="st9" d="M209.33,781.23h53.4c1.66,0,3,1.34,3,3v10.6c0,1.66-1.34,3-3,3h-53.4c-1.66,0-3-1.34-3-3v-10.6
C206.33,782.57,207.67,781.23,209.33,781.23z" />
        <text transform="matrix(1 0 0 1 228.954 796.0421)" class="st10 st11">4 pts</text>
        <path class="st9" d="M210.33,813.23h53.4c1.66,0,3,1.34,3,3v10.6c0,1.66-1.34,3-3,3h-53.4c-1.66,0-3-1.34-3-3v-10.6
C207.33,814.57,208.67,813.23,210.33,813.23z" />
        <text transform="matrix(1 0 0 1 228.954 828.0421)" class="st10 st11">3 pts</text>
        <path class="st9" d="M210.33,845.23h53.4c1.66,0,3,1.34,3,3v10.6c0,1.66-1.34,3-3,3h-53.4c-1.66,0-3-1.34-3-3v-10.6
C207.33,846.57,208.67,845.23,210.33,845.23z" />
        <text transform="matrix(1 0 0 1 228.954 860.0421)" class="st10 st11">2 pts</text>
        <path class="st9" d="M210.33,877.23h53.4c1.66,0,3,1.34,3,3v10.6c0,1.66-1.34,3-3,3h-53.4c-1.66,0-3-1.34-3-3v-10.6
C207.33,878.57,208.67,877.23,210.33,877.23z" />
        <text transform="matrix(1 0 0 1 228.954 892.0421)" class="st10 st11">1 pt</text>
        <path class="st9" d="M210.33,909.23h53.4c1.66,0,3,1.34,3,3v10.6c0,1.66-1.34,3-3,3h-53.4c-1.66,0-3-1.34-3-3v-10.6
C207.33,910.57,208.67,909.23,210.33,909.23z" />
        <text transform="matrix(1 0 0 1 228.954 924.0421)" class="st10 st11">0 pts</text>
        <path class="st9" d="M210.33,909.23h53.4c1.66,0,3,1.34,3,3v10.6c0,1.66-1.34,3-3,3h-53.4c-1.66,0-3-1.34-3-3v-10.6
C207.33,910.57,208.67,909.23,210.33,954.23z" />
        <text transform="matrix(1 0 0 1 228.954 954.0421)" class="st10 st11">0 pts</text>
    </g>

</svg>`
        docT = `<?xml version="1.0" encoding="utf-8"?><svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 2755.1 1500.5" width="${widthh}px" height="${highh}px" >        
    ${graphicc.innerHTML}
    ${guide}
    ${scoreTxt}
    </svg>`;
    }
    else {
        scoreTxt = `<text x="10" y="30" font-size="60" font-family="Arial" fill="black" transform="translate(1200, 1050) scale(4)">${totalpp.innerHTML}</text>`;
        console.log(widthh, highh)

        docT = `<?xml version="1.0" encoding="utf-8"?><svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 2755.1 1500.5" width="${widthh}px" height="${highh}px" >        
        ${graphicc.innerHTML}
        
        ${scoreTxt}
        </svg>`;
    }
    const dd = createNewGraphic(docT);
    URLimEl(dd, picturee => {

        ctxt.fillStyle = '#F9CDC7'; // Use the same background color
        // ctxt.fillStyle = hTMLE.style.backgroundColor; //'#b4b4ef';
        ctxt.fillRect(
            0, 0,
            widthh * comparee, widthh * comparee
        );

        // ctxt.drawImage(
        //     picturee,
        //     0,0,
        //     widthh,highh,
        //     0,(widthh - highh) * comparee / 2,
        //     widthh * comparee, highh * comparee
        // );

        ctxt.drawImage(
            picturee,
            0, 0,
            widthh, highh,
            0,(widthh - highh) * comparee / 2,
        2755, 1500
        );

        const pointt = gAPR().reduce((completee, currentt) => {
            return +completee + currentt;
        }, 0);


        panels.toBlob(eD => {
            const addresss = URL.createObjectURL(eD);
            dF(addresss, `India Level ${pointt}.png`);
            opIm.style.display = '';
            opIm.querySelector('img').src = addresss;
        }, 'image/png');
    });
};

aEM(savee, 'click', sI);

aEM(opIm.querySelector('a'), 'click', _ => {
    opIm.style.display = 'none'
});

