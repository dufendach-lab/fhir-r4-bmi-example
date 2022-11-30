// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"H0nJn":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "4ef737909b99cd7f";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"pOdDW":[function(require,module,exports) {
var global = arguments[3];
(()=>{
    function e(e, t, r, n) {
        Object.defineProperty(e, t, {
            get: r,
            set: n,
            enumerable: !0,
            configurable: !0
        });
    }
    var t = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {};
    function r(e) {
        return e && e.__esModule ? e.default : e;
    }
    var n = {}, o = {}, i = t.parcelRequire17b7;
    null == i && ((i = function(e) {
        if (e in n) return n[e].exports;
        if (e in o) {
            var t = o[e];
            delete o[e];
            var r = {
                id: e,
                exports: {}
            };
            return n[e] = r, t.call(r.exports, r, r.exports), r.exports;
        }
        var i = new Error("Cannot find module '" + e + "'");
        throw i.code = "MODULE_NOT_FOUND", i;
    }).register = function(e, t) {
        o[e] = t;
    }, t.parcelRequire17b7 = i), i.register("8s8WA", function(e, t) {
        e.exports = function(e) {
            function t(e) {
                let n, o, i, s = null;
                function a(...e) {
                    if (!a.enabled) return;
                    const r = a, o = Number(new Date), i = o - (n || o);
                    r.diff = i, r.prev = n, r.curr = o, n = o, e[0] = t.coerce(e[0]), "string" != typeof e[0] && e.unshift("%O");
                    let s = 0;
                    e[0] = e[0].replace(/%([a-zA-Z%])/g, (n, o)=>{
                        if ("%%" === n) return "%";
                        s++;
                        const i = t.formatters[o];
                        if ("function" == typeof i) {
                            const t1 = e[s];
                            n = i.call(r, t1), e.splice(s, 1), s--;
                        }
                        return n;
                    }), t.formatArgs.call(r, e);
                    (r.log || t.log).apply(r, e);
                }
                return a.namespace = e, a.useColors = t.useColors(), a.color = t.selectColor(e), a.extend = r, a.destroy = t.destroy, Object.defineProperty(a, "enabled", {
                    enumerable: !0,
                    configurable: !1,
                    get: ()=>null !== s ? s : (o !== t.namespaces && (o = t.namespaces, i = t.enabled(e)), i),
                    set: (e)=>{
                        s = e;
                    }
                }), "function" == typeof t.init && t.init(a), a;
            }
            function r(e, r) {
                const n = t(this.namespace + (void 0 === r ? ":" : r) + e);
                return n.log = this.log, n;
            }
            function n(e) {
                return e.toString().substring(2, e.toString().length - 2).replace(/\.\*\?$/, "*");
            }
            return t.debug = t, t.default = t, t.coerce = function(e) {
                return e instanceof Error ? e.stack || e.message : e;
            }, t.disable = function() {
                const e = [
                    ...t.names.map(n),
                    ...t.skips.map(n).map((e)=>"-" + e)
                ].join(",");
                return t.enable(""), e;
            }, t.enable = function(e) {
                let r;
                t.save(e), t.namespaces = e, t.names = [], t.skips = [];
                const n = ("string" == typeof e ? e : "").split(/[\s,]+/), o = n.length;
                for(r = 0; r < o; r++)n[r] && ("-" === (e = n[r].replace(/\*/g, ".*?"))[0] ? t.skips.push(new RegExp("^" + e.slice(1) + "$")) : t.names.push(new RegExp("^" + e + "$")));
            }, t.enabled = function(e) {
                if ("*" === e[e.length - 1]) return !0;
                let r, n;
                for(r = 0, n = t.skips.length; r < n; r++)if (t.skips[r].test(e)) return !1;
                for(r = 0, n = t.names.length; r < n; r++)if (t.names[r].test(e)) return !0;
                return !1;
            }, t.humanize = i("4N8Pa"), t.destroy = function() {
                console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
            }, Object.keys(e).forEach((r)=>{
                t[r] = e[r];
            }), t.names = [], t.skips = [], t.formatters = {}, t.selectColor = function(e) {
                let r = 0;
                for(let t1 = 0; t1 < e.length; t1++)r = (r << 5) - r + e.charCodeAt(t1), r |= 0;
                return t.colors[Math.abs(r) % t.colors.length];
            }, t.enable(t.load()), t;
        };
    }), i.register("4N8Pa", function(e, t) {
        var r = 1e3, n = 6e4, o = 36e5, i = 864e5, s = 6048e5, a = 315576e5;
        function u(e, t, r, n) {
            var o = t >= 1.5 * r;
            return Math.round(e / r) + " " + n + (o ? "s" : "");
        }
        e.exports = function(e, t) {
            t = t || {};
            var c, f, l = typeof e;
            if ("string" === l && e.length > 0) return function(e) {
                if ((e = String(e)).length > 100) return;
                var t = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(e);
                if (!t) return;
                var u = parseFloat(t[1]);
                switch((t[2] || "ms").toLowerCase()){
                    case "years":
                    case "year":
                    case "yrs":
                    case "yr":
                    case "y":
                        return u * a;
                    case "weeks":
                    case "week":
                    case "w":
                        return u * s;
                    case "days":
                    case "day":
                    case "d":
                        return u * i;
                    case "hours":
                    case "hour":
                    case "hrs":
                    case "hr":
                    case "h":
                        return u * o;
                    case "minutes":
                    case "minute":
                    case "mins":
                    case "min":
                    case "m":
                        return u * n;
                    case "seconds":
                    case "second":
                    case "secs":
                    case "sec":
                    case "s":
                        return u * r;
                    case "milliseconds":
                    case "millisecond":
                    case "msecs":
                    case "msec":
                    case "ms":
                        return u;
                    default:
                        return;
                }
            }(e);
            if ("number" === l && isFinite(e)) return t.long ? (c = e, (f = Math.abs(c)) >= i ? u(c, f, i, "day") : f >= o ? u(c, f, o, "hour") : f >= n ? u(c, f, n, "minute") : f >= r ? u(c, f, r, "second") : c + " ms") : function(e) {
                var t = Math.abs(e);
                return t >= i ? Math.round(e / i) + "d" : t >= o ? Math.round(e / o) + "h" : t >= n ? Math.round(e / n) + "m" : t >= r ? Math.round(e / r) + "s" : e + "ms";
            }(e);
            throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e));
        };
    }), i.register("16s93", function(e, t) {
        var r, n = "undefined" != typeof self ? self : this, o = function() {
            function e() {
                this.fetch = !1, this.DOMException = n.DOMException;
            }
            return e.prototype = n, new e;
        }();
        r = o, function(e) {
            var t = "URLSearchParams" in r, n = "Symbol" in r && "iterator" in Symbol, o = "FileReader" in r && "Blob" in r && function() {
                try {
                    return new Blob, !0;
                } catch (e) {
                    return !1;
                }
            }(), i = "FormData" in r, s = "ArrayBuffer" in r;
            if (s) var a = [
                "[object Int8Array]",
                "[object Uint8Array]",
                "[object Uint8ClampedArray]",
                "[object Int16Array]",
                "[object Uint16Array]",
                "[object Int32Array]",
                "[object Uint32Array]",
                "[object Float32Array]",
                "[object Float64Array]"
            ], u = ArrayBuffer.isView || function(e) {
                return e && a.indexOf(Object.prototype.toString.call(e)) > -1;
            };
            function c(e) {
                if ("string" != typeof e && (e = String(e)), /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(e)) throw new TypeError("Invalid character in header field name");
                return e.toLowerCase();
            }
            function f(e) {
                return "string" != typeof e && (e = String(e)), e;
            }
            function l(e) {
                var t = {
                    next: function() {
                        var t = e.shift();
                        return {
                            done: void 0 === t,
                            value: t
                        };
                    }
                };
                return n && (t[Symbol.iterator] = function() {
                    return t;
                }), t;
            }
            function h(e) {
                this.map = {}, e instanceof h ? e.forEach(function(e, t) {
                    this.append(t, e);
                }, this) : Array.isArray(e) ? e.forEach(function(e) {
                    this.append(e[0], e[1]);
                }, this) : e && Object.getOwnPropertyNames(e).forEach(function(t) {
                    this.append(t, e[t]);
                }, this);
            }
            function p(e) {
                if (e.bodyUsed) return Promise.reject(new TypeError("Already read"));
                e.bodyUsed = !0;
            }
            function d(e) {
                return new Promise(function(t, r) {
                    e.onload = function() {
                        t(e.result);
                    }, e.onerror = function() {
                        r(e.error);
                    };
                });
            }
            function y(e) {
                var t = new FileReader, r = d(t);
                return t.readAsArrayBuffer(e), r;
            }
            function g(e) {
                if (e.slice) return e.slice(0);
                var t = new Uint8Array(e.byteLength);
                return t.set(new Uint8Array(e)), t.buffer;
            }
            function b() {
                return this.bodyUsed = !1, this._initBody = function(e) {
                    var r;
                    this._bodyInit = e, e ? "string" == typeof e ? this._bodyText = e : o && Blob.prototype.isPrototypeOf(e) ? this._bodyBlob = e : i && FormData.prototype.isPrototypeOf(e) ? this._bodyFormData = e : t && URLSearchParams.prototype.isPrototypeOf(e) ? this._bodyText = e.toString() : s && o && (r = e) && DataView.prototype.isPrototypeOf(r) ? (this._bodyArrayBuffer = g(e.buffer), this._bodyInit = new Blob([
                        this._bodyArrayBuffer
                    ])) : s && (ArrayBuffer.prototype.isPrototypeOf(e) || u(e)) ? this._bodyArrayBuffer = g(e) : this._bodyText = e = Object.prototype.toString.call(e) : this._bodyText = "", this.headers.get("content-type") || ("string" == typeof e ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : t && URLSearchParams.prototype.isPrototypeOf(e) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"));
                }, o && (this.blob = function() {
                    var e = p(this);
                    if (e) return e;
                    if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                    if (this._bodyArrayBuffer) return Promise.resolve(new Blob([
                        this._bodyArrayBuffer
                    ]));
                    if (this._bodyFormData) throw new Error("could not read FormData body as blob");
                    return Promise.resolve(new Blob([
                        this._bodyText
                    ]));
                }, this.arrayBuffer = function() {
                    return this._bodyArrayBuffer ? p(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(y);
                }), this.text = function() {
                    var e, t, r, n = p(this);
                    if (n) return n;
                    if (this._bodyBlob) return e = this._bodyBlob, t = new FileReader, r = d(t), t.readAsText(e), r;
                    if (this._bodyArrayBuffer) return Promise.resolve(function(e) {
                        for(var t = new Uint8Array(e), r = new Array(t.length), n = 0; n < t.length; n++)r[n] = String.fromCharCode(t[n]);
                        return r.join("");
                    }(this._bodyArrayBuffer));
                    if (this._bodyFormData) throw new Error("could not read FormData body as text");
                    return Promise.resolve(this._bodyText);
                }, i && (this.formData = function() {
                    return this.text().then(v);
                }), this.json = function() {
                    return this.text().then(JSON.parse);
                }, this;
            }
            h.prototype.append = function(e, t) {
                e = c(e), t = f(t);
                var r = this.map[e];
                this.map[e] = r ? r + ", " + t : t;
            }, h.prototype.delete = function(e) {
                delete this.map[c(e)];
            }, h.prototype.get = function(e) {
                return e = c(e), this.has(e) ? this.map[e] : null;
            }, h.prototype.has = function(e) {
                return this.map.hasOwnProperty(c(e));
            }, h.prototype.set = function(e, t) {
                this.map[c(e)] = f(t);
            }, h.prototype.forEach = function(e, t) {
                for(var r in this.map)this.map.hasOwnProperty(r) && e.call(t, this.map[r], r, this);
            }, h.prototype.keys = function() {
                var e = [];
                return this.forEach(function(t, r) {
                    e.push(r);
                }), l(e);
            }, h.prototype.values = function() {
                var e = [];
                return this.forEach(function(t) {
                    e.push(t);
                }), l(e);
            }, h.prototype.entries = function() {
                var e = [];
                return this.forEach(function(t, r) {
                    e.push([
                        r,
                        t
                    ]);
                }), l(e);
            }, n && (h.prototype[Symbol.iterator] = h.prototype.entries);
            var m = [
                "DELETE",
                "GET",
                "HEAD",
                "OPTIONS",
                "POST",
                "PUT"
            ];
            function w(e, t) {
                var r, n, o = (t = t || {}).body;
                if (e instanceof w) {
                    if (e.bodyUsed) throw new TypeError("Already read");
                    this.url = e.url, this.credentials = e.credentials, t.headers || (this.headers = new h(e.headers)), this.method = e.method, this.mode = e.mode, this.signal = e.signal, o || null == e._bodyInit || (o = e._bodyInit, e.bodyUsed = !0);
                } else this.url = String(e);
                if (this.credentials = t.credentials || this.credentials || "same-origin", !t.headers && this.headers || (this.headers = new h(t.headers)), this.method = (r = t.method || this.method || "GET", n = r.toUpperCase(), m.indexOf(n) > -1 ? n : r), this.mode = t.mode || this.mode || null, this.signal = t.signal || this.signal, this.referrer = null, ("GET" === this.method || "HEAD" === this.method) && o) throw new TypeError("Body not allowed for GET or HEAD requests");
                this._initBody(o);
            }
            function v(e) {
                var t = new FormData;
                return e.trim().split("&").forEach(function(e) {
                    if (e) {
                        var r = e.split("="), n = r.shift().replace(/\+/g, " "), o = r.join("=").replace(/\+/g, " ");
                        t.append(decodeURIComponent(n), decodeURIComponent(o));
                    }
                }), t;
            }
            function A(e, t) {
                t || (t = {}), this.type = "default", this.status = void 0 === t.status ? 200 : t.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in t ? t.statusText : "OK", this.headers = new h(t.headers), this.url = t.url || "", this._initBody(e);
            }
            w.prototype.clone = function() {
                return new w(this, {
                    body: this._bodyInit
                });
            }, b.call(w.prototype), b.call(A.prototype), A.prototype.clone = function() {
                return new A(this._bodyInit, {
                    status: this.status,
                    statusText: this.statusText,
                    headers: new h(this.headers),
                    url: this.url
                });
            }, A.error = function() {
                var e = new A(null, {
                    status: 0,
                    statusText: ""
                });
                return e.type = "error", e;
            };
            var E = [
                301,
                302,
                303,
                307,
                308
            ];
            A.redirect = function(e, t) {
                if (-1 === E.indexOf(t)) throw new RangeError("Invalid status code");
                return new A(null, {
                    status: t,
                    headers: {
                        location: e
                    }
                });
            }, e.DOMException = r.DOMException;
            try {
                new e.DOMException;
            } catch (t1) {
                e.DOMException = function(e, t) {
                    this.message = e, this.name = t;
                    var r = Error(e);
                    this.stack = r.stack;
                }, e.DOMException.prototype = Object.create(Error.prototype), e.DOMException.prototype.constructor = e.DOMException;
            }
            function C(t, r) {
                return new Promise(function(n, i) {
                    var s = new w(t, r);
                    if (s.signal && s.signal.aborted) return i(new e.DOMException("Aborted", "AbortError"));
                    var a = new XMLHttpRequest;
                    function u() {
                        a.abort();
                    }
                    a.onload = function() {
                        var e, t, r = {
                            status: a.status,
                            statusText: a.statusText,
                            headers: (e = a.getAllResponseHeaders() || "", t = new h, e.replace(/\r?\n[\t ]+/g, " ").split(/\r?\n/).forEach(function(e) {
                                var r = e.split(":"), n = r.shift().trim();
                                if (n) {
                                    var o = r.join(":").trim();
                                    t.append(n, o);
                                }
                            }), t)
                        };
                        r.url = "responseURL" in a ? a.responseURL : r.headers.get("X-Request-URL");
                        var o = "response" in a ? a.response : a.responseText;
                        n(new A(o, r));
                    }, a.onerror = function() {
                        i(new TypeError("Network request failed"));
                    }, a.ontimeout = function() {
                        i(new TypeError("Network request failed"));
                    }, a.onabort = function() {
                        i(new e.DOMException("Aborted", "AbortError"));
                    }, a.open(s.method, s.url, !0), "include" === s.credentials ? a.withCredentials = !0 : "omit" === s.credentials && (a.withCredentials = !1), "responseType" in a && o && (a.responseType = "blob"), s.headers.forEach(function(e, t) {
                        a.setRequestHeader(t, e);
                    }), s.signal && (s.signal.addEventListener("abort", u), a.onreadystatechange = function() {
                        4 === a.readyState && s.signal.removeEventListener("abort", u);
                    }), a.send(void 0 === s._bodyInit ? null : s._bodyInit);
                });
            }
            C.polyfill = !0, r.fetch || (r.fetch = C, r.Headers = h, r.Request = w, r.Response = A), e.Headers = h, e.Request = w, e.Response = A, e.fetch = C, Object.defineProperty(e, "__esModule", {
                value: !0
            });
        }({}), o.fetch.ponyfill = !0, delete o.fetch.polyfill;
        var i = o;
        (t = i.fetch).default = i.fetch, t.fetch = i.fetch, t.Headers = i.Headers, t.Request = i.Request, t.Response = i.Response, e.exports = t;
    }), i.register("e8CjI", function(t, r) {
        e(t.exports, "default", ()=>n), i("8Tbzp");
        var n = window.crypto;
    }), i.register("8Tbzp", function(t, r) {
        var n;
        n = t.exports, Object.defineProperty(n, "__esModule", {
            value: !0,
            configurable: !0
        }), e(t.exports, "default", ()=>o, (e)=>o = e), /**
 * @file Web Cryptography API shim
 * @author Artem S Vybornov <vybornov@gmail.com>
 * @license MIT
 */ function(e, r) {
            "function" == typeof define && define.amd ? define([], function() {
                return r(e);
            }) : t.exports ? t.exports = r(e) : r(e);
        }("undefined" != typeof self ? self : void 0, function(e) {
            "use strict";
            if ("function" != typeof Promise) throw "Promise support required";
            var t = e.crypto || e.msCrypto;
            if (t) {
                var r = t.subtle || t.webkitSubtle;
                if (r) {
                    var n = e.Crypto || t.constructor || Object, o = e.SubtleCrypto || r.constructor || Object, i = (e.CryptoKey || e.Key, e.navigator.userAgent.indexOf("Edge/") > -1), s = !!e.msCrypto && !i, a = !t.subtle && !!t.webkitSubtle;
                    if (s || a) {
                        var u = {
                            KoZIhvcNAQEB: "1.2.840.113549.1.1.1"
                        }, c = {
                            "1.2.840.113549.1.1.1": "KoZIhvcNAQEB"
                        };
                        if ([
                            "generateKey",
                            "importKey",
                            "unwrapKey"
                        ].forEach(function(e) {
                            var n = r[e];
                            r[e] = function(o, i, u) {
                                var c, f, l, d, v = [].slice.call(arguments);
                                switch(e){
                                    case "generateKey":
                                        c = y(o), f = i, l = u;
                                        break;
                                    case "importKey":
                                        c = y(u), f = v[3], l = v[4], "jwk" === o && ((i = b(i)).alg || (i.alg = g(c)), i.key_ops || (i.key_ops = "oct" !== i.kty ? "d" in i ? l.filter(O) : l.filter(S) : l.slice()), v[1] = m(i));
                                        break;
                                    case "unwrapKey":
                                        c = v[4], f = v[5], l = v[6], v[2] = u._key;
                                }
                                if ("generateKey" === e && "HMAC" === c.name && c.hash) return c.length = c.length || ({
                                    "SHA-1": 512,
                                    "SHA-256": 512,
                                    "SHA-384": 1024,
                                    "SHA-512": 1024
                                })[c.hash.name], r.importKey("raw", t.getRandomValues(new Uint8Array(c.length + 7 >> 3)), c, f, l);
                                if (a && "generateKey" === e && "RSASSA-PKCS1-v1_5" === c.name && (!c.modulusLength || c.modulusLength >= 2048)) return (o = y(o)).name = "RSAES-PKCS1-v1_5", delete o.hash, r.generateKey(o, !0, [
                                    "encrypt",
                                    "decrypt"
                                ]).then(function(e) {
                                    return Promise.all([
                                        r.exportKey("jwk", e.publicKey),
                                        r.exportKey("jwk", e.privateKey)
                                    ]);
                                }).then(function(e) {
                                    return e[0].alg = e[1].alg = g(c), e[0].key_ops = l.filter(S), e[1].key_ops = l.filter(O), Promise.all([
                                        r.importKey("jwk", e[0], c, !0, e[0].key_ops),
                                        r.importKey("jwk", e[1], c, f, e[1].key_ops)
                                    ]);
                                }).then(function(e) {
                                    return {
                                        publicKey: e[0],
                                        privateKey: e[1]
                                    };
                                });
                                if ((a || s && "SHA-1" === (c.hash || {}).name) && "importKey" === e && "jwk" === o && "HMAC" === c.name && "oct" === i.kty) return r.importKey("raw", p(h(i.k)), u, v[3], v[4]);
                                if (a && "importKey" === e && ("spki" === o || "pkcs8" === o)) return r.importKey("jwk", w(i), u, v[3], v[4]);
                                if (s && "unwrapKey" === e) return r.decrypt(v[3], u, i).then(function(e) {
                                    return r.importKey(o, e, v[4], v[5], v[6]);
                                });
                                try {
                                    d = n.apply(r, v);
                                } catch (e1) {
                                    return Promise.reject(e1);
                                }
                                return s && (d = new Promise(function(e, t) {
                                    d.onabort = d.onerror = function(e) {
                                        t(e);
                                    }, d.oncomplete = function(t) {
                                        e(t.target.result);
                                    };
                                })), d = d.then(function(e) {
                                    return "HMAC" === c.name && (c.length || (c.length = 8 * e.algorithm.length)), 0 == c.name.search("RSA") && (c.modulusLength || (c.modulusLength = (e.publicKey || e).algorithm.modulusLength), c.publicExponent || (c.publicExponent = (e.publicKey || e).algorithm.publicExponent)), e = e.publicKey && e.privateKey ? {
                                        publicKey: new C(e.publicKey, c, f, l.filter(S)),
                                        privateKey: new C(e.privateKey, c, f, l.filter(O))
                                    } : new C(e, c, f, l);
                                });
                            };
                        }), [
                            "exportKey",
                            "wrapKey"
                        ].forEach(function(e) {
                            var t = r[e];
                            r[e] = function(n, o, i) {
                                var u, c = [].slice.call(arguments);
                                switch(e){
                                    case "exportKey":
                                        c[1] = o._key;
                                        break;
                                    case "wrapKey":
                                        c[1] = o._key, c[2] = i._key;
                                }
                                if ((a || s && "SHA-1" === (o.algorithm.hash || {}).name) && "exportKey" === e && "jwk" === n && "HMAC" === o.algorithm.name && (c[0] = "raw"), !a || "exportKey" !== e || "spki" !== n && "pkcs8" !== n || (c[0] = "jwk"), s && "wrapKey" === e) return r.exportKey(n, o).then(function(e) {
                                    return "jwk" === n && (e = p(unescape(encodeURIComponent(JSON.stringify(b(e)))))), r.encrypt(c[3], i, e);
                                });
                                try {
                                    u = t.apply(r, c);
                                } catch (e1) {
                                    return Promise.reject(e1);
                                }
                                return s && (u = new Promise(function(e, t) {
                                    u.onabort = u.onerror = function(e) {
                                        t(e);
                                    }, u.oncomplete = function(t) {
                                        e(t.target.result);
                                    };
                                })), "exportKey" === e && "jwk" === n && (u = u.then(function(e) {
                                    return (a || s && "SHA-1" === (o.algorithm.hash || {}).name) && "HMAC" === o.algorithm.name ? {
                                        kty: "oct",
                                        alg: g(o.algorithm),
                                        key_ops: o.usages.slice(),
                                        ext: !0,
                                        k: l(d(e))
                                    } : ((e = b(e)).alg || (e.alg = g(o.algorithm)), e.key_ops || (e.key_ops = "public" === o.type ? o.usages.filter(S) : "private" === o.type ? o.usages.filter(O) : o.usages.slice()), e);
                                })), !a || "exportKey" !== e || "spki" !== n && "pkcs8" !== n || (u = u.then(function(e) {
                                    return e = v(b(e));
                                })), u;
                            };
                        }), [
                            "encrypt",
                            "decrypt",
                            "sign",
                            "verify"
                        ].forEach(function(e) {
                            var t = r[e];
                            r[e] = function(n, o, i, a) {
                                if (s && (!i.byteLength || a && !a.byteLength)) throw new Error("Empy input is not allowed");
                                var u, c = [].slice.call(arguments), f = y(n);
                                if (s && "decrypt" === e && "AES-GCM" === f.name) {
                                    var l = n.tagLength >> 3;
                                    c[2] = (i.buffer || i).slice(0, i.byteLength - l), n.tag = (i.buffer || i).slice(i.byteLength - l);
                                }
                                c[1] = o._key;
                                try {
                                    u = t.apply(r, c);
                                } catch (e1) {
                                    return Promise.reject(e1);
                                }
                                return s && (u = new Promise(function(t, r) {
                                    u.onabort = u.onerror = function(e) {
                                        r(e);
                                    }, u.oncomplete = function(r) {
                                        r = r.target.result;
                                        if ("encrypt" === e && r instanceof AesGcmEncryptResult) {
                                            var n = r.ciphertext, o = r.tag;
                                            (r = new Uint8Array(n.byteLength + o.byteLength)).set(new Uint8Array(n), 0), r.set(new Uint8Array(o), n.byteLength), r = r.buffer;
                                        }
                                        t(r);
                                    };
                                })), u;
                            };
                        }), s) {
                            var f = r.digest;
                            r.digest = function(e, t) {
                                if (!t.byteLength) throw new Error("Empy input is not allowed");
                                var n;
                                try {
                                    n = f.call(r, e, t);
                                } catch (e1) {
                                    return Promise.reject(e1);
                                }
                                return n = new Promise(function(e, t) {
                                    n.onabort = n.onerror = function(e) {
                                        t(e);
                                    }, n.oncomplete = function(t) {
                                        e(t.target.result);
                                    };
                                });
                            }, e.crypto = Object.create(t, {
                                getRandomValues: {
                                    value: function(e) {
                                        return t.getRandomValues(e);
                                    }
                                },
                                subtle: {
                                    value: r
                                }
                            }), e.CryptoKey = C;
                        }
                        a && (t.subtle = r, e.Crypto = n, e.SubtleCrypto = o, e.CryptoKey = C);
                    }
                }
            }
            function l(e) {
                return btoa(e).replace(/\=+$/, "").replace(/\+/g, "-").replace(/\//g, "_");
            }
            function h(e) {
                return e = (e += "===").slice(0, -e.length % 4), atob(e.replace(/-/g, "+").replace(/_/g, "/"));
            }
            function p(e) {
                for(var t = new Uint8Array(e.length), r = 0; r < e.length; r++)t[r] = e.charCodeAt(r);
                return t;
            }
            function d(e) {
                return e instanceof ArrayBuffer && (e = new Uint8Array(e)), String.fromCharCode.apply(String, e);
            }
            function y(e) {
                var t = {
                    name: (e.name || e || "").toUpperCase().replace("V", "v")
                };
                switch(t.name){
                    case "SHA-1":
                    case "SHA-256":
                    case "SHA-384":
                    case "SHA-512":
                        break;
                    case "AES-CBC":
                    case "AES-GCM":
                    case "AES-KW":
                        e.length && (t.length = e.length);
                        break;
                    case "HMAC":
                        e.hash && (t.hash = y(e.hash)), e.length && (t.length = e.length);
                        break;
                    case "RSAES-PKCS1-v1_5":
                        e.publicExponent && (t.publicExponent = new Uint8Array(e.publicExponent)), e.modulusLength && (t.modulusLength = e.modulusLength);
                        break;
                    case "RSASSA-PKCS1-v1_5":
                    case "RSA-OAEP":
                        e.hash && (t.hash = y(e.hash)), e.publicExponent && (t.publicExponent = new Uint8Array(e.publicExponent)), e.modulusLength && (t.modulusLength = e.modulusLength);
                        break;
                    default:
                        throw new SyntaxError("Bad algorithm name");
                }
                return t;
            }
            function g(e) {
                return ({
                    HMAC: {
                        "SHA-1": "HS1",
                        "SHA-256": "HS256",
                        "SHA-384": "HS384",
                        "SHA-512": "HS512"
                    },
                    "RSASSA-PKCS1-v1_5": {
                        "SHA-1": "RS1",
                        "SHA-256": "RS256",
                        "SHA-384": "RS384",
                        "SHA-512": "RS512"
                    },
                    "RSAES-PKCS1-v1_5": {
                        "": "RSA1_5"
                    },
                    "RSA-OAEP": {
                        "SHA-1": "RSA-OAEP",
                        "SHA-256": "RSA-OAEP-256"
                    },
                    "AES-KW": {
                        128: "A128KW",
                        192: "A192KW",
                        256: "A256KW"
                    },
                    "AES-GCM": {
                        128: "A128GCM",
                        192: "A192GCM",
                        256: "A256GCM"
                    },
                    "AES-CBC": {
                        128: "A128CBC",
                        192: "A192CBC",
                        256: "A256CBC"
                    }
                })[e.name][(e.hash || {}).name || e.length || ""];
            }
            function b(e) {
                (e instanceof ArrayBuffer || e instanceof Uint8Array) && (e = JSON.parse(decodeURIComponent(escape(d(e)))));
                var t = {
                    kty: e.kty,
                    alg: e.alg,
                    ext: e.ext || e.extractable
                };
                switch(t.kty){
                    case "oct":
                        t.k = e.k;
                    case "RSA":
                        [
                            "n",
                            "e",
                            "d",
                            "p",
                            "q",
                            "dp",
                            "dq",
                            "qi",
                            "oth"
                        ].forEach(function(r) {
                            r in e && (t[r] = e[r]);
                        });
                        break;
                    default:
                        throw new TypeError("Unsupported key type");
                }
                return t;
            }
            function m(e) {
                var t = b(e);
                return s && (t.extractable = t.ext, delete t.ext), p(unescape(encodeURIComponent(JSON.stringify(t)))).buffer;
            }
            function w(e) {
                var t = A(e), r = !1;
                t.length > 2 && (r = !0, t.shift());
                var n = {
                    ext: !0
                };
                if ("1.2.840.113549.1.1.1" !== t[0][0]) throw new TypeError("Unsupported key type");
                var o = [
                    "n",
                    "e",
                    "d",
                    "p",
                    "q",
                    "dp",
                    "dq",
                    "qi"
                ], i = A(t[1]);
                r && i.shift();
                for(var s = 0; s < i.length; s++)i[s][0] || (i[s] = i[s].subarray(1)), n[o[s]] = l(d(i[s]));
                return n.kty = "RSA", n;
            }
            function v(e) {
                var t, r = [
                    [
                        "",
                        null
                    ]
                ], n = !1;
                if ("RSA" !== e.kty) throw new TypeError("Unsupported key type");
                for(var o = [
                    "n",
                    "e",
                    "d",
                    "p",
                    "q",
                    "dp",
                    "dq",
                    "qi"
                ], i = [], s = 0; s < o.length && (o[s] in e); s++){
                    var a = i[s] = p(h(e[o[s]]));
                    128 & a[0] && (i[s] = new Uint8Array(a.length + 1), i[s].set(a, 1));
                }
                return i.length > 2 && (n = !0, i.unshift(new Uint8Array([
                    0
                ]))), r[0][0] = "1.2.840.113549.1.1.1", t = i, r.push(new Uint8Array(E(t)).buffer), n ? r.unshift(new Uint8Array([
                    0
                ])) : r[1] = {
                    tag: 3,
                    value: r[1]
                }, new Uint8Array(E(r)).buffer;
            }
            function A(e, t) {
                if (e instanceof ArrayBuffer && (e = new Uint8Array(e)), t || (t = {
                    pos: 0,
                    end: e.length
                }), t.end - t.pos < 2 || t.end > e.length) throw new RangeError("Malformed DER");
                var r, n = e[t.pos++], o = e[t.pos++];
                if (o >= 128) {
                    if (o &= 127, t.end - t.pos < o) throw new RangeError("Malformed DER");
                    for(var i = 0; o--;)i <<= 8, i |= e[t.pos++];
                    o = i;
                }
                if (t.end - t.pos < o) throw new RangeError("Malformed DER");
                switch(n){
                    case 2:
                        r = e.subarray(t.pos, t.pos += o);
                        break;
                    case 3:
                        if (e[t.pos++]) throw new Error("Unsupported bit string");
                        o--;
                    case 4:
                        r = new Uint8Array(e.subarray(t.pos, t.pos += o)).buffer;
                        break;
                    case 5:
                        r = null;
                        break;
                    case 6:
                        var s = btoa(d(e.subarray(t.pos, t.pos += o)));
                        if (!(s in u)) throw new Error("Unsupported OBJECT ID " + s);
                        r = u[s];
                        break;
                    case 48:
                        r = [];
                        for(var a = t.pos + o; t.pos < a;)r.push(A(e, t));
                        break;
                    default:
                        throw new Error("Unsupported DER tag 0x" + n.toString(16));
                }
                return r;
            }
            function E(e, t) {
                t || (t = []);
                var r = 0, n = 0, o = t.length + 2;
                if (t.push(0, 0), e instanceof Uint8Array) {
                    r = 2, n = e.length;
                    for(var i = 0; i < n; i++)t.push(e[i]);
                } else if (e instanceof ArrayBuffer) {
                    r = 4, n = e.byteLength, e = new Uint8Array(e);
                    for(i = 0; i < n; i++)t.push(e[i]);
                } else if (null === e) r = 5, n = 0;
                else if ("string" == typeof e && e in c) {
                    var s = p(atob(c[e]));
                    r = 6, n = s.length;
                    for(i = 0; i < n; i++)t.push(s[i]);
                } else if (e instanceof Array) {
                    for(i = 0; i < e.length; i++)E(e[i], t);
                    r = 48, n = t.length - o;
                } else {
                    if (!("object" == typeof e && 3 === e.tag && e.value instanceof ArrayBuffer)) throw new Error("Unsupported DER value " + e);
                    r = 3, n = (e = new Uint8Array(e.value)).byteLength, t.push(0);
                    for(i = 0; i < n; i++)t.push(e[i]);
                    n++;
                }
                if (n >= 128) {
                    var a = n;
                    n = 4;
                    for(t.splice(o, 0, a >> 24 & 255, a >> 16 & 255, a >> 8 & 255, 255 & a); n > 1 && !(a >> 24);)a <<= 8, n--;
                    n < 4 && t.splice(o, 4 - n), n |= 128;
                }
                return t.splice(o - 2, 2, r, n), t;
            }
            function C(e, t, r, n) {
                Object.defineProperties(this, {
                    _key: {
                        value: e
                    },
                    type: {
                        value: e.type,
                        enumerable: !0
                    },
                    extractable: {
                        value: void 0 === r ? e.extractable : r,
                        enumerable: !0
                    },
                    algorithm: {
                        value: void 0 === t ? e.algorithm : t,
                        enumerable: !0
                    },
                    usages: {
                        value: void 0 === n ? e.usages : n,
                        enumerable: !0
                    }
                });
            }
            function S(e) {
                return "verify" === e || "encrypt" === e || "wrapKey" === e;
            }
            function O(e) {
                return "sign" === e || "decrypt" === e || "unwrapKey" === e;
            }
        });
        var o = {};
    }), i.register("jk3TS", function(e, r) {
        var n;
        n = function() {
            "use strict";
            function e(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }
            function r(e, t) {
                for(var r = 0; r < t.length; r++){
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
                }
            }
            function n(e, t, n) {
                return t && r(e.prototype, t), n && r(e, n), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), e;
            }
            function o(e) {
                return o = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e);
                }, o(e);
            }
            function i(e, t) {
                return i = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e;
                }, i(e, t);
            }
            function s(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e;
            }
            function a(e, t) {
                if (t && ("object" == typeof t || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return s(e);
            }
            function u(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
                    } catch (e) {
                        return !1;
                    }
                }();
                return function() {
                    var r, n = o(e);
                    if (t) {
                        var i = o(this).constructor;
                        r = Reflect.construct(n, arguments, i);
                    } else r = n.apply(this, arguments);
                    return a(this, r);
                };
            }
            function c(e, t) {
                for(; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = o(e)););
                return e;
            }
            function f() {
                return f = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function(e, t, r) {
                    var n = c(e, t);
                    if (n) {
                        var o = Object.getOwnPropertyDescriptor(n, t);
                        return o.get ? o.get.call(arguments.length < 3 ? e : r) : o.value;
                    }
                }, f.apply(this, arguments);
            }
            var l, h = function() {
                function t() {
                    e(this, t), Object.defineProperty(this, "listeners", {
                        value: {},
                        writable: !0,
                        configurable: !0
                    });
                }
                return n(t, [
                    {
                        key: "addEventListener",
                        value: function(e, t, r) {
                            e in this.listeners || (this.listeners[e] = []), this.listeners[e].push({
                                callback: t,
                                options: r
                            });
                        }
                    },
                    {
                        key: "removeEventListener",
                        value: function(e, t) {
                            if (e in this.listeners) {
                                for(var r = this.listeners[e], n = 0, o = r.length; n < o; n++)if (r[n].callback === t) return void r.splice(n, 1);
                            }
                        }
                    },
                    {
                        key: "dispatchEvent",
                        value: function(e) {
                            if (e.type in this.listeners) {
                                for(var t = this.listeners[e.type].slice(), r = 0, n = t.length; r < n; r++){
                                    var o = t[r];
                                    try {
                                        o.callback.call(this, e);
                                    } catch (e1) {
                                        Promise.resolve().then(function() {
                                            throw e1;
                                        });
                                    }
                                    o.options && o.options.once && this.removeEventListener(e.type, o.callback);
                                }
                                return !e.defaultPrevented;
                            }
                        }
                    }
                ]), t;
            }(), p = function(t) {
                !function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), Object.defineProperty(e, "prototype", {
                        writable: !1
                    }), t && i(e, t);
                }(a, t);
                var r = u(a);
                function a() {
                    var t;
                    return e(this, a), (t = r.call(this)).listeners || h.call(s(t)), Object.defineProperty(s(t), "aborted", {
                        value: !1,
                        writable: !0,
                        configurable: !0
                    }), Object.defineProperty(s(t), "onabort", {
                        value: null,
                        writable: !0,
                        configurable: !0
                    }), Object.defineProperty(s(t), "reason", {
                        value: void 0,
                        writable: !0,
                        configurable: !0
                    }), t;
                }
                return n(a, [
                    {
                        key: "toString",
                        value: function() {
                            return "[object AbortSignal]";
                        }
                    },
                    {
                        key: "dispatchEvent",
                        value: function(e) {
                            "abort" === e.type && (this.aborted = !0, "function" == typeof this.onabort && this.onabort.call(this, e)), f(o(a.prototype), "dispatchEvent", this).call(this, e);
                        }
                    }
                ]), a;
            }(h), d = function() {
                function t() {
                    e(this, t), Object.defineProperty(this, "signal", {
                        value: new p,
                        writable: !0,
                        configurable: !0
                    });
                }
                return n(t, [
                    {
                        key: "abort",
                        value: function(e) {
                            var t;
                            try {
                                t = new Event("abort");
                            } catch (e1) {
                                "undefined" != typeof document ? document.createEvent ? (t = document.createEvent("Event")).initEvent("abort", !1, !1) : (t = document.createEventObject()).type = "abort" : t = {
                                    type: "abort",
                                    bubbles: !1,
                                    cancelable: !1
                                };
                            }
                            var r = e;
                            if (void 0 === r) {
                                if ("undefined" == typeof document) (r = new Error("This operation was aborted")).name = "AbortError";
                                else try {
                                    r = new DOMException("signal is aborted without reason");
                                } catch (e2) {
                                    (r = new Error("This operation was aborted")).name = "AbortError";
                                }
                            }
                            this.signal.reason = r, this.signal.dispatchEvent(t);
                        }
                    },
                    {
                        key: "toString",
                        value: function() {
                            return "[object AbortController]";
                        }
                    }
                ]), t;
            }();
            "undefined" != typeof Symbol && Symbol.toStringTag && (d.prototype[Symbol.toStringTag] = "AbortController", p.prototype[Symbol.toStringTag] = "AbortSignal"), function(e) {
                return e.__FORCE_INSTALL_ABORTCONTROLLER_POLYFILL ? (console.log("__FORCE_INSTALL_ABORTCONTROLLER_POLYFILL=true is set, will force install polyfill"), !0) : "function" == typeof e.Request && !e.Request.prototype.hasOwnProperty("signal") || !e.AbortController;
            }(l = "undefined" != typeof self ? self : t) && (l.AbortController = d, l.AbortSignal = p);
        }, "function" == typeof define && define.amd ? define(n) : n();
    });
    var s = {};
    Object.defineProperty(s, "__esModule", {
        value: !0
    });
    var a = {};
    Object.defineProperty(a, "__esModule", {
        value: !0
    }), a.init = a.buildTokenRequest = a.ready = a.onMessage = a.isInPopUp = a.isInFrame = a.authorize = a.getSecurityExtensions = a.fetchWellKnownJson = a.KEY = void 0;
    var u = {};
    Object.defineProperty(u, "__esModule", {
        value: !0
    }), u.assertJsonPatch = u.assert = u.getTargetWindow = u.getPatientParam = u.byCodes = u.byCode = u.getAccessTokenExpiration = u.getTimeInFuture = u.jwtDecode = u.randomString = u.absolute = u.makeArray = u.setPath = u.getPath = u.fetchConformanceStatement = u.getAndCache = u.request = u.loweCaseKeys = u.responseToJSON = u.checkResponse = u.units = u.debug = void 0;
    var c = {};
    Object.defineProperty(c, "__esModule", {
        value: !0
    });
    class f extends Error {
        constructor(e){
            super(`${e.status} ${e.statusText}\nURL: ${e.url}`), this.name = "HttpError", this.response = e, this.statusCode = e.status, this.status = e.status, this.statusText = e.statusText;
        }
        async parse() {
            if (!this.response.bodyUsed) try {
                const e = this.response.headers.get("content-type") || "text/plain";
                if (e.match(/\bjson\b/i)) {
                    let e1 = await this.response.json();
                    e1.error ? (this.message += "\n" + e1.error, e1.error_description && (this.message += ": " + e1.error_description)) : this.message += "\n\n" + JSON.stringify(e1, null, 4);
                } else if (e.match(/^text\//i)) {
                    let e2 = await this.response.text();
                    e2 && (this.message += "\n\n" + e2);
                }
            } catch (e3) {}
            return this;
        }
        toJSON() {
            return {
                name: this.name,
                statusCode: this.statusCode,
                status: this.status,
                statusText: this.statusText,
                message: this.message
            };
        }
    }
    c.default = f;
    var l = {};
    Object.defineProperty(l, "__esModule", {
        value: !0
    }), l.SMART_KEY = l.patientParams = l.fhirVersions = l.patientCompartment = void 0, l.patientCompartment = [
        "Account",
        "AdverseEvent",
        "AllergyIntolerance",
        "Appointment",
        "AppointmentResponse",
        "AuditEvent",
        "Basic",
        "BodySite",
        "BodyStructure",
        "CarePlan",
        "CareTeam",
        "ChargeItem",
        "Claim",
        "ClaimResponse",
        "ClinicalImpression",
        "Communication",
        "CommunicationRequest",
        "Composition",
        "Condition",
        "Consent",
        "Coverage",
        "CoverageEligibilityRequest",
        "CoverageEligibilityResponse",
        "DetectedIssue",
        "DeviceRequest",
        "DeviceUseRequest",
        "DeviceUseStatement",
        "DiagnosticOrder",
        "DiagnosticReport",
        "DocumentManifest",
        "DocumentReference",
        "EligibilityRequest",
        "Encounter",
        "EnrollmentRequest",
        "EpisodeOfCare",
        "ExplanationOfBenefit",
        "FamilyMemberHistory",
        "Flag",
        "Goal",
        "Group",
        "ImagingManifest",
        "ImagingObjectSelection",
        "ImagingStudy",
        "Immunization",
        "ImmunizationEvaluation",
        "ImmunizationRecommendation",
        "Invoice",
        "List",
        "MeasureReport",
        "Media",
        "MedicationAdministration",
        "MedicationDispense",
        "MedicationOrder",
        "MedicationRequest",
        "MedicationStatement",
        "MolecularSequence",
        "NutritionOrder",
        "Observation",
        "Order",
        "Patient",
        "Person",
        "Procedure",
        "ProcedureRequest",
        "Provenance",
        "QuestionnaireResponse",
        "ReferralRequest",
        "RelatedPerson",
        "RequestGroup",
        "ResearchSubject",
        "RiskAssessment",
        "Schedule",
        "ServiceRequest",
        "Specimen",
        "SupplyDelivery",
        "SupplyRequest",
        "VisionPrescription"
    ], l.fhirVersions = {
        "0.4.0": 2,
        "0.5.0": 2,
        "1.0.0": 2,
        "1.0.1": 2,
        "1.0.2": 2,
        "1.1.0": 3,
        "1.4.0": 3,
        "1.6.0": 3,
        "1.8.0": 3,
        "3.0.0": 3,
        "3.0.1": 3,
        "3.3.0": 4,
        "3.5.0": 4,
        "4.0.0": 4,
        "4.0.1": 4
    }, l.patientParams = [
        "patient",
        "subject",
        "requester",
        "member",
        "actor",
        "beneficiary"
    ], l.SMART_KEY = "SMART_KEY";
    var h, p, d, y = {}, g = h = {};
    function b() {
        throw new Error("setTimeout has not been defined");
    }
    function m() {
        throw new Error("clearTimeout has not been defined");
    }
    function w(e) {
        if (p === setTimeout) return setTimeout(e, 0);
        if ((p === b || !p) && setTimeout) return p = setTimeout, setTimeout(e, 0);
        try {
            return p(e, 0);
        } catch (t1) {
            try {
                return p.call(null, e, 0);
            } catch (t) {
                return p.call(this, e, 0);
            }
        }
    }
    !function() {
        try {
            p = "function" == typeof setTimeout ? setTimeout : b;
        } catch (e) {
            p = b;
        }
        try {
            d = "function" == typeof clearTimeout ? clearTimeout : m;
        } catch (e1) {
            d = m;
        }
    }();
    var v, A = [], E = !1, C = -1;
    function S() {
        E && v && (E = !1, v.length ? A = v.concat(A) : C = -1, A.length && O());
    }
    function O() {
        if (!E) {
            var e = w(S);
            E = !0;
            for(var t = A.length; t;){
                for(v = A, A = []; ++C < t;)v && v[C].run();
                C = -1, t = A.length;
            }
            v = null, E = !1, function(e) {
                if (d === clearTimeout) return clearTimeout(e);
                if ((d === m || !d) && clearTimeout) return d = clearTimeout, clearTimeout(e);
                try {
                    d(e);
                } catch (t1) {
                    try {
                        return d.call(null, e);
                    } catch (t) {
                        return d.call(this, e);
                    }
                }
            }(e);
        }
    }
    function k(e, t) {
        this.fun = e, this.array = t;
    }
    function _() {}
    g.nextTick = function(e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1) for(var r = 1; r < arguments.length; r++)t[r - 1] = arguments[r];
        A.push(new k(e, t)), 1 !== A.length || E || w(O);
    }, k.prototype.run = function() {
        this.fun.apply(null, this.array);
    }, g.title = "browser", g.browser = !0, g.env = {}, g.argv = [], g.version = "", g.versions = {}, g.on = _, g.addListener = _, g.once = _, g.off = _, g.removeListener = _, g.removeAllListeners = _, g.emit = _, g.prependListener = _, g.prependOnceListener = _, g.listeners = function(e) {
        return [];
    }, g.binding = function(e) {
        throw new Error("process.binding is not supported");
    }, g.cwd = function() {
        return "/";
    }, g.chdir = function(e) {
        throw new Error("process.chdir is not supported");
    }, g.umask = function() {
        return 0;
    }, y.formatArgs = function(e) {
        if (e[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + e[0] + (this.useColors ? "%c " : " ") + "+" + y.humanize(this.diff), !this.useColors) return;
        const t = "color: " + this.color;
        e.splice(1, 0, t, "color: inherit");
        let r = 0, n = 0;
        e[0].replace(/%[a-zA-Z%]/g, (e)=>{
            "%%" !== e && (r++, "%c" === e && (n = r));
        }), e.splice(n, 0, t);
    }, y.save = function(e) {
        try {
            e ? y.storage.setItem("debug", e) : y.storage.removeItem("debug");
        } catch (e1) {}
    }, y.load = function() {
        let e;
        try {
            e = y.storage.getItem("debug");
        } catch (e1) {}
        !e && void 0 !== h && "env" in h && (e = void 0);
        return e;
    }, y.useColors = function() {
        return !("undefined" == typeof window || !window.process || "renderer" !== window.process.type && !window.process.__nwjs) || ("undefined" == typeof navigator || !navigator.userAgent || !navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) && ("undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
    }, y.storage = function() {
        try {
            return localStorage;
        } catch (e) {}
    }(), y.destroy = (()=>{
        let e = !1;
        return ()=>{
            e || (e = !0, console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."));
        };
    })(), y.colors = [
        "#0000CC",
        "#0000FF",
        "#0033CC",
        "#0033FF",
        "#0066CC",
        "#0066FF",
        "#0099CC",
        "#0099FF",
        "#00CC00",
        "#00CC33",
        "#00CC66",
        "#00CC99",
        "#00CCCC",
        "#00CCFF",
        "#3300CC",
        "#3300FF",
        "#3333CC",
        "#3333FF",
        "#3366CC",
        "#3366FF",
        "#3399CC",
        "#3399FF",
        "#33CC00",
        "#33CC33",
        "#33CC66",
        "#33CC99",
        "#33CCCC",
        "#33CCFF",
        "#6600CC",
        "#6600FF",
        "#6633CC",
        "#6633FF",
        "#66CC00",
        "#66CC33",
        "#9900CC",
        "#9900FF",
        "#9933CC",
        "#9933FF",
        "#99CC00",
        "#99CC33",
        "#CC0000",
        "#CC0033",
        "#CC0066",
        "#CC0099",
        "#CC00CC",
        "#CC00FF",
        "#CC3300",
        "#CC3333",
        "#CC3366",
        "#CC3399",
        "#CC33CC",
        "#CC33FF",
        "#CC6600",
        "#CC6633",
        "#CC9900",
        "#CC9933",
        "#CCCC00",
        "#CCCC33",
        "#FF0000",
        "#FF0033",
        "#FF0066",
        "#FF0099",
        "#FF00CC",
        "#FF00FF",
        "#FF3300",
        "#FF3333",
        "#FF3366",
        "#FF3399",
        "#FF33CC",
        "#FF33FF",
        "#FF6600",
        "#FF6633",
        "#FF9900",
        "#FF9933",
        "#FFCC00",
        "#FFCC33"
    ], y.log = console.debug || console.log || (()=>{}), y = i("8s8WA")(y);
    const { formatters: P  } = y;
    P.j = function(e) {
        try {
            return JSON.stringify(e);
        } catch (e1) {
            return "[UnexpectedJSONParseError]: " + e1.message;
        }
    };
    const { fetch: R  } = "undefined" != typeof FHIRCLIENT_PURE ? window : i("16s93"), T = y("FHIR");
    u.debug = T;
    const U = {};
    function j({ value: e , code: t  }) {
        if ("number" != typeof e) throw new Error("Found a non-numerical unit: " + e + " " + t);
    }
    async function x(e) {
        if (!e.ok) {
            const t = new c.default(e);
            throw await t.parse(), t;
        }
        return e;
    }
    function I(e) {
        return e.text().then((e)=>e.length ? JSON.parse(e) : "");
    }
    function F(e) {
        if (!e) return e;
        if (Array.isArray(e)) return e.map((e)=>e && "object" == typeof e ? F(e) : e);
        let t = {};
        return Object.keys(e).forEach((r)=>{
            const n = r.toLowerCase(), o = e[r];
            t[n] = o && "object" == typeof o ? F(o) : o;
        }), t;
    }
    function B(e, t = {}) {
        const { includeResponse: r  } = t, n = function(e, t) {
            var r = {};
            for(var n in e)Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                var o = 0;
                for(n = Object.getOwnPropertySymbols(e); o < n.length; o++)t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
            }
            return r;
        }(t, [
            "includeResponse"
        ]);
        return R(e, Object.assign(Object.assign({
            mode: "cors"
        }, n), {
            headers: Object.assign({
                accept: "application/json"
            }, F(n.headers))
        })).then(x).then((e)=>{
            const t = e.headers.get("content-type") + "";
            return t.match(/\bjson\b/i) ? I(e).then((t)=>({
                    res: e,
                    body: t
                })) : t.match(/^text\//i) ? e.text().then((t)=>({
                    res: e,
                    body: t
                })) : {
                res: e
            };
        }).then(({ res: e , body: t  })=>{
            if (!t && 201 == e.status) {
                const t1 = e.headers.get("location");
                if (t1) return B(t1, Object.assign(Object.assign({}, n), {
                    method: "GET",
                    body: null,
                    includeResponse: r
                }));
            }
            return r ? {
                body: t,
                response: e
            } : void 0 === t ? e : t;
        });
    }
    function M(e, t, r = !1) {
        return r || !U[e] ? (U[e] = B(e, t), U[e]) : Promise.resolve(U[e]);
    }
    function L(e, t = "") {
        if (!(t = t.trim())) return e;
        let r = t.split("."), n = e;
        for(; n && r.length;){
            const e1 = r.shift();
            if (!e1 && Array.isArray(n)) return n.map((e)=>L(e, r.join(".")));
            n = n[e1];
        }
        return n;
    }
    function K(e) {
        return Array.isArray(e) ? e : [
            e
        ];
    }
    function D(e, t) {
        const r = e.split(".")[1];
        return r ? JSON.parse(t.atob(r)) : null;
    }
    function q(e, t) {
        const r = {};
        function n(e, t) {
            e && Array.isArray(e.coding) && e.coding.forEach(({ code: e  })=>{
                e && (r[e] = r[e] || [], r[e].push(t));
            });
        }
        return K(e).forEach((e)=>{
            "Observation" === e.resourceType && e[t] && (Array.isArray(e[t]) ? e[t].forEach((t)=>n(t, e)) : n(e[t], e));
        }), r;
    }
    function N(e, t) {
        if (!e) throw new Error(t);
    }
    u.units = {
        cm ({ code: e , value: t  }) {
            if (j({
                code: e,
                value: t
            }), "cm" == e) return t;
            if ("m" == e) return 100 * t;
            if ("in" == e) return 2.54 * t;
            if ("[in_us]" == e) return 2.54 * t;
            if ("[in_i]" == e) return 2.54 * t;
            if ("ft" == e) return 30.48 * t;
            if ("[ft_us]" == e) return 30.48 * t;
            throw new Error("Unrecognized length unit: " + e);
        },
        kg ({ code: e , value: t  }) {
            if (j({
                code: e,
                value: t
            }), "kg" == e) return t;
            if ("g" == e) return t / 1e3;
            if (e.match(/lb/)) return t / 2.20462;
            if (e.match(/oz/)) return t / 35.274;
            throw new Error("Unrecognized weight unit: " + e);
        },
        any: (e)=>(j(e), e.value)
    }, u.checkResponse = x, u.responseToJSON = I, u.loweCaseKeys = F, u.request = B, u.getAndCache = M, u.fetchConformanceStatement = function(e = "/", t) {
        const r = String(e).replace(/\/*$/, "/") + "metadata";
        return M(r, t).catch((e)=>{
            throw new Error(`Failed to fetch the conformance statement from "${r}". ${e}`);
        });
    }, u.getPath = L, u.setPath = function(e, t, r, n = !1) {
        return t.trim().split(".").reduce((e, t, o, i)=>{
            if (!e || o !== i.length - 1) return e && void 0 === e[t] && n && (e[t] = i[o + 1].match(/^[0-9]+$/) ? [] : {}), e ? e[t] : void 0;
            e[t] = r;
        }, e), e;
    }, u.makeArray = K, u.absolute = function(e, t) {
        return e.match(/^http/) || e.match(/^urn/) ? e : String(t || "").replace(/\/+$/, "") + "/" + e.replace(/^\/+/, "");
    }, u.randomString = function(e = 8, t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789") {
        const r = [], n = t.length;
        for(; e--;)r.push(t.charAt(Math.floor(Math.random() * n)));
        return r.join("");
    }, u.jwtDecode = D, u.getTimeInFuture = function(e = 120, t) {
        return Math.floor(+(t || new Date) / 1e3 + e);
    }, u.getAccessTokenExpiration = function(e, t) {
        const r = Math.floor(Date.now() / 1e3);
        if (e.expires_in) return r + e.expires_in;
        if (e.access_token) {
            let r1 = D(e.access_token, t);
            if (r1 && r1.exp) return r1.exp;
        }
        return r + 300;
    }, u.byCode = q, u.byCodes = function(e, t) {
        const r = q(e, t);
        return (...e)=>e.filter((e)=>e + "" in r).reduce((e, t)=>e.concat(r[t + ""]), []);
    }, u.getPatientParam = function(e, t) {
        const r = (L(e, "rest.0.resource") || []).find((e)=>e.type === t);
        if (!r) throw new Error(`Resource "${t}" is not supported by this FHIR server`);
        if (!Array.isArray(r.searchParam)) throw new Error(`No search parameters supported for "${t}" on this FHIR server`);
        if ("Patient" == t && r.searchParam.find((e)=>"_id" == e.name)) return "_id";
        const n = l.patientParams.find((e)=>r.searchParam.find((t)=>t.name == e));
        if (!n) throw new Error("I don't know what param to use for " + t);
        return n;
    }, u.getTargetWindow = async function(e, t = 800, r = 720) {
        if ("function" == typeof e && (e = await e()), e && "object" == typeof e) return e;
        if ("string" != typeof e) return T("Invalid target type '%s'. Failing back to '_self'.", typeof e), self;
        if ("_self" == e) return self;
        if ("_parent" == e) return parent;
        if ("_top" == e) return top || self;
        if ("_blank" == e) {
            let e1, t1 = null;
            try {
                if (t1 = window.open("", "SMARTAuthPopup"), !t1) throw new Error("Perhaps window.open was blocked");
            } catch (t2) {
                e1 = t2;
            }
            return t1 || (T("Cannot open window. Failing back to '_self'. %s", e1), self);
        }
        if ("popup" == e) {
            let e2, n = null;
            try {
                if (n = window.open("", "SMARTAuthPopup", [
                    "height=" + r,
                    "width=" + t,
                    "menubar=0",
                    "resizable=1",
                    "status=0",
                    "top=" + (screen.height - r) / 2,
                    "left=" + (screen.width - t) / 2
                ].join(",")), !n) throw new Error("Perhaps the popup window was blocked");
            } catch (t3) {
                e2 = t3;
            }
            return n || (T("Cannot open window. Failing back to '_self'. %s", e2), self);
        }
        const n1 = frames[e];
        return n1 || (T("Unknown target '%s'. Failing back to '_self'.", e), self);
    }, u.assert = N, u.assertJsonPatch = function(e) {
        N(Array.isArray(e), "The JSON patch must be an array"), N(e.length > 0, "The JSON patch array should not be empty"), e.forEach((e)=>{
            N([
                "add",
                "replace",
                "test",
                "move",
                "copy",
                "remove"
            ].indexOf(e.op) > -1, 'Each patch operation must have an "op" property which must be one of: "add", "replace", "test", "move", "copy", "remove"'), N(e.path && typeof e.path, `Invalid "${e.op}" operation. Missing "path" property`), "add" == e.op || "replace" == e.op || "test" == e.op ? (N("value" in e, `Invalid "${e.op}" operation. Missing "value" property`), N(3 == Object.keys(e).length, `Invalid "${e.op}" operation. Contains unknown properties`)) : "move" == e.op || "copy" == e.op ? (N("string" == typeof e.from, `Invalid "${e.op}" operation. Requires a string "from" property`), N(3 == Object.keys(e).length, `Invalid "${e.op}" operation. Contains unknown properties`)) : N(2 == Object.keys(e).length, `Invalid "${e.op}" operation. Contains unknown properties`);
        });
    };
    var z = {};
    Object.defineProperty(z, "__esModule", {
        value: !0
    });
    var H = {};
    Object.defineProperty(H, "__esModule", {
        value: !0
    }), H.default = {
        expired: "Session expired! Please re-launch the app",
        noScopeForId: "Trying to get the ID of the selected %s. Please add 'launch' or 'launch/%s' to the requested scopes and try again.",
        noIfNoAuth: "You are trying to get %s but the app is not authorized yet.",
        noFreeContext: "Please don't use open fhir servers if you need to access launch context items like the %S."
    };
    const { Response: $  } = "undefined" != typeof FHIRCLIENT_PURE ? window : i("16s93"), J = u.debug.extend("client");
    function W(e, t, r, n, o, i) {
        const s = (0, u.getPath)(e, t);
        if (s) {
            const a = Array.isArray(s);
            return Promise.all((0, u.makeArray)(s).filter(Boolean).map((s, c)=>{
                const f = s.reference;
                if (f) return (function(e, t, r, n) {
                    return t[e] || (t[e] = r.request({
                        url: e,
                        signal: n
                    }).then((r)=>(t[e] = r, r), (r)=>{
                        throw delete t[e], r;
                    })), Promise.resolve(t[e]);
                })(f, n, o, i).then((n)=>{
                    r && (a ? t.indexOf("..") > -1 ? (0, u.setPath)(e, `${t.replace("..", `.${c}.`)}`, n) : (0, u.setPath)(e, `${t}.${c}`, n) : (0, u.setPath)(e, t, n));
                }).catch((e)=>{
                    if (404 !== e.status) throw e;
                });
            }));
        }
    }
    function Y(e, t, r, n, o) {
        let i = (0, u.makeArray)(t.resolveReferences).filter(Boolean).map((e)=>String(e).trim()).filter(Boolean);
        if (i = i.filter((e, t)=>!(i.indexOf(e, t + 1) > -1) || (J('Duplicated reference path "%s"', e), !1)), !i.length) return Promise.resolve();
        const s = {};
        i.forEach((e)=>{
            const t = e.split(".").length;
            s[t] || (s[t] = []), s[t].push(e);
        });
        let a = Promise.resolve();
        return Object.keys(s).sort().forEach((i)=>{
            const u = s[i];
            a = a.then(()=>Promise.all(u.map((i)=>W(e, i, !!t.graph, r, n, o))));
        }), a;
    }
    z.default = class {
        constructor(e, t){
            this.units = u.units;
            const r = "string" == typeof t ? {
                serverUrl: t
            } : t;
            (0, u.assert)(r.serverUrl && r.serverUrl.match(/https?:\/\/.+/), 'A "serverUrl" option is required and must begin with "http(s)"'), this.state = r, this.environment = e, this._refreshTask = null;
            const n = this;
            this.patient = {
                get id () {
                    return n.getPatientId();
                },
                read: (e)=>{
                    const t = this.patient.id;
                    return t ? this.request(Object.assign(Object.assign({}, e), {
                        url: `Patient/${t}`
                    })) : Promise.reject(new Error("Patient is not available"));
                },
                request: (e, t = {})=>this.patient.id ? (async ()=>{
                        const r = await async function(e, t) {
                            const r = (0, u.absolute)("/", t.state.serverUrl);
                            async function n(e) {
                                const r = e.pathname.split("/").pop();
                                (0, u.assert)(r, `Invalid url "${e}"`), (0, u.assert)(l.patientCompartment.indexOf(r) > -1, `Cannot filter "${r}" resources by patient`);
                                const n = await (0, u.fetchConformanceStatement)(t.state.serverUrl), o = (0, u.getPatientParam)(n, r);
                                return e.searchParams.set(o, t.patient.id), e.href;
                            }
                            return "string" == typeof e || e instanceof URL ? {
                                url: await n(new URL(e + "", r))
                            } : (e.url = await n(new URL(e.url + "", r)), e);
                        }(e, this);
                        return this.request(r, t);
                    })() : Promise.reject(new Error("Patient is not available"))
            }, this.encounter = {
                get id () {
                    return n.getEncounterId();
                },
                read: (e)=>{
                    const t = this.encounter.id;
                    return t ? this.request(Object.assign(Object.assign({}, e), {
                        url: `Encounter/${t}`
                    })) : Promise.reject(new Error("Encounter is not available"));
                }
            }, this.user = {
                get fhirUser () {
                    return n.getFhirUser();
                },
                get id () {
                    return n.getUserId();
                },
                get resourceType () {
                    return n.getUserType();
                },
                read: (e)=>{
                    const t = this.user.fhirUser;
                    return t ? this.request(Object.assign(Object.assign({}, e), {
                        url: t
                    })) : Promise.reject(new Error("User is not available"));
                }
            }, this.connect(e.fhir);
        }
        connect(e) {
            if ("function" == typeof e) {
                const t = {
                    baseUrl: this.state.serverUrl.replace(/\/$/, "")
                }, r = this.getState("tokenResponse.access_token");
                if (r) t.auth = {
                    token: r
                };
                else {
                    const { username: e1 , password: r1  } = this.state;
                    e1 && r1 && (t.auth = {
                        user: e1,
                        pass: r1
                    });
                }
                this.api = e(t);
                const n = this.getState("tokenResponse.patient");
                n && (this.patient.api = e(Object.assign(Object.assign({}, t), {
                    patient: n
                })));
            }
            return this;
        }
        getPatientId() {
            const e = this.state.tokenResponse;
            return e ? e.patient ? e.patient : ((this.state.scope || "").match(/\blaunch(\/patient)?\b/) ? J("The ID of the selected patient is not available. Please check if your server supports that.") : J(H.default.noScopeForId, "patient", "patient"), null) : (this.state.authorizeUri ? J(H.default.noIfNoAuth, "the ID of the selected patient") : J(H.default.noFreeContext, "selected patient"), null);
        }
        getEncounterId() {
            const e = this.state.tokenResponse;
            return e ? e.encounter ? e.encounter : ((this.state.scope || "").match(/\blaunch(\/encounter)?\b/) ? J("The ID of the selected encounter is not available. Please check if your server supports that, and that the selected patient has any recorded encounters.") : J(H.default.noScopeForId, "encounter", "encounter"), null) : (this.state.authorizeUri ? J(H.default.noIfNoAuth, "the ID of the selected encounter") : J(H.default.noFreeContext, "selected encounter"), null);
        }
        getIdToken() {
            const e = this.state.tokenResponse;
            if (e) {
                const t = e.id_token, r = this.state.scope || "";
                if (!t) {
                    const e1 = r.match(/\bopenid\b/), t1 = r.match(/\bprofile\b/), n = r.match(/\bfhirUser\b/);
                    return J(e1 && (n || t1) ? "The id_token is not available. Please check if your server supports that." : "You are trying to get the id_token but you are not using the right scopes. Please add 'openid' and 'fhirUser' or 'profile' to the scopes you are requesting."), null;
                }
                return (0, u.jwtDecode)(t, this.environment);
            }
            return this.state.authorizeUri ? J(H.default.noIfNoAuth, "the id_token") : J(H.default.noFreeContext, "id_token"), null;
        }
        getFhirUser() {
            const e = this.getIdToken();
            return e ? e.fhirUser ? e.fhirUser.split("/").slice(-2).join("/") : e.profile : null;
        }
        getUserId() {
            const e = this.getFhirUser();
            return e ? e.split("/")[1] : null;
        }
        getUserType() {
            const e = this.getFhirUser();
            return e ? e.split("/")[0] : null;
        }
        getAuthorizationHeader() {
            const e = this.getState("tokenResponse.access_token");
            if (e) return "Bearer " + e;
            const { username: t , password: r  } = this.state;
            return t && r ? "Basic " + this.environment.btoa(t + ":" + r) : null;
        }
        async _clearState() {
            const e = this.environment.getStorage(), t = await e.get(l.SMART_KEY);
            t && await e.unset(t), await e.unset(l.SMART_KEY), this.state.tokenResponse = {};
        }
        create(e, t) {
            return this.request(Object.assign(Object.assign({}, t), {
                url: `${e.resourceType}`,
                method: "POST",
                body: JSON.stringify(e),
                headers: Object.assign({
                    "content-type": "application/json"
                }, (t || {}).headers)
            }));
        }
        update(e, t) {
            return this.request(Object.assign(Object.assign({}, t), {
                url: `${e.resourceType}/${e.id}`,
                method: "PUT",
                body: JSON.stringify(e),
                headers: Object.assign({
                    "content-type": "application/json"
                }, (t || {}).headers)
            }));
        }
        delete(e, t = {}) {
            return this.request(Object.assign(Object.assign({}, t), {
                url: e,
                method: "DELETE"
            }));
        }
        async patch(e, t, r = {}) {
            return (0, u.assertJsonPatch)(t), this.request(Object.assign(Object.assign({}, r), {
                url: e,
                method: "PATCH",
                body: JSON.stringify(t),
                headers: Object.assign({
                    prefer: "return=presentation",
                    "content-type": "application/json-patch+json; charset=UTF-8"
                }, r.headers)
            }));
        }
        async request(e, t = {}, r = {}) {
            var n;
            const o = u.debug.extend("client:request");
            let i;
            (0, u.assert)(e, "request requires an url or request options as argument"), "string" == typeof e || e instanceof URL ? (i = String(e), e = {}) : i = String(e.url), i = (0, u.absolute)(i, this.state.serverUrl);
            const s = {
                graph: !1 !== t.graph,
                flat: !!t.flat,
                pageLimit: null !== (n = t.pageLimit) && void 0 !== n ? n : 1,
                resolveReferences: t.resolveReferences || [],
                useRefreshToken: !1 !== t.useRefreshToken,
                onPage: "function" == typeof t.onPage ? t.onPage : void 0
            }, a = e.signal || void 0;
            let c;
            return (s.useRefreshToken ? this.refreshIfNeeded({
                signal: a
            }).then(()=>e) : Promise.resolve(e)).then((e)=>{
                const t = this.getAuthorizationHeader();
                return t && (e.headers = Object.assign(Object.assign({}, e.headers), {
                    authorization: t
                })), e;
            }).then((e)=>(o("%s, options: %O, fhirOptions: %O", i, e, s), (0, u.request)(i, e).then((t)=>e.includeResponse ? (c = t.response, t.body) : t))).catch(async (e)=>{
                if (401 == e.status) {
                    if (!this.getState("tokenResponse.access_token")) throw e.message += "\nThis app cannot be accessed directly. Please launch it as SMART app!", e;
                    if (!s.useRefreshToken) throw o("Your session has expired and the useRefreshToken option is set to false. Please re-launch the app."), await this._clearState(), e.message += "\n" + H.default.expired, e;
                    throw o("Auto-refresh failed! Please re-launch the app."), await this._clearState(), e.message += "\n" + H.default.expired, e;
                }
                throw e;
            }).catch((e)=>{
                throw 403 == e.status && o("Permission denied! Please make sure that you have requested the proper scopes."), e;
            }).then((t)=>t ? "string" == typeof t || t instanceof $ ? t : (async (e)=>("Bundle" == e.resourceType ? await Promise.all((e.entry || []).map((e)=>Y(e.resource, s, r, this, a))) : await Y(e, s, r, this, a), e))(t).then(async (e)=>{
                    if (e && "Bundle" == e.resourceType) {
                        const t = e.link || [];
                        if (s.flat && (e = (e.entry || []).map((e)=>e.resource)), s.onPage && await s.onPage(e, Object.assign({}, r)), --s.pageLimit) {
                            const n = t.find((e)=>"next" == e.relation);
                            if (e = (0, u.makeArray)(e), n && n.url) {
                                const t1 = await this.request({
                                    url: n.url,
                                    signal: a
                                }, s, r);
                                return s.onPage ? null : s.resolveReferences.length ? (Object.assign(r, t1.references), e.concat((0, u.makeArray)(t1.data || t1))) : e.concat((0, u.makeArray)(t1));
                            }
                        }
                    }
                    return e;
                }).then((e)=>{
                    if (s.graph) r = {};
                    else if (!s.onPage && s.resolveReferences.length) return {
                        data: e,
                        references: r
                    };
                    return e;
                }).then((t)=>e.includeResponse ? {
                        body: t,
                        response: c
                    } : t) : t);
        }
        refreshIfNeeded(e = {}) {
            const t = this.getState("tokenResponse.access_token"), r = this.getState("tokenResponse.refresh_token"), n = this.state.expiresAt || 0;
            return t && r && n - 10 < Date.now() / 1e3 ? this.refresh(e) : Promise.resolve(this.state);
        }
        refresh(e = {}) {
            var t, r;
            const n = u.debug.extend("client:refresh");
            n("Attempting to refresh with refresh_token...");
            const o = null === (r = null === (t = this.state) || void 0 === t ? void 0 : t.tokenResponse) || void 0 === r ? void 0 : r.refresh_token;
            (0, u.assert)(o, "Unable to refresh. No refresh_token found.");
            const i = this.state.tokenUri;
            (0, u.assert)(i, "Unable to refresh. No tokenUri found.");
            const s = this.getState("tokenResponse.scope") || "", a = s.search(/\boffline_access\b/) > -1, c = s.search(/\bonline_access\b/) > -1;
            if ((0, u.assert)(a || c, "Unable to refresh. No offline_access or online_access scope found."), !this._refreshTask) {
                const t1 = Object.assign(Object.assign({
                    credentials: this.environment.options.refreshTokenWithCredentials || "same-origin"
                }, e), {
                    method: "POST",
                    mode: "cors",
                    headers: Object.assign(Object.assign({}, e.headers || {}), {
                        "content-type": "application/x-www-form-urlencoded"
                    }),
                    body: `grant_type=refresh_token&refresh_token=${encodeURIComponent(o)}`
                });
                if (!("authorization" in t1.headers)) {
                    const { clientSecret: e1 , clientId: r1  } = this.state;
                    e1 && (t1.headers.authorization = "Basic " + this.environment.btoa(r1 + ":" + e1));
                }
                this._refreshTask = (0, u.request)(i, t1).then((e)=>((0, u.assert)(e.access_token, "No access token received"), n("Received new access token response %O", e), this.state.tokenResponse = Object.assign(Object.assign({}, this.state.tokenResponse), e), this.state.expiresAt = (0, u.getAccessTokenExpiration)(e, this.environment), this.state)).catch((e)=>{
                    var t, r;
                    throw (null === (r = null === (t = this.state) || void 0 === t ? void 0 : t.tokenResponse) || void 0 === r ? void 0 : r.refresh_token) && (n("Deleting the expired or invalid refresh token."), delete this.state.tokenResponse.refresh_token), e;
                }).finally(()=>{
                    this._refreshTask = null;
                    const e = this.state.key;
                    e ? this.environment.getStorage().set(e, this.state) : n("No 'key' found in Clint.state. Cannot persist the instance.");
                });
            }
            return this._refreshTask;
        }
        byCode(e, t) {
            return (0, u.byCode)(e, t);
        }
        byCodes(e, t) {
            return (0, u.byCodes)(e, t);
        }
        getPath(e, t = "") {
            return (0, u.getPath)(e, t);
        }
        getState(e = "") {
            return (0, u.getPath)(Object.assign({}, this.state), e);
        }
        getFhirVersion() {
            return (0, u.fetchConformanceStatement)(this.state.serverUrl).then((e)=>e.fhirVersion);
        }
        getFhirRelease() {
            return this.getFhirVersion().then((e)=>{
                var t;
                return null !== (t = l.fhirVersions[e]) && void 0 !== t ? t : 0;
            });
        }
    }, Object.defineProperty(a, "KEY", {
        enumerable: !0,
        get: function() {
            return l.SMART_KEY;
        }
    });
    const V = u.debug.extend("oauth2");
    function G() {
        return "object" == typeof window;
    }
    function Z(e = "/", t) {
        const r = String(e).replace(/\/*$/, "/") + ".well-known/smart-configuration";
        return (0, u.getAndCache)(r, t).catch((e)=>{
            throw new Error(`Failed to fetch the well-known json "${r}". ${e.message}`);
        });
    }
    function Q(e = "/") {
        return (function(e = "/", t) {
            return Z(e, t).then((e)=>{
                if (!e.authorization_endpoint || !e.token_endpoint) throw new Error("Invalid wellKnownJson");
                return {
                    registrationUri: e.registration_endpoint || "",
                    authorizeUri: e.authorization_endpoint,
                    tokenUri: e.token_endpoint,
                    codeChallengeMethods: e.code_challenge_methods_supported || []
                };
            });
        })(e).catch(()=>(function(e = "/", t) {
                return (0, u.fetchConformanceStatement)(e, t).then((e)=>{
                    const t = ((0, u.getPath)(e || {}, "rest.0.security.extension") || []).filter((e)=>"http://fhir-registry.smarthealthit.org/StructureDefinition/oauth-uris" === e.url).map((e)=>e.extension)[0], r = {
                        registrationUri: "",
                        authorizeUri: "",
                        tokenUri: "",
                        codeChallengeMethods: []
                    };
                    return t && t.forEach((e)=>{
                        "register" === e.url && (r.registrationUri = e.valueUri), "authorize" === e.url && (r.authorizeUri = e.valueUri), "token" === e.url && (r.tokenUri = e.valueUri);
                    }), r;
                });
            })(e));
    }
    async function X(e, t = {}) {
        const r = e.getUrl();
        if (Array.isArray(t)) {
            const n = r.searchParams.get("iss") || r.searchParams.get("fhirServiceUrl");
            if (!n) throw new Error('Passing in an "iss" url parameter is required if authorize uses multiple configurations');
            const o = t.find((e)=>{
                if (e.issMatch) {
                    if ("function" == typeof e.issMatch) return !!e.issMatch(n);
                    if ("string" == typeof e.issMatch) return e.issMatch === n;
                    if (e.issMatch instanceof RegExp) return e.issMatch.test(n);
                }
                return !1;
            });
            return (0, u.assert)(o, `No configuration found matching the current "iss" parameter "${n}"`), await X(e, o);
        }
        const { redirect_uri: n1 , clientSecret: o1 , fakeTokenResponse: i , patientId: s , encounterId: a , client_id: c , target: f , width: h , height: p , pkceMode: d , clientPublicKeySetUrl: y  } = t;
        let { iss: g , launch: b , fhirServiceUrl: m , redirectUri: w , noRedirect: v , scope: A = "" , clientId: E , completeInTarget: C , clientPrivateJwk: S  } = t;
        const O = e.getStorage();
        g = r.searchParams.get("iss") || g, m = r.searchParams.get("fhirServiceUrl") || m, b = r.searchParams.get("launch") || b, E || (E = c), w || (w = n1), w ? w.match(/^https?\:\/\//) || (w = e.relative(w)) : w = e.relative(".");
        const k = String(g || m || "");
        if (!k) throw new Error("No server url found. It must be specified as `iss` or as `fhirServiceUrl` parameter");
        if (g && V("Making %s launch...", b ? "EHR" : "standalone"), b && !A.match(/launch/) && (A += " launch"), G()) {
            const e1 = ee(), t1 = te();
            (e1 || t1) && !0 !== C && !1 !== C && (C = e1, console.warn('Your app is being authorized from within an iframe or popup window. Please be explicit and provide a "completeInTarget" option. Use "true" to complete the authorization in the same window, or "false" to try to complete it in the parent or the opener window. See http://docs.smarthealthit.org/client-js/api.html'));
        }
        const _ = await O.get(l.SMART_KEY);
        await O.unset(_);
        const P = (0, u.randomString)(16), R = {
            clientId: E,
            scope: A,
            redirectUri: w,
            serverUrl: k,
            clientSecret: o1,
            clientPrivateJwk: S,
            tokenResponse: {},
            key: P,
            completeInTarget: C,
            clientPublicKeySetUrl: y
        };
        (!G() || (0, u.getPath)(e, "options.fullSessionStorageSupport")) && await O.set(l.SMART_KEY, P), i && Object.assign(R.tokenResponse, i), s && Object.assign(R.tokenResponse, {
            patient: s
        }), a && Object.assign(R.tokenResponse, {
            encounter: a
        });
        let T = w + "?state=" + encodeURIComponent(P);
        if (m && !g) return V("Making fake launch..."), await O.set(P, R), v ? T : await e.redirect(T);
        const U = await Q(k);
        if (Object.assign(R, U), await O.set(P, R), !R.authorizeUri) return v ? T : await e.redirect(T);
        const j = [
            "response_type=code",
            "client_id=" + encodeURIComponent(E || ""),
            "scope=" + encodeURIComponent(A),
            "redirect_uri=" + encodeURIComponent(w),
            "aud=" + encodeURIComponent(k),
            "state=" + encodeURIComponent(P)
        ];
        if (b && j.push("launch=" + encodeURIComponent(b)), function(e, t) {
            if ("disabled" === t) return !1;
            if ("unsafeV1" === t) return !0;
            if ("required" === t) {
                if (!e) throw new Error("Required PKCE code challenge method (`S256`) was not found.");
                return !0;
            }
            return e;
        }(U.codeChallengeMethods.includes("S256"), d)) {
            let t2 = await e.security.generatePKCEChallenge();
            Object.assign(R, t2), await O.set(P, R), j.push("code_challenge=" + R.codeChallenge), j.push("code_challenge_method=S256");
        }
        if (T = R.authorizeUri + "?" + j.join("&"), v) return T;
        if (!f || !G()) return await e.redirect(T);
        {
            let e2;
            if (e2 = await (0, u.getTargetWindow)(f, h, p), e2 !== self) try {
                e2.sessionStorage.removeItem(_), e2.sessionStorage.setItem(P, JSON.stringify(R));
            } catch (t3) {
                (0, u.debug)('Failed to modify window.sessionStorage. Perhaps it is from different origin?. Failing back to "_self". %s', t3), e2 = self;
            }
            if (e2 !== self) try {
                e2.location.href = T, self.addEventListener("message", re);
            } catch (e3) {
                (0, u.debug)('Failed to modify window.location. Perhaps it is from different origin?. Failing back to "_self". %s', e3), self.location.href = T;
            }
            else self.location.href = T;
        }
    }
    function ee() {
        try {
            return self !== top && parent !== self;
        } catch (e) {
            return !0;
        }
    }
    function te() {
        try {
            return self === top && !!opener && opener !== self && !!window.name;
        } catch (e) {
            return !1;
        }
    }
    function re(e) {
        "completeAuth" == e.data.type && e.origin === new URL(self.location.href).origin && (window.removeEventListener("message", re), window.location.href = e.data.url);
    }
    async function ne(e, t = {}) {
        var r, n;
        const o = e.getUrl(), i = e.getStorage(), s = o.searchParams;
        let a = s.get("state");
        const c = s.get("code"), f = s.get("error"), h = s.get("error_description");
        if (a || (a = await i.get(l.SMART_KEY)), f || h) throw new Error([
            f,
            h
        ].filter(Boolean).join(": "));
        V("key: %s, code: %s", a, c), (0, u.assert)(a, "No 'state' parameter found. Please (re)launch the app.");
        let p = await i.get(a);
        const d = !G() || (0, u.getPath)(e, "options.fullSessionStorageSupport");
        if (G() && p && !p.completeInTarget) {
            const e1 = ee(), t1 = te();
            if ((e1 || t1) && !o.searchParams.get("complete")) {
                o.searchParams.set("complete", "1");
                const { href: r1 , origin: n1  } = o;
                return e1 && parent.postMessage({
                    type: "completeAuth",
                    url: r1
                }, n1), t1 && (opener.postMessage({
                    type: "completeAuth",
                    url: r1
                }, n1), window.close()), new Promise(()=>{});
            }
        }
        o.searchParams.delete("complete");
        const y = s.has("state");
        G() && (0, u.getPath)(e, "options.replaceBrowserHistory") && (c || y) && (c && (s.delete("code"), V("Removed code parameter from the url.")), y && d && (s.delete("state"), V("Removed state parameter from the url.")), window.history.replaceState && window.history.replaceState({}, "", o.href)), (0, u.assert)(p, "No state found! Please (re)launch the app.");
        if (!(!c || (null === (r = p.tokenResponse) || void 0 === r ? void 0 : r.access_token)) && p.tokenUri) {
            (0, u.assert)(c, "'code' url parameter is required"), V("Preparing to exchange the code for access token...");
            const r2 = await oe(e, {
                code: c,
                state: p,
                clientPublicKeySetUrl: t.clientPublicKeySetUrl,
                privateKey: t.privateKey || p.clientPrivateJwk
            });
            V("Token request options: %O", r2);
            const n2 = await (0, u.request)(p.tokenUri, r2);
            V("Token response: %O", n2), (0, u.assert)(n2.access_token, "Failed to obtain access token."), p.expiresAt = (0, u.getAccessTokenExpiration)(n2, e), p = Object.assign(Object.assign({}, p), {
                tokenResponse: n2
            }), await i.set(a, p), V("Authorization successful!");
        } else V((null === (n = p.tokenResponse) || void 0 === n ? void 0 : n.access_token) ? "Already authorized" : "No authorization needed");
        d && await i.set(l.SMART_KEY, a);
        const g = new z.default(e, p);
        return V("Created client instance: %O", g), g;
    }
    async function oe(e, { code: t , state: r , clientPublicKeySetUrl: n , privateKey: o  }) {
        const { redirectUri: i , clientSecret: s , tokenUri: a , clientId: c , codeVerifier: f  } = r;
        (0, u.assert)(i, "Missing state.redirectUri"), (0, u.assert)(a, "Missing state.tokenUri"), (0, u.assert)(c, "Missing state.clientId");
        const l = {
            method: "POST",
            headers: {
                "content-type": "application/x-www-form-urlencoded"
            },
            body: `code=${t}&grant_type=authorization_code&redirect_uri=${encodeURIComponent(i)}`
        };
        if (s) l.headers.authorization = "Basic " + e.btoa(c + ":" + s), V("Using state.clientSecret to construct the authorization header: %s", l.headers.authorization);
        else if (o) {
            const t1 = "key" in o ? o.key : await e.security.importJWK(o), i1 = {
                typ: "JWT",
                kid: o.kid,
                jku: n || r.clientPublicKeySetUrl
            }, s1 = {
                iss: c,
                sub: c,
                aud: a,
                jti: e.base64urlencode(e.security.randomBytes(32)),
                exp: (0, u.getTimeInFuture)(120)
            }, f1 = await e.security.signCompactJws(o.alg, t1, i1, s1);
            l.body += `&client_assertion_type=${encodeURIComponent("urn:ietf:params:oauth:client-assertion-type:jwt-bearer")}`, l.body += `&client_assertion=${encodeURIComponent(f1)}`, V("Using state.clientPrivateJwk to add a client_assertion to the POST body");
        } else V("Public client detected; adding state.clientId to the POST body"), l.body += `&client_id=${encodeURIComponent(c)}`;
        return f && (V("Found state.codeVerifier, adding to the POST body"), l.body += "&code_verifier=" + f), l;
    }
    a.fetchWellKnownJson = Z, a.getSecurityExtensions = Q, a.authorize = X, a.isInFrame = ee, a.isInPopUp = te, a.onMessage = re, a.ready = ne, a.buildTokenRequest = oe, a.init = async function(e, t, r) {
        const n = e.getUrl(), o = n.searchParams.get("code"), i = n.searchParams.get("state");
        if (o && i) return ne(e, r);
        const s = e.getStorage(), a = i || await s.get(l.SMART_KEY), u = await s.get(a);
        return u ? new z.default(e, u) : X(e, t).then(()=>new Promise(()=>{}));
    };
    var ie = {};
    Object.defineProperty(ie, "__esModule", {
        value: !0
    });
    ie.default = class {
        async get(e) {
            const t = sessionStorage[e];
            return t ? JSON.parse(t) : null;
        }
        async set(e, t) {
            return sessionStorage[e] = JSON.stringify(t), t;
        }
        async unset(e) {
            return e in sessionStorage && (delete sessionStorage[e], !0);
        }
    };
    var se = {}, ae = {}, ue = function(e) {
        return e && e.Math == Math && e;
    };
    ae = ue("object" == typeof globalThis && globalThis) || ue("object" == typeof window && window) || ue("object" == typeof self && self) || ue("object" == typeof t && t) || function() {
        return this;
    }() || Function("return this")();
    var ce, fe, le = {};
    ce = !(fe = function(e) {
        try {
            return !!e();
        } catch (e1) {
            return !0;
        }
    })(function() {
        var e = (function() {}).bind();
        return "function" != typeof e || e.hasOwnProperty("prototype");
    });
    var he = Function.prototype.call;
    le = ce ? he.bind(he) : function() {
        return he.apply(he, arguments);
    };
    var pe, de;
    de = "undefined" != typeof ArrayBuffer && "undefined" != typeof DataView;
    var ye;
    ye = !fe(function() {
        return 7 != Object.defineProperty({}, 1, {
            get: function() {
                return 7;
            }
        })[1];
    });
    var ge, be = {}, me = "object" == typeof document && document.all, we = (ge = {
        all: me,
        IS_HTMLDDA: void 0 === me && void 0 !== me
    }).all;
    be = ge.IS_HTMLDDA ? function(e) {
        return "function" == typeof e || e === we;
    } : function(e) {
        return "function" == typeof e;
    };
    var ve = {}, Ae = ge.all;
    ve = ge.IS_HTMLDDA ? function(e) {
        return "object" == typeof e ? null !== e : be(e) || e === Ae;
    } : function(e) {
        return "object" == typeof e ? null !== e : be(e);
    };
    var Ee = {}, Ce = {}, Se = Function.prototype, Oe = Se.call, ke = ce && Se.bind.bind(Oe, Oe);
    Ce = ce ? ke : function(e) {
        return function() {
            return Oe.apply(e, arguments);
        };
    };
    var _e, Pe, Re;
    Re = function(e) {
        return null == e;
    };
    var Te = TypeError;
    Pe = function(e) {
        if (Re(e)) throw Te("Can't call method on " + e);
        return e;
    };
    var Ue = Object;
    _e = function(e) {
        return Ue(Pe(e));
    };
    var je = Ce({}.hasOwnProperty);
    Ee = Object.hasOwn || function(e, t) {
        return je(_e(e), t);
    };
    var xe, Ie, Fe, Be = {};
    var Me, Le = {}, Ke = Object.defineProperty;
    Me = function(e, t) {
        try {
            Ke(ae, e, {
                value: t,
                configurable: !0,
                writable: !0
            });
        } catch (r) {
            ae[e] = t;
        }
        return t;
    };
    var De = "__core-js_shared__", qe = ae["__core-js_shared__"] || Me(De, {});
    Le = qe, (Fe = function(e, t) {
        return Le[e] || (Le[e] = void 0 !== t ? t : {});
    })("versions", []).push({
        version: "3.26.1",
        mode: "global",
        copyright: "\xa9 2014-2022 Denis Pushkarev (zloirock.ru)",
        license: "https://github.com/zloirock/core-js/blob/v3.26.1/LICENSE",
        source: "https://github.com/zloirock/core-js"
    });
    var Ne, ze = 0, He = Math.random(), $e = Ce(1..toString);
    Ne = function(e) {
        return "Symbol(" + (void 0 === e ? "" : e) + ")_" + $e(++ze + He, 36);
    };
    var Je, We, Ye, Ve = {}, Ge = function(e) {
        return be(e) ? e : void 0;
    };
    Ve = (Ye = function(e, t) {
        return arguments.length < 2 ? Ge(ae[e]) : ae[e] && ae[e][t];
    })("navigator", "userAgent") || "";
    var Ze, Qe, Xe = ae.process, et = ae.Deno, tt = Xe && Xe.versions || et && et.version, rt = tt && tt.v8;
    rt && (Qe = (Ze = rt.split("."))[0] > 0 && Ze[0] < 4 ? 1 : +(Ze[0] + Ze[1])), !Qe && Ve && (!(Ze = Ve.match(/Edge\/(\d+)/)) || Ze[1] >= 74) && (Ze = Ve.match(/Chrome\/(\d+)/)) && (Qe = +Ze[1]), We = Qe, Je = !!Object.getOwnPropertySymbols && !fe(function() {
        var e = Symbol();
        return !String(e) || !(Object(e) instanceof Symbol) || !Symbol.sham && We && We < 41;
    });
    var nt;
    nt = Je && !Symbol.sham && "symbol" == typeof Symbol.iterator;
    var ot = Fe("wks"), it = ae.Symbol, st = it && it.for, at = nt ? it : it && it.withoutSetter || Ne, ut = {};
    ut[(Ie = function(e) {
        if (!Ee(ot, e) || !Je && "string" != typeof ot[e]) {
            var t = "Symbol." + e;
            Je && Ee(it, e) ? ot[e] = it[e] : ot[e] = nt && st ? st(t) : at(t);
        }
        return ot[e];
    })("toStringTag")] = "z", xe = "[object z]" === String(ut);
    var ct, ft = Ce({}.toString), lt = Ce("".slice);
    ct = function(e) {
        return lt(ft(e), 8, -1);
    };
    var ht = Ie("toStringTag"), pt = Object, dt = "Arguments" == ct(function() {
        return arguments;
    }());
    Be = xe ? ct : function(e) {
        var t, r, n;
        return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof (r = function(e, t) {
            try {
                return e[t];
            } catch (e1) {}
        }(t = pt(e), ht)) ? r : dt ? ct(t) : "Object" == (n = ct(t)) && be(t.callee) ? "Arguments" : n;
    };
    var yt, gt = String;
    yt = function(e) {
        try {
            return gt(e);
        } catch (e1) {
            return "Object";
        }
    };
    var bt, mt, wt, vt = {}, At = ae.document, Et = ve(At) && ve(At.createElement);
    wt = function(e) {
        return Et ? At.createElement(e) : {};
    }, mt = !ye && !fe(function() {
        return 7 != Object.defineProperty(wt("div"), "a", {
            get: function() {
                return 7;
            }
        }).a;
    });
    var Ct;
    Ct = ye && fe(function() {
        return 42 != Object.defineProperty(function() {}, "prototype", {
            value: 42,
            writable: !1
        }).prototype;
    });
    var St, Ot = String, kt = TypeError;
    St = function(e) {
        if (ve(e)) return e;
        throw kt(Ot(e) + " is not an object");
    };
    var _t, Pt, Rt = {}, Tt = {};
    Tt = Ce({}.isPrototypeOf);
    var Ut = Object;
    Rt = nt ? function(e) {
        return "symbol" == typeof e;
    } : function(e) {
        var t = Ye("Symbol");
        return be(t) && Tt(t.prototype, Ut(e));
    };
    var jt, xt, It = TypeError;
    xt = function(e) {
        if (be(e)) return e;
        throw It(yt(e) + " is not a function");
    }, jt = function(e, t) {
        var r = e[t];
        return Re(r) ? void 0 : xt(r);
    };
    var Ft, Bt = TypeError;
    Ft = function(e, t) {
        var r, n;
        if ("string" === t && be(r = e.toString) && !ve(n = le(r, e))) return n;
        if (be(r = e.valueOf) && !ve(n = le(r, e))) return n;
        if ("string" !== t && be(r = e.toString) && !ve(n = le(r, e))) return n;
        throw Bt("Can't convert object to primitive value");
    };
    var Mt = TypeError, Lt = Ie("toPrimitive");
    Pt = function(e, t) {
        if (!ve(e) || Rt(e)) return e;
        var r, n = jt(e, Lt);
        if (n) {
            if (void 0 === t && (t = "default"), r = le(n, e, t), !ve(r) || Rt(r)) return r;
            throw Mt("Can't convert object to primitive value");
        }
        return void 0 === t && (t = "number"), Ft(e, t);
    }, _t = function(e) {
        var t = Pt(e, "string");
        return Rt(t) ? t : t + "";
    };
    var Kt = TypeError, Dt = Object.defineProperty, qt = Object.getOwnPropertyDescriptor, Nt = "enumerable", zt = "configurable", Ht = "writable";
    bt = ye ? Ct ? function(e, t, r) {
        if (St(e), t = _t(t), St(r), "function" == typeof e && "prototype" === t && "value" in r && Ht in r && !r.writable) {
            var n = qt(e, t);
            n && n.writable && (e[t] = r.value, r = {
                configurable: zt in r ? r.configurable : n.configurable,
                enumerable: Nt in r ? r.enumerable : n.enumerable,
                writable: !1
            });
        }
        return Dt(e, t, r);
    } : Dt : function(e, t, r) {
        if (St(e), t = _t(t), St(r), mt) try {
            return Dt(e, t, r);
        } catch (e1) {}
        if ("get" in r || "set" in r) throw Kt("Accessors not supported");
        return "value" in r && (e[t] = r.value), e;
    };
    var $t;
    $t = function(e, t) {
        return {
            enumerable: !(1 & e),
            configurable: !(2 & e),
            writable: !(4 & e),
            value: t
        };
    }, vt = ye ? function(e, t, r) {
        return bt(e, t, $t(1, r));
    } : function(e, t, r) {
        return e[t] = r, e;
    };
    var Jt, Wt, Yt = Function.prototype, Vt = ye && Object.getOwnPropertyDescriptor, Gt = Ee(Yt, "name"), Zt = {
        EXISTS: Gt,
        PROPER: Gt && "something" === (function() {}).name,
        CONFIGURABLE: Gt && (!ye || ye && Vt(Yt, "name").configurable)
    }.CONFIGURABLE, Qt = {}, Xt = Ce(Function.toString);
    be(Le.inspectSource) || (Le.inspectSource = function(e) {
        return Xt(e);
    }), Qt = Le.inspectSource;
    var er, tr, rr = ae.WeakMap;
    tr = be(rr) && /native code/.test(String(rr));
    var nr, or = Fe("keys");
    nr = function(e) {
        return or[e] || (or[e] = Ne(e));
    };
    var ir = {};
    ir = {};
    var sr, ar, ur, cr = "Object already initialized", fr = ae.TypeError, lr = ae.WeakMap;
    if (tr || Le.state) {
        var hr = Le.state || (Le.state = new lr);
        hr.get = hr.get, hr.has = hr.has, hr.set = hr.set, sr = function(e, t) {
            if (hr.has(e)) throw fr(cr);
            return t.facade = e, hr.set(e, t), t;
        }, ar = function(e) {
            return hr.get(e) || {};
        }, ur = function(e) {
            return hr.has(e);
        };
    } else {
        var pr = nr("state");
        ir[pr] = !0, sr = function(e, t) {
            if (Ee(e, pr)) throw fr(cr);
            return t.facade = e, vt(e, pr, t), t;
        }, ar = function(e) {
            return Ee(e, pr) ? e[pr] : {};
        }, ur = function(e) {
            return Ee(e, pr);
        };
    }
    var dr = (er = {
        set: sr,
        get: ar,
        has: ur,
        enforce: function(e) {
            return ur(e) ? ar(e) : sr(e, {});
        },
        getterFor: function(e) {
            return function(t) {
                var r;
                if (!ve(t) || (r = ar(t)).type !== e) throw fr("Incompatible receiver, " + e + " required");
                return r;
            };
        }
    }).enforce, yr = er.get, gr = Object.defineProperty, br = ye && !fe(function() {
        return 8 !== gr(function() {}, "length", {
            value: 8
        }).length;
    }), mr = String(String).split("String"), wr = Wt = function(e, t, r) {
        "Symbol(" === String(t).slice(0, 7) && (t = "[" + String(t).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"), r && r.getter && (t = "get " + t), r && r.setter && (t = "set " + t), (!Ee(e, "name") || Zt && e.name !== t) && (ye ? gr(e, "name", {
            value: t,
            configurable: !0
        }) : e.name = t), br && r && Ee(r, "arity") && e.length !== r.arity && gr(e, "length", {
            value: r.arity
        });
        try {
            r && Ee(r, "constructor") && r.constructor ? ye && gr(e, "prototype", {
                writable: !1
            }) : e.prototype && (e.prototype = void 0);
        } catch (e1) {}
        var n = dr(e);
        return Ee(n, "source") || (n.source = mr.join("string" == typeof t ? t : "")), e;
    };
    Function.prototype.toString = wr(function() {
        return be(this) && yr(this).source || Qt(this);
    }, "toString"), Jt = function(e, t, r, n) {
        n || (n = {});
        var o = n.enumerable, i = void 0 !== n.name ? n.name : t;
        if (be(r) && Wt(r, i, n), n.global) o ? e[t] = r : Me(t, r);
        else {
            try {
                n.unsafe ? e[t] && (o = !0) : delete e[t];
            } catch (e1) {}
            o ? e[t] = r : bt(e, t, {
                value: r,
                enumerable: !1,
                configurable: !n.nonConfigurable,
                writable: !n.nonWritable
            });
        }
        return e;
    };
    var vr, Ar = bt, Er = {};
    vr = !fe(function() {
        function e() {}
        return e.prototype.constructor = null, Object.getPrototypeOf(new e) !== e.prototype;
    });
    var Cr = nr("IE_PROTO"), Sr = Object, Or = Sr.prototype;
    Er = vr ? Sr.getPrototypeOf : function(e) {
        var t = _e(e);
        if (Ee(t, Cr)) return t[Cr];
        var r = t.constructor;
        return be(r) && t instanceof r ? r.prototype : t instanceof Sr ? Or : null;
    };
    var kr, _r = {}, Pr = String, Rr = TypeError;
    kr = function(e) {
        if ("object" == typeof e || be(e)) return e;
        throw Rr("Can't set " + Pr(e) + " as a prototype");
    }, _r = Object.setPrototypeOf || ("__proto__" in {} ? function() {
        var e, t = !1, r = {};
        try {
            (e = Ce(Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set))(r, []), t = r instanceof Array;
        } catch (e1) {}
        return function(r, n) {
            return St(r), kr(n), t ? e(r, n) : r.__proto__ = n, r;
        };
    }() : void 0);
    var Tr, Ur, jr, xr = er.enforce, Ir = er.get, Fr = ae.Int8Array, Br = Fr && Fr.prototype, Mr = ae.Uint8ClampedArray, Lr = Mr && Mr.prototype, Kr = Fr && Er(Fr), Dr = Br && Er(Br), qr = Object.prototype, Nr = ae.TypeError, zr = Ie("toStringTag"), Hr = Ne("TYPED_ARRAY_TAG"), $r = "TypedArrayConstructor", Jr = de && !!_r && "Opera" !== Be(ae.opera), Wr = !1, Yr = {
        Int8Array: 1,
        Uint8Array: 1,
        Uint8ClampedArray: 1,
        Int16Array: 2,
        Uint16Array: 2,
        Int32Array: 4,
        Uint32Array: 4,
        Float32Array: 4,
        Float64Array: 8
    }, Vr = {
        BigInt64Array: 8,
        BigUint64Array: 8
    }, Gr = function(e) {
        var t = Er(e);
        if (ve(t)) {
            var r = Ir(t);
            return r && Ee(r, $r) ? r.TypedArrayConstructor : Gr(t);
        }
    }, Zr = function(e) {
        if (!ve(e)) return !1;
        var t = Be(e);
        return Ee(Yr, t) || Ee(Vr, t);
    };
    for(Tr in Yr)(jr = (Ur = ae[Tr]) && Ur.prototype) ? xr(jr).TypedArrayConstructor = Ur : Jr = !1;
    for(Tr in Vr)(jr = (Ur = ae[Tr]) && Ur.prototype) && (xr(jr).TypedArrayConstructor = Ur);
    if ((!Jr || !be(Kr) || Kr === Function.prototype) && (Kr = function() {
        throw Nr("Incorrect invocation");
    }, Jr)) for(Tr in Yr)ae[Tr] && _r(ae[Tr], Kr);
    if ((!Jr || !Dr || Dr === qr) && (Dr = Kr.prototype, Jr)) for(Tr in Yr)ae[Tr] && _r(ae[Tr].prototype, Dr);
    if (Jr && Er(Lr) !== Dr && _r(Lr, Dr), ye && !Ee(Dr, zr)) for(Tr in Wr = !0, Ar(Dr, zr, {
        get: function() {
            return ve(this) ? this[Hr] : void 0;
        }
    }), Yr)ae[Tr] && vt(ae[Tr], Hr, Tr);
    pe = {
        NATIVE_ARRAY_BUFFER_VIEWS: Jr,
        TYPED_ARRAY_TAG: Wr && Hr,
        aTypedArray: function(e) {
            if (Zr(e)) return e;
            throw Nr("Target is not a typed array");
        },
        aTypedArrayConstructor: function(e) {
            if (be(e) && (!_r || Tt(Kr, e))) return e;
            throw Nr(yt(e) + " is not a typed array constructor");
        },
        exportTypedArrayMethod: function(e, t, r, n) {
            if (ye) {
                if (r) for(var o in Yr){
                    var i = ae[o];
                    if (i && Ee(i.prototype, e)) try {
                        delete i.prototype[e];
                    } catch (r1) {
                        try {
                            i.prototype[e] = t;
                        } catch (e1) {}
                    }
                }
                Dr[e] && !r || Jt(Dr, e, r ? t : Jr && Br[e] || t, n);
            }
        },
        exportTypedArrayStaticMethod: function(e, t, r) {
            var n, o;
            if (ye) {
                if (_r) {
                    if (r) {
                        for(n in Yr)if ((o = ae[n]) && Ee(o, e)) try {
                            delete o[e];
                        } catch (e1) {}
                    }
                    if (Kr[e] && !r) return;
                    try {
                        return Jt(Kr, e, r ? t : Jr && Kr[e] || t);
                    } catch (e2) {}
                }
                for(n in Yr)!(o = ae[n]) || o[e] && !r || Jt(o, e, t);
            }
        },
        getTypedArrayConstructor: Gr,
        isView: function(e) {
            if (!ve(e)) return !1;
            var t = Be(e);
            return "DataView" === t || Ee(Yr, t) || Ee(Vr, t);
        },
        isTypedArray: Zr,
        TypedArray: Kr,
        TypedArrayPrototype: Dr
    };
    var Qr, Xr, en, tn = {}, rn = Math.ceil, nn = Math.floor;
    tn = Math.trunc || function(e) {
        var t = +e;
        return (t > 0 ? nn : rn)(t);
    }, en = function(e) {
        var t = +e;
        return t != t || 0 === t ? 0 : tn(t);
    };
    var on = Math.min;
    Xr = function(e) {
        return e > 0 ? on(en(e), 9007199254740991) : 0;
    }, Qr = function(e) {
        return Xr(e.length);
    };
    var sn, an, un = RangeError;
    an = function(e) {
        var t = en(e);
        if (t < 0) throw un("The argument can't be less than 0");
        return t;
    };
    var cn = RangeError;
    sn = function(e, t) {
        var r = an(e);
        if (r % t) throw cn("Wrong offset");
        return r;
    };
    var fn, ln, hn, pn = ae.RangeError, dn = ae.Int8Array, yn = dn && dn.prototype, gn = yn && yn.set, bn = pe.aTypedArray, mn = pe.exportTypedArrayMethod, wn = !fe(function() {
        var e = new Uint8ClampedArray(2);
        return le(gn, e, {
            length: 1,
            0: 3
        }, 1), 3 !== e[1];
    }), vn = wn && pe.NATIVE_ARRAY_BUFFER_VIEWS && fe(function() {
        var e = new dn(2);
        return e.set(1), e.set("2", 1), 0 !== e[0] || 2 !== e[1];
    });
    mn("set", function(e) {
        bn(this);
        var t = sn(arguments.length > 1 ? arguments[1] : void 0, 1), r = _e(e);
        if (wn) return le(gn, this, r, t);
        var n = this.length, o = Qr(r), i = 0;
        if (o + t > n) throw pn("Wrong length");
        for(; i < o;)this[t + i] = r[i++];
    }, !wn || vn), Object.defineProperty(se, "__esModule", {
        value: !0
    }), se.signCompactJws = se.importJWK = se.generatePKCEChallenge = se.digestSha256 = se.randomBytes = void 0, ln = function(e) {
        var t, r, n = Rn(e), o = n[0], i = n[1], s = new On(function(e, t, r) {
            return 3 * (t + r) / 4 - r;
        }(0, o, i)), a = 0, u = i > 0 ? o - 4 : o;
        for(r = 0; r < u; r += 4)t = Sn[e.charCodeAt(r)] << 18 | Sn[e.charCodeAt(r + 1)] << 12 | Sn[e.charCodeAt(r + 2)] << 6 | Sn[e.charCodeAt(r + 3)], s[a++] = t >> 16 & 255, s[a++] = t >> 8 & 255, s[a++] = 255 & t;
        2 === i && (t = Sn[e.charCodeAt(r)] << 2 | Sn[e.charCodeAt(r + 1)] >> 4, s[a++] = 255 & t);
        1 === i && (t = Sn[e.charCodeAt(r)] << 10 | Sn[e.charCodeAt(r + 1)] << 4 | Sn[e.charCodeAt(r + 2)] >> 2, s[a++] = t >> 8 & 255, s[a++] = 255 & t);
        return s;
    }, hn = function(e) {
        for(var t, r = e.length, n = r % 3, o = [], i = 16383, s = 0, a = r - n; s < a; s += i)o.push(Tn(e, s, s + i > a ? a : s + i));
        1 === n ? (t = e[r - 1], o.push(Cn[t >> 2] + Cn[t << 4 & 63] + "==")) : 2 === n && (t = (e[r - 2] << 8) + e[r - 1], o.push(Cn[t >> 10] + Cn[t >> 4 & 63] + Cn[t << 2 & 63] + "="));
        return o.join("");
    } /*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */ ;
    for(var An, En, Cn = [], Sn = [], On = "undefined" != typeof Uint8Array ? Uint8Array : Array, kn = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", _n = 0, Pn = kn.length; _n < Pn; ++_n)Cn[_n] = kn[_n], Sn[kn.charCodeAt(_n)] = _n;
    function Rn(e) {
        var t = e.length;
        if (t % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
        var r = e.indexOf("=");
        return -1 === r && (r = t), [
            r,
            r === t ? 0 : 4 - r % 4
        ];
    }
    function Tn(e, t, r) {
        for(var n, o, i = [], s = t; s < r; s += 3)n = (e[s] << 16 & 16711680) + (e[s + 1] << 8 & 65280) + (255 & e[s + 2]), i.push(Cn[(o = n) >> 18 & 63] + Cn[o >> 12 & 63] + Cn[o >> 6 & 63] + Cn[63 & o]);
        return i.join("");
    }
    Sn["-".charCodeAt(0)] = 62, Sn["_".charCodeAt(0)] = 63, An = function(e, t, r, n, o) {
        var i, s, a = 8 * o - n - 1, u = (1 << a) - 1, c = u >> 1, f = -7, l = r ? o - 1 : 0, h = r ? -1 : 1, p = e[t + l];
        for(l += h, i = p & (1 << -f) - 1, p >>= -f, f += a; f > 0; i = 256 * i + e[t + l], l += h, f -= 8);
        for(s = i & (1 << -f) - 1, i >>= -f, f += n; f > 0; s = 256 * s + e[t + l], l += h, f -= 8);
        if (0 === i) i = 1 - c;
        else {
            if (i === u) return s ? NaN : 1 / 0 * (p ? -1 : 1);
            s += Math.pow(2, n), i -= c;
        }
        return (p ? -1 : 1) * s * Math.pow(2, i - n);
    }, En = function(e, t, r, n, o, i) {
        var s, a, u, c = 8 * i - o - 1, f = (1 << c) - 1, l = f >> 1, h = 23 === o ? Math.pow(2, -24) - Math.pow(2, -77) : 0, p = n ? 0 : i - 1, d = n ? 1 : -1, y = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
        for(t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (a = isNaN(t) ? 1 : 0, s = f) : (s = Math.floor(Math.log(t) / Math.LN2), t * (u = Math.pow(2, -s)) < 1 && (s--, u *= 2), (t += s + l >= 1 ? h / u : h * Math.pow(2, 1 - l)) * u >= 2 && (s++, u /= 2), s + l >= f ? (a = 0, s = f) : s + l >= 1 ? (a = (t * u - 1) * Math.pow(2, o), s += l) : (a = t * Math.pow(2, l - 1) * Math.pow(2, o), s = 0)); o >= 8; e[r + p] = 255 & a, p += d, a /= 256, o -= 8);
        for(s = s << o | a, c += o; c > 0; e[r + p] = 255 & s, p += d, s /= 256, c -= 8);
        e[r + p - d] |= 128 * y;
    };
    var Un = "function" == typeof Symbol && "function" == typeof Symbol.for ? Symbol.for("nodejs.util.inspect.custom") : null;
    fn = In;
    var jn = 2147483647;
    function xn(e) {
        if (e > jn) throw new RangeError('The value "' + e + '" is invalid for option "size"');
        var t = new Uint8Array(e);
        return Object.setPrototypeOf(t, In.prototype), t;
    }
    function In(e, t, r) {
        if ("number" == typeof e) {
            if ("string" == typeof t) throw new TypeError('The "string" argument must be of type string. Received type number');
            return Mn(e);
        }
        return Fn(e, t, r);
    }
    function Fn(e, t, r) {
        if ("string" == typeof e) return function(e, t) {
            "string" == typeof t && "" !== t || (t = "utf8");
            if (!In.isEncoding(t)) throw new TypeError("Unknown encoding: " + t);
            var r = 0 | qn(e, t), n = xn(r), o = n.write(e, t);
            o !== r && (n = n.slice(0, o));
            return n;
        }(e, t);
        if (ArrayBuffer.isView(e)) return function(e) {
            if (po(e, Uint8Array)) {
                var t = new Uint8Array(e);
                return Kn(t.buffer, t.byteOffset, t.byteLength);
            }
            return Ln(e);
        }(e);
        if (null == e) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e);
        if (po(e, ArrayBuffer) || e && po(e.buffer, ArrayBuffer)) return Kn(e, t, r);
        if ("undefined" != typeof SharedArrayBuffer && (po(e, SharedArrayBuffer) || e && po(e.buffer, SharedArrayBuffer))) return Kn(e, t, r);
        if ("number" == typeof e) throw new TypeError('The "value" argument must not be of type number. Received type number');
        var n = e.valueOf && e.valueOf();
        if (null != n && n !== e) return In.from(n, t, r);
        var o = function(e) {
            if (In.isBuffer(e)) {
                var t = 0 | Dn(e.length), r = xn(t);
                return 0 === r.length || e.copy(r, 0, 0, t), r;
            }
            if (void 0 !== e.length) return "number" != typeof e.length || yo(e.length) ? xn(0) : Ln(e);
            if ("Buffer" === e.type && Array.isArray(e.data)) return Ln(e.data);
        }(e);
        if (o) return o;
        if ("undefined" != typeof Symbol && null != Symbol.toPrimitive && "function" == typeof e[Symbol.toPrimitive]) return In.from(e[Symbol.toPrimitive]("string"), t, r);
        throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e);
    }
    function Bn(e) {
        if ("number" != typeof e) throw new TypeError('"size" argument must be of type number');
        if (e < 0) throw new RangeError('The value "' + e + '" is invalid for option "size"');
    }
    function Mn(e) {
        return Bn(e), xn(e < 0 ? 0 : 0 | Dn(e));
    }
    function Ln(e) {
        for(var t = e.length < 0 ? 0 : 0 | Dn(e.length), r = xn(t), n = 0; n < t; n += 1)r[n] = 255 & e[n];
        return r;
    }
    function Kn(e, t, r) {
        if (t < 0 || e.byteLength < t) throw new RangeError('"offset" is outside of buffer bounds');
        if (e.byteLength < t + (r || 0)) throw new RangeError('"length" is outside of buffer bounds');
        var n;
        return n = void 0 === t && void 0 === r ? new Uint8Array(e) : void 0 === r ? new Uint8Array(e, t) : new Uint8Array(e, t, r), Object.setPrototypeOf(n, In.prototype), n;
    }
    function Dn(e) {
        if (e >= jn) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + jn.toString(16) + " bytes");
        return 0 | e;
    }
    function qn(e, t) {
        if (In.isBuffer(e)) return e.length;
        if (ArrayBuffer.isView(e) || po(e, ArrayBuffer)) return e.byteLength;
        if ("string" != typeof e) throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof e);
        var r = e.length, n = arguments.length > 2 && !0 === arguments[2];
        if (!n && 0 === r) return 0;
        for(var o = !1;;)switch(t){
            case "ascii":
            case "latin1":
            case "binary":
                return r;
            case "utf8":
            case "utf-8":
                return fo(e).length;
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return 2 * r;
            case "hex":
                return r >>> 1;
            case "base64":
                return lo(e).length;
            default:
                if (o) return n ? -1 : fo(e).length;
                t = ("" + t).toLowerCase(), o = !0;
        }
    }
    function Nn(e, t, r) {
        var n = !1;
        if ((void 0 === t || t < 0) && (t = 0), t > this.length) return "";
        if ((void 0 === r || r > this.length) && (r = this.length), r <= 0) return "";
        if ((r >>>= 0) <= (t >>>= 0)) return "";
        for(e || (e = "utf8");;)switch(e){
            case "hex":
                return ro(this, t, r);
            case "utf8":
            case "utf-8":
                return Qn(this, t, r);
            case "ascii":
                return eo(this, t, r);
            case "latin1":
            case "binary":
                return to(this, t, r);
            case "base64":
                return Zn(this, t, r);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return no(this, t, r);
            default:
                if (n) throw new TypeError("Unknown encoding: " + e);
                e = (e + "").toLowerCase(), n = !0;
        }
    }
    function zn(e, t, r) {
        var n = e[t];
        e[t] = e[r], e[r] = n;
    }
    function Hn(e, t, r, n, o) {
        if (0 === e.length) return -1;
        if ("string" == typeof r ? (n = r, r = 0) : r > 2147483647 ? r = 2147483647 : r < -2147483648 && (r = -2147483648), yo(r = +r) && (r = o ? 0 : e.length - 1), r < 0 && (r = e.length + r), r >= e.length) {
            if (o) return -1;
            r = e.length - 1;
        } else if (r < 0) {
            if (!o) return -1;
            r = 0;
        }
        if ("string" == typeof t && (t = In.from(t, n)), In.isBuffer(t)) return 0 === t.length ? -1 : $n(e, t, r, n, o);
        if ("number" == typeof t) return t &= 255, "function" == typeof Uint8Array.prototype.indexOf ? o ? Uint8Array.prototype.indexOf.call(e, t, r) : Uint8Array.prototype.lastIndexOf.call(e, t, r) : $n(e, [
            t
        ], r, n, o);
        throw new TypeError("val must be string, number or Buffer");
    }
    function $n(e, t, r, n, o) {
        var i, s = 1, a = e.length, u = t.length;
        if (void 0 !== n && ("ucs2" === (n = String(n).toLowerCase()) || "ucs-2" === n || "utf16le" === n || "utf-16le" === n)) {
            if (e.length < 2 || t.length < 2) return -1;
            s = 2, a /= 2, u /= 2, r /= 2;
        }
        function c(e, t) {
            return 1 === s ? e[t] : e.readUInt16BE(t * s);
        }
        if (o) {
            var f = -1;
            for(i = r; i < a; i++)if (c(e, i) === c(t, -1 === f ? 0 : i - f)) {
                if (-1 === f && (f = i), i - f + 1 === u) return f * s;
            } else -1 !== f && (i -= i - f), f = -1;
        } else for(r + u > a && (r = a - u), i = r; i >= 0; i--){
            for(var l = !0, h = 0; h < u; h++)if (c(e, i + h) !== c(t, h)) {
                l = !1;
                break;
            }
            if (l) return i;
        }
        return -1;
    }
    function Jn(e, t, r, n) {
        r = Number(r) || 0;
        var o = e.length - r;
        n ? (n = Number(n)) > o && (n = o) : n = o;
        var i = t.length;
        n > i / 2 && (n = i / 2);
        for(var s = 0; s < n; ++s){
            var a = parseInt(t.substr(2 * s, 2), 16);
            if (yo(a)) return s;
            e[r + s] = a;
        }
        return s;
    }
    function Wn(e, t, r, n) {
        return ho(fo(t, e.length - r), e, r, n);
    }
    function Yn(e, t, r, n) {
        return ho(function(e) {
            for(var t = [], r = 0; r < e.length; ++r)t.push(255 & e.charCodeAt(r));
            return t;
        }(t), e, r, n);
    }
    function Vn(e, t, r, n) {
        return ho(lo(t), e, r, n);
    }
    function Gn(e, t, r, n) {
        return ho(function(e, t) {
            for(var r, n, o, i = [], s = 0; s < e.length && !((t -= 2) < 0); ++s)n = (r = e.charCodeAt(s)) >> 8, o = r % 256, i.push(o), i.push(n);
            return i;
        }(t, e.length - r), e, r, n);
    }
    function Zn(e, t, r) {
        return 0 === t && r === e.length ? hn(e) : hn(e.slice(t, r));
    }
    function Qn(e, t, r) {
        r = Math.min(e.length, r);
        for(var n = [], o = t; o < r;){
            var i, s, a, u, c = e[o], f = null, l = c > 239 ? 4 : c > 223 ? 3 : c > 191 ? 2 : 1;
            if (o + l <= r) switch(l){
                case 1:
                    c < 128 && (f = c);
                    break;
                case 2:
                    128 == (192 & (i = e[o + 1])) && (u = (31 & c) << 6 | 63 & i) > 127 && (f = u);
                    break;
                case 3:
                    i = e[o + 1], s = e[o + 2], 128 == (192 & i) && 128 == (192 & s) && (u = (15 & c) << 12 | (63 & i) << 6 | 63 & s) > 2047 && (u < 55296 || u > 57343) && (f = u);
                    break;
                case 4:
                    i = e[o + 1], s = e[o + 2], a = e[o + 3], 128 == (192 & i) && 128 == (192 & s) && 128 == (192 & a) && (u = (15 & c) << 18 | (63 & i) << 12 | (63 & s) << 6 | 63 & a) > 65535 && u < 1114112 && (f = u);
            }
            null === f ? (f = 65533, l = 1) : f > 65535 && (f -= 65536, n.push(f >>> 10 & 1023 | 55296), f = 56320 | 1023 & f), n.push(f), o += l;
        }
        return function(e) {
            var t = e.length;
            if (t <= Xn) return String.fromCharCode.apply(String, e);
            var r = "", n = 0;
            for(; n < t;)r += String.fromCharCode.apply(String, e.slice(n, n += Xn));
            return r;
        }(n);
    }
    In.TYPED_ARRAY_SUPPORT = function() {
        try {
            var e = new Uint8Array(1), t = {
                foo: function() {
                    return 42;
                }
            };
            return Object.setPrototypeOf(t, Uint8Array.prototype), Object.setPrototypeOf(e, t), 42 === e.foo();
        } catch (e1) {
            return !1;
        }
    }(), In.TYPED_ARRAY_SUPPORT || "undefined" == typeof console || "function" != typeof console.error || console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."), Object.defineProperty(In.prototype, "parent", {
        enumerable: !0,
        get: function() {
            if (In.isBuffer(this)) return this.buffer;
        }
    }), Object.defineProperty(In.prototype, "offset", {
        enumerable: !0,
        get: function() {
            if (In.isBuffer(this)) return this.byteOffset;
        }
    }), In.poolSize = 8192, In.from = function(e, t, r) {
        return Fn(e, t, r);
    }, Object.setPrototypeOf(In.prototype, Uint8Array.prototype), Object.setPrototypeOf(In, Uint8Array), In.alloc = function(e, t, r) {
        return function(e, t, r) {
            return Bn(e), e <= 0 ? xn(e) : void 0 !== t ? "string" == typeof r ? xn(e).fill(t, r) : xn(e).fill(t) : xn(e);
        }(e, t, r);
    }, In.allocUnsafe = function(e) {
        return Mn(e);
    }, In.allocUnsafeSlow = function(e) {
        return Mn(e);
    }, In.isBuffer = function(e) {
        return null != e && !0 === e._isBuffer && e !== In.prototype;
    }, In.compare = function(e, t) {
        if (po(e, Uint8Array) && (e = In.from(e, e.offset, e.byteLength)), po(t, Uint8Array) && (t = In.from(t, t.offset, t.byteLength)), !In.isBuffer(e) || !In.isBuffer(t)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
        if (e === t) return 0;
        for(var r = e.length, n = t.length, o = 0, i = Math.min(r, n); o < i; ++o)if (e[o] !== t[o]) {
            r = e[o], n = t[o];
            break;
        }
        return r < n ? -1 : n < r ? 1 : 0;
    }, In.isEncoding = function(e) {
        switch(String(e).toLowerCase()){
            case "hex":
            case "utf8":
            case "utf-8":
            case "ascii":
            case "latin1":
            case "binary":
            case "base64":
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return !0;
            default:
                return !1;
        }
    }, In.concat = function(e, t) {
        if (!Array.isArray(e)) throw new TypeError('"list" argument must be an Array of Buffers');
        if (0 === e.length) return In.alloc(0);
        var r;
        if (void 0 === t) for(t = 0, r = 0; r < e.length; ++r)t += e[r].length;
        var n = In.allocUnsafe(t), o = 0;
        for(r = 0; r < e.length; ++r){
            var i = e[r];
            if (po(i, Uint8Array)) o + i.length > n.length ? In.from(i).copy(n, o) : Uint8Array.prototype.set.call(n, i, o);
            else {
                if (!In.isBuffer(i)) throw new TypeError('"list" argument must be an Array of Buffers');
                i.copy(n, o);
            }
            o += i.length;
        }
        return n;
    }, In.byteLength = qn, In.prototype._isBuffer = !0, In.prototype.swap16 = function() {
        var e = this.length;
        if (e % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
        for(var t = 0; t < e; t += 2)zn(this, t, t + 1);
        return this;
    }, In.prototype.swap32 = function() {
        var e = this.length;
        if (e % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
        for(var t = 0; t < e; t += 4)zn(this, t, t + 3), zn(this, t + 1, t + 2);
        return this;
    }, In.prototype.swap64 = function() {
        var e = this.length;
        if (e % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
        for(var t = 0; t < e; t += 8)zn(this, t, t + 7), zn(this, t + 1, t + 6), zn(this, t + 2, t + 5), zn(this, t + 3, t + 4);
        return this;
    }, In.prototype.toString = function() {
        var e = this.length;
        return 0 === e ? "" : 0 === arguments.length ? Qn(this, 0, e) : Nn.apply(this, arguments);
    }, In.prototype.toLocaleString = In.prototype.toString, In.prototype.equals = function(e) {
        if (!In.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
        return this === e || 0 === In.compare(this, e);
    }, In.prototype.inspect = function() {
        var e = "";
        return e = this.toString("hex", 0, 50).replace(/(.{2})/g, "$1 ").trim(), this.length > 50 && (e += " ... "), "<Buffer " + e + ">";
    }, Un && (In.prototype[Un] = In.prototype.inspect), In.prototype.compare = function(e, t, r, n, o) {
        if (po(e, Uint8Array) && (e = In.from(e, e.offset, e.byteLength)), !In.isBuffer(e)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof e);
        if (void 0 === t && (t = 0), void 0 === r && (r = e ? e.length : 0), void 0 === n && (n = 0), void 0 === o && (o = this.length), t < 0 || r > e.length || n < 0 || o > this.length) throw new RangeError("out of range index");
        if (n >= o && t >= r) return 0;
        if (n >= o) return -1;
        if (t >= r) return 1;
        if (this === e) return 0;
        for(var i = (o >>>= 0) - (n >>>= 0), s = (r >>>= 0) - (t >>>= 0), a = Math.min(i, s), u = this.slice(n, o), c = e.slice(t, r), f = 0; f < a; ++f)if (u[f] !== c[f]) {
            i = u[f], s = c[f];
            break;
        }
        return i < s ? -1 : s < i ? 1 : 0;
    }, In.prototype.includes = function(e, t, r) {
        return -1 !== this.indexOf(e, t, r);
    }, In.prototype.indexOf = function(e, t, r) {
        return Hn(this, e, t, r, !0);
    }, In.prototype.lastIndexOf = function(e, t, r) {
        return Hn(this, e, t, r, !1);
    }, In.prototype.write = function(e, t, r, n) {
        if (void 0 === t) n = "utf8", r = this.length, t = 0;
        else if (void 0 === r && "string" == typeof t) n = t, r = this.length, t = 0;
        else {
            if (!isFinite(t)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
            t >>>= 0, isFinite(r) ? (r >>>= 0, void 0 === n && (n = "utf8")) : (n = r, r = void 0);
        }
        var o = this.length - t;
        if ((void 0 === r || r > o) && (r = o), e.length > 0 && (r < 0 || t < 0) || t > this.length) throw new RangeError("Attempt to write outside buffer bounds");
        n || (n = "utf8");
        for(var i = !1;;)switch(n){
            case "hex":
                return Jn(this, e, t, r);
            case "utf8":
            case "utf-8":
                return Wn(this, e, t, r);
            case "ascii":
            case "latin1":
            case "binary":
                return Yn(this, e, t, r);
            case "base64":
                return Vn(this, e, t, r);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return Gn(this, e, t, r);
            default:
                if (i) throw new TypeError("Unknown encoding: " + n);
                n = ("" + n).toLowerCase(), i = !0;
        }
    }, In.prototype.toJSON = function() {
        return {
            type: "Buffer",
            data: Array.prototype.slice.call(this._arr || this, 0)
        };
    };
    var Xn = 4096;
    function eo(e, t, r) {
        var n = "";
        r = Math.min(e.length, r);
        for(var o = t; o < r; ++o)n += String.fromCharCode(127 & e[o]);
        return n;
    }
    function to(e, t, r) {
        var n = "";
        r = Math.min(e.length, r);
        for(var o = t; o < r; ++o)n += String.fromCharCode(e[o]);
        return n;
    }
    function ro(e, t, r) {
        var n = e.length;
        (!t || t < 0) && (t = 0), (!r || r < 0 || r > n) && (r = n);
        for(var o = "", i = t; i < r; ++i)o += go[e[i]];
        return o;
    }
    function no(e, t, r) {
        for(var n = e.slice(t, r), o = "", i = 0; i < n.length - 1; i += 2)o += String.fromCharCode(n[i] + 256 * n[i + 1]);
        return o;
    }
    function oo(e, t, r) {
        if (e % 1 != 0 || e < 0) throw new RangeError("offset is not uint");
        if (e + t > r) throw new RangeError("Trying to access beyond buffer length");
    }
    function io(e, t, r, n, o, i) {
        if (!In.isBuffer(e)) throw new TypeError('"buffer" argument must be a Buffer instance');
        if (t > o || t < i) throw new RangeError('"value" argument is out of bounds');
        if (r + n > e.length) throw new RangeError("Index out of range");
    }
    function so(e, t, r, n, o, i) {
        if (r + n > e.length) throw new RangeError("Index out of range");
        if (r < 0) throw new RangeError("Index out of range");
    }
    function ao(e, t, r, n, o) {
        return t = +t, r >>>= 0, o || so(e, 0, r, 4), En(e, t, r, n, 23, 4), r + 4;
    }
    function uo(e, t, r, n, o) {
        return t = +t, r >>>= 0, o || so(e, 0, r, 8), En(e, t, r, n, 52, 8), r + 8;
    }
    In.prototype.slice = function(e, t) {
        var r = this.length;
        (e = ~~e) < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r), (t = void 0 === t ? r : ~~t) < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r), t < e && (t = e);
        var n = this.subarray(e, t);
        return Object.setPrototypeOf(n, In.prototype), n;
    }, In.prototype.readUintLE = In.prototype.readUIntLE = function(e, t, r) {
        e >>>= 0, t >>>= 0, r || oo(e, t, this.length);
        for(var n = this[e], o = 1, i = 0; ++i < t && (o *= 256);)n += this[e + i] * o;
        return n;
    }, In.prototype.readUintBE = In.prototype.readUIntBE = function(e, t, r) {
        e >>>= 0, t >>>= 0, r || oo(e, t, this.length);
        for(var n = this[e + --t], o = 1; t > 0 && (o *= 256);)n += this[e + --t] * o;
        return n;
    }, In.prototype.readUint8 = In.prototype.readUInt8 = function(e, t) {
        return e >>>= 0, t || oo(e, 1, this.length), this[e];
    }, In.prototype.readUint16LE = In.prototype.readUInt16LE = function(e, t) {
        return e >>>= 0, t || oo(e, 2, this.length), this[e] | this[e + 1] << 8;
    }, In.prototype.readUint16BE = In.prototype.readUInt16BE = function(e, t) {
        return e >>>= 0, t || oo(e, 2, this.length), this[e] << 8 | this[e + 1];
    }, In.prototype.readUint32LE = In.prototype.readUInt32LE = function(e, t) {
        return e >>>= 0, t || oo(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3];
    }, In.prototype.readUint32BE = In.prototype.readUInt32BE = function(e, t) {
        return e >>>= 0, t || oo(e, 4, this.length), 16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]);
    }, In.prototype.readIntLE = function(e, t, r) {
        e >>>= 0, t >>>= 0, r || oo(e, t, this.length);
        for(var n = this[e], o = 1, i = 0; ++i < t && (o *= 256);)n += this[e + i] * o;
        return n >= (o *= 128) && (n -= Math.pow(2, 8 * t)), n;
    }, In.prototype.readIntBE = function(e, t, r) {
        e >>>= 0, t >>>= 0, r || oo(e, t, this.length);
        for(var n = t, o = 1, i = this[e + --n]; n > 0 && (o *= 256);)i += this[e + --n] * o;
        return i >= (o *= 128) && (i -= Math.pow(2, 8 * t)), i;
    }, In.prototype.readInt8 = function(e, t) {
        return e >>>= 0, t || oo(e, 1, this.length), 128 & this[e] ? -1 * (255 - this[e] + 1) : this[e];
    }, In.prototype.readInt16LE = function(e, t) {
        e >>>= 0, t || oo(e, 2, this.length);
        var r = this[e] | this[e + 1] << 8;
        return 32768 & r ? 4294901760 | r : r;
    }, In.prototype.readInt16BE = function(e, t) {
        e >>>= 0, t || oo(e, 2, this.length);
        var r = this[e + 1] | this[e] << 8;
        return 32768 & r ? 4294901760 | r : r;
    }, In.prototype.readInt32LE = function(e, t) {
        return e >>>= 0, t || oo(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24;
    }, In.prototype.readInt32BE = function(e, t) {
        return e >>>= 0, t || oo(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3];
    }, In.prototype.readFloatLE = function(e, t) {
        return e >>>= 0, t || oo(e, 4, this.length), An(this, e, !0, 23, 4);
    }, In.prototype.readFloatBE = function(e, t) {
        return e >>>= 0, t || oo(e, 4, this.length), An(this, e, !1, 23, 4);
    }, In.prototype.readDoubleLE = function(e, t) {
        return e >>>= 0, t || oo(e, 8, this.length), An(this, e, !0, 52, 8);
    }, In.prototype.readDoubleBE = function(e, t) {
        return e >>>= 0, t || oo(e, 8, this.length), An(this, e, !1, 52, 8);
    }, In.prototype.writeUintLE = In.prototype.writeUIntLE = function(e, t, r, n) {
        (e = +e, t >>>= 0, r >>>= 0, n) || io(this, e, t, r, Math.pow(2, 8 * r) - 1, 0);
        var o = 1, i = 0;
        for(this[t] = 255 & e; ++i < r && (o *= 256);)this[t + i] = e / o & 255;
        return t + r;
    }, In.prototype.writeUintBE = In.prototype.writeUIntBE = function(e, t, r, n) {
        (e = +e, t >>>= 0, r >>>= 0, n) || io(this, e, t, r, Math.pow(2, 8 * r) - 1, 0);
        var o = r - 1, i = 1;
        for(this[t + o] = 255 & e; --o >= 0 && (i *= 256);)this[t + o] = e / i & 255;
        return t + r;
    }, In.prototype.writeUint8 = In.prototype.writeUInt8 = function(e, t, r) {
        return e = +e, t >>>= 0, r || io(this, e, t, 1, 255, 0), this[t] = 255 & e, t + 1;
    }, In.prototype.writeUint16LE = In.prototype.writeUInt16LE = function(e, t, r) {
        return e = +e, t >>>= 0, r || io(this, e, t, 2, 65535, 0), this[t] = 255 & e, this[t + 1] = e >>> 8, t + 2;
    }, In.prototype.writeUint16BE = In.prototype.writeUInt16BE = function(e, t, r) {
        return e = +e, t >>>= 0, r || io(this, e, t, 2, 65535, 0), this[t] = e >>> 8, this[t + 1] = 255 & e, t + 2;
    }, In.prototype.writeUint32LE = In.prototype.writeUInt32LE = function(e, t, r) {
        return e = +e, t >>>= 0, r || io(this, e, t, 4, 4294967295, 0), this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = 255 & e, t + 4;
    }, In.prototype.writeUint32BE = In.prototype.writeUInt32BE = function(e, t, r) {
        return e = +e, t >>>= 0, r || io(this, e, t, 4, 4294967295, 0), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e, t + 4;
    }, In.prototype.writeIntLE = function(e, t, r, n) {
        if (e = +e, t >>>= 0, !n) {
            var o = Math.pow(2, 8 * r - 1);
            io(this, e, t, r, o - 1, -o);
        }
        var i = 0, s = 1, a = 0;
        for(this[t] = 255 & e; ++i < r && (s *= 256);)e < 0 && 0 === a && 0 !== this[t + i - 1] && (a = 1), this[t + i] = (e / s >> 0) - a & 255;
        return t + r;
    }, In.prototype.writeIntBE = function(e, t, r, n) {
        if (e = +e, t >>>= 0, !n) {
            var o = Math.pow(2, 8 * r - 1);
            io(this, e, t, r, o - 1, -o);
        }
        var i = r - 1, s = 1, a = 0;
        for(this[t + i] = 255 & e; --i >= 0 && (s *= 256);)e < 0 && 0 === a && 0 !== this[t + i + 1] && (a = 1), this[t + i] = (e / s >> 0) - a & 255;
        return t + r;
    }, In.prototype.writeInt8 = function(e, t, r) {
        return e = +e, t >>>= 0, r || io(this, e, t, 1, 127, -128), e < 0 && (e = 255 + e + 1), this[t] = 255 & e, t + 1;
    }, In.prototype.writeInt16LE = function(e, t, r) {
        return e = +e, t >>>= 0, r || io(this, e, t, 2, 32767, -32768), this[t] = 255 & e, this[t + 1] = e >>> 8, t + 2;
    }, In.prototype.writeInt16BE = function(e, t, r) {
        return e = +e, t >>>= 0, r || io(this, e, t, 2, 32767, -32768), this[t] = e >>> 8, this[t + 1] = 255 & e, t + 2;
    }, In.prototype.writeInt32LE = function(e, t, r) {
        return e = +e, t >>>= 0, r || io(this, e, t, 4, 2147483647, -2147483648), this[t] = 255 & e, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24, t + 4;
    }, In.prototype.writeInt32BE = function(e, t, r) {
        return e = +e, t >>>= 0, r || io(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e, t + 4;
    }, In.prototype.writeFloatLE = function(e, t, r) {
        return ao(this, e, t, !0, r);
    }, In.prototype.writeFloatBE = function(e, t, r) {
        return ao(this, e, t, !1, r);
    }, In.prototype.writeDoubleLE = function(e, t, r) {
        return uo(this, e, t, !0, r);
    }, In.prototype.writeDoubleBE = function(e, t, r) {
        return uo(this, e, t, !1, r);
    }, In.prototype.copy = function(e, t, r, n) {
        if (!In.isBuffer(e)) throw new TypeError("argument should be a Buffer");
        if (r || (r = 0), n || 0 === n || (n = this.length), t >= e.length && (t = e.length), t || (t = 0), n > 0 && n < r && (n = r), n === r) return 0;
        if (0 === e.length || 0 === this.length) return 0;
        if (t < 0) throw new RangeError("targetStart out of bounds");
        if (r < 0 || r >= this.length) throw new RangeError("Index out of range");
        if (n < 0) throw new RangeError("sourceEnd out of bounds");
        n > this.length && (n = this.length), e.length - t < n - r && (n = e.length - t + r);
        var o = n - r;
        return this === e && "function" == typeof Uint8Array.prototype.copyWithin ? this.copyWithin(t, r, n) : Uint8Array.prototype.set.call(e, this.subarray(r, n), t), o;
    }, In.prototype.fill = function(e, t, r, n) {
        if ("string" == typeof e) {
            if ("string" == typeof t ? (n = t, t = 0, r = this.length) : "string" == typeof r && (n = r, r = this.length), void 0 !== n && "string" != typeof n) throw new TypeError("encoding must be a string");
            if ("string" == typeof n && !In.isEncoding(n)) throw new TypeError("Unknown encoding: " + n);
            if (1 === e.length) {
                var o = e.charCodeAt(0);
                ("utf8" === n && o < 128 || "latin1" === n) && (e = o);
            }
        } else "number" == typeof e ? e &= 255 : "boolean" == typeof e && (e = Number(e));
        if (t < 0 || this.length < t || this.length < r) throw new RangeError("Out of range index");
        if (r <= t) return this;
        var i;
        if (t >>>= 0, r = void 0 === r ? this.length : r >>> 0, e || (e = 0), "number" == typeof e) for(i = t; i < r; ++i)this[i] = e;
        else {
            var s = In.isBuffer(e) ? e : In.from(e, n), a = s.length;
            if (0 === a) throw new TypeError('The value "' + e + '" is invalid for argument "value"');
            for(i = 0; i < r - t; ++i)this[i + t] = s[i % a];
        }
        return this;
    };
    var co = /[^+/0-9A-Za-z-_]/g;
    function fo(e, t) {
        var r;
        t = t || 1 / 0;
        for(var n = e.length, o = null, i = [], s = 0; s < n; ++s){
            if ((r = e.charCodeAt(s)) > 55295 && r < 57344) {
                if (!o) {
                    if (r > 56319) {
                        (t -= 3) > -1 && i.push(239, 191, 189);
                        continue;
                    }
                    if (s + 1 === n) {
                        (t -= 3) > -1 && i.push(239, 191, 189);
                        continue;
                    }
                    o = r;
                    continue;
                }
                if (r < 56320) {
                    (t -= 3) > -1 && i.push(239, 191, 189), o = r;
                    continue;
                }
                r = 65536 + (o - 55296 << 10 | r - 56320);
            } else o && (t -= 3) > -1 && i.push(239, 191, 189);
            if (o = null, r < 128) {
                if ((t -= 1) < 0) break;
                i.push(r);
            } else if (r < 2048) {
                if ((t -= 2) < 0) break;
                i.push(r >> 6 | 192, 63 & r | 128);
            } else if (r < 65536) {
                if ((t -= 3) < 0) break;
                i.push(r >> 12 | 224, r >> 6 & 63 | 128, 63 & r | 128);
            } else {
                if (!(r < 1114112)) throw new Error("Invalid code point");
                if ((t -= 4) < 0) break;
                i.push(r >> 18 | 240, r >> 12 & 63 | 128, r >> 6 & 63 | 128, 63 & r | 128);
            }
        }
        return i;
    }
    function lo(e) {
        return ln(function(e) {
            if ((e = (e = e.split("=")[0]).trim().replace(co, "")).length < 2) return "";
            for(; e.length % 4 != 0;)e += "=";
            return e;
        }(e));
    }
    function ho(e, t, r, n) {
        for(var o = 0; o < n && !(o + r >= t.length || o >= e.length); ++o)t[o + r] = e[o];
        return o;
    }
    function po(e, t) {
        return e instanceof t || null != e && null != e.constructor && null != e.constructor.name && e.constructor.name === t.name;
    }
    function yo(e) {
        return e != e;
    }
    var go = function() {
        for(var e = "0123456789abcdef", t = new Array(256), r = 0; r < 16; ++r)for(var n = 16 * r, o = 0; o < 16; ++o)t[n + o] = e[r] + e[o];
        return t;
    }(), bo = fn;
    const mo = "function" == typeof atob, wo = "function" == typeof btoa, vo = "function" == typeof bo, Ao = "function" == typeof TextDecoder ? new TextDecoder : void 0, Eo = "function" == typeof TextEncoder ? new TextEncoder : void 0, Co = Array.prototype.slice.call("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="), So = ((e)=>{
        let t = {};
        return e.forEach((e, r)=>t[e] = r), t;
    })(Co), Oo = /^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/, ko = String.fromCharCode.bind(String), _o = "function" == typeof Uint8Array.from ? Uint8Array.from.bind(Uint8Array) : (e, t = (e)=>e)=>new Uint8Array(Array.prototype.slice.call(e, 0).map(t)), Po = (e)=>e.replace(/=/g, "").replace(/[+\/]/g, (e)=>"+" == e ? "-" : "_"), Ro = (e)=>e.replace(/[^A-Za-z0-9\+\/]/g, ""), To = (e)=>{
        let t, r, n, o, i = "";
        const s = e.length % 3;
        for(let s1 = 0; s1 < e.length;){
            if ((r = e.charCodeAt(s1++)) > 255 || (n = e.charCodeAt(s1++)) > 255 || (o = e.charCodeAt(s1++)) > 255) throw new TypeError("invalid character found");
            t = r << 16 | n << 8 | o, i += Co[t >> 18 & 63] + Co[t >> 12 & 63] + Co[t >> 6 & 63] + Co[63 & t];
        }
        return s ? i.slice(0, s - 3) + "===".substring(s) : i;
    }, Uo = wo ? (e)=>btoa(e) : vo ? (e)=>bo.from(e, "binary").toString("base64") : To, jo = vo ? (e)=>bo.from(e).toString("base64") : (e)=>{
        let t = [];
        for(let r = 0, n = e.length; r < n; r += 4096)t.push(ko.apply(null, e.subarray(r, r + 4096)));
        return Uo(t.join(""));
    }, xo = (e, t = !1)=>t ? Po(jo(e)) : jo(e), Io = (e)=>{
        if (e.length < 2) return (t = e.charCodeAt(0)) < 128 ? e : t < 2048 ? ko(192 | t >>> 6) + ko(128 | 63 & t) : ko(224 | t >>> 12 & 15) + ko(128 | t >>> 6 & 63) + ko(128 | 63 & t);
        var t = 65536 + 1024 * (e.charCodeAt(0) - 55296) + (e.charCodeAt(1) - 56320);
        return ko(240 | t >>> 18 & 7) + ko(128 | t >>> 12 & 63) + ko(128 | t >>> 6 & 63) + ko(128 | 63 & t);
    }, Fo = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g, Bo = (e)=>e.replace(Fo, Io), Mo = vo ? (e)=>bo.from(e, "utf8").toString("base64") : Eo ? (e)=>jo(Eo.encode(e)) : (e)=>Uo(Bo(e)), Lo = (e, t = !1)=>t ? Po(Mo(e)) : Mo(e), Ko = (e)=>Lo(e, !0), Do = /[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g, qo = (e)=>{
        switch(e.length){
            case 4:
                var t = ((7 & e.charCodeAt(0)) << 18 | (63 & e.charCodeAt(1)) << 12 | (63 & e.charCodeAt(2)) << 6 | 63 & e.charCodeAt(3)) - 65536;
                return ko(55296 + (t >>> 10)) + ko(56320 + (1023 & t));
            case 3:
                return ko((15 & e.charCodeAt(0)) << 12 | (63 & e.charCodeAt(1)) << 6 | 63 & e.charCodeAt(2));
            default:
                return ko((31 & e.charCodeAt(0)) << 6 | 63 & e.charCodeAt(1));
        }
    }, No = (e)=>e.replace(Do, qo), zo = (e)=>{
        if (e = e.replace(/\s+/g, ""), !Oo.test(e)) throw new TypeError("malformed base64.");
        e += "==".slice(2 - (3 & e.length));
        let t, r, n, o = "";
        for(let i = 0; i < e.length;)t = So[e.charAt(i++)] << 18 | So[e.charAt(i++)] << 12 | (r = So[e.charAt(i++)]) << 6 | (n = So[e.charAt(i++)]), o += 64 === r ? ko(t >> 16 & 255) : 64 === n ? ko(t >> 16 & 255, t >> 8 & 255) : ko(t >> 16 & 255, t >> 8 & 255, 255 & t);
        return o;
    }, Ho = mo ? (e)=>atob(Ro(e)) : vo ? (e)=>bo.from(e, "base64").toString("binary") : zo, $o = vo ? (e)=>_o(bo.from(e, "base64")) : (e)=>_o(Ho(e), (e)=>e.charCodeAt(0)), Jo = vo ? (e)=>bo.from(e, "base64").toString("utf8") : Ao ? (e)=>Ao.decode($o(e)) : (e)=>No(Ho(e)), Wo = (e)=>Ro(e.replace(/[-_]/g, (e)=>"-" == e ? "+" : "/")), Yo = (e)=>Jo(Wo(e)), Vo = "object" == typeof globalThis && globalThis.crypto ? globalThis.crypto : i("e8CjI").default, Go = Vo.subtle, Zo = {
        ES384: {
            name: "ECDSA",
            namedCurve: "P-384"
        },
        RS384: {
            name: "RSASSA-PKCS1-v1_5",
            modulusLength: 4096,
            publicExponent: new Uint8Array([
                1,
                0,
                1
            ]),
            hash: {
                name: "SHA-384"
            }
        }
    };
    function Qo(e) {
        return Vo.getRandomValues(new Uint8Array(e));
    }
    async function Xo(e) {
        const t = (new TextEncoder).encode(e), r = await Go.digest("SHA-256", t);
        return new Uint8Array(r);
    }
    se.randomBytes = Qo, se.digestSha256 = Xo;
    se.generatePKCEChallenge = async (e = 96)=>{
        const t = Qo(e), r = xo(t, !0);
        return {
            codeChallenge: xo(await Xo(r), !0),
            codeVerifier: r
        };
    }, se.importJWK = async function(e) {
        if (!e.alg) throw new Error('The "alg" property of the JWK must be set to "ES384" or "RS384"');
        if (Array.isArray(e.key_ops) || (e.key_ops = [
            "sign"
        ]), !e.key_ops.includes("sign")) throw new Error('The "key_ops" property of the JWK does not contain "sign"');
        try {
            return await Go.importKey("jwk", e, Zo[e.alg], !0 === e.ext, e.key_ops);
        } catch (t) {
            throw new Error(`The ${e.alg} is not supported by this browser: ${t}`);
        }
    }, se.signCompactJws = async function(e, t, r, n) {
        const o = JSON.stringify(Object.assign(Object.assign({}, r), {
            alg: e
        })), i = JSON.stringify(n), s = `${Ko(o)}.${Ko(i)}`, a = await Go.sign(Object.assign(Object.assign({}, t.algorithm), {
            hash: "SHA-384"
        }), t, (new TextEncoder).encode(s));
        return `${s}.${xo(new Uint8Array(a), !0)}`;
    };
    s.default = class {
        constructor(e = {}){
            this._url = null, this._storage = null, this.security = se, this.options = Object.assign({
                replaceBrowserHistory: !0,
                fullSessionStorageSupport: !0,
                refreshTokenWithCredentials: "same-origin"
            }, e);
        }
        relative(e) {
            return new URL(e, this.getUrl().href).href;
        }
        get fhir() {
            return "function" == typeof fhir ? fhir : null;
        }
        getUrl() {
            return this._url || (this._url = new URL(location + "")), this._url;
        }
        redirect(e) {
            location.href = e;
        }
        getStorage() {
            return this._storage || (this._storage = new ie.default), this._storage;
        }
        getAbortController() {
            return AbortController;
        }
        atob(e) {
            return window.atob(e);
        }
        btoa(e) {
            return window.btoa(e);
        }
        base64urlencode(e) {
            return "string" == typeof e ? Ko(e) : xo(e, !0);
        }
        base64urldecode(e) {
            return Yo(e);
        }
        getSmartApi() {
            return {
                ready: (...e)=>(0, a.ready)(this, ...e),
                authorize: (e)=>(0, a.authorize)(this, e),
                init: (e)=>(0, a.init)(this, e),
                client: (e)=>new z.default(this, e),
                options: this.options,
                utils: {
                    security: se
                }
            };
        }
    };
    const ei = new s.default, { ready: ti , authorize: ri , init: ni , client: oi , options: ii , utils: si  } = ei.getSmartApi();
    if ("undefined" == typeof FHIRCLIENT_PURE) {
        const e1 = i("16s93");
        i("jk3TS"), window.fetch || (window.fetch = e1.default, window.Headers = e1.Headers, window.Request = e1.Request, window.Response = e1.Response);
    }
    r({
        AbortController: window.AbortController,
        client: oi,
        utils: si,
        oauth2: {
            settings: ii,
            ready: ti,
            authorize: ri,
            init: ni
        }
    }).oauth2.authorize({
        clientId: "my_fhir_web_app",
        fhirServiceUrl: "https://r4.smarthealthit.org",
        redirectUri: "index.html",
        patientId: "a85b31e5-8f0c-480d-9e81-67408608dd7a"
    });
})();

},{}]},["H0nJn","pOdDW"], "pOdDW", "parcelRequire17b7")

//# sourceMappingURL=launch.9b99cd7f.js.map
