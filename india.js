const locStor = localStorage;
const windows = window;
const docc = document;
const hTMLE = document.documentElement;
const dEle = docc.head;
const newEle = namee => docc.createElement(namee);
const newIm = _=> new Image();
const aEM = (elementt,eventss,callbackk) => elementt[`on${eventss}`] = callbackk;// elementt.addEventListener(eventss,callbackk);
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
            an:"Andaman and Nicobar Islands",
            ap:"Andhra Pradesh",
            ar:"Arunachal Pradesh",
            as:"Assam",
            br:"Bihar",
            ch:"Chandigarh",
            ct:"Chhattisgarh",
            dn:"Dadra and Nagar Haveli and Daman and Diu",
            dl:"Delhi",
            ga:"Goa",
            gj:"Gujarat",
            hr:"Haryana",
            hp:"Himachal Pradesh",
            jk:"Jammu and Kashmir",
            jh:"Jharkhand",
            ka:"Karnataka",
            kl:"Kerala",
            la:"Ladakh",
            ld:"Lakshadweep",
            mp:"Madhya Pradesh",
            mh:"Maharashtra",
            mn:"Manipur",
            ml:"Meghalaya",
            mz:"Mizoram",
            nl:"Nagaland",
            or:"Odisha",
            py:"Puducherry",
            pb:"Punjab",
            rj:"Rajasthan",
            sk:"Sikkim",
            tn:"Tamil Nadu",
            ts:"Telangana",
            tr:"Tripura",
            up:"Uttar Pradesh",
            ut:"Uttarakhand",
            wb:"West Bengal",
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
const colors = ['#F9CDC7', '#C5F9CB', '#CDE8F4', '#FDE8C4', '#D0DCD7', '#E1CEF5', '#D6D6D6'];
const colors_randomizer = Math.floor(Math.random() * 7);
hTMLE.style.backgroundColor = colors[colors_randomizer]
aEM(hTMLE,'click',e=>{
    if (e.target == docc.body) {
        const colorsa = Math.floor(Math.random() * 50) + 176;
        const colorsb = Math.floor(Math.random() * 50) + 176;
        const colorsc = Math.floor(Math.random() * 50) + 176;
        hTMLE.style.backgroundColor = '#' + colorsa.toString(16) + colorsb.toString(16) + colorsc.toString(16)
    }
})
const allC = _=>{
    sCS.display = '';
    sLS.display = '';
};
const dataa = {};
const gAPE = _=>[...aRea.children];
const gAPR = _=>gAPE().map(el=>+el.getAttribute('level')||0);
const lSCK = 'india-levels';
const sTG = _=>{
    let locStorvalue = ""
    for (const provEle of gAPE()) {
        if (provEle.getAttribute('alt') == "true") {
            locStorvalue += '-'
        }
        else locStorvalue += provEle.getAttribute('level')||0
    }
    locStor.setItem(lSCK,locStorvalue);
};
const pGAR = /^[\d|-]+$/;
const gLTE = _=>{
    let lS = locStor.getItem(lSCK);
    // console.log(lS.length) # to-do: error handling
    // if(/^[\d|-]$/.test(lS)) lS+='0'; // handling legacy localstorage
    console.log(lS)
    if(!pGAR.test(lS)) return;
    const levels = lS.split('');
    gAPE().forEach((elementt,subScript)=>{
        elementt.setAttribute('level',levels[subScript]=='-'?'0':levels[subScript])
        if (levels[subScript]=='-') elementt.setAttribute('alt', true);
        if (elementt.nodeName == 'g') {
            for (const child of elementt.children) {
                child.setAttribute('level',levels[subScript]=='-'?'0':levels[subScript]);
                if (levels[subScript]=='-') child.setAttribute('alt', true);
            }
        }
    })
};
const graphicc = docc.querySelector('svg');
const sCS = setLevel.style;
const minSpace = 6;
aEM(graphicc,'click', e=>{
    allC()
    e.stopPropagation();
    let { target: provEle } = e;
    if ( provEle.parentElement.id == provEle.id ) {
        provEle = provEle.parentElement
    }
    const pEO = gEO(provEle);
    const { id } = provEle;
    dataa.provEle = provEle;
    dataa.id = id;
    sLT.innerHTML = messages[Lang.textContent].country_name[id];
    sCS.display = 'block';
    const sLEO = gEO(setLevel);
    
    let leftt = Math.round(pEO.left + pEO.width/2 - sLEO.width/2);
    leftt = Math.min(
        leftt,
        document.body.offsetWidth - sLEO.width - minSpace
    );
    leftt = Math.max(
        leftt,
        minSpace
    );
    let superiorr = Math.round(pEO.top + pEO.height/2 - sLEO.height/2);
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
aEM(docc,'click',allC);
const scoree = _=>{
    const pointt = gAPR().reduce((completee, currentt) => {
        return +completee + currentt;
      }, 0);
    // Total.innerHTML = `India Level ${pointt}`;
    totalpp.innerHTML = `India Level ${pointt}`;
    webtitle.innerHTML = `India Level ${pointt}`;
}
aEM(setLevel,'click',e=>{
    e.stopPropagation();
    const grades = e.target.getAttribute('data-level');
    if(!grades) return false;
    if (dataa.provEle.nodeName == "g") {
        for (const child of dataa.provEle.children) {
            child.setAttribute('level',grades)
        }
    }
    dataa.provEle.setAttribute('level',grades);
    const alt = e.target.hasAttribute('alt');
    if (dataa.provEle.nodeName == "g") {
        for (const child of dataa.provEle.children) {
            if (alt) child.setAttribute('alt',true)
            else child.setAttribute('alt',false);
        }
    }
    if (alt) dataa.provEle.setAttribute('alt',true)
    else dataa.provEle.setAttribute('alt',false);
    allC();
    scoree();
    sTG();
})
aEM(Reset,'click',e=>{
    gAPE().forEach((elementt,subScript)=>{
        elementt.setAttribute('level','0')
        elementt.setAttribute('alt', false);
        if (elementt.nodeName == 'g') {
            for (const child of elementt.children) {
                child.setAttribute('level','0');
                child.setAttribute('alt', false);
            }
        }
    })
    allC();
    scoree();
    sTG();
})
const languagee = docc.querySelector('#Lang');
const sLS = Set_Lang.style;
aEM(languagee,'click', e=>{
    allC()
    e.stopPropagation();
    sLS.display = 'block';
    const sLO = gEO(Set_Lang);
    const btnO = gEO(languagee);
    const cL = Lang.textContent;
    for (const child of Set_Lang.children) {
        if ( child.getAttribute('lang') == cL ) {
            child.style.background = "#aaa";
        }
        else {
            child.style.background = "#fff";
        }
    }
    
    let leftt = Math.round(btnO.left + btnO.width/2 - sLO.width/2);
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
const chL = (newLang)=>{
    i18n.global.locale = newLang
}
aEM(Set_Lang,'click',e=>{
    e.stopPropagation();
    const languagee = e.target.getAttribute('lang');
    if(!languagee) return false;
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
const widthh = 210*5;
const highh = 297*5;
const comparee = 2;
const panels = newEle('canvas');
panels.width = widthh * comparee;
panels.height = widthh * comparee;
const ctxt = panels.getContext('2d');
const createNewGraphic = docT=>{
    const rD = new Blob([docT], {type: 'image/svg+xml'});
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
const sI = _=>{
    var docT; 
    var scoreTxt; 
    var checkbox = document.getElementById("groupToggle");
    if (checkbox.checked) {
    console.log(widthh, highh ,"Yes")
         scoreTxt = `<text x="0" y="0" font-size="20" font-family="Arial" fill="black" transform="translate(10, -10) scale(.6)">${totalpp.innerHTML}</text>`;
         docT = `<?xml version="1.0" encoding="utf-8"?><svg xmlns="http://www.w3.org/2000/svg"  viewBox="-20 -5 280 190" width="${widthh}px" height="${highh}px" >        
        ${graphicc.innerHTML}
        ${scoreTxt}
        </svg>`;
    }
    else{
    console.log(widthh, highh ,"No")
    scoreTxt = `<text x="0" y="0" font-size="20" font-family="Arial" fill="black" transform="translate(30, -10) scale(.6)">${totalpp.innerHTML}</text>`;
        // const docT = `<?xml version="1.0" encoding="utf-8"?><svg xmlns="http://www.w3.org/2000/svg"  viewBox="-80 50 300 200" width="${widthh}px" height="${highh}px" >        
         docT = `<?xml version="1.0" encoding="utf-8"?><svg xmlns="http://www.w3.org/2000/svg"  viewBox="20 -60 240 300" width="${widthh}px" height="${highh}px" >        
        ${graphicc.innerHTML}
        ${scoreTxt}
        </svg>`;
    }
    const dd = createNewGraphic(docT);
    URLimEl(dd,picturee=>{
        // ctxt.fillStyle = '#919ee6'; // Use the same background color
        ctxt.fillStyle = hTMLE.style.backgroundColor; //'#b4b4ef';
        ctxt.fillRect(
            0,0,
            widthh * comparee,widthh * comparee
        );
        ctxt.drawImage(
            picturee,
            0,0,
            widthh,highh,
            0,(widthh - highh) * comparee / 2,
            widthh * comparee, highh * comparee
        );

        const pointt = gAPR().reduce((completee, currentt) => {
            return +completee + currentt;
          }, 0);

          
        panels.toBlob(eD=>{
            const addresss = URL.createObjectURL(eD);
            dF(addresss,`India Level ${pointt}.png`);
            opIm.style.display = '';
            opIm.querySelector('img').src = addresss;
        },'image/png');
    });
};
aEM(savee,'click',sI);
aEM(opIm.querySelector('a'),'click',_=>{
    opIm.style.display = 'none'
});
