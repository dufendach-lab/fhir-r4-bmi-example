function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},i={},o=t.parcelRequire17b7;function r(e,t){const n=document.getElementById(e);if(!n)return Promise.reject(`Element '${e}' not found`);const i=function(e,t=!0){const n=[],i=e.entry;return i&&(i.forEach((e=>{const t=e.resource;if(t?.effectiveDateTime&&t.valueQuantity){const e=t.valueQuantity;if(!e.value||!e.unit)return;e&&n.push({value:e.value,unit:e.unit,time:t.effectiveDateTime})}})),t&&n.sort(((e,t)=>e.time<t.time?-1:1))),n}(t);return 0===i.length?n.innerHTML="No values found":(n.innerHTML="",i.forEach((e=>n.innerHTML+=`<li>${e?.value} ${e?.unit}</li>`))),Promise.resolve(i)}null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in i){var t=i[e];delete i[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){i[e]=t},t.parcelRequire17b7=o),e(o("i3ey2")).oauth2.ready().then((e=>{document.getElementById("launch_link")?.remove();const t=e.patient.id;console.log(t),e.patient.read().then((e=>function(e){const t=document.getElementById("pt_name");t&&(t.innerHTML=e)}(function(e){if(e.name)return e.name.map((e=>`${e.given?.join(" ")} ${e.family}`)).join(" / ");return"Name not found"}(e)))),Promise.all([e.patient.request("Observation?code=29463-7").then((e=>r("wt_list",e))),e.patient.request("Observation?code=8302-2").then((e=>r("ht_list",e)))]).then((([e,t])=>{const n=document.getElementById("bmi");var i;n&&e.length>0&&t.length>0&&(n.innerHTML=(i={wt:e[e.length-1].value,ht:t[t.length-1].value/100},i.wt/Math.pow(i.ht,2)).toFixed(2))}))}));
//# sourceMappingURL=index.20755674.js.map
