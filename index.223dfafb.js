function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},i=n.parcelRequire17b7;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var i={id:e,exports:{}};return t[e]=i,n.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){o[e]=n},n.parcelRequire17b7=i),e(i("i3ey2")).oauth2.ready().then((e=>{document.getElementById("launch_link")?.remove();const n=e.patient.id;console.log(n),e.patient.read().then((e=>function(e){const n=document.getElementById("pt_name");n&&(n.innerHTML=e)}(function(e){if(e.name)return e.name.map((e=>`${e.given?.join(" ")} ${e.family}`)).join(" / ");return"Name not found"}(e))));e.patient.request("Observation?code=29463-7").then((e=>{console.log(e)}))}));
//# sourceMappingURL=index.223dfafb.js.map