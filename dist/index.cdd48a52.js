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
})({"g8F36":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "07da0900cdd48a52";
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

},{}],"l6Vub":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _fhirclient = require("fhirclient");
var _fhirclientDefault = parcelHelpers.interopDefault(_fhirclient);
(0, _fhirclientDefault.default).oauth2.ready().then((smart)=>{
    console.log(smart.state.clientId);
});

},{"fhirclient":"l96Gb","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"l96Gb":[function(require,module,exports) {
"use strict"; // In Browsers we create an adapter, get the SMART api from it and build the
// global FHIR object
const BrowserAdapter_1 = require("../adapters/BrowserAdapter");
const adapter = new BrowserAdapter_1.default();
const { ready , authorize , init , client , options , utils  } = adapter.getSmartApi(); // We have two kinds of browser builds - "pure" for new browsers and "legacy"
// for old ones. In pure builds we assume that the browser supports everything
// we need. In legacy mode, the library also acts as a polyfill. Babel will
// automatically polyfill everything except "fetch", which we have to handle
// manually.
// @ts-ignore
if (typeof FHIRCLIENT_PURE == "undefined") {
    const fetch = require("cross-fetch");
    require("abortcontroller-polyfill/dist/abortcontroller-polyfill-only");
    if (!window.fetch) {
        window.fetch = fetch.default;
        window.Headers = fetch.Headers;
        window.Request = fetch.Request;
        window.Response = fetch.Response;
    }
} // $lab:coverage:off$
const FHIR = {
    AbortController: window.AbortController,
    client,
    utils,
    oauth2: {
        settings: options,
        ready,
        authorize,
        init
    }
};
module.exports = FHIR; // $lab:coverage:on$

},{"../adapters/BrowserAdapter":"fn3Zn","cross-fetch":"j4ah4","abortcontroller-polyfill/dist/abortcontroller-polyfill-only":"8wzf3"}],"fn3Zn":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const smart_1 = require("../smart");
const Client_1 = require("../Client");
const BrowserStorage_1 = require("../storage/BrowserStorage");
const security = require("../security/browser");
const js_base64_1 = require("js-base64");
/**
 * Browser Adapter
 */ class BrowserAdapter {
    /**
   * @param options Environment-specific options
   */ constructor(options = {}){
        /**
     * Stores the URL instance associated with this adapter
     */ this._url = null;
        /**
     * Holds the Storage instance associated with this instance
     */ this._storage = null;
        this.security = security;
        this.options = Object.assign({
            // Replaces the browser's current URL
            // using window.history.replaceState API or by reloading.
            replaceBrowserHistory: true,
            // When set to true, this variable will fully utilize
            // HTML5 sessionStorage API.
            // This variable can be overridden to false by setting
            // FHIR.oauth2.settings.fullSessionStorageSupport = false.
            // When set to false, the sessionStorage will be keyed
            // by a state variable. This is to allow the embedded IE browser
            // instances instantiated on a single thread to continue to
            // function without having sessionStorage data shared
            // across the embedded IE instances.
            fullSessionStorageSupport: true,
            // Do we want to send cookies while making a request to the token
            // endpoint in order to obtain new access token using existing
            // refresh token. In rare cases the auth server might require the
            // client to send cookies along with those requests. In this case
            // developers will have to change this before initializing the app
            // like so:
            // `FHIR.oauth2.settings.refreshTokenWithCredentials = "include";`
            // or
            // `FHIR.oauth2.settings.refreshTokenWithCredentials = "same-origin";`
            // Can be one of:
            // "include"     - always send cookies
            // "same-origin" - only send cookies if we are on the same domain (default)
            // "omit"        - do not send cookies
            refreshTokenWithCredentials: "same-origin"
        }, options);
    }
    /**
   * Given a relative path, returns an absolute url using the instance base URL
   */ relative(path) {
        return new URL(path, this.getUrl().href).href;
    }
    /**
   * In browsers we need to be able to (dynamically) check if fhir.js is
   * included in the page. If it is, it should have created a "fhir" variable
   * in the global scope.
   */ get fhir() {
        // @ts-ignore
        return typeof fhir === "function" ? fhir : null;
    }
    /**
   * Given the current environment, this method must return the current url
   * as URL instance
   */ getUrl() {
        if (!this._url) this._url = new URL(location + "");
        return this._url;
    }
    /**
   * Given the current environment, this method must redirect to the given
   * path
   */ redirect(to) {
        location.href = to;
    }
    /**
   * Returns a BrowserStorage object which is just a wrapper around
   * sessionStorage
   */ getStorage() {
        if (!this._storage) this._storage = new BrowserStorage_1.default();
        return this._storage;
    }
    /**
   * Returns a reference to the AbortController constructor. In browsers,
   * AbortController will always be available as global (native or polyfilled)
   */ getAbortController() {
        return AbortController;
    }
    /**
   * ASCII string to Base64
   */ atob(str) {
        return window.atob(str);
    }
    /**
   * Base64 to ASCII string
   */ btoa(str) {
        return window.btoa(str);
    }
    base64urlencode(input) {
        if (typeof input == "string") return (0, js_base64_1.encodeURL)(input);
        return (0, js_base64_1.fromUint8Array)(input, true);
    }
    base64urldecode(input) {
        return (0, js_base64_1.decode)(input);
    }
    /**
   * Creates and returns adapter-aware SMART api. Not that while the shape of
   * the returned object is well known, the arguments to this function are not.
   * Those who override this method are free to require any environment-specific
   * arguments. For example in node we will need a request, a response and
   * optionally a storage or storage factory function.
   */ getSmartApi() {
        return {
            ready: (...args)=>(0, smart_1.ready)(this, ...args),
            authorize: (options)=>(0, smart_1.authorize)(this, options),
            init: (options)=>(0, smart_1.init)(this, options),
            client: (state)=>new Client_1.default(this, state),
            options: this.options,
            utils: {
                security
            }
        };
    }
}
exports.default = BrowserAdapter;

},{"../smart":"g4sXM","../Client":"e8vjN","../storage/BrowserStorage":"cKEty","../security/browser":"jh26J","js-base64":"9GjXb"}],"g4sXM":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.init = exports.buildTokenRequest = exports.ready = exports.onMessage = exports.isInPopUp = exports.isInFrame = exports.authorize = exports.getSecurityExtensions = exports.fetchWellKnownJson = exports.KEY = void 0;
/* global window */ const lib_1 = require("./lib");
const Client_1 = require("./Client");
const settings_1 = require("./settings");
Object.defineProperty(exports, "KEY", {
    enumerable: true,
    get: function() {
        return settings_1.SMART_KEY;
    }
});
const debug = lib_1.debug.extend("oauth2");
function isBrowser() {
    return typeof window === "object";
}
/**
 * Fetches the well-known json file from the given base URL.
 * Note that the result is cached in memory (until the page is reloaded in the
 * browser) because it might have to be re-used by the client
 * @param baseUrl The base URL of the FHIR server
 */ function fetchWellKnownJson(baseUrl = "/", requestOptions) {
    const url = String(baseUrl).replace(/\/*$/, "/") + ".well-known/smart-configuration";
    return (0, lib_1.getAndCache)(url, requestOptions).catch((ex)=>{
        throw new Error(`Failed to fetch the well-known json "${url}". ${ex.message}`);
    });
}
exports.fetchWellKnownJson = fetchWellKnownJson;
/**
 * Fetch a "WellKnownJson" and extract the SMART endpoints from it
 */ function getSecurityExtensionsFromWellKnownJson(baseUrl = "/", requestOptions) {
    return fetchWellKnownJson(baseUrl, requestOptions).then((meta)=>{
        if (!meta.authorization_endpoint || !meta.token_endpoint) throw new Error("Invalid wellKnownJson");
        return {
            registrationUri: meta.registration_endpoint || "",
            authorizeUri: meta.authorization_endpoint,
            tokenUri: meta.token_endpoint,
            codeChallengeMethods: meta.code_challenge_methods_supported || []
        };
    });
}
/**
 * Fetch a `CapabilityStatement` and extract the SMART endpoints from it
 */ function getSecurityExtensionsFromConformanceStatement(baseUrl = "/", requestOptions) {
    return (0, lib_1.fetchConformanceStatement)(baseUrl, requestOptions).then((meta)=>{
        const nsUri = "http://fhir-registry.smarthealthit.org/StructureDefinition/oauth-uris";
        const extensions = ((0, lib_1.getPath)(meta || {}, "rest.0.security.extension") || []).filter((e)=>e.url === nsUri).map((o)=>o.extension)[0];
        const out = {
            registrationUri: "",
            authorizeUri: "",
            tokenUri: "",
            codeChallengeMethods: []
        };
        if (extensions) extensions.forEach((ext)=>{
            if (ext.url === "register") out.registrationUri = ext.valueUri;
            if (ext.url === "authorize") out.authorizeUri = ext.valueUri;
            if (ext.url === "token") out.tokenUri = ext.valueUri;
        });
        return out;
    });
}
/**
 * Given a FHIR server, returns an object with it's Oauth security endpoints
 * that we are interested in. This will try to find the info in both the
 * `CapabilityStatement` and the `.well-known/smart-configuration`. Whatever
 * Arrives first will be used and the other request will be aborted.
 * @param [baseUrl = "/"] Fhir server base URL
 */ function getSecurityExtensions(baseUrl = "/") {
    return getSecurityExtensionsFromWellKnownJson(baseUrl).catch(()=>getSecurityExtensionsFromConformanceStatement(baseUrl));
}
exports.getSecurityExtensions = getSecurityExtensions;
/**
 * Starts the SMART Launch Sequence.
 * > **IMPORTANT**:
 *   `authorize()` will end up redirecting you to the authorization server.
 *    This means that you should not add anything to the returned promise chain.
 *    Any code written directly after the authorize() call might not be executed
 *    due to that redirect!
 * @param env
 * @param [params]
 */ async function authorize(env, params = {}) {
    const url = env.getUrl(); // Multiple config for EHR launches ---------------------------------------
    if (Array.isArray(params)) {
        const urlISS = url.searchParams.get("iss") || url.searchParams.get("fhirServiceUrl");
        if (!urlISS) throw new Error('Passing in an "iss" url parameter is required if authorize uses multiple configurations');
         // pick the right config
        const cfg = params.find((x)=>{
            if (x.issMatch) {
                if (typeof x.issMatch === "function") return !!x.issMatch(urlISS);
                if (typeof x.issMatch === "string") return x.issMatch === urlISS;
                if (x.issMatch instanceof RegExp) return x.issMatch.test(urlISS);
            }
            return false;
        });
        (0, lib_1.assert)(cfg, `No configuration found matching the current "iss" parameter "${urlISS}"`);
        return await authorize(env, cfg);
    } // ------------------------------------------------------------------------
    // Obtain input
    const { redirect_uri , clientSecret , fakeTokenResponse , patientId , encounterId , client_id , target , width , height , pkceMode , clientPublicKeySetUrl  } = params;
    let { iss , launch , fhirServiceUrl , redirectUri , noRedirect , scope ="" , clientId , completeInTarget , clientPrivateJwk  } = params;
    const storage = env.getStorage(); // For these three an url param takes precedence over inline option
    iss = url.searchParams.get("iss") || iss;
    fhirServiceUrl = url.searchParams.get("fhirServiceUrl") || fhirServiceUrl;
    launch = url.searchParams.get("launch") || launch;
    if (!clientId) clientId = client_id;
    if (!redirectUri) redirectUri = redirect_uri;
    if (!redirectUri) redirectUri = env.relative(".");
    else if (!redirectUri.match(/^https?\:\/\//)) redirectUri = env.relative(redirectUri);
    const serverUrl = String(iss || fhirServiceUrl || ""); // Validate input
    if (!serverUrl) throw new Error("No server url found. It must be specified as `iss` or as `fhirServiceUrl` parameter");
    if (iss) debug("Making %s launch...", launch ? "EHR" : "standalone");
     // append launch scope if needed
    if (launch && !scope.match(/launch/)) scope += " launch";
    if (isBrowser()) {
        const inFrame = isInFrame();
        const inPopUp = isInPopUp();
        if ((inFrame || inPopUp) && completeInTarget !== true && completeInTarget !== false) {
            // completeInTarget will default to true if authorize is called from
            // within an iframe. This is to avoid issues when the entire app
            // happens to be rendered in an iframe (including in some EHRs),
            // even though that was not how the app developer's intention.
            completeInTarget = inFrame; // In this case we can't always make the best decision so ask devs
            // to be explicit in their configuration.
            console.warn('Your app is being authorized from within an iframe or popup window. Please be explicit and provide a "completeInTarget" option. Use "true" to complete the authorization in the same window, or "false" to try to complete it in the parent or the opener window. See http://docs.smarthealthit.org/client-js/api.html');
        }
    } // If `authorize` is called, make sure we clear any previous state (in case
    // this is a re-authorize)
    const oldKey = await storage.get(settings_1.SMART_KEY);
    await storage.unset(oldKey); // create initial state
    const stateKey = (0, lib_1.randomString)(16);
    const state = {
        clientId,
        scope,
        redirectUri,
        serverUrl,
        clientSecret,
        clientPrivateJwk,
        tokenResponse: {},
        key: stateKey,
        completeInTarget,
        clientPublicKeySetUrl
    };
    const fullSessionStorageSupport = isBrowser() ? (0, lib_1.getPath)(env, "options.fullSessionStorageSupport") : true;
    if (fullSessionStorageSupport) await storage.set(settings_1.SMART_KEY, stateKey);
     // fakeTokenResponse to override stuff (useful in development)
    if (fakeTokenResponse) Object.assign(state.tokenResponse, fakeTokenResponse);
     // Fixed patientId (useful in development)
    if (patientId) Object.assign(state.tokenResponse, {
        patient: patientId
    });
     // Fixed encounterId (useful in development)
    if (encounterId) Object.assign(state.tokenResponse, {
        encounter: encounterId
    });
    let redirectUrl = redirectUri + "?state=" + encodeURIComponent(stateKey); // bypass oauth if fhirServiceUrl is used (but iss takes precedence)
    if (fhirServiceUrl && !iss) {
        debug("Making fake launch...");
        await storage.set(stateKey, state);
        if (noRedirect) return redirectUrl;
        return await env.redirect(redirectUrl);
    } // Get oauth endpoints and add them to the state
    const extensions = await getSecurityExtensions(serverUrl);
    Object.assign(state, extensions);
    await storage.set(stateKey, state); // If this happens to be an open server and there is no authorizeUri
    if (!state.authorizeUri) {
        if (noRedirect) return redirectUrl;
        return await env.redirect(redirectUrl);
    } // build the redirect uri
    const redirectParams = [
        "response_type=code",
        "client_id=" + encodeURIComponent(clientId || ""),
        "scope=" + encodeURIComponent(scope),
        "redirect_uri=" + encodeURIComponent(redirectUri),
        "aud=" + encodeURIComponent(serverUrl),
        "state=" + encodeURIComponent(stateKey)
    ]; // also pass this in case of EHR launch
    if (launch) redirectParams.push("launch=" + encodeURIComponent(launch));
    if (shouldIncludeChallenge(extensions.codeChallengeMethods.includes("S256"), pkceMode)) {
        let codes = await env.security.generatePKCEChallenge();
        Object.assign(state, codes);
        await storage.set(stateKey, state);
        redirectParams.push("code_challenge=" + state.codeChallenge); // note that the challenge is ALREADY encoded properly
        redirectParams.push("code_challenge_method=S256");
    }
    redirectUrl = state.authorizeUri + "?" + redirectParams.join("&");
    if (noRedirect) return redirectUrl;
    if (target && isBrowser()) {
        let win;
        win = await (0, lib_1.getTargetWindow)(target, width, height);
        if (win !== self) try {
            // Also remove any old state from the target window and then
            // transfer the current state there
            win.sessionStorage.removeItem(oldKey);
            win.sessionStorage.setItem(stateKey, JSON.stringify(state));
        } catch (ex) {
            (0, lib_1.debug)(`Failed to modify window.sessionStorage. Perhaps it is from different origin?. Failing back to "_self". %s`, ex);
            win = self;
        }
        if (win !== self) try {
            win.location.href = redirectUrl;
            self.addEventListener("message", onMessage);
        } catch (ex1) {
            (0, lib_1.debug)(`Failed to modify window.location. Perhaps it is from different origin?. Failing back to "_self". %s`, ex1);
            self.location.href = redirectUrl;
        }
        else self.location.href = redirectUrl;
        return;
    } else return await env.redirect(redirectUrl);
}
exports.authorize = authorize;
function shouldIncludeChallenge(S256supported, pkceMode) {
    if (pkceMode === "disabled") return false;
    if (pkceMode === "unsafeV1") return true;
    if (pkceMode === "required") {
        if (!S256supported) throw new Error("Required PKCE code challenge method (`S256`) was not found.");
        return true;
    }
    return S256supported;
}
/**
 * Checks if called within a frame. Only works in browsers!
 * If the current window has a `parent` or `top` properties that refer to
 * another window, returns true. If trying to access `top` or `parent` throws an
 * error, returns true. Otherwise returns `false`.
 */ function isInFrame() {
    try {
        return self !== top && parent !== self;
    } catch (e) {
        return true;
    }
}
exports.isInFrame = isInFrame;
/**
 * Checks if called within another window (popup or tab). Only works in browsers!
 * To consider itself called in a new window, this function verifies that:
 * 1. `self === top` (not in frame)
 * 2. `!!opener && opener !== self` The window has an opener
 * 3. `!!window.name` The window has a `name` set
 */ function isInPopUp() {
    try {
        return self === top && !!opener && opener !== self && !!window.name;
    } catch (e) {
        return false;
    }
}
exports.isInPopUp = isInPopUp;
/**
 * Another window can send a "completeAuth" message to this one, making it to
 * navigate to e.data.url
 * @param e The message event
 */ function onMessage(e) {
    if (e.data.type == "completeAuth" && e.origin === new URL(self.location.href).origin) {
        window.removeEventListener("message", onMessage);
        window.location.href = e.data.url;
    }
}
exports.onMessage = onMessage;
/**
 * The ready function should only be called on the page that represents
 * the redirectUri. We typically land there after a redirect from the
 * authorization server, but this code will also be executed upon subsequent
 * navigation or page refresh.
 */ async function ready(env, options = {}) {
    var _a, _b;
    const url = env.getUrl();
    const Storage = env.getStorage();
    const params = url.searchParams;
    let key = params.get("state");
    const code = params.get("code");
    const authError = params.get("error");
    const authErrorDescription = params.get("error_description");
    if (!key) key = await Storage.get(settings_1.SMART_KEY);
     // Start by checking the url for `error` and `error_description` parameters.
    // This happens when the auth server rejects our authorization attempt. In
    // this case it has no other way to tell us what the error was, other than
    // appending these parameters to the redirect url.
    // From client's point of view, this is not very reliable (because we can't
    // know how we have landed on this page - was it a redirect or was it loaded
    // manually). However, if `ready()` is being called, we can assume
    // that the url comes from the auth server (otherwise the app won't work
    // anyway).
    if (authError || authErrorDescription) throw new Error([
        authError,
        authErrorDescription
    ].filter(Boolean).join(": "));
    debug("key: %s, code: %s", key, code); // key might be coming from the page url so it might be empty or missing
    (0, lib_1.assert)(key, "No 'state' parameter found. Please (re)launch the app."); // Check if we have a previous state
    let state = await Storage.get(key);
    const fullSessionStorageSupport = isBrowser() ? (0, lib_1.getPath)(env, "options.fullSessionStorageSupport") : true; // If we are in a popup window or an iframe and the authorization is
    // complete, send the location back to our opener and exit.
    if (isBrowser() && state && !state.completeInTarget) {
        const inFrame = isInFrame();
        const inPopUp = isInPopUp(); // we are about to return to the opener/parent where completeAuth will
        // be called again. In rare cases the opener or parent might also be
        // a frame or popup. Then inFrame or inPopUp will be true but we still
        // have to stop going up the chain. To guard against that weird form of
        // recursion we pass one additional parameter to the url which we later
        // remove.
        if ((inFrame || inPopUp) && !url.searchParams.get("complete")) {
            url.searchParams.set("complete", "1");
            const { href , origin  } = url;
            if (inFrame) parent.postMessage({
                type: "completeAuth",
                url: href
            }, origin);
            if (inPopUp) {
                opener.postMessage({
                    type: "completeAuth",
                    url: href
                }, origin);
                window.close();
            }
            return new Promise(()=>{});
        }
    }
    url.searchParams.delete("complete"); // Do we have to remove the `code` and `state` params from the URL?
    const hasState = params.has("state");
    if (isBrowser() && (0, lib_1.getPath)(env, "options.replaceBrowserHistory") && (code || hasState)) {
        // `code` is the flag that tell us to request an access token.
        // We have to remove it, otherwise the page will authorize on
        // every load!
        if (code) {
            params.delete("code");
            debug("Removed code parameter from the url.");
        } // If we have `fullSessionStorageSupport` it means we no longer
        // need the `state` key. It will be stored to a well know
        // location - sessionStorage[SMART_KEY]. However, no
        // fullSessionStorageSupport means that this "well know location"
        // might be shared between windows and tabs. In this case we
        // MUST keep the `state` url parameter.
        if (hasState && fullSessionStorageSupport) {
            params.delete("state");
            debug("Removed state parameter from the url.");
        } // If the browser does not support the replaceState method for the
        // History Web API, the "code" parameter cannot be removed. As a
        // consequence, the page will (re)authorize on every load. The
        // workaround is to reload the page to new location without those
        // parameters. If that is not acceptable replaceBrowserHistory
        // should be set to false.
        if (window.history.replaceState) window.history.replaceState({}, "", url.href);
    } // If the state does not exist, it means the page has been loaded directly.
    (0, lib_1.assert)(state, "No state found! Please (re)launch the app."); // Assume the client has already completed a token exchange when
    // there is no code (but we have a state) or access token is found in state
    const authorized = !code || ((_a = state.tokenResponse) === null || _a === void 0 ? void 0 : _a.access_token); // If we are authorized already, then this is just a reload.
    // Otherwise, we have to complete the code flow
    if (!authorized && state.tokenUri) {
        (0, lib_1.assert)(code, "'code' url parameter is required");
        debug("Preparing to exchange the code for access token...");
        const requestOptions = await buildTokenRequest(env, {
            code,
            state,
            clientPublicKeySetUrl: options.clientPublicKeySetUrl,
            privateKey: options.privateKey || state.clientPrivateJwk
        });
        debug("Token request options: %O", requestOptions); // The EHR authorization server SHALL return a JSON structure that
        // includes an access token or a message indicating that the
        // authorization request has been denied.
        const tokenResponse = await (0, lib_1.request)(state.tokenUri, requestOptions);
        debug("Token response: %O", tokenResponse);
        (0, lib_1.assert)(tokenResponse.access_token, "Failed to obtain access token."); // Now we need to determine when is this authorization going to expire
        state.expiresAt = (0, lib_1.getAccessTokenExpiration)(tokenResponse, env); // save the tokenResponse so that we don't have to re-authorize on
        // every page reload
        state = Object.assign(Object.assign({}, state), {
            tokenResponse
        });
        await Storage.set(key, state);
        debug("Authorization successful!");
    } else debug(((_b = state.tokenResponse) === null || _b === void 0 ? void 0 : _b.access_token) ? "Already authorized" : "No authorization needed");
    if (fullSessionStorageSupport) await Storage.set(settings_1.SMART_KEY, key);
    const client = new Client_1.default(env, state);
    debug("Created client instance: %O", client);
    return client;
}
exports.ready = ready;
/**
 * Builds the token request options. Does not make the request, just
 * creates it's configuration and returns it in a Promise.
 */ async function buildTokenRequest(env, { code , state , clientPublicKeySetUrl , privateKey  }) {
    const { redirectUri , clientSecret , tokenUri , clientId , codeVerifier  } = state;
    (0, lib_1.assert)(redirectUri, "Missing state.redirectUri");
    (0, lib_1.assert)(tokenUri, "Missing state.tokenUri");
    (0, lib_1.assert)(clientId, "Missing state.clientId");
    const requestOptions = {
        method: "POST",
        headers: {
            "content-type": "application/x-www-form-urlencoded"
        },
        body: `code=${code}&grant_type=authorization_code&redirect_uri=${encodeURIComponent(redirectUri)}`
    }; // For public apps, authentication is not possible (and thus not required),
    // since a client with no secret cannot prove its identity when it issues a
    // call. (The end-to-end system can still be secure because the client comes
    // from a known, https protected endpoint specified and enforced by the
    // redirect uri.) For confidential apps, an Authorization header using HTTP
    // Basic authentication is required, where the username is the app’s
    // client_id and the password is the app’s client_secret (see example).
    if (clientSecret) {
        requestOptions.headers.authorization = "Basic " + env.btoa(clientId + ":" + clientSecret);
        debug("Using state.clientSecret to construct the authorization header: %s", requestOptions.headers.authorization);
    } else if (privateKey) {
        const pk = "key" in privateKey ? privateKey.key : await env.security.importJWK(privateKey);
        const jwtHeaders = {
            typ: "JWT",
            kid: privateKey.kid,
            jku: clientPublicKeySetUrl || state.clientPublicKeySetUrl
        };
        const jwtClaims = {
            iss: clientId,
            sub: clientId,
            aud: tokenUri,
            jti: env.base64urlencode(env.security.randomBytes(32)),
            exp: (0, lib_1.getTimeInFuture)(120) // two minutes in the future
        };
        const clientAssertion = await env.security.signCompactJws(privateKey.alg, pk, jwtHeaders, jwtClaims);
        requestOptions.body += `&client_assertion_type=${encodeURIComponent("urn:ietf:params:oauth:client-assertion-type:jwt-bearer")}`;
        requestOptions.body += `&client_assertion=${encodeURIComponent(clientAssertion)}`;
        debug("Using state.clientPrivateJwk to add a client_assertion to the POST body");
    } else {
        debug("Public client detected; adding state.clientId to the POST body");
        requestOptions.body += `&client_id=${encodeURIComponent(clientId)}`;
    }
    if (codeVerifier) {
        debug("Found state.codeVerifier, adding to the POST body"); // Note that the codeVerifier is ALREADY encoded properly  
        requestOptions.body += "&code_verifier=" + codeVerifier;
    }
    return requestOptions;
}
exports.buildTokenRequest = buildTokenRequest;
/**
 * This function can be used when you want to handle everything in one page
 * (no launch endpoint needed). You can think of it as if it does:
 * ```js
 * authorize(options).then(ready)
 * ```
 *
 * **Be careful with init()!** There are some details you need to be aware of:
 *
 * 1. It will only work if your launch_uri is the same as your redirect_uri.
 *    While this should be valid, we can’t promise that every EHR will allow you
 *    to register client with such settings.
 * 2. Internally, `init()` will be called twice. First it will redirect to the
 *    EHR, then the EHR will redirect back to the page where init() will be
 *    called again to complete the authorization. This is generally fine,
 *    because the returned promise will only be resolved once, after the second
 *    execution, but please also consider the following:
 *    - You should wrap all your app’s code in a function that is only executed
 *      after `init()` resolves!
 *    - Since the page will be loaded twice, you must be careful if your code
 *      has global side effects that can persist between page reloads
 *      (for example writing to localStorage).
 * 3. For standalone launch, only use init in combination with offline_access
 *    scope. Once the access_token expires, if you don’t have a refresh_token
 *    there is no way to re-authorize properly. We detect that and delete the
 *    expired access token, but it still means that the user will have to
 *    refresh the page twice to re-authorize.
 * @param env The adapter
 * @param authorizeOptions The authorize options
 */ async function init(env, authorizeOptions, readyOptions) {
    const url = env.getUrl();
    const code = url.searchParams.get("code");
    const state = url.searchParams.get("state"); // if `code` and `state` params are present we need to complete the auth flow
    if (code && state) return ready(env, readyOptions);
     // Check for existing client state. If state is found, it means a client
    // instance have already been created in this session and we should try to
    // "revive" it.
    const storage = env.getStorage();
    const key = state || await storage.get(settings_1.SMART_KEY);
    const cached = await storage.get(key);
    if (cached) return new Client_1.default(env, cached);
     // Otherwise try to launch
    return authorize(env, authorizeOptions).then(()=>{
        // `init` promises a Client but that cannot happen in this case. The
        // browser will be redirected (unload the page and be redirected back
        // to it later and the same init function will be called again). On
        // success, authorize will resolve with the redirect url but we don't
        // want to return that from this promise chain because it is not a
        // Client instance. At the same time, if authorize fails, we do want to
        // pass the error to those waiting for a client instance.
        return new Promise(()=>{});
    });
}
exports.init = init;

},{"./lib":"e41cQ","./Client":"e8vjN","./settings":"gLXbx"}],"e41cQ":[function(require,module,exports) {
"use strict";
/*
 * This file contains some shared functions. They are used by other modules, but
 * are defined here so that tests can import this library and test them.
 */ var __rest = function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") {
        for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.assertJsonPatch = exports.assert = exports.getTargetWindow = exports.getPatientParam = exports.byCodes = exports.byCode = exports.getAccessTokenExpiration = exports.getTimeInFuture = exports.jwtDecode = exports.randomString = exports.absolute = exports.makeArray = exports.setPath = exports.getPath = exports.fetchConformanceStatement = exports.getAndCache = exports.request = exports.loweCaseKeys = exports.responseToJSON = exports.checkResponse = exports.units = exports.debug = void 0;
const HttpError_1 = require("./HttpError");
const settings_1 = require("./settings");
const debug = require("debug"); // $lab:coverage:off$
// @ts-ignore
const { fetch  } = typeof FHIRCLIENT_PURE !== "undefined" ? window : require("cross-fetch"); // $lab:coverage:on$
const _debug = debug("FHIR");
exports.debug = _debug;
/**
 * The cache for the `getAndCache` function
 */ const cache = {};
/**
 * A namespace with functions for converting between different measurement units
 */ exports.units = {
    cm ({ code , value  }) {
        ensureNumerical({
            code,
            value
        });
        if (code == "cm") return value;
        if (code == "m") return value * 100;
        if (code == "in") return value * 2.54;
        if (code == "[in_us]") return value * 2.54;
        if (code == "[in_i]") return value * 2.54;
        if (code == "ft") return value * 30.48;
        if (code == "[ft_us]") return value * 30.48;
        throw new Error("Unrecognized length unit: " + code);
    },
    kg ({ code , value  }) {
        ensureNumerical({
            code,
            value
        });
        if (code == "kg") return value;
        if (code == "g") return value / 1000;
        if (code.match(/lb/)) return value / 2.20462;
        if (code.match(/oz/)) return value / 35.274;
        throw new Error("Unrecognized weight unit: " + code);
    },
    any (pq) {
        ensureNumerical(pq);
        return pq.value;
    }
};
/**
 * Assertion function to guard arguments for `units` functions
 */ function ensureNumerical({ value , code  }) {
    if (typeof value !== "number") throw new Error("Found a non-numerical unit: " + value + " " + code);
}
/**
 * Used in fetch Promise chains to reject if the "ok" property is not true
 */ async function checkResponse(resp) {
    if (!resp.ok) {
        const error = new HttpError_1.default(resp);
        await error.parse();
        throw error;
    }
    return resp;
}
exports.checkResponse = checkResponse;
/**
 * Used in fetch Promise chains to return the JSON version of the response.
 * Note that `resp.json()` will throw on empty body so we use resp.text()
 * instead.
 */ function responseToJSON(resp) {
    return resp.text().then((text)=>text.length ? JSON.parse(text) : "");
}
exports.responseToJSON = responseToJSON;
function loweCaseKeys(obj) {
    // Can be undefined to signal that this key should be removed
    if (!obj) return obj;
     // Arrays are valid values in case of recursive calls
    if (Array.isArray(obj)) return obj.map((v)=>v && typeof v === "object" ? loweCaseKeys(v) : v);
     // Plain object
    let out = {};
    Object.keys(obj).forEach((key)=>{
        const lowerKey = key.toLowerCase();
        const v = obj[key];
        out[lowerKey] = v && typeof v == "object" ? loweCaseKeys(v) : v;
    });
    return out;
}
exports.loweCaseKeys = loweCaseKeys;
/**
 * This is our built-in request function. It does a few things by default
 * (unless told otherwise):
 * - Makes CORS requests
 * - Sets accept header to "application/json"
 * - Handles errors
 * - If the response is json return the json object
 * - If the response is text return the result text
 * - Otherwise return the response object on which we call stuff like `.blob()`
 */ function request(url, requestOptions = {}) {
    const { includeResponse  } = requestOptions, options = __rest(requestOptions, [
        "includeResponse"
    ]);
    return fetch(url, Object.assign(Object.assign({
        mode: "cors"
    }, options), {
        headers: Object.assign({
            accept: "application/json"
        }, loweCaseKeys(options.headers))
    })).then(checkResponse).then((res)=>{
        const type = res.headers.get("content-type") + "";
        if (type.match(/\bjson\b/i)) return responseToJSON(res).then((body)=>({
                res,
                body
            }));
        if (type.match(/^text\//i)) return res.text().then((body)=>({
                res,
                body
            }));
        return {
            res
        };
    }).then(({ res , body  })=>{
        // Some servers will reply after CREATE with json content type but with
        // empty body. In this case check if a location header is received and
        // fetch that to use it as the final result.
        if (!body && res.status == 201) {
            const location = res.headers.get("location");
            if (location) return request(location, Object.assign(Object.assign({}, options), {
                method: "GET",
                body: null,
                includeResponse
            }));
        }
        if (includeResponse) return {
            body,
            response: res
        };
         // For any non-text and non-json response return the Response object.
        // This to let users decide if they want to call text(), blob() or
        // something else on it
        if (body === undefined) return res;
         // Otherwise just return the parsed body (can also be "" or null)
        return body;
    });
}
exports.request = request;
/**
 * Makes a request using `fetch` and stores the result in internal memory cache.
 * The cache is cleared when the page is unloaded.
 * @param url The URL to request
 * @param requestOptions Request options
 * @param force If true, reload from source and update the cache, even if it has
 * already been cached.
 */ function getAndCache(url, requestOptions, force = false) {
    if (force || !cache[url]) {
        cache[url] = request(url, requestOptions);
        return cache[url];
    }
    return Promise.resolve(cache[url]);
}
exports.getAndCache = getAndCache;
/**
 * Fetches the conformance statement from the given base URL.
 * Note that the result is cached in memory (until the page is reloaded in the
 * browser) because it might have to be re-used by the client
 * @param baseUrl The base URL of the FHIR server
 * @param [requestOptions] Any options passed to the fetch call
 */ function fetchConformanceStatement(baseUrl = "/", requestOptions) {
    const url = String(baseUrl).replace(/\/*$/, "/") + "metadata";
    return getAndCache(url, requestOptions).catch((ex)=>{
        throw new Error(`Failed to fetch the conformance statement from "${url}". ${ex}`);
    });
}
exports.fetchConformanceStatement = fetchConformanceStatement;
/**
 * Walks through an object (or array) and returns the value found at the
 * provided path. This function is very simple so it intentionally does not
 * support any argument polymorphism, meaning that the path can only be a
 * dot-separated string. If the path is invalid returns undefined.
 * @param obj The object (or Array) to walk through
 * @param path The path (eg. "a.b.4.c")
 * @returns {*} Whatever is found in the path or undefined
 */ function getPath(obj, path = "") {
    path = path.trim();
    if (!path) return obj;
    let segments = path.split(".");
    let result = obj;
    while(result && segments.length){
        const key = segments.shift();
        if (!key && Array.isArray(result)) return result.map((o)=>getPath(o, segments.join(".")));
        else result = result[key];
    }
    return result;
}
exports.getPath = getPath;
/**
 * Like getPath, but if the node is found, its value is set to @value
 * @param obj The object (or Array) to walk through
 * @param path The path (eg. "a.b.4.c")
 * @param value The value to set
 * @param createEmpty If true, create missing intermediate objects or arrays
 * @returns The modified object
 */ function setPath(obj, path, value, createEmpty = false) {
    path.trim().split(".").reduce((out, key, idx, arr)=>{
        if (out && idx === arr.length - 1) out[key] = value;
        else {
            if (out && out[key] === undefined && createEmpty) out[key] = arr[idx + 1].match(/^[0-9]+$/) ? [] : {};
            return out ? out[key] : undefined;
        }
    }, obj);
    return obj;
}
exports.setPath = setPath;
/**
 * If the argument is an array returns it as is. Otherwise puts it in an array
 * (`[arg]`) and returns the result
 * @param arg The element to test and possibly convert to array
 * @category Utility
 */ function makeArray(arg) {
    if (Array.isArray(arg)) return arg;
    return [
        arg
    ];
}
exports.makeArray = makeArray;
/**
 * Given a path, converts it to absolute url based on the `baseUrl`. If baseUrl
 * is not provided, the result would be a rooted path (one that starts with `/`).
 * @param path The path to convert
 * @param baseUrl The base URL
 */ function absolute(path, baseUrl) {
    if (path.match(/^http/)) return path;
    if (path.match(/^urn/)) return path;
    return String(baseUrl || "").replace(/\/+$/, "") + "/" + path.replace(/^\/+/, "");
}
exports.absolute = absolute;
/**
 * Generates random strings. By default this returns random 8 characters long
 * alphanumeric strings.
 * @param strLength The length of the output string. Defaults to 8.
 * @param charSet A string containing all the possible characters.
 *     Defaults to all the upper and lower-case letters plus digits.
 * @category Utility
 */ function randomString(strLength = 8, charSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789") {
    const result = [];
    const len = charSet.length;
    while(strLength--)result.push(charSet.charAt(Math.floor(Math.random() * len)));
    return result.join("");
}
exports.randomString = randomString;
/**
 * Decodes a JWT token and returns it's body.
 * @param token The token to read
 * @param env An `Adapter` or any other object that has an `atob` method
 * @category Utility
 */ function jwtDecode(token, env) {
    const payload = token.split(".")[1];
    return payload ? JSON.parse(env.atob(payload)) : null;
}
exports.jwtDecode = jwtDecode;
/**
 * Add a supplied number of seconds to the supplied Date, returning
 * an integer number of seconds since the epoch
 * @param secondsAhead How far ahead, in seconds (defaults to 120 seconds)
 * @param from Initial time (defaults to current time)
 */ function getTimeInFuture(secondsAhead = 120, from) {
    return Math.floor(+(from || new Date()) / 1000 + secondsAhead);
}
exports.getTimeInFuture = getTimeInFuture;
/**
 * Given a token response, computes and returns the expiresAt timestamp.
 * Note that this should only be used immediately after an access token is
 * received, otherwise the computed timestamp will be incorrect.
 * @param tokenResponse
 * @param env
 */ function getAccessTokenExpiration(tokenResponse, env) {
    const now = Math.floor(Date.now() / 1000); // Option 1 - using the expires_in property of the token response
    if (tokenResponse.expires_in) return now + tokenResponse.expires_in;
     // Option 2 - using the exp property of JWT tokens (must not assume JWT!)
    if (tokenResponse.access_token) {
        let tokenBody = jwtDecode(tokenResponse.access_token, env);
        if (tokenBody && tokenBody.exp) return tokenBody.exp;
    } // Option 3 - if none of the above worked set this to 5 minutes after now
    return now + 300;
}
exports.getAccessTokenExpiration = getAccessTokenExpiration;
/**
 * Groups the observations by code. Returns a map that will look like:
 * ```js
 * const map = client.byCodes(observations, "code");
 * // map = {
 * //     "55284-4": [ observation1, observation2 ],
 * //     "6082-2": [ observation3 ]
 * // }
 * ```
 * @param observations Array of observations
 * @param property The name of a CodeableConcept property to group by
 */ function byCode(observations, property) {
    const ret = {};
    function handleCodeableConcept(concept, observation) {
        if (concept && Array.isArray(concept.coding)) concept.coding.forEach(({ code  })=>{
            if (code) {
                ret[code] = ret[code] || [];
                ret[code].push(observation);
            }
        });
    }
    makeArray(observations).forEach((o)=>{
        if (o.resourceType === "Observation" && o[property]) {
            if (Array.isArray(o[property])) o[property].forEach((concept)=>handleCodeableConcept(concept, o));
            else handleCodeableConcept(o[property], o);
        }
    });
    return ret;
}
exports.byCode = byCode;
/**
 * First groups the observations by code using `byCode`. Then returns a function
 * that accepts codes as arguments and will return a flat array of observations
 * having that codes. Example:
 * ```js
 * const filter = client.byCodes(observations, "category");
 * filter("laboratory") // => [ observation1, observation2 ]
 * filter("vital-signs") // => [ observation3 ]
 * filter("laboratory", "vital-signs") // => [ observation1, observation2, observation3 ]
 * ```
 * @param observations Array of observations
 * @param property The name of a CodeableConcept property to group by
 */ function byCodes(observations, property) {
    const bank = byCode(observations, property);
    return (...codes)=>codes.filter((code)=>code + "" in bank).reduce((prev, code)=>prev.concat(bank[code + ""]), []);
}
exports.byCodes = byCodes;
/**
 * Given a conformance statement and a resource type, returns the name of the
 * URL parameter that can be used to scope the resource type by patient ID.
 */ function getPatientParam(conformance, resourceType) {
    // Find what resources are supported by this server
    const resources = getPath(conformance, "rest.0.resource") || []; // Check if this resource is supported
    const meta = resources.find((r)=>r.type === resourceType);
    if (!meta) throw new Error(`Resource "${resourceType}" is not supported by this FHIR server`);
     // Check if any search parameters are available for this resource
    if (!Array.isArray(meta.searchParam)) throw new Error(`No search parameters supported for "${resourceType}" on this FHIR server`);
     // This is a rare case but could happen in generic workflows
    if (resourceType == "Patient" && meta.searchParam.find((x)=>x.name == "_id")) return "_id";
     // Now find the first possible parameter name
    const out = settings_1.patientParams.find((p)=>meta.searchParam.find((x)=>x.name == p)); // If there is no match
    if (!out) throw new Error("I don't know what param to use for " + resourceType);
    return out;
}
exports.getPatientParam = getPatientParam;
/**
 * Resolves a reference to target window. It may also open new window or tab if
 * the `target = "popup"` or `target = "_blank"`.
 * @param target
 * @param width Only used when `target = "popup"`
 * @param height Only used when `target = "popup"`
 */ async function getTargetWindow(target, width = 800, height = 720) {
    // The target can be a function that returns the target. This can be
    // used to open a layer pop-up with an iframe and then return a reference
    // to that iframe (or its name)
    if (typeof target == "function") target = await target();
     // The target can be a window reference
    if (target && typeof target == "object") return target;
     // At this point target must be a string
    if (typeof target != "string") {
        _debug("Invalid target type '%s'. Failing back to '_self'.", typeof target);
        return self;
    } // Current window
    if (target == "_self") return self;
     // The parent frame
    if (target == "_parent") return parent;
     // The top window
    if (target == "_top") return top || self;
     // New tab or window
    if (target == "_blank") {
        let error, targetWindow = null;
        try {
            targetWindow = window.open("", "SMARTAuthPopup");
            if (!targetWindow) throw new Error("Perhaps window.open was blocked");
        } catch (e) {
            error = e;
        }
        if (!targetWindow) {
            _debug("Cannot open window. Failing back to '_self'. %s", error);
            return self;
        } else return targetWindow;
    } // Popup window
    if (target == "popup") {
        let error1, targetWindow1 = null; // if (!targetWindow || targetWindow.closed) {
        try {
            targetWindow1 = window.open("", "SMARTAuthPopup", [
                "height=" + height,
                "width=" + width,
                "menubar=0",
                "resizable=1",
                "status=0",
                "top=" + (screen.height - height) / 2,
                "left=" + (screen.width - width) / 2
            ].join(","));
            if (!targetWindow1) throw new Error("Perhaps the popup window was blocked");
        } catch (e1) {
            error1 = e1;
        }
        if (!targetWindow1) {
            _debug("Cannot open window. Failing back to '_self'. %s", error1);
            return self;
        } else return targetWindow1;
    } // Frame or window by name
    const winOrFrame = frames[target];
    if (winOrFrame) return winOrFrame;
    _debug("Unknown target '%s'. Failing back to '_self'.", target);
    return self;
}
exports.getTargetWindow = getTargetWindow;
function assert(condition, message) {
    if (!condition) throw new Error(message);
}
exports.assert = assert;
function assertJsonPatch(patch) {
    assert(Array.isArray(patch), "The JSON patch must be an array");
    assert(patch.length > 0, "The JSON patch array should not be empty");
    patch.forEach((operation)=>{
        assert([
            "add",
            "replace",
            "test",
            "move",
            "copy",
            "remove"
        ].indexOf(operation.op) > -1, 'Each patch operation must have an "op" property which must be one of: "add", "replace", "test", "move", "copy", "remove"');
        assert(operation.path && typeof operation.path, `Invalid "${operation.op}" operation. Missing "path" property`);
        if (operation.op == "add" || operation.op == "replace" || operation.op == "test") {
            assert("value" in operation, `Invalid "${operation.op}" operation. Missing "value" property`);
            assert(Object.keys(operation).length == 3, `Invalid "${operation.op}" operation. Contains unknown properties`);
        } else if (operation.op == "move" || operation.op == "copy") {
            assert(typeof operation.from == "string", `Invalid "${operation.op}" operation. Requires a string "from" property`);
            assert(Object.keys(operation).length == 3, `Invalid "${operation.op}" operation. Contains unknown properties`);
        } else assert(Object.keys(operation).length == 2, `Invalid "${operation.op}" operation. Contains unknown properties`);
    });
}
exports.assertJsonPatch = assertJsonPatch;

},{"./HttpError":"5Gmq0","./settings":"gLXbx","debug":"l0oUb","cross-fetch":"j4ah4"}],"5Gmq0":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
class HttpError extends Error {
    constructor(response){
        super(`${response.status} ${response.statusText}\nURL: ${response.url}`);
        this.name = "HttpError";
        this.response = response;
        this.statusCode = response.status;
        this.status = response.status;
        this.statusText = response.statusText;
    }
    async parse() {
        if (!this.response.bodyUsed) try {
            const type = this.response.headers.get("content-type") || "text/plain";
            if (type.match(/\bjson\b/i)) {
                let body = await this.response.json();
                if (body.error) {
                    this.message += "\n" + body.error;
                    if (body.error_description) this.message += ": " + body.error_description;
                } else this.message += "\n\n" + JSON.stringify(body, null, 4);
            } else if (type.match(/^text\//i)) {
                let body1 = await this.response.text();
                if (body1) this.message += "\n\n" + body1;
            }
        } catch (_a) {}
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
exports.default = HttpError;

},{}],"gLXbx":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SMART_KEY = exports.patientParams = exports.fhirVersions = exports.patientCompartment = void 0;
/**
 * Combined list of FHIR resource types accepting patient parameter in FHIR R2-R4
 */ exports.patientCompartment = [
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
];
/**
 * Map of FHIR releases and their abstract version as number
 */ exports.fhirVersions = {
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
};
/**
 * Combined (FHIR R2-R4) list of search parameters that can be used to scope
 * a request by patient ID.
 */ exports.patientParams = [
    "patient",
    "subject",
    "requester",
    "member",
    "actor",
    "beneficiary"
];
/**
 * The name of the sessionStorage entry that contains the current key
 */ exports.SMART_KEY = "SMART_KEY";

},{}],"l0oUb":[function(require,module,exports) {
/* eslint-env browser */ /**
 * This is the web browser implementation of `debug()`.
 */ var process = require("process");
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = localstorage();
exports.destroy = (()=>{
    let warned = false;
    return ()=>{
        if (!warned) {
            warned = true;
            console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
        }
    };
})();
/**
 * Colors.
 */ exports.colors = [
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
];
/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */ // eslint-disable-next-line complexity
function useColors() {
    // NB: In an Electron preload script, document will be defined but not fully
    // initialized. Since we know we're in Chrome, we'll just detect this case
    // explicitly
    if (typeof window !== "undefined" && window.process && (window.process.type === "renderer" || window.process.__nwjs)) return true;
    // Internet Explorer and Edge do not support colors.
    if (typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) return false;
    // Is webkit? http://stackoverflow.com/a/16459606/376773
    // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
    return typeof document !== "undefined" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // Is firebug? http://stackoverflow.com/a/398120/376773
    typeof window !== "undefined" && window.console && (window.console.firebug || window.console.exception && window.console.table) || // Is firefox >= v31?
    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
    typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || // Double check webkit in userAgent just in case we are in a worker
    typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
}
/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */ function formatArgs(args) {
    args[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + args[0] + (this.useColors ? "%c " : " ") + "+" + module.exports.humanize(this.diff);
    if (!this.useColors) return;
    const c = "color: " + this.color;
    args.splice(1, 0, c, "color: inherit");
    // The final "%c" is somewhat tricky, because there could be other
    // arguments passed either before or after the %c, so we need to
    // figure out the correct index to insert the CSS into
    let index = 0;
    let lastC = 0;
    args[0].replace(/%[a-zA-Z%]/g, (match)=>{
        if (match === "%%") return;
        index++;
        if (match === "%c") // We only are interested in the *last* %c
        // (the user may have provided their own)
        lastC = index;
    });
    args.splice(lastC, 0, c);
}
/**
 * Invokes `console.debug()` when available.
 * No-op when `console.debug` is not a "function".
 * If `console.debug` is not available, falls back
 * to `console.log`.
 *
 * @api public
 */ exports.log = console.debug || console.log || (()=>{});
/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */ function save(namespaces) {
    try {
        if (namespaces) exports.storage.setItem("debug", namespaces);
        else exports.storage.removeItem("debug");
    } catch (error) {
    // Swallow
    // XXX (@Qix-) should we be logging these?
    }
}
/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */ function load() {
    let r;
    try {
        r = exports.storage.getItem("debug");
    } catch (error) {
    // Swallow
    // XXX (@Qix-) should we be logging these?
    }
    // If debug isn't set in LS, and we're in Electron, try to load $DEBUG
    if (!r && typeof process !== "undefined" && "env" in process) r = undefined;
    return r;
}
/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */ function localstorage() {
    try {
        // TVMLKit (Apple TV JS Runtime) does not have a window object, just localStorage in the global context
        // The Browser also has localStorage in the global context.
        return localStorage;
    } catch (error) {
    // Swallow
    // XXX (@Qix-) should we be logging these?
    }
}
module.exports = require("./common")(exports);
const { formatters  } = module.exports;
/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */ formatters.j = function(v) {
    try {
        return JSON.stringify(v);
    } catch (error) {
        return "[UnexpectedJSONParseError]: " + error.message;
    }
};

},{"process":"d5jf4","./common":"6Yq2n"}],"d5jf4":[function(require,module,exports) {
// shim for using process in browser
var process = module.exports = {};
// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.
var cachedSetTimeout;
var cachedClearTimeout;
function defaultSetTimout() {
    throw new Error("setTimeout has not been defined");
}
function defaultClearTimeout() {
    throw new Error("clearTimeout has not been defined");
}
(function() {
    try {
        if (typeof setTimeout === "function") cachedSetTimeout = setTimeout;
        else cachedSetTimeout = defaultSetTimout;
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === "function") cachedClearTimeout = clearTimeout;
        else cachedClearTimeout = defaultClearTimeout;
    } catch (e1) {
        cachedClearTimeout = defaultClearTimeout;
    }
})();
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) //normal enviroments in sane situations
    return setTimeout(fun, 0);
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch (e1) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) //normal enviroments in sane situations
    return clearTimeout(marker);
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e1) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;
function cleanUpNextTick() {
    if (!draining || !currentQueue) return;
    draining = false;
    if (currentQueue.length) queue = currentQueue.concat(queue);
    else queueIndex = -1;
    if (queue.length) drainQueue();
}
function drainQueue() {
    if (draining) return;
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;
    var len = queue.length;
    while(len){
        currentQueue = queue;
        queue = [];
        while(++queueIndex < len)if (currentQueue) currentQueue[queueIndex].run();
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}
process.nextTick = function(fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) for(var i = 1; i < arguments.length; i++)args[i - 1] = arguments[i];
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) runTimeout(drainQueue);
};
// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function() {
    this.fun.apply(null, this.array);
};
process.title = "browser";
process.browser = true;
process.env = {};
process.argv = [];
process.version = ""; // empty string to avoid regexp issues
process.versions = {};
function noop() {}
process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;
process.listeners = function(name) {
    return [];
};
process.binding = function(name) {
    throw new Error("process.binding is not supported");
};
process.cwd = function() {
    return "/";
};
process.chdir = function(dir) {
    throw new Error("process.chdir is not supported");
};
process.umask = function() {
    return 0;
};

},{}],"6Yq2n":[function(require,module,exports) {
/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 */ function setup(env) {
    createDebug.debug = createDebug;
    createDebug.default = createDebug;
    createDebug.coerce = coerce;
    createDebug.disable = disable;
    createDebug.enable = enable;
    createDebug.enabled = enabled;
    createDebug.humanize = require("ms");
    createDebug.destroy = destroy;
    Object.keys(env).forEach((key)=>{
        createDebug[key] = env[key];
    });
    /**
	* The currently active debug mode names, and names to skip.
	*/ createDebug.names = [];
    createDebug.skips = [];
    /**
	* Map of special "%n" handling functions, for the debug "format" argument.
	*
	* Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
	*/ createDebug.formatters = {};
    /**
	* Selects a color for a debug namespace
	* @param {String} namespace The namespace string for the debug instance to be colored
	* @return {Number|String} An ANSI color code for the given namespace
	* @api private
	*/ function selectColor(namespace) {
        let hash = 0;
        for(let i = 0; i < namespace.length; i++){
            hash = (hash << 5) - hash + namespace.charCodeAt(i);
            hash |= 0; // Convert to 32bit integer
        }
        return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
    }
    createDebug.selectColor = selectColor;
    /**
	* Create a debugger with the given `namespace`.
	*
	* @param {String} namespace
	* @return {Function}
	* @api public
	*/ function createDebug(namespace) {
        let prevTime;
        let enableOverride = null;
        let namespacesCache;
        let enabledCache;
        function debug(...args) {
            // Disabled?
            if (!debug.enabled) return;
            const self = debug;
            // Set `diff` timestamp
            const curr = Number(new Date());
            const ms = curr - (prevTime || curr);
            self.diff = ms;
            self.prev = prevTime;
            self.curr = curr;
            prevTime = curr;
            args[0] = createDebug.coerce(args[0]);
            if (typeof args[0] !== "string") // Anything else let's inspect with %O
            args.unshift("%O");
            // Apply any `formatters` transformations
            let index = 0;
            args[0] = args[0].replace(/%([a-zA-Z%])/g, (match, format)=>{
                // If we encounter an escaped % then don't increase the array index
                if (match === "%%") return "%";
                index++;
                const formatter = createDebug.formatters[format];
                if (typeof formatter === "function") {
                    const val = args[index];
                    match = formatter.call(self, val);
                    // Now we need to remove `args[index]` since it's inlined in the `format`
                    args.splice(index, 1);
                    index--;
                }
                return match;
            });
            // Apply env-specific formatting (colors, etc.)
            createDebug.formatArgs.call(self, args);
            const logFn = self.log || createDebug.log;
            logFn.apply(self, args);
        }
        debug.namespace = namespace;
        debug.useColors = createDebug.useColors();
        debug.color = createDebug.selectColor(namespace);
        debug.extend = extend;
        debug.destroy = createDebug.destroy; // XXX Temporary. Will be removed in the next major release.
        Object.defineProperty(debug, "enabled", {
            enumerable: true,
            configurable: false,
            get: ()=>{
                if (enableOverride !== null) return enableOverride;
                if (namespacesCache !== createDebug.namespaces) {
                    namespacesCache = createDebug.namespaces;
                    enabledCache = createDebug.enabled(namespace);
                }
                return enabledCache;
            },
            set: (v)=>{
                enableOverride = v;
            }
        });
        // Env-specific initialization logic for debug instances
        if (typeof createDebug.init === "function") createDebug.init(debug);
        return debug;
    }
    function extend(namespace, delimiter) {
        const newDebug = createDebug(this.namespace + (typeof delimiter === "undefined" ? ":" : delimiter) + namespace);
        newDebug.log = this.log;
        return newDebug;
    }
    /**
	* Enables a debug mode by namespaces. This can include modes
	* separated by a colon and wildcards.
	*
	* @param {String} namespaces
	* @api public
	*/ function enable(namespaces) {
        createDebug.save(namespaces);
        createDebug.namespaces = namespaces;
        createDebug.names = [];
        createDebug.skips = [];
        let i;
        const split = (typeof namespaces === "string" ? namespaces : "").split(/[\s,]+/);
        const len = split.length;
        for(i = 0; i < len; i++){
            if (!split[i]) continue;
            namespaces = split[i].replace(/\*/g, ".*?");
            if (namespaces[0] === "-") createDebug.skips.push(new RegExp("^" + namespaces.slice(1) + "$"));
            else createDebug.names.push(new RegExp("^" + namespaces + "$"));
        }
    }
    /**
	* Disable debug output.
	*
	* @return {String} namespaces
	* @api public
	*/ function disable() {
        const namespaces = [
            ...createDebug.names.map(toNamespace),
            ...createDebug.skips.map(toNamespace).map((namespace)=>"-" + namespace)
        ].join(",");
        createDebug.enable("");
        return namespaces;
    }
    /**
	* Returns true if the given mode name is enabled, false otherwise.
	*
	* @param {String} name
	* @return {Boolean}
	* @api public
	*/ function enabled(name) {
        if (name[name.length - 1] === "*") return true;
        let i;
        let len;
        for(i = 0, len = createDebug.skips.length; i < len; i++){
            if (createDebug.skips[i].test(name)) return false;
        }
        for(i = 0, len = createDebug.names.length; i < len; i++){
            if (createDebug.names[i].test(name)) return true;
        }
        return false;
    }
    /**
	* Convert regexp to namespace
	*
	* @param {RegExp} regxep
	* @return {String} namespace
	* @api private
	*/ function toNamespace(regexp) {
        return regexp.toString().substring(2, regexp.toString().length - 2).replace(/\.\*\?$/, "*");
    }
    /**
	* Coerce `val`.
	*
	* @param {Mixed} val
	* @return {Mixed}
	* @api private
	*/ function coerce(val) {
        if (val instanceof Error) return val.stack || val.message;
        return val;
    }
    /**
	* XXX DO NOT USE. This is a temporary stub function.
	* XXX It WILL be removed in the next major release.
	*/ function destroy() {
        console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
    }
    createDebug.enable(createDebug.load());
    return createDebug;
}
module.exports = setup;

},{"ms":"jauEe"}],"jauEe":[function(require,module,exports) {
/**
 * Helpers.
 */ var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var w = d * 7;
var y = d * 365.25;
/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */ module.exports = function(val, options) {
    options = options || {};
    var type = typeof val;
    if (type === "string" && val.length > 0) return parse(val);
    else if (type === "number" && isFinite(val)) return options.long ? fmtLong(val) : fmtShort(val);
    throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(val));
};
/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */ function parse(str) {
    str = String(str);
    if (str.length > 100) return;
    var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(str);
    if (!match) return;
    var n = parseFloat(match[1]);
    var type = (match[2] || "ms").toLowerCase();
    switch(type){
        case "years":
        case "year":
        case "yrs":
        case "yr":
        case "y":
            return n * y;
        case "weeks":
        case "week":
        case "w":
            return n * w;
        case "days":
        case "day":
        case "d":
            return n * d;
        case "hours":
        case "hour":
        case "hrs":
        case "hr":
        case "h":
            return n * h;
        case "minutes":
        case "minute":
        case "mins":
        case "min":
        case "m":
            return n * m;
        case "seconds":
        case "second":
        case "secs":
        case "sec":
        case "s":
            return n * s;
        case "milliseconds":
        case "millisecond":
        case "msecs":
        case "msec":
        case "ms":
            return n;
        default:
            return undefined;
    }
}
/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */ function fmtShort(ms) {
    var msAbs = Math.abs(ms);
    if (msAbs >= d) return Math.round(ms / d) + "d";
    if (msAbs >= h) return Math.round(ms / h) + "h";
    if (msAbs >= m) return Math.round(ms / m) + "m";
    if (msAbs >= s) return Math.round(ms / s) + "s";
    return ms + "ms";
}
/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */ function fmtLong(ms) {
    var msAbs = Math.abs(ms);
    if (msAbs >= d) return plural(ms, msAbs, d, "day");
    if (msAbs >= h) return plural(ms, msAbs, h, "hour");
    if (msAbs >= m) return plural(ms, msAbs, m, "minute");
    if (msAbs >= s) return plural(ms, msAbs, s, "second");
    return ms + " ms";
}
/**
 * Pluralization helper.
 */ function plural(ms, msAbs, n, name) {
    var isPlural = msAbs >= n * 1.5;
    return Math.round(ms / n) + " " + name + (isPlural ? "s" : "");
}

},{}],"j4ah4":[function(require,module,exports) {
var global = typeof self !== "undefined" ? self : this;
var __self__ = function() {
    function F() {
        this.fetch = false;
        this.DOMException = global.DOMException;
    }
    F.prototype = global;
    return new F();
}();
(function(self1) {
    var irrelevant = function(exports1) {
        var support = {
            searchParams: "URLSearchParams" in self1,
            iterable: "Symbol" in self1 && "iterator" in Symbol,
            blob: "FileReader" in self1 && "Blob" in self1 && function() {
                try {
                    new Blob();
                    return true;
                } catch (e) {
                    return false;
                }
            }(),
            formData: "FormData" in self1,
            arrayBuffer: "ArrayBuffer" in self1
        };
        function isDataView(obj) {
            return obj && DataView.prototype.isPrototypeOf(obj);
        }
        if (support.arrayBuffer) {
            var viewClasses = [
                "[object Int8Array]",
                "[object Uint8Array]",
                "[object Uint8ClampedArray]",
                "[object Int16Array]",
                "[object Uint16Array]",
                "[object Int32Array]",
                "[object Uint32Array]",
                "[object Float32Array]",
                "[object Float64Array]"
            ];
            var isArrayBufferView = ArrayBuffer.isView || function(obj) {
                return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1;
            };
        }
        function normalizeName(name) {
            if (typeof name !== "string") name = String(name);
            if (/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(name)) throw new TypeError("Invalid character in header field name");
            return name.toLowerCase();
        }
        function normalizeValue(value) {
            if (typeof value !== "string") value = String(value);
            return value;
        }
        // Build a destructive iterator for the value list
        function iteratorFor(items) {
            var iterator = {
                next: function() {
                    var value = items.shift();
                    return {
                        done: value === undefined,
                        value: value
                    };
                }
            };
            if (support.iterable) iterator[Symbol.iterator] = function() {
                return iterator;
            };
            return iterator;
        }
        function Headers(headers) {
            this.map = {};
            if (headers instanceof Headers) headers.forEach(function(value, name) {
                this.append(name, value);
            }, this);
            else if (Array.isArray(headers)) headers.forEach(function(header) {
                this.append(header[0], header[1]);
            }, this);
            else if (headers) Object.getOwnPropertyNames(headers).forEach(function(name) {
                this.append(name, headers[name]);
            }, this);
        }
        Headers.prototype.append = function(name, value) {
            name = normalizeName(name);
            value = normalizeValue(value);
            var oldValue = this.map[name];
            this.map[name] = oldValue ? oldValue + ", " + value : value;
        };
        Headers.prototype["delete"] = function(name) {
            delete this.map[normalizeName(name)];
        };
        Headers.prototype.get = function(name) {
            name = normalizeName(name);
            return this.has(name) ? this.map[name] : null;
        };
        Headers.prototype.has = function(name) {
            return this.map.hasOwnProperty(normalizeName(name));
        };
        Headers.prototype.set = function(name, value) {
            this.map[normalizeName(name)] = normalizeValue(value);
        };
        Headers.prototype.forEach = function(callback, thisArg) {
            for(var name in this.map)if (this.map.hasOwnProperty(name)) callback.call(thisArg, this.map[name], name, this);
        };
        Headers.prototype.keys = function() {
            var items = [];
            this.forEach(function(value, name) {
                items.push(name);
            });
            return iteratorFor(items);
        };
        Headers.prototype.values = function() {
            var items = [];
            this.forEach(function(value) {
                items.push(value);
            });
            return iteratorFor(items);
        };
        Headers.prototype.entries = function() {
            var items = [];
            this.forEach(function(value, name) {
                items.push([
                    name,
                    value
                ]);
            });
            return iteratorFor(items);
        };
        if (support.iterable) Headers.prototype[Symbol.iterator] = Headers.prototype.entries;
        function consumed(body) {
            if (body.bodyUsed) return Promise.reject(new TypeError("Already read"));
            body.bodyUsed = true;
        }
        function fileReaderReady(reader) {
            return new Promise(function(resolve, reject) {
                reader.onload = function() {
                    resolve(reader.result);
                };
                reader.onerror = function() {
                    reject(reader.error);
                };
            });
        }
        function readBlobAsArrayBuffer(blob) {
            var reader = new FileReader();
            var promise = fileReaderReady(reader);
            reader.readAsArrayBuffer(blob);
            return promise;
        }
        function readBlobAsText(blob) {
            var reader = new FileReader();
            var promise = fileReaderReady(reader);
            reader.readAsText(blob);
            return promise;
        }
        function readArrayBufferAsText(buf) {
            var view = new Uint8Array(buf);
            var chars = new Array(view.length);
            for(var i = 0; i < view.length; i++)chars[i] = String.fromCharCode(view[i]);
            return chars.join("");
        }
        function bufferClone(buf) {
            if (buf.slice) return buf.slice(0);
            else {
                var view = new Uint8Array(buf.byteLength);
                view.set(new Uint8Array(buf));
                return view.buffer;
            }
        }
        function Body() {
            this.bodyUsed = false;
            this._initBody = function(body) {
                this._bodyInit = body;
                if (!body) this._bodyText = "";
                else if (typeof body === "string") this._bodyText = body;
                else if (support.blob && Blob.prototype.isPrototypeOf(body)) this._bodyBlob = body;
                else if (support.formData && FormData.prototype.isPrototypeOf(body)) this._bodyFormData = body;
                else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) this._bodyText = body.toString();
                else if (support.arrayBuffer && support.blob && isDataView(body)) {
                    this._bodyArrayBuffer = bufferClone(body.buffer);
                    // IE 10-11 can't handle a DataView body.
                    this._bodyInit = new Blob([
                        this._bodyArrayBuffer
                    ]);
                } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) this._bodyArrayBuffer = bufferClone(body);
                else this._bodyText = body = Object.prototype.toString.call(body);
                if (!this.headers.get("content-type")) {
                    if (typeof body === "string") this.headers.set("content-type", "text/plain;charset=UTF-8");
                    else if (this._bodyBlob && this._bodyBlob.type) this.headers.set("content-type", this._bodyBlob.type);
                    else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8");
                }
            };
            if (support.blob) {
                this.blob = function() {
                    var rejected = consumed(this);
                    if (rejected) return rejected;
                    if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                    else if (this._bodyArrayBuffer) return Promise.resolve(new Blob([
                        this._bodyArrayBuffer
                    ]));
                    else if (this._bodyFormData) throw new Error("could not read FormData body as blob");
                    else return Promise.resolve(new Blob([
                        this._bodyText
                    ]));
                };
                this.arrayBuffer = function() {
                    if (this._bodyArrayBuffer) return consumed(this) || Promise.resolve(this._bodyArrayBuffer);
                    else return this.blob().then(readBlobAsArrayBuffer);
                };
            }
            this.text = function() {
                var rejected = consumed(this);
                if (rejected) return rejected;
                if (this._bodyBlob) return readBlobAsText(this._bodyBlob);
                else if (this._bodyArrayBuffer) return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer));
                else if (this._bodyFormData) throw new Error("could not read FormData body as text");
                else return Promise.resolve(this._bodyText);
            };
            if (support.formData) this.formData = function() {
                return this.text().then(decode);
            };
            this.json = function() {
                return this.text().then(JSON.parse);
            };
            return this;
        }
        // HTTP methods whose capitalization should be normalized
        var methods = [
            "DELETE",
            "GET",
            "HEAD",
            "OPTIONS",
            "POST",
            "PUT"
        ];
        function normalizeMethod(method) {
            var upcased = method.toUpperCase();
            return methods.indexOf(upcased) > -1 ? upcased : method;
        }
        function Request(input, options) {
            options = options || {};
            var body = options.body;
            if (input instanceof Request) {
                if (input.bodyUsed) throw new TypeError("Already read");
                this.url = input.url;
                this.credentials = input.credentials;
                if (!options.headers) this.headers = new Headers(input.headers);
                this.method = input.method;
                this.mode = input.mode;
                this.signal = input.signal;
                if (!body && input._bodyInit != null) {
                    body = input._bodyInit;
                    input.bodyUsed = true;
                }
            } else this.url = String(input);
            this.credentials = options.credentials || this.credentials || "same-origin";
            if (options.headers || !this.headers) this.headers = new Headers(options.headers);
            this.method = normalizeMethod(options.method || this.method || "GET");
            this.mode = options.mode || this.mode || null;
            this.signal = options.signal || this.signal;
            this.referrer = null;
            if ((this.method === "GET" || this.method === "HEAD") && body) throw new TypeError("Body not allowed for GET or HEAD requests");
            this._initBody(body);
        }
        Request.prototype.clone = function() {
            return new Request(this, {
                body: this._bodyInit
            });
        };
        function decode(body) {
            var form = new FormData();
            body.trim().split("&").forEach(function(bytes) {
                if (bytes) {
                    var split = bytes.split("=");
                    var name = split.shift().replace(/\+/g, " ");
                    var value = split.join("=").replace(/\+/g, " ");
                    form.append(decodeURIComponent(name), decodeURIComponent(value));
                }
            });
            return form;
        }
        function parseHeaders(rawHeaders) {
            var headers = new Headers();
            // Replace instances of \r\n and \n followed by at least one space or horizontal tab with a space
            // https://tools.ietf.org/html/rfc7230#section-3.2
            var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, " ");
            preProcessedHeaders.split(/\r?\n/).forEach(function(line) {
                var parts = line.split(":");
                var key = parts.shift().trim();
                if (key) {
                    var value = parts.join(":").trim();
                    headers.append(key, value);
                }
            });
            return headers;
        }
        Body.call(Request.prototype);
        function Response(bodyInit, options) {
            if (!options) options = {};
            this.type = "default";
            this.status = options.status === undefined ? 200 : options.status;
            this.ok = this.status >= 200 && this.status < 300;
            this.statusText = "statusText" in options ? options.statusText : "OK";
            this.headers = new Headers(options.headers);
            this.url = options.url || "";
            this._initBody(bodyInit);
        }
        Body.call(Response.prototype);
        Response.prototype.clone = function() {
            return new Response(this._bodyInit, {
                status: this.status,
                statusText: this.statusText,
                headers: new Headers(this.headers),
                url: this.url
            });
        };
        Response.error = function() {
            var response = new Response(null, {
                status: 0,
                statusText: ""
            });
            response.type = "error";
            return response;
        };
        var redirectStatuses = [
            301,
            302,
            303,
            307,
            308
        ];
        Response.redirect = function(url, status) {
            if (redirectStatuses.indexOf(status) === -1) throw new RangeError("Invalid status code");
            return new Response(null, {
                status: status,
                headers: {
                    location: url
                }
            });
        };
        exports1.DOMException = self1.DOMException;
        try {
            new exports1.DOMException();
        } catch (err) {
            exports1.DOMException = function(message, name) {
                this.message = message;
                this.name = name;
                var error = Error(message);
                this.stack = error.stack;
            };
            exports1.DOMException.prototype = Object.create(Error.prototype);
            exports1.DOMException.prototype.constructor = exports1.DOMException;
        }
        function fetch(input, init) {
            return new Promise(function(resolve, reject) {
                var request = new Request(input, init);
                if (request.signal && request.signal.aborted) return reject(new exports1.DOMException("Aborted", "AbortError"));
                var xhr = new XMLHttpRequest();
                function abortXhr() {
                    xhr.abort();
                }
                xhr.onload = function() {
                    var options = {
                        status: xhr.status,
                        statusText: xhr.statusText,
                        headers: parseHeaders(xhr.getAllResponseHeaders() || "")
                    };
                    options.url = "responseURL" in xhr ? xhr.responseURL : options.headers.get("X-Request-URL");
                    var body = "response" in xhr ? xhr.response : xhr.responseText;
                    resolve(new Response(body, options));
                };
                xhr.onerror = function() {
                    reject(new TypeError("Network request failed"));
                };
                xhr.ontimeout = function() {
                    reject(new TypeError("Network request failed"));
                };
                xhr.onabort = function() {
                    reject(new exports1.DOMException("Aborted", "AbortError"));
                };
                xhr.open(request.method, request.url, true);
                if (request.credentials === "include") xhr.withCredentials = true;
                else if (request.credentials === "omit") xhr.withCredentials = false;
                if ("responseType" in xhr && support.blob) xhr.responseType = "blob";
                request.headers.forEach(function(value, name) {
                    xhr.setRequestHeader(name, value);
                });
                if (request.signal) {
                    request.signal.addEventListener("abort", abortXhr);
                    xhr.onreadystatechange = function() {
                        // DONE (success or failure)
                        if (xhr.readyState === 4) request.signal.removeEventListener("abort", abortXhr);
                    };
                }
                xhr.send(typeof request._bodyInit === "undefined" ? null : request._bodyInit);
            });
        }
        fetch.polyfill = true;
        if (!self1.fetch) {
            self1.fetch = fetch;
            self1.Headers = Headers;
            self1.Request = Request;
            self1.Response = Response;
        }
        exports1.Headers = Headers;
        exports1.Request = Request;
        exports1.Response = Response;
        exports1.fetch = fetch;
        Object.defineProperty(exports1, "__esModule", {
            value: true
        });
        return exports1;
    }({});
})(__self__);
__self__.fetch.ponyfill = true;
// Remove "polyfill" property added by whatwg-fetch
delete __self__.fetch.polyfill;
// Choose between native implementation (global) or custom implementation (__self__)
// var ctx = global.fetch ? global : __self__;
var ctx = __self__; // this line disable service worker support temporarily
exports = ctx.fetch // To enable: import fetch from 'cross-fetch'
;
exports.default = ctx.fetch // For TypeScript consumers without esModuleInterop.
;
exports.fetch = ctx.fetch // To enable: import {fetch} from 'cross-fetch'
;
exports.Headers = ctx.Headers;
exports.Request = ctx.Request;
exports.Response = ctx.Response;
module.exports = exports;

},{}],"e8vjN":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const lib_1 = require("./lib");
const strings_1 = require("./strings");
const settings_1 = require("./settings"); // $lab:coverage:off$
// @ts-ignore
const { Response  } = typeof FHIRCLIENT_PURE !== "undefined" ? window : require("cross-fetch"); // $lab:coverage:on$
const debug = lib_1.debug.extend("client");
/**
 * Adds patient context to requestOptions object to be used with [[Client.request]]
 * @param requestOptions Can be a string URL (relative to the serviceUrl), or an
 * object which will be passed to fetch()
 * @param client Current FHIR client object containing patient context
 * @return requestOptions object contextualized to current patient
 */ async function contextualize(requestOptions, client) {
    const base = (0, lib_1.absolute)("/", client.state.serverUrl);
    async function contextualURL(_url) {
        const resourceType = _url.pathname.split("/").pop();
        (0, lib_1.assert)(resourceType, `Invalid url "${_url}"`);
        (0, lib_1.assert)(settings_1.patientCompartment.indexOf(resourceType) > -1, `Cannot filter "${resourceType}" resources by patient`);
        const conformance = await (0, lib_1.fetchConformanceStatement)(client.state.serverUrl);
        const searchParam = (0, lib_1.getPatientParam)(conformance, resourceType);
        _url.searchParams.set(searchParam, client.patient.id);
        return _url.href;
    }
    if (typeof requestOptions == "string" || requestOptions instanceof URL) return {
        url: await contextualURL(new URL(requestOptions + "", base))
    };
    requestOptions.url = await contextualURL(new URL(requestOptions.url + "", base));
    return requestOptions;
}
/**
 * Gets single reference by id. Caches the result.
 * @param refId
 * @param cache A map to store the resolved refs
 * @param client The client instance
 * @param [signal] The `AbortSignal` if any
 * @returns The resolved reference
 * @private
 */ function getRef(refId, cache, client, signal) {
    if (!cache[refId]) // Note that we set cache[refId] immediately! When the promise is
    // settled it will be updated. This is to avoid a ref being fetched
    // twice because some of these requests are executed in parallel.
    cache[refId] = client.request({
        url: refId,
        signal
    }).then((res)=>{
        cache[refId] = res;
        return res;
    }, (error)=>{
        delete cache[refId];
        throw error;
    });
    return Promise.resolve(cache[refId]);
}
/**
 * Resolves a reference in the given resource.
 * @param obj FHIR Resource
 */ function resolveRef(obj, path, graph, cache, client, signal) {
    const node = (0, lib_1.getPath)(obj, path);
    if (node) {
        const isArray = Array.isArray(node);
        return Promise.all((0, lib_1.makeArray)(node).filter(Boolean).map((item, i)=>{
            const ref = item.reference;
            if (ref) return getRef(ref, cache, client, signal).then((sub)=>{
                if (graph) {
                    if (isArray) {
                        if (path.indexOf("..") > -1) (0, lib_1.setPath)(obj, `${path.replace("..", `.${i}.`)}`, sub);
                        else (0, lib_1.setPath)(obj, `${path}.${i}`, sub);
                    } else (0, lib_1.setPath)(obj, path, sub);
                }
            }).catch((ex)=>{
                /* ignore missing references */ if (ex.status !== 404) throw ex;
            });
        }));
    }
}
/**
 * Given a resource and a list of ref paths - resolves them all
 * @param obj FHIR Resource
 * @param fhirOptions The fhir options of the initiating request call
 * @param cache A map to store fetched refs
 * @param client The client instance
 * @private
 */ function resolveRefs(obj, fhirOptions, cache, client, signal) {
    // 1. Sanitize paths, remove any invalid ones
    let paths = (0, lib_1.makeArray)(fhirOptions.resolveReferences).filter(Boolean) // No false, 0, null, undefined or ""
    .map((path)=>String(path).trim()).filter(Boolean); // No space-only strings
    // 2. Remove duplicates
    paths = paths.filter((p, i)=>{
        const index = paths.indexOf(p, i + 1);
        if (index > -1) {
            debug('Duplicated reference path "%s"', p);
            return false;
        }
        return true;
    }); // 3. Early exit if no valid paths are found
    if (!paths.length) return Promise.resolve();
     // 4. Group the paths by depth so that child refs are looked up
    // after their parents!
    const groups = {};
    paths.forEach((path)=>{
        const len = path.split(".").length;
        if (!groups[len]) groups[len] = [];
        groups[len].push(path);
    }); // 5. Execute groups sequentially! Paths within same group are
    // fetched in parallel!
    let task = Promise.resolve();
    Object.keys(groups).sort().forEach((len)=>{
        const group = groups[len];
        task = task.then(()=>Promise.all(group.map((path)=>{
                return resolveRef(obj, path, !!fhirOptions.graph, cache, client, signal);
            })));
    });
    return task;
}
/**
 * This is a FHIR client that is returned to you from the `ready()` call of the
 * **SMART API**. You can also create it yourself if needed:
 *
 * ```js
 * // BROWSER
 * const client = FHIR.client("https://r4.smarthealthit.org");
 *
 * // SERVER
 * const client = smart(req, res).client("https://r4.smarthealthit.org");
 * ```
 */ class Client {
    /**
   * Validates the parameters, creates an instance and tries to connect it to
   * FhirJS, if one is available globally.
   */ constructor(environment, state){
        /**
     * @category Utility
     */ this.units = lib_1.units;
        const _state = typeof state == "string" ? {
            serverUrl: state
        } : state; // Valid serverUrl is required!
        (0, lib_1.assert)(_state.serverUrl && _state.serverUrl.match(/https?:\/\/.+/), 'A "serverUrl" option is required and must begin with "http(s)"');
        this.state = _state;
        this.environment = environment;
        this._refreshTask = null;
        const client = this; // patient api ---------------------------------------------------------
        this.patient = {
            get id () {
                return client.getPatientId();
            },
            read: (requestOptions)=>{
                const id = this.patient.id;
                return id ? this.request(Object.assign(Object.assign({}, requestOptions), {
                    url: `Patient/${id}`
                })) : Promise.reject(new Error("Patient is not available"));
            },
            request: (requestOptions, fhirOptions = {})=>{
                if (this.patient.id) return (async ()=>{
                    const options = await contextualize(requestOptions, this);
                    return this.request(options, fhirOptions);
                })();
                else return Promise.reject(new Error("Patient is not available"));
            }
        }; // encounter api -------------------------------------------------------
        this.encounter = {
            get id () {
                return client.getEncounterId();
            },
            read: (requestOptions)=>{
                const id = this.encounter.id;
                return id ? this.request(Object.assign(Object.assign({}, requestOptions), {
                    url: `Encounter/${id}`
                })) : Promise.reject(new Error("Encounter is not available"));
            }
        }; // user api ------------------------------------------------------------
        this.user = {
            get fhirUser () {
                return client.getFhirUser();
            },
            get id () {
                return client.getUserId();
            },
            get resourceType () {
                return client.getUserType();
            },
            read: (requestOptions)=>{
                const fhirUser = this.user.fhirUser;
                return fhirUser ? this.request(Object.assign(Object.assign({}, requestOptions), {
                    url: fhirUser
                })) : Promise.reject(new Error("User is not available"));
            }
        }; // fhir.js api (attached automatically in browser)
        // ---------------------------------------------------------------------
        this.connect(environment.fhir);
    }
    /**
   * This method is used to make the "link" between the `fhirclient` and the
   * `fhir.js`, if one is available.
   * **Note:** This is called by the constructor. If fhir.js is available in
   * the global scope as `fhir`, it will automatically be linked to any [[Client]]
   * instance. You should only use this method to connect to `fhir.js` which
   * is not global.
   */ connect(fhirJs) {
        if (typeof fhirJs == "function") {
            const options = {
                baseUrl: this.state.serverUrl.replace(/\/$/, "")
            };
            const accessToken = this.getState("tokenResponse.access_token");
            if (accessToken) options.auth = {
                token: accessToken
            };
            else {
                const { username , password  } = this.state;
                if (username && password) options.auth = {
                    user: username,
                    pass: password
                };
            }
            this.api = fhirJs(options);
            const patientId = this.getState("tokenResponse.patient");
            if (patientId) this.patient.api = fhirJs(Object.assign(Object.assign({}, options), {
                patient: patientId
            }));
        }
        return this;
    }
    /**
   * Returns the ID of the selected patient or null. You should have requested
   * "launch/patient" scope. Otherwise this will return null.
   */ getPatientId() {
        const tokenResponse = this.state.tokenResponse;
        if (tokenResponse) {
            // We have been authorized against this server but we don't know
            // the patient. This should be a scope issue.
            if (!tokenResponse.patient) {
                if (!(this.state.scope || "").match(/\blaunch(\/patient)?\b/)) debug(strings_1.default.noScopeForId, "patient", "patient");
                else // The server should have returned the patient!
                debug("The ID of the selected patient is not available. Please check if your server supports that.");
                return null;
            }
            return tokenResponse.patient;
        }
        if (this.state.authorizeUri) debug(strings_1.default.noIfNoAuth, "the ID of the selected patient");
        else debug(strings_1.default.noFreeContext, "selected patient");
        return null;
    }
    /**
   * Returns the ID of the selected encounter or null. You should have
   * requested "launch/encounter" scope. Otherwise this will return null.
   * Note that not all servers support the "launch/encounter" scope so this
   * will be null if they don't.
   */ getEncounterId() {
        const tokenResponse = this.state.tokenResponse;
        if (tokenResponse) {
            // We have been authorized against this server but we don't know
            // the encounter. This should be a scope issue.
            if (!tokenResponse.encounter) {
                if (!(this.state.scope || "").match(/\blaunch(\/encounter)?\b/)) debug(strings_1.default.noScopeForId, "encounter", "encounter");
                else // The server should have returned the encounter!
                debug("The ID of the selected encounter is not available. Please check if your server supports that, and that the selected patient has any recorded encounters.");
                return null;
            }
            return tokenResponse.encounter;
        }
        if (this.state.authorizeUri) debug(strings_1.default.noIfNoAuth, "the ID of the selected encounter");
        else debug(strings_1.default.noFreeContext, "selected encounter");
        return null;
    }
    /**
   * Returns the (decoded) id_token if any. You need to request "openid" and
   * "profile" scopes if you need to receive an id_token (if you need to know
   * who the logged-in user is).
   */ getIdToken() {
        const tokenResponse = this.state.tokenResponse;
        if (tokenResponse) {
            const idToken = tokenResponse.id_token;
            const scope = this.state.scope || ""; // We have been authorized against this server but we don't have
            // the id_token. This should be a scope issue.
            if (!idToken) {
                const hasOpenid = scope.match(/\bopenid\b/);
                const hasProfile = scope.match(/\bprofile\b/);
                const hasFhirUser = scope.match(/\bfhirUser\b/);
                if (!hasOpenid || !(hasFhirUser || hasProfile)) debug("You are trying to get the id_token but you are not using the right scopes. Please add 'openid' and 'fhirUser' or 'profile' to the scopes you are requesting.");
                else // The server should have returned the id_token!
                debug("The id_token is not available. Please check if your server supports that.");
                return null;
            }
            return (0, lib_1.jwtDecode)(idToken, this.environment);
        }
        if (this.state.authorizeUri) debug(strings_1.default.noIfNoAuth, "the id_token");
        else debug(strings_1.default.noFreeContext, "id_token");
        return null;
    }
    /**
   * Returns the profile of the logged_in user (if any). This is a string
   * having the following shape `"{user type}/{user id}"`. For example:
   * `"Practitioner/abc"` or `"Patient/xyz"`.
   */ getFhirUser() {
        const idToken = this.getIdToken();
        if (idToken) {
            // Epic may return a full url
            // @see https://github.com/smart-on-fhir/client-js/issues/105
            if (idToken.fhirUser) return idToken.fhirUser.split("/").slice(-2).join("/");
            return idToken.profile;
        }
        return null;
    }
    /**
   * Returns the user ID or null.
   */ getUserId() {
        const profile = this.getFhirUser();
        if (profile) return profile.split("/")[1];
        return null;
    }
    /**
   * Returns the type of the logged-in user or null. The result can be
   * "Practitioner", "Patient" or "RelatedPerson".
   */ getUserType() {
        const profile = this.getFhirUser();
        if (profile) return profile.split("/")[0];
        return null;
    }
    /**
   * Builds and returns the value of the `Authorization` header that can be
   * sent to the FHIR server
   */ getAuthorizationHeader() {
        const accessToken = this.getState("tokenResponse.access_token");
        if (accessToken) return "Bearer " + accessToken;
        const { username , password  } = this.state;
        if (username && password) return "Basic " + this.environment.btoa(username + ":" + password);
        return null;
    }
    /**
   * Used internally to clear the state of the instance and the state in the
   * associated storage.
   */ async _clearState() {
        const storage = this.environment.getStorage();
        const key = await storage.get(settings_1.SMART_KEY);
        if (key) await storage.unset(key);
        await storage.unset(settings_1.SMART_KEY);
        this.state.tokenResponse = {};
    }
    /**
   * Creates a new resource in a server-assigned location
   * @see http://hl7.org/fhir/http.html#create
   * @param resource A FHIR resource to be created
   * @param [requestOptions] Any options to be passed to the fetch call.
   * Note that `method` and `body` will be ignored.
   * @category Request
   */ create(resource, requestOptions) {
        return this.request(Object.assign(Object.assign({}, requestOptions), {
            url: `${resource.resourceType}`,
            method: "POST",
            body: JSON.stringify(resource),
            headers: Object.assign({
                // TODO: Do we need to alternate with "application/json+fhir"?
                "content-type": "application/json"
            }, (requestOptions || {}).headers)
        }));
    }
    /**
   * Creates a new current version for an existing resource or creates an
   * initial version if no resource already exists for the given id.
   * @see http://hl7.org/fhir/http.html#update
   * @param resource A FHIR resource to be updated
   * @param requestOptions Any options to be passed to the fetch call.
   * Note that `method` and `body` will be ignored.
   * @category Request
   */ update(resource, requestOptions) {
        return this.request(Object.assign(Object.assign({}, requestOptions), {
            url: `${resource.resourceType}/${resource.id}`,
            method: "PUT",
            body: JSON.stringify(resource),
            headers: Object.assign({
                // TODO: Do we need to alternate with "application/json+fhir"?
                "content-type": "application/json"
            }, (requestOptions || {}).headers)
        }));
    }
    /**
   * Removes an existing resource.
   * @see http://hl7.org/fhir/http.html#delete
   * @param url Relative URI of the FHIR resource to be deleted
   * (format: `resourceType/id`)
   * @param requestOptions Any options (except `method` which will be fixed
   * to `DELETE`) to be passed to the fetch call.
   * @category Request
   */ delete(url, requestOptions = {}) {
        return this.request(Object.assign(Object.assign({}, requestOptions), {
            url,
            method: "DELETE"
        }));
    }
    /**
   * Makes a JSON Patch to the given resource
   * @see http://hl7.org/fhir/http.html#patch
   * @param url Relative URI of the FHIR resource to be patched
   * (format: `resourceType/id`)
   * @param patch A JSON Patch array to send to the server, For details
   * see https://datatracker.ietf.org/doc/html/rfc6902
   * @param requestOptions Any options to be passed to the fetch call,
   * except for `method`, `url` and `body` which cannot be overridden.
   * @since 2.4.0
   * @category Request
   * @typeParam ResolveType This method would typically resolve with the
   * patched resource or reject with an OperationOutcome. However, this may
   * depend on the server implementation or even on the request headers.
   * For that reason, if the default resolve type (which is
   * [[fhirclient.FHIR.Resource]]) does not work for you, you can pass
   * in your own resolve type parameter.
   */ async patch(url, patch, requestOptions = {}) {
        (0, lib_1.assertJsonPatch)(patch);
        return this.request(Object.assign(Object.assign({}, requestOptions), {
            url,
            method: "PATCH",
            body: JSON.stringify(patch),
            headers: Object.assign({
                "prefer": "return=presentation",
                "content-type": "application/json-patch+json; charset=UTF-8"
            }, requestOptions.headers)
        }));
    }
    /**
   * @param requestOptions Can be a string URL (relative to the serviceUrl),
   * or an object which will be passed to fetch()
   * @param fhirOptions Additional options to control the behavior
   * @param _resolvedRefs DO NOT USE! Used internally.
   * @category Request
   */ async request(requestOptions, fhirOptions = {}, _resolvedRefs = {}) {
        var _a;
        const debugRequest = lib_1.debug.extend("client:request");
        (0, lib_1.assert)(requestOptions, "request requires an url or request options as argument"); // url -----------------------------------------------------------------
        let url;
        if (typeof requestOptions == "string" || requestOptions instanceof URL) {
            url = String(requestOptions);
            requestOptions = {};
        } else url = String(requestOptions.url);
        url = (0, lib_1.absolute)(url, this.state.serverUrl);
        const options = {
            graph: fhirOptions.graph !== false,
            flat: !!fhirOptions.flat,
            pageLimit: (_a = fhirOptions.pageLimit) !== null && _a !== void 0 ? _a : 1,
            resolveReferences: fhirOptions.resolveReferences || [],
            useRefreshToken: fhirOptions.useRefreshToken !== false,
            onPage: typeof fhirOptions.onPage == "function" ? fhirOptions.onPage : undefined
        };
        const signal = requestOptions.signal || undefined; // Refresh the access token if needed
        const job = options.useRefreshToken ? this.refreshIfNeeded({
            signal
        }).then(()=>requestOptions) : Promise.resolve(requestOptions);
        let response;
        return job // Add the Authorization header now, after the access token might
        // have been updated
        .then((requestOptions)=>{
            const authHeader = this.getAuthorizationHeader();
            if (authHeader) requestOptions.headers = Object.assign(Object.assign({}, requestOptions.headers), {
                authorization: authHeader
            });
            return requestOptions;
        }) // Make the request
        .then((requestOptions)=>{
            debugRequest("%s, options: %O, fhirOptions: %O", url, requestOptions, options);
            return (0, lib_1.request)(url, requestOptions).then((result)=>{
                if (requestOptions.includeResponse) {
                    response = result.response;
                    return result.body;
                }
                return result;
            });
        }) // Handle 401 ------------------------------------------------------
        .catch(async (error)=>{
            if (error.status == 401) {
                // !accessToken -> not authorized -> No session. Need to launch.
                if (!this.getState("tokenResponse.access_token")) {
                    error.message += "\nThis app cannot be accessed directly. Please launch it as SMART app!";
                    throw error;
                } // auto-refresh not enabled and Session expired.
                // Need to re-launch. Clear state to start over!
                if (!options.useRefreshToken) {
                    debugRequest("Your session has expired and the useRefreshToken option is set to false. Please re-launch the app.");
                    await this._clearState();
                    error.message += "\n" + strings_1.default.expired;
                    throw error;
                } // In rare cases we may have a valid access token and a refresh
                // token and the request might still fail with 401 just because
                // the access token has just been revoked.
                // otherwise -> auto-refresh failed. Session expired.
                // Need to re-launch. Clear state to start over!
                debugRequest("Auto-refresh failed! Please re-launch the app.");
                await this._clearState();
                error.message += "\n" + strings_1.default.expired;
                throw error;
            }
            throw error;
        }) // Handle 403 ------------------------------------------------------
        .catch((error)=>{
            if (error.status == 403) debugRequest("Permission denied! Please make sure that you have requested the proper scopes.");
            throw error;
        }).then((data)=>{
            // At this point we don't know what `data` actually is!
            // We might gen an empty or falsy result. If so return it as is
            if (!data) return data; // Handle raw responses
            if (typeof data == "string" || data instanceof Response) return data; // Resolve References ------------------------------------------
            return (async (_data)=>{
                if (_data.resourceType == "Bundle") await Promise.all((_data.entry || []).map((item)=>resolveRefs(item.resource, options, _resolvedRefs, this, signal)));
                else await resolveRefs(_data, options, _resolvedRefs, this, signal);
                return _data;
            })(data) // Pagination ----------------------------------------------
            .then(async (_data)=>{
                if (_data && _data.resourceType == "Bundle") {
                    const links = _data.link || [];
                    if (options.flat) _data = (_data.entry || []).map((entry)=>entry.resource);
                    if (options.onPage) await options.onPage(_data, Object.assign({}, _resolvedRefs));
                    if (--options.pageLimit) {
                        const next = links.find((l)=>l.relation == "next");
                        _data = (0, lib_1.makeArray)(_data);
                        if (next && next.url) {
                            const nextPage = await this.request({
                                url: next.url,
                                // Aborting the main request (even after it is complete)
                                // must propagate to any child requests and abort them!
                                // To do so, just pass the same AbortSignal if one is
                                // provided.
                                signal
                            }, options, _resolvedRefs);
                            if (options.onPage) return null;
                            if (options.resolveReferences.length) {
                                Object.assign(_resolvedRefs, nextPage.references);
                                return _data.concat((0, lib_1.makeArray)(nextPage.data || nextPage));
                            }
                            return _data.concat((0, lib_1.makeArray)(nextPage));
                        }
                    }
                }
                return _data;
            }) // Finalize ------------------------------------------------
            .then((_data)=>{
                if (options.graph) _resolvedRefs = {};
                else if (!options.onPage && options.resolveReferences.length) return {
                    data: _data,
                    references: _resolvedRefs
                };
                return _data;
            }).then((_data)=>{
                if (requestOptions.includeResponse) return {
                    body: _data,
                    response
                };
                return _data;
            });
        });
    }
    /**
   * Checks if access token and refresh token are present. If they are, and if
   * the access token is expired or is about to expire in the next 10 seconds,
   * calls `this.refresh()` to obtain new access token.
   * @param requestOptions Any options to pass to the fetch call. Most of them
   * will be overridden, bit it might still be useful for passing additional
   * request options or an abort signal.
   * @category Request
   */ refreshIfNeeded(requestOptions = {}) {
        const accessToken = this.getState("tokenResponse.access_token");
        const refreshToken = this.getState("tokenResponse.refresh_token");
        const expiresAt = this.state.expiresAt || 0;
        if (accessToken && refreshToken && expiresAt - 10 < Date.now() / 1000) return this.refresh(requestOptions);
        return Promise.resolve(this.state);
    }
    /**
   * Use the refresh token to obtain new access token. If the refresh token is
   * expired (or this fails for any other reason) it will be deleted from the
   * state, so that we don't enter into loops trying to re-authorize.
   *
   * This method is typically called internally from [[request]] if
   * certain request fails with 401.
   *
   * @param requestOptions Any options to pass to the fetch call. Most of them
   * will be overridden, bit it might still be useful for passing additional
   * request options or an abort signal.
   * @category Request
   */ refresh(requestOptions = {}) {
        var _a, _b;
        const debugRefresh = lib_1.debug.extend("client:refresh");
        debugRefresh("Attempting to refresh with refresh_token...");
        const refreshToken = (_b = (_a = this.state) === null || _a === void 0 ? void 0 : _a.tokenResponse) === null || _b === void 0 ? void 0 : _b.refresh_token;
        (0, lib_1.assert)(refreshToken, "Unable to refresh. No refresh_token found.");
        const tokenUri = this.state.tokenUri;
        (0, lib_1.assert)(tokenUri, "Unable to refresh. No tokenUri found.");
        const scopes = this.getState("tokenResponse.scope") || "";
        const hasOfflineAccess = scopes.search(/\boffline_access\b/) > -1;
        const hasOnlineAccess = scopes.search(/\bonline_access\b/) > -1;
        (0, lib_1.assert)(hasOfflineAccess || hasOnlineAccess, "Unable to refresh. No offline_access or online_access scope found."); // This method is typically called internally from `request` if certain
        // request fails with 401. However, clients will often run multiple
        // requests in parallel which may result in multiple refresh calls.
        // To avoid that, we keep a reference to the current refresh task (if any).
        if (!this._refreshTask) {
            const refreshRequestOptions = Object.assign(Object.assign({
                credentials: this.environment.options.refreshTokenWithCredentials || "same-origin"
            }, requestOptions), {
                method: "POST",
                mode: "cors",
                headers: Object.assign(Object.assign({}, requestOptions.headers || {}), {
                    "content-type": "application/x-www-form-urlencoded"
                }),
                body: `grant_type=refresh_token&refresh_token=${encodeURIComponent(refreshToken)}`
            }); // custom authorization header can be passed on manual calls
            if (!("authorization" in refreshRequestOptions.headers)) {
                const { clientSecret , clientId  } = this.state;
                if (clientSecret) // @ts-ignore
                refreshRequestOptions.headers.authorization = "Basic " + this.environment.btoa(clientId + ":" + clientSecret);
            }
            this._refreshTask = (0, lib_1.request)(tokenUri, refreshRequestOptions).then((data)=>{
                (0, lib_1.assert)(data.access_token, "No access token received");
                debugRefresh("Received new access token response %O", data);
                this.state.tokenResponse = Object.assign(Object.assign({}, this.state.tokenResponse), data);
                this.state.expiresAt = (0, lib_1.getAccessTokenExpiration)(data, this.environment);
                return this.state;
            }).catch((error)=>{
                var _a, _b;
                if ((_b = (_a = this.state) === null || _a === void 0 ? void 0 : _a.tokenResponse) === null || _b === void 0 ? void 0 : _b.refresh_token) {
                    debugRefresh("Deleting the expired or invalid refresh token.");
                    delete this.state.tokenResponse.refresh_token;
                }
                throw error;
            }).finally(()=>{
                this._refreshTask = null;
                const key = this.state.key;
                if (key) this.environment.getStorage().set(key, this.state);
                else debugRefresh("No 'key' found in Clint.state. Cannot persist the instance.");
            });
        }
        return this._refreshTask;
    }
    /**
   * Groups the observations by code. Returns a map that will look like:
   * ```js
   * const map = client.byCodes(observations, "code");
   * // map = {
   * //     "55284-4": [ observation1, observation2 ],
   * //     "6082-2": [ observation3 ]
   * // }
   * ```
   * @param observations Array of observations
   * @param property The name of a CodeableConcept property to group by
   * @todo This should be deprecated and moved elsewhere. One should not have
   * to obtain an instance of [[Client]] just to use utility functions like this.
   * @deprecated
   * @category Utility
   */ byCode(observations, property) {
        return (0, lib_1.byCode)(observations, property);
    }
    /**
   * First groups the observations by code using `byCode`. Then returns a function
   * that accepts codes as arguments and will return a flat array of observations
   * having that codes. Example:
   * ```js
   * const filter = client.byCodes(observations, "category");
   * filter("laboratory") // => [ observation1, observation2 ]
   * filter("vital-signs") // => [ observation3 ]
   * filter("laboratory", "vital-signs") // => [ observation1, observation2, observation3 ]
   * ```
   * @param observations Array of observations
   * @param property The name of a CodeableConcept property to group by
   * @todo This should be deprecated and moved elsewhere. One should not have
   * to obtain an instance of [[Client]] just to use utility functions like this.
   * @deprecated
   * @category Utility
   */ byCodes(observations, property) {
        return (0, lib_1.byCodes)(observations, property);
    }
    /**
   * Walks through an object (or array) and returns the value found at the
   * provided path. This function is very simple so it intentionally does not
   * support any argument polymorphism, meaning that the path can only be a
   * dot-separated string. If the path is invalid returns undefined.
   * @param obj The object (or Array) to walk through
   * @param path The path (eg. "a.b.4.c")
   * @returns {*} Whatever is found in the path or undefined
   * @todo This should be deprecated and moved elsewhere. One should not have
   * to obtain an instance of [[Client]] just to use utility functions like this.
   * @deprecated
   * @category Utility
   */ getPath(obj, path = "") {
        return (0, lib_1.getPath)(obj, path);
    }
    /**
   * Returns a copy of the client state. Accepts a dot-separated path argument
   * (same as for `getPath`) to allow for selecting specific properties.
   * Examples:
   * ```js
   * client.getState(); // -> the entire state object
   * client.getState("serverUrl"); // -> the URL we are connected to
   * client.getState("tokenResponse.patient"); // -> The selected patient ID (if any)
   * ```
   * @param path The path (eg. "a.b.4.c")
   * @returns {*} Whatever is found in the path or undefined
   */ getState(path = "") {
        return (0, lib_1.getPath)(Object.assign({}, this.state), path);
    }
    /**
   * Returns a promise that will be resolved with the fhir version as defined
   * in the CapabilityStatement.
   */ getFhirVersion() {
        return (0, lib_1.fetchConformanceStatement)(this.state.serverUrl).then((metadata)=>metadata.fhirVersion);
    }
    /**
   * Returns a promise that will be resolved with the numeric fhir version
   * - 2 for DSTU2
   * - 3 for STU3
   * - 4 for R4
   * - 0 if the version is not known
   */ getFhirRelease() {
        return this.getFhirVersion().then((v)=>{
            var _a;
            return (_a = settings_1.fhirVersions[v]) !== null && _a !== void 0 ? _a : 0;
        });
    }
}
exports.default = Client;

},{"./lib":"e41cQ","./strings":"9v3eu","./settings":"gLXbx","cross-fetch":"j4ah4"}],"9v3eu":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
}); // This map contains reusable debug messages (only those used in multiple places)
exports.default = {
    expired: "Session expired! Please re-launch the app",
    noScopeForId: "Trying to get the ID of the selected %s. Please add 'launch' or 'launch/%s' to the requested scopes and try again.",
    noIfNoAuth: "You are trying to get %s but the app is not authorized yet.",
    noFreeContext: "Please don't use open fhir servers if you need to access launch context items like the %S."
};

},{}],"cKEty":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
class Storage {
    /**
   * Gets the value at `key`. Returns a promise that will be resolved
   * with that value (or undefined for missing keys).
   */ async get(key) {
        const value = sessionStorage[key];
        if (value) return JSON.parse(value);
        return null;
    }
    /**
   * Sets the `value` on `key` and returns a promise that will be resolved
   * with the value that was set.
   */ async set(key, value) {
        sessionStorage[key] = JSON.stringify(value);
        return value;
    }
    /**
   * Deletes the value at `key`. Returns a promise that will be resolved
   * with true if the key was deleted or with false if it was not (eg. if
   * did not exist).
   */ async unset(key) {
        if (key in sessionStorage) {
            delete sessionStorage[key];
            return true;
        }
        return false;
    }
}
exports.default = Storage;

},{}],"jh26J":[function(require,module,exports) {
"use strict";
require("core-js/modules/es.typed-array.set.js");
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.signCompactJws = exports.importJWK = exports.generatePKCEChallenge = exports.digestSha256 = exports.randomBytes = void 0;
const js_base64_1 = require("js-base64");
const crypto = typeof globalThis === "object" && globalThis.crypto ? globalThis.crypto : require("isomorphic-webcrypto").default;
const subtle = crypto.subtle;
const ALGS = {
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
function randomBytes(count) {
    return crypto.getRandomValues(new Uint8Array(count));
}
exports.randomBytes = randomBytes;
async function digestSha256(payload) {
    const prepared = new TextEncoder().encode(payload);
    const hash = await subtle.digest("SHA-256", prepared);
    return new Uint8Array(hash);
}
exports.digestSha256 = digestSha256;
const generatePKCEChallenge = async (entropy = 96)=>{
    const inputBytes = randomBytes(entropy);
    const codeVerifier = (0, js_base64_1.fromUint8Array)(inputBytes, true);
    const codeChallenge = (0, js_base64_1.fromUint8Array)(await digestSha256(codeVerifier), true);
    return {
        codeChallenge,
        codeVerifier
    };
};
exports.generatePKCEChallenge = generatePKCEChallenge;
async function importJWK(jwk) {
    // alg is optional in JWK but we need it here!
    if (!jwk.alg) throw new Error('The "alg" property of the JWK must be set to "ES384" or "RS384"');
     // Use of the "key_ops" member is OPTIONAL, unless the application requires its presence.
    // https://www.rfc-editor.org/rfc/rfc7517.html#section-4.3
    // 
    // In our case the app will only import private keys so we can assume "sign"
    if (!Array.isArray(jwk.key_ops)) jwk.key_ops = [
        "sign"
    ];
     // In this case the JWK has a "key_ops" array and "sign" is not listed
    if (!jwk.key_ops.includes("sign")) throw new Error('The "key_ops" property of the JWK does not contain "sign"');
    try {
        return await subtle.importKey("jwk", jwk, ALGS[jwk.alg], jwk.ext === true, jwk.key_ops // || ['sign']
        );
    } catch (e) {
        throw new Error(`The ${jwk.alg} is not supported by this browser: ${e}`);
    }
}
exports.importJWK = importJWK;
async function signCompactJws(alg, privateKey, header, payload) {
    const jwtHeader = JSON.stringify(Object.assign(Object.assign({}, header), {
        alg
    }));
    const jwtPayload = JSON.stringify(payload);
    const jwtAuthenticatedContent = `${(0, js_base64_1.encodeURL)(jwtHeader)}.${(0, js_base64_1.encodeURL)(jwtPayload)}`;
    const signature = await subtle.sign(Object.assign(Object.assign({}, privateKey.algorithm), {
        hash: "SHA-384"
    }), privateKey, new TextEncoder().encode(jwtAuthenticatedContent));
    return `${jwtAuthenticatedContent}.${(0, js_base64_1.fromUint8Array)(new Uint8Array(signature), true)}`;
}
exports.signCompactJws = signCompactJws;

},{"core-js/modules/es.typed-array.set.js":"52mSJ","js-base64":"9GjXb","isomorphic-webcrypto":"1hTeY"}],"52mSJ":[function(require,module,exports) {
"use strict";
var global = require("../internals/global");
var call = require("../internals/function-call");
var ArrayBufferViewCore = require("../internals/array-buffer-view-core");
var lengthOfArrayLike = require("../internals/length-of-array-like");
var toOffset = require("../internals/to-offset");
var toIndexedObject = require("../internals/to-object");
var fails = require("../internals/fails");
var RangeError = global.RangeError;
var Int8Array = global.Int8Array;
var Int8ArrayPrototype = Int8Array && Int8Array.prototype;
var $set = Int8ArrayPrototype && Int8ArrayPrototype.set;
var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
var WORKS_WITH_OBJECTS_AND_GEERIC_ON_TYPED_ARRAYS = !fails(function() {
    // eslint-disable-next-line es/no-typed-arrays -- required for testing
    var array = new Uint8ClampedArray(2);
    call($set, array, {
        length: 1,
        0: 3
    }, 1);
    return array[1] !== 3;
});
// https://bugs.chromium.org/p/v8/issues/detail?id=11294 and other
var TO_OBJECT_BUG = WORKS_WITH_OBJECTS_AND_GEERIC_ON_TYPED_ARRAYS && ArrayBufferViewCore.NATIVE_ARRAY_BUFFER_VIEWS && fails(function() {
    var array = new Int8Array(2);
    array.set(1);
    array.set("2", 1);
    return array[0] !== 0 || array[1] !== 2;
});
// `%TypedArray%.prototype.set` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.set
exportTypedArrayMethod("set", function set(arrayLike /* , offset */ ) {
    aTypedArray(this);
    var offset = toOffset(arguments.length > 1 ? arguments[1] : undefined, 1);
    var src = toIndexedObject(arrayLike);
    if (WORKS_WITH_OBJECTS_AND_GEERIC_ON_TYPED_ARRAYS) return call($set, this, src, offset);
    var length = this.length;
    var len = lengthOfArrayLike(src);
    var index = 0;
    if (len + offset > length) throw RangeError("Wrong length");
    while(index < len)this[offset + index] = src[index++];
}, !WORKS_WITH_OBJECTS_AND_GEERIC_ON_TYPED_ARRAYS || TO_OBJECT_BUG);

},{"../internals/global":"i8HOC","../internals/function-call":"d7JlP","../internals/array-buffer-view-core":"gYj32","../internals/length-of-array-like":"lY4mS","../internals/to-offset":"clBaP","../internals/to-object":"5cb35","../internals/fails":"hL6D2"}],"i8HOC":[function(require,module,exports) {
var global = arguments[3];
var check = function(it) {
    return it && it.Math == Math && it;
};
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports = // eslint-disable-next-line es/no-global-this -- safe
check(typeof globalThis == "object" && globalThis) || check(typeof window == "object" && window) || // eslint-disable-next-line no-restricted-globals -- safe
check(typeof self == "object" && self) || check(typeof global == "object" && global) || // eslint-disable-next-line no-new-func -- fallback
function() {
    return this;
}() || Function("return this")();

},{}],"d7JlP":[function(require,module,exports) {
var NATIVE_BIND = require("../internals/function-bind-native");
var call = Function.prototype.call;
module.exports = NATIVE_BIND ? call.bind(call) : function() {
    return call.apply(call, arguments);
};

},{"../internals/function-bind-native":"i16Dq"}],"i16Dq":[function(require,module,exports) {
var fails = require("../internals/fails");
module.exports = !fails(function() {
    // eslint-disable-next-line es/no-function-prototype-bind -- safe
    var test = (function() {}).bind();
    // eslint-disable-next-line no-prototype-builtins -- safe
    return typeof test != "function" || test.hasOwnProperty("prototype");
});

},{"../internals/fails":"hL6D2"}],"hL6D2":[function(require,module,exports) {
module.exports = function(exec) {
    try {
        return !!exec();
    } catch (error) {
        return true;
    }
};

},{}],"gYj32":[function(require,module,exports) {
"use strict";
var NATIVE_ARRAY_BUFFER = require("../internals/array-buffer-basic-detection");
var DESCRIPTORS = require("../internals/descriptors");
var global = require("../internals/global");
var isCallable = require("../internals/is-callable");
var isObject = require("../internals/is-object");
var hasOwn = require("../internals/has-own-property");
var classof = require("../internals/classof");
var tryToString = require("../internals/try-to-string");
var createNonEnumerableProperty = require("../internals/create-non-enumerable-property");
var defineBuiltIn = require("../internals/define-built-in");
var defineProperty = require("../internals/object-define-property").f;
var isPrototypeOf = require("../internals/object-is-prototype-of");
var getPrototypeOf = require("../internals/object-get-prototype-of");
var setPrototypeOf = require("../internals/object-set-prototype-of");
var wellKnownSymbol = require("../internals/well-known-symbol");
var uid = require("../internals/uid");
var InternalStateModule = require("../internals/internal-state");
var enforceInternalState = InternalStateModule.enforce;
var getInternalState = InternalStateModule.get;
var Int8Array = global.Int8Array;
var Int8ArrayPrototype = Int8Array && Int8Array.prototype;
var Uint8ClampedArray = global.Uint8ClampedArray;
var Uint8ClampedArrayPrototype = Uint8ClampedArray && Uint8ClampedArray.prototype;
var TypedArray = Int8Array && getPrototypeOf(Int8Array);
var TypedArrayPrototype = Int8ArrayPrototype && getPrototypeOf(Int8ArrayPrototype);
var ObjectPrototype = Object.prototype;
var TypeError = global.TypeError;
var TO_STRING_TAG = wellKnownSymbol("toStringTag");
var TYPED_ARRAY_TAG = uid("TYPED_ARRAY_TAG");
var TYPED_ARRAY_CONSTRUCTOR = "TypedArrayConstructor";
// Fixing native typed arrays in Opera Presto crashes the browser, see #595
var NATIVE_ARRAY_BUFFER_VIEWS = NATIVE_ARRAY_BUFFER && !!setPrototypeOf && classof(global.opera) !== "Opera";
var TYPED_ARRAY_TAG_REQUIRED = false;
var NAME, Constructor, Prototype;
var TypedArrayConstructorsList = {
    Int8Array: 1,
    Uint8Array: 1,
    Uint8ClampedArray: 1,
    Int16Array: 2,
    Uint16Array: 2,
    Int32Array: 4,
    Uint32Array: 4,
    Float32Array: 4,
    Float64Array: 8
};
var BigIntArrayConstructorsList = {
    BigInt64Array: 8,
    BigUint64Array: 8
};
var isView = function isView(it) {
    if (!isObject(it)) return false;
    var klass = classof(it);
    return klass === "DataView" || hasOwn(TypedArrayConstructorsList, klass) || hasOwn(BigIntArrayConstructorsList, klass);
};
var getTypedArrayConstructor = function(it) {
    var proto = getPrototypeOf(it);
    if (!isObject(proto)) return;
    var state = getInternalState(proto);
    return state && hasOwn(state, TYPED_ARRAY_CONSTRUCTOR) ? state[TYPED_ARRAY_CONSTRUCTOR] : getTypedArrayConstructor(proto);
};
var isTypedArray = function(it) {
    if (!isObject(it)) return false;
    var klass = classof(it);
    return hasOwn(TypedArrayConstructorsList, klass) || hasOwn(BigIntArrayConstructorsList, klass);
};
var aTypedArray = function(it) {
    if (isTypedArray(it)) return it;
    throw TypeError("Target is not a typed array");
};
var aTypedArrayConstructor = function(C) {
    if (isCallable(C) && (!setPrototypeOf || isPrototypeOf(TypedArray, C))) return C;
    throw TypeError(tryToString(C) + " is not a typed array constructor");
};
var exportTypedArrayMethod = function(KEY, property, forced, options) {
    if (!DESCRIPTORS) return;
    if (forced) for(var ARRAY in TypedArrayConstructorsList){
        var TypedArrayConstructor = global[ARRAY];
        if (TypedArrayConstructor && hasOwn(TypedArrayConstructor.prototype, KEY)) try {
            delete TypedArrayConstructor.prototype[KEY];
        } catch (error) {
            // old WebKit bug - some methods are non-configurable
            try {
                TypedArrayConstructor.prototype[KEY] = property;
            } catch (error2) {}
        }
    }
    if (!TypedArrayPrototype[KEY] || forced) defineBuiltIn(TypedArrayPrototype, KEY, forced ? property : NATIVE_ARRAY_BUFFER_VIEWS && Int8ArrayPrototype[KEY] || property, options);
};
var exportTypedArrayStaticMethod = function(KEY, property, forced) {
    var ARRAY, TypedArrayConstructor;
    if (!DESCRIPTORS) return;
    if (setPrototypeOf) {
        if (forced) for(ARRAY in TypedArrayConstructorsList){
            TypedArrayConstructor = global[ARRAY];
            if (TypedArrayConstructor && hasOwn(TypedArrayConstructor, KEY)) try {
                delete TypedArrayConstructor[KEY];
            } catch (error) {}
        }
        if (!TypedArray[KEY] || forced) // V8 ~ Chrome 49-50 `%TypedArray%` methods are non-writable non-configurable
        try {
            return defineBuiltIn(TypedArray, KEY, forced ? property : NATIVE_ARRAY_BUFFER_VIEWS && TypedArray[KEY] || property);
        } catch (error1) {}
        else return;
    }
    for(ARRAY in TypedArrayConstructorsList){
        TypedArrayConstructor = global[ARRAY];
        if (TypedArrayConstructor && (!TypedArrayConstructor[KEY] || forced)) defineBuiltIn(TypedArrayConstructor, KEY, property);
    }
};
for(NAME in TypedArrayConstructorsList){
    Constructor = global[NAME];
    Prototype = Constructor && Constructor.prototype;
    if (Prototype) enforceInternalState(Prototype)[TYPED_ARRAY_CONSTRUCTOR] = Constructor;
    else NATIVE_ARRAY_BUFFER_VIEWS = false;
}
for(NAME in BigIntArrayConstructorsList){
    Constructor = global[NAME];
    Prototype = Constructor && Constructor.prototype;
    if (Prototype) enforceInternalState(Prototype)[TYPED_ARRAY_CONSTRUCTOR] = Constructor;
}
// WebKit bug - typed arrays constructors prototype is Object.prototype
if (!NATIVE_ARRAY_BUFFER_VIEWS || !isCallable(TypedArray) || TypedArray === Function.prototype) {
    // eslint-disable-next-line no-shadow -- safe
    TypedArray = function TypedArray() {
        throw TypeError("Incorrect invocation");
    };
    if (NATIVE_ARRAY_BUFFER_VIEWS) {
        for(NAME in TypedArrayConstructorsList)if (global[NAME]) setPrototypeOf(global[NAME], TypedArray);
    }
}
if (!NATIVE_ARRAY_BUFFER_VIEWS || !TypedArrayPrototype || TypedArrayPrototype === ObjectPrototype) {
    TypedArrayPrototype = TypedArray.prototype;
    if (NATIVE_ARRAY_BUFFER_VIEWS) {
        for(NAME in TypedArrayConstructorsList)if (global[NAME]) setPrototypeOf(global[NAME].prototype, TypedArrayPrototype);
    }
}
// WebKit bug - one more object in Uint8ClampedArray prototype chain
if (NATIVE_ARRAY_BUFFER_VIEWS && getPrototypeOf(Uint8ClampedArrayPrototype) !== TypedArrayPrototype) setPrototypeOf(Uint8ClampedArrayPrototype, TypedArrayPrototype);
if (DESCRIPTORS && !hasOwn(TypedArrayPrototype, TO_STRING_TAG)) {
    TYPED_ARRAY_TAG_REQUIRED = true;
    defineProperty(TypedArrayPrototype, TO_STRING_TAG, {
        get: function() {
            return isObject(this) ? this[TYPED_ARRAY_TAG] : undefined;
        }
    });
    for(NAME in TypedArrayConstructorsList)if (global[NAME]) createNonEnumerableProperty(global[NAME], TYPED_ARRAY_TAG, NAME);
}
module.exports = {
    NATIVE_ARRAY_BUFFER_VIEWS: NATIVE_ARRAY_BUFFER_VIEWS,
    TYPED_ARRAY_TAG: TYPED_ARRAY_TAG_REQUIRED && TYPED_ARRAY_TAG,
    aTypedArray: aTypedArray,
    aTypedArrayConstructor: aTypedArrayConstructor,
    exportTypedArrayMethod: exportTypedArrayMethod,
    exportTypedArrayStaticMethod: exportTypedArrayStaticMethod,
    getTypedArrayConstructor: getTypedArrayConstructor,
    isView: isView,
    isTypedArray: isTypedArray,
    TypedArray: TypedArray,
    TypedArrayPrototype: TypedArrayPrototype
};

},{"../internals/array-buffer-basic-detection":"bVM3d","../internals/descriptors":"92ZIi","../internals/global":"i8HOC","../internals/is-callable":"l3Kyn","../internals/is-object":"Z0pBo","../internals/has-own-property":"gC2Q5","../internals/classof":"dKT7A","../internals/try-to-string":"4O7d7","../internals/create-non-enumerable-property":"8CL42","../internals/define-built-in":"6XwEX","../internals/object-define-property":"iJR4w","../internals/object-is-prototype-of":"3jtKQ","../internals/object-get-prototype-of":"2wazs","../internals/object-set-prototype-of":"2EnFi","../internals/well-known-symbol":"gTwyA","../internals/uid":"a3SEE","../internals/internal-state":"7AMlF"}],"bVM3d":[function(require,module,exports) {
// eslint-disable-next-line es/no-typed-arrays -- safe
module.exports = typeof ArrayBuffer != "undefined" && typeof DataView != "undefined";

},{}],"92ZIi":[function(require,module,exports) {
var fails = require("../internals/fails");
// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function() {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty({}, 1, {
        get: function() {
            return 7;
        }
    })[1] != 7;
});

},{"../internals/fails":"hL6D2"}],"l3Kyn":[function(require,module,exports) {
var $documentAll = require("../internals/document-all");
var documentAll = $documentAll.all;
// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
module.exports = $documentAll.IS_HTMLDDA ? function(argument) {
    return typeof argument == "function" || argument === documentAll;
} : function(argument) {
    return typeof argument == "function";
};

},{"../internals/document-all":"5MHqB"}],"5MHqB":[function(require,module,exports) {
var documentAll = typeof document == "object" && document.all;
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot
var IS_HTMLDDA = typeof documentAll == "undefined" && documentAll !== undefined;
module.exports = {
    all: documentAll,
    IS_HTMLDDA: IS_HTMLDDA
};

},{}],"Z0pBo":[function(require,module,exports) {
var isCallable = require("../internals/is-callable");
var $documentAll = require("../internals/document-all");
var documentAll = $documentAll.all;
module.exports = $documentAll.IS_HTMLDDA ? function(it) {
    return typeof it == "object" ? it !== null : isCallable(it) || it === documentAll;
} : function(it) {
    return typeof it == "object" ? it !== null : isCallable(it);
};

},{"../internals/is-callable":"l3Kyn","../internals/document-all":"5MHqB"}],"gC2Q5":[function(require,module,exports) {
var uncurryThis = require("../internals/function-uncurry-this");
var toObject = require("../internals/to-object");
var hasOwnProperty = uncurryThis({}.hasOwnProperty);
// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es/no-object-hasown -- safe
module.exports = Object.hasOwn || function hasOwn(it, key) {
    return hasOwnProperty(toObject(it), key);
};

},{"../internals/function-uncurry-this":"7GlkT","../internals/to-object":"5cb35"}],"7GlkT":[function(require,module,exports) {
var NATIVE_BIND = require("../internals/function-bind-native");
var FunctionPrototype = Function.prototype;
var call = FunctionPrototype.call;
var uncurryThisWithBind = NATIVE_BIND && FunctionPrototype.bind.bind(call, call);
module.exports = NATIVE_BIND ? uncurryThisWithBind : function(fn) {
    return function() {
        return call.apply(fn, arguments);
    };
};

},{"../internals/function-bind-native":"i16Dq"}],"5cb35":[function(require,module,exports) {
var requireObjectCoercible = require("../internals/require-object-coercible");
var $Object = Object;
// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function(argument) {
    return $Object(requireObjectCoercible(argument));
};

},{"../internals/require-object-coercible":"fOR0B"}],"fOR0B":[function(require,module,exports) {
var isNullOrUndefined = require("../internals/is-null-or-undefined");
var $TypeError = TypeError;
// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function(it) {
    if (isNullOrUndefined(it)) throw $TypeError("Can't call method on " + it);
    return it;
};

},{"../internals/is-null-or-undefined":"gM5ar"}],"gM5ar":[function(require,module,exports) {
// we can't use just `it == null` since of `document.all` special case
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
module.exports = function(it) {
    return it === null || it === undefined;
};

},{}],"dKT7A":[function(require,module,exports) {
var TO_STRING_TAG_SUPPORT = require("../internals/to-string-tag-support");
var isCallable = require("../internals/is-callable");
var classofRaw = require("../internals/classof-raw");
var wellKnownSymbol = require("../internals/well-known-symbol");
var TO_STRING_TAG = wellKnownSymbol("toStringTag");
var $Object = Object;
// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function() {
    return arguments;
}()) == "Arguments";
// fallback for IE11 Script Access Denied error
var tryGet = function(it, key) {
    try {
        return it[key];
    } catch (error) {}
};
// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function(it) {
    var O, tag, result;
    return it === undefined ? "Undefined" : it === null ? "Null" : typeof (tag = tryGet(O = $Object(it), TO_STRING_TAG)) == "string" ? tag : CORRECT_ARGUMENTS ? classofRaw(O) : (result = classofRaw(O)) == "Object" && isCallable(O.callee) ? "Arguments" : result;
};

},{"../internals/to-string-tag-support":"3Do6Z","../internals/is-callable":"l3Kyn","../internals/classof-raw":"bdfmm","../internals/well-known-symbol":"gTwyA"}],"3Do6Z":[function(require,module,exports) {
var wellKnownSymbol = require("../internals/well-known-symbol");
var TO_STRING_TAG = wellKnownSymbol("toStringTag");
var test = {};
test[TO_STRING_TAG] = "z";
module.exports = String(test) === "[object z]";

},{"../internals/well-known-symbol":"gTwyA"}],"gTwyA":[function(require,module,exports) {
var global = require("../internals/global");
var shared = require("../internals/shared");
var hasOwn = require("../internals/has-own-property");
var uid = require("../internals/uid");
var NATIVE_SYMBOL = require("../internals/symbol-constructor-detection");
var USE_SYMBOL_AS_UID = require("../internals/use-symbol-as-uid");
var WellKnownSymbolsStore = shared("wks");
var Symbol = global.Symbol;
var symbolFor = Symbol && Symbol["for"];
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;
module.exports = function(name) {
    if (!hasOwn(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == "string")) {
        var description = "Symbol." + name;
        if (NATIVE_SYMBOL && hasOwn(Symbol, name)) WellKnownSymbolsStore[name] = Symbol[name];
        else if (USE_SYMBOL_AS_UID && symbolFor) WellKnownSymbolsStore[name] = symbolFor(description);
        else WellKnownSymbolsStore[name] = createWellKnownSymbol(description);
    }
    return WellKnownSymbolsStore[name];
};

},{"../internals/global":"i8HOC","../internals/shared":"i1mHK","../internals/has-own-property":"gC2Q5","../internals/uid":"a3SEE","../internals/symbol-constructor-detection":"8KyTD","../internals/use-symbol-as-uid":"2Ye8Q"}],"i1mHK":[function(require,module,exports) {
var IS_PURE = require("../internals/is-pure");
var store = require("../internals/shared-store");
(module.exports = function(key, value) {
    return store[key] || (store[key] = value !== undefined ? value : {});
})("versions", []).push({
    version: "3.26.1",
    mode: IS_PURE ? "pure" : "global",
    copyright: "\xa9 2014-2022 Denis Pushkarev (zloirock.ru)",
    license: "https://github.com/zloirock/core-js/blob/v3.26.1/LICENSE",
    source: "https://github.com/zloirock/core-js"
});

},{"../internals/is-pure":"5ZsyC","../internals/shared-store":"l4ncH"}],"5ZsyC":[function(require,module,exports) {
module.exports = false;

},{}],"l4ncH":[function(require,module,exports) {
var global = require("../internals/global");
var defineGlobalProperty = require("../internals/define-global-property");
var SHARED = "__core-js_shared__";
var store = global[SHARED] || defineGlobalProperty(SHARED, {});
module.exports = store;

},{"../internals/global":"i8HOC","../internals/define-global-property":"ggjnO"}],"ggjnO":[function(require,module,exports) {
var global = require("../internals/global");
// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;
module.exports = function(key, value) {
    try {
        defineProperty(global, key, {
            value: value,
            configurable: true,
            writable: true
        });
    } catch (error) {
        global[key] = value;
    }
    return value;
};

},{"../internals/global":"i8HOC"}],"a3SEE":[function(require,module,exports) {
var uncurryThis = require("../internals/function-uncurry-this");
var id = 0;
var postfix = Math.random();
var toString = uncurryThis(1.0.toString);
module.exports = function(key) {
    return "Symbol(" + (key === undefined ? "" : key) + ")_" + toString(++id + postfix, 36);
};

},{"../internals/function-uncurry-this":"7GlkT"}],"8KyTD":[function(require,module,exports) {
/* eslint-disable es/no-symbol -- required for testing */ var V8_VERSION = require("../internals/engine-v8-version");
var fails = require("../internals/fails");
// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
module.exports = !!Object.getOwnPropertySymbols && !fails(function() {
    var symbol = Symbol();
    // Chrome 38 Symbol has incorrect toString conversion
    // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
    return !String(symbol) || !(Object(symbol) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});

},{"../internals/engine-v8-version":"bjFlO","../internals/fails":"hL6D2"}],"bjFlO":[function(require,module,exports) {
var global = require("../internals/global");
var userAgent = require("../internals/engine-user-agent");
var process = global.process;
var Deno = global.Deno;
var versions = process && process.versions || Deno && Deno.version;
var v8 = versions && versions.v8;
var match, version;
if (v8) {
    match = v8.split(".");
    // in old Chrome, versions of V8 isn't V8 = Chrome / 10
    // but their correct versions are not interesting for us
    version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
}
// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
// so check `userAgent` even if `.v8` exists, but 0
if (!version && userAgent) {
    match = userAgent.match(/Edge\/(\d+)/);
    if (!match || match[1] >= 74) {
        match = userAgent.match(/Chrome\/(\d+)/);
        if (match) version = +match[1];
    }
}
module.exports = version;

},{"../internals/global":"i8HOC","../internals/engine-user-agent":"73xBt"}],"73xBt":[function(require,module,exports) {
var getBuiltIn = require("../internals/get-built-in");
module.exports = getBuiltIn("navigator", "userAgent") || "";

},{"../internals/get-built-in":"6ZUSY"}],"6ZUSY":[function(require,module,exports) {
var global = require("../internals/global");
var isCallable = require("../internals/is-callable");
var aFunction = function(argument) {
    return isCallable(argument) ? argument : undefined;
};
module.exports = function(namespace, method) {
    return arguments.length < 2 ? aFunction(global[namespace]) : global[namespace] && global[namespace][method];
};

},{"../internals/global":"i8HOC","../internals/is-callable":"l3Kyn"}],"2Ye8Q":[function(require,module,exports) {
/* eslint-disable es/no-symbol -- required for testing */ var NATIVE_SYMBOL = require("../internals/symbol-constructor-detection");
module.exports = NATIVE_SYMBOL && !Symbol.sham && typeof Symbol.iterator == "symbol";

},{"../internals/symbol-constructor-detection":"8KyTD"}],"bdfmm":[function(require,module,exports) {
var uncurryThis = require("../internals/function-uncurry-this");
var toString = uncurryThis({}.toString);
var stringSlice = uncurryThis("".slice);
module.exports = function(it) {
    return stringSlice(toString(it), 8, -1);
};

},{"../internals/function-uncurry-this":"7GlkT"}],"4O7d7":[function(require,module,exports) {
var $String = String;
module.exports = function(argument) {
    try {
        return $String(argument);
    } catch (error) {
        return "Object";
    }
};

},{}],"8CL42":[function(require,module,exports) {
var DESCRIPTORS = require("../internals/descriptors");
var definePropertyModule = require("../internals/object-define-property");
var createPropertyDescriptor = require("../internals/create-property-descriptor");
module.exports = DESCRIPTORS ? function(object, key, value) {
    return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function(object, key, value) {
    object[key] = value;
    return object;
};

},{"../internals/descriptors":"92ZIi","../internals/object-define-property":"iJR4w","../internals/create-property-descriptor":"1lpav"}],"iJR4w":[function(require,module,exports) {
var DESCRIPTORS = require("../internals/descriptors");
var IE8_DOM_DEFINE = require("../internals/ie8-dom-define");
var V8_PROTOTYPE_DEFINE_BUG = require("../internals/v8-prototype-define-bug");
var anObject = require("../internals/an-object");
var toPropertyKey = require("../internals/to-property-key");
var $TypeError = TypeError;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var ENUMERABLE = "enumerable";
var CONFIGURABLE = "configurable";
var WRITABLE = "writable";
// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
    anObject(O);
    P = toPropertyKey(P);
    anObject(Attributes);
    if (typeof O === "function" && P === "prototype" && "value" in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
        var current = $getOwnPropertyDescriptor(O, P);
        if (current && current[WRITABLE]) {
            O[P] = Attributes.value;
            Attributes = {
                configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],
                enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
                writable: false
            };
        }
    }
    return $defineProperty(O, P, Attributes);
} : $defineProperty : function defineProperty(O, P, Attributes) {
    anObject(O);
    P = toPropertyKey(P);
    anObject(Attributes);
    if (IE8_DOM_DEFINE) try {
        return $defineProperty(O, P, Attributes);
    } catch (error) {}
    if ("get" in Attributes || "set" in Attributes) throw $TypeError("Accessors not supported");
    if ("value" in Attributes) O[P] = Attributes.value;
    return O;
};

},{"../internals/descriptors":"92ZIi","../internals/ie8-dom-define":"qS9uN","../internals/v8-prototype-define-bug":"ka1Un","../internals/an-object":"4isCr","../internals/to-property-key":"5XWKd"}],"qS9uN":[function(require,module,exports) {
var DESCRIPTORS = require("../internals/descriptors");
var fails = require("../internals/fails");
var createElement = require("../internals/document-create-element");
// Thanks to IE8 for its funny defineProperty
module.exports = !DESCRIPTORS && !fails(function() {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty(createElement("div"), "a", {
        get: function() {
            return 7;
        }
    }).a != 7;
});

},{"../internals/descriptors":"92ZIi","../internals/fails":"hL6D2","../internals/document-create-element":"4bOHl"}],"4bOHl":[function(require,module,exports) {
var global = require("../internals/global");
var isObject = require("../internals/is-object");
var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);
module.exports = function(it) {
    return EXISTS ? document.createElement(it) : {};
};

},{"../internals/global":"i8HOC","../internals/is-object":"Z0pBo"}],"ka1Un":[function(require,module,exports) {
var DESCRIPTORS = require("../internals/descriptors");
var fails = require("../internals/fails");
// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
module.exports = DESCRIPTORS && fails(function() {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty(function() {}, "prototype", {
        value: 42,
        writable: false
    }).prototype != 42;
});

},{"../internals/descriptors":"92ZIi","../internals/fails":"hL6D2"}],"4isCr":[function(require,module,exports) {
var isObject = require("../internals/is-object");
var $String = String;
var $TypeError = TypeError;
// `Assert: Type(argument) is Object`
module.exports = function(argument) {
    if (isObject(argument)) return argument;
    throw $TypeError($String(argument) + " is not an object");
};

},{"../internals/is-object":"Z0pBo"}],"5XWKd":[function(require,module,exports) {
var toPrimitive = require("../internals/to-primitive");
var isSymbol = require("../internals/is-symbol");
// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
module.exports = function(argument) {
    var key = toPrimitive(argument, "string");
    return isSymbol(key) ? key : key + "";
};

},{"../internals/to-primitive":"a2mK1","../internals/is-symbol":"4aV4F"}],"a2mK1":[function(require,module,exports) {
var call = require("../internals/function-call");
var isObject = require("../internals/is-object");
var isSymbol = require("../internals/is-symbol");
var getMethod = require("../internals/get-method");
var ordinaryToPrimitive = require("../internals/ordinary-to-primitive");
var wellKnownSymbol = require("../internals/well-known-symbol");
var $TypeError = TypeError;
var TO_PRIMITIVE = wellKnownSymbol("toPrimitive");
// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
module.exports = function(input, pref) {
    if (!isObject(input) || isSymbol(input)) return input;
    var exoticToPrim = getMethod(input, TO_PRIMITIVE);
    var result;
    if (exoticToPrim) {
        if (pref === undefined) pref = "default";
        result = call(exoticToPrim, input, pref);
        if (!isObject(result) || isSymbol(result)) return result;
        throw $TypeError("Can't convert object to primitive value");
    }
    if (pref === undefined) pref = "number";
    return ordinaryToPrimitive(input, pref);
};

},{"../internals/function-call":"d7JlP","../internals/is-object":"Z0pBo","../internals/is-symbol":"4aV4F","../internals/get-method":"9Zfiw","../internals/ordinary-to-primitive":"7MME2","../internals/well-known-symbol":"gTwyA"}],"4aV4F":[function(require,module,exports) {
var getBuiltIn = require("../internals/get-built-in");
var isCallable = require("../internals/is-callable");
var isPrototypeOf = require("../internals/object-is-prototype-of");
var USE_SYMBOL_AS_UID = require("../internals/use-symbol-as-uid");
var $Object = Object;
module.exports = USE_SYMBOL_AS_UID ? function(it) {
    return typeof it == "symbol";
} : function(it) {
    var $Symbol = getBuiltIn("Symbol");
    return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, $Object(it));
};

},{"../internals/get-built-in":"6ZUSY","../internals/is-callable":"l3Kyn","../internals/object-is-prototype-of":"3jtKQ","../internals/use-symbol-as-uid":"2Ye8Q"}],"3jtKQ":[function(require,module,exports) {
var uncurryThis = require("../internals/function-uncurry-this");
module.exports = uncurryThis({}.isPrototypeOf);

},{"../internals/function-uncurry-this":"7GlkT"}],"9Zfiw":[function(require,module,exports) {
var aCallable = require("../internals/a-callable");
var isNullOrUndefined = require("../internals/is-null-or-undefined");
// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
module.exports = function(V, P) {
    var func = V[P];
    return isNullOrUndefined(func) ? undefined : aCallable(func);
};

},{"../internals/a-callable":"gOMir","../internals/is-null-or-undefined":"gM5ar"}],"gOMir":[function(require,module,exports) {
var isCallable = require("../internals/is-callable");
var tryToString = require("../internals/try-to-string");
var $TypeError = TypeError;
// `Assert: IsCallable(argument) is true`
module.exports = function(argument) {
    if (isCallable(argument)) return argument;
    throw $TypeError(tryToString(argument) + " is not a function");
};

},{"../internals/is-callable":"l3Kyn","../internals/try-to-string":"4O7d7"}],"7MME2":[function(require,module,exports) {
var call = require("../internals/function-call");
var isCallable = require("../internals/is-callable");
var isObject = require("../internals/is-object");
var $TypeError = TypeError;
// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
module.exports = function(input, pref) {
    var fn, val;
    if (pref === "string" && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
    if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input))) return val;
    if (pref !== "string" && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
    throw $TypeError("Can't convert object to primitive value");
};

},{"../internals/function-call":"d7JlP","../internals/is-callable":"l3Kyn","../internals/is-object":"Z0pBo"}],"1lpav":[function(require,module,exports) {
module.exports = function(bitmap, value) {
    return {
        enumerable: !(bitmap & 1),
        configurable: !(bitmap & 2),
        writable: !(bitmap & 4),
        value: value
    };
};

},{}],"6XwEX":[function(require,module,exports) {
var isCallable = require("../internals/is-callable");
var definePropertyModule = require("../internals/object-define-property");
var makeBuiltIn = require("../internals/make-built-in");
var defineGlobalProperty = require("../internals/define-global-property");
module.exports = function(O, key, value, options) {
    if (!options) options = {};
    var simple = options.enumerable;
    var name = options.name !== undefined ? options.name : key;
    if (isCallable(value)) makeBuiltIn(value, name, options);
    if (options.global) {
        if (simple) O[key] = value;
        else defineGlobalProperty(key, value);
    } else {
        try {
            if (!options.unsafe) delete O[key];
            else if (O[key]) simple = true;
        } catch (error) {}
        if (simple) O[key] = value;
        else definePropertyModule.f(O, key, {
            value: value,
            enumerable: false,
            configurable: !options.nonConfigurable,
            writable: !options.nonWritable
        });
    }
    return O;
};

},{"../internals/is-callable":"l3Kyn","../internals/object-define-property":"iJR4w","../internals/make-built-in":"cTB4k","../internals/define-global-property":"ggjnO"}],"cTB4k":[function(require,module,exports) {
var fails = require("../internals/fails");
var isCallable = require("../internals/is-callable");
var hasOwn = require("../internals/has-own-property");
var DESCRIPTORS = require("../internals/descriptors");
var CONFIGURABLE_FUNCTION_NAME = require("../internals/function-name").CONFIGURABLE;
var inspectSource = require("../internals/inspect-source");
var InternalStateModule = require("../internals/internal-state");
var enforceInternalState = InternalStateModule.enforce;
var getInternalState = InternalStateModule.get;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;
var CONFIGURABLE_LENGTH = DESCRIPTORS && !fails(function() {
    return defineProperty(function() {}, "length", {
        value: 8
    }).length !== 8;
});
var TEMPLATE = String(String).split("String");
var makeBuiltIn = module.exports = function(value, name, options) {
    if (String(name).slice(0, 7) === "Symbol(") name = "[" + String(name).replace(/^Symbol\(([^)]*)\)/, "$1") + "]";
    if (options && options.getter) name = "get " + name;
    if (options && options.setter) name = "set " + name;
    if (!hasOwn(value, "name") || CONFIGURABLE_FUNCTION_NAME && value.name !== name) {
        if (DESCRIPTORS) defineProperty(value, "name", {
            value: name,
            configurable: true
        });
        else value.name = name;
    }
    if (CONFIGURABLE_LENGTH && options && hasOwn(options, "arity") && value.length !== options.arity) defineProperty(value, "length", {
        value: options.arity
    });
    try {
        if (options && hasOwn(options, "constructor") && options.constructor) {
            if (DESCRIPTORS) defineProperty(value, "prototype", {
                writable: false
            });
        } else if (value.prototype) value.prototype = undefined;
    } catch (error) {}
    var state = enforceInternalState(value);
    if (!hasOwn(state, "source")) state.source = TEMPLATE.join(typeof name == "string" ? name : "");
    return value;
};
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString = makeBuiltIn(function toString() {
    return isCallable(this) && getInternalState(this).source || inspectSource(this);
}, "toString");

},{"../internals/fails":"hL6D2","../internals/is-callable":"l3Kyn","../internals/has-own-property":"gC2Q5","../internals/descriptors":"92ZIi","../internals/function-name":"l6Kgd","../internals/inspect-source":"9jh7O","../internals/internal-state":"7AMlF"}],"l6Kgd":[function(require,module,exports) {
var DESCRIPTORS = require("../internals/descriptors");
var hasOwn = require("../internals/has-own-property");
var FunctionPrototype = Function.prototype;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;
var EXISTS = hasOwn(FunctionPrototype, "name");
// additional protection from minified / mangled / dropped function names
var PROPER = EXISTS && (function something() {}).name === "something";
var CONFIGURABLE = EXISTS && (!DESCRIPTORS || DESCRIPTORS && getDescriptor(FunctionPrototype, "name").configurable);
module.exports = {
    EXISTS: EXISTS,
    PROPER: PROPER,
    CONFIGURABLE: CONFIGURABLE
};

},{"../internals/descriptors":"92ZIi","../internals/has-own-property":"gC2Q5"}],"9jh7O":[function(require,module,exports) {
var uncurryThis = require("../internals/function-uncurry-this");
var isCallable = require("../internals/is-callable");
var store = require("../internals/shared-store");
var functionToString = uncurryThis(Function.toString);
// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable(store.inspectSource)) store.inspectSource = function(it) {
    return functionToString(it);
};
module.exports = store.inspectSource;

},{"../internals/function-uncurry-this":"7GlkT","../internals/is-callable":"l3Kyn","../internals/shared-store":"l4ncH"}],"7AMlF":[function(require,module,exports) {
var NATIVE_WEAK_MAP = require("../internals/weak-map-basic-detection");
var global = require("../internals/global");
var isObject = require("../internals/is-object");
var createNonEnumerableProperty = require("../internals/create-non-enumerable-property");
var hasOwn = require("../internals/has-own-property");
var shared = require("../internals/shared-store");
var sharedKey = require("../internals/shared-key");
var hiddenKeys = require("../internals/hidden-keys");
var OBJECT_ALREADY_INITIALIZED = "Object already initialized";
var TypeError = global.TypeError;
var WeakMap = global.WeakMap;
var set, get, has;
var enforce = function(it) {
    return has(it) ? get(it) : set(it, {});
};
var getterFor = function(TYPE) {
    return function(it) {
        var state;
        if (!isObject(it) || (state = get(it)).type !== TYPE) throw TypeError("Incompatible receiver, " + TYPE + " required");
        return state;
    };
};
if (NATIVE_WEAK_MAP || shared.state) {
    var store = shared.state || (shared.state = new WeakMap());
    /* eslint-disable no-self-assign -- prototype methods protection */ store.get = store.get;
    store.has = store.has;
    store.set = store.set;
    /* eslint-enable no-self-assign -- prototype methods protection */ set = function(it, metadata) {
        if (store.has(it)) throw TypeError(OBJECT_ALREADY_INITIALIZED);
        metadata.facade = it;
        store.set(it, metadata);
        return metadata;
    };
    get = function(it) {
        return store.get(it) || {};
    };
    has = function(it) {
        return store.has(it);
    };
} else {
    var STATE = sharedKey("state");
    hiddenKeys[STATE] = true;
    set = function(it, metadata) {
        if (hasOwn(it, STATE)) throw TypeError(OBJECT_ALREADY_INITIALIZED);
        metadata.facade = it;
        createNonEnumerableProperty(it, STATE, metadata);
        return metadata;
    };
    get = function(it) {
        return hasOwn(it, STATE) ? it[STATE] : {};
    };
    has = function(it) {
        return hasOwn(it, STATE);
    };
}
module.exports = {
    set: set,
    get: get,
    has: has,
    enforce: enforce,
    getterFor: getterFor
};

},{"../internals/weak-map-basic-detection":"2PZTl","../internals/global":"i8HOC","../internals/is-object":"Z0pBo","../internals/create-non-enumerable-property":"8CL42","../internals/has-own-property":"gC2Q5","../internals/shared-store":"l4ncH","../internals/shared-key":"eAjGz","../internals/hidden-keys":"661m4"}],"2PZTl":[function(require,module,exports) {
var global = require("../internals/global");
var isCallable = require("../internals/is-callable");
var WeakMap = global.WeakMap;
module.exports = isCallable(WeakMap) && /native code/.test(String(WeakMap));

},{"../internals/global":"i8HOC","../internals/is-callable":"l3Kyn"}],"eAjGz":[function(require,module,exports) {
var shared = require("../internals/shared");
var uid = require("../internals/uid");
var keys = shared("keys");
module.exports = function(key) {
    return keys[key] || (keys[key] = uid(key));
};

},{"../internals/shared":"i1mHK","../internals/uid":"a3SEE"}],"661m4":[function(require,module,exports) {
module.exports = {};

},{}],"2wazs":[function(require,module,exports) {
var hasOwn = require("../internals/has-own-property");
var isCallable = require("../internals/is-callable");
var toObject = require("../internals/to-object");
var sharedKey = require("../internals/shared-key");
var CORRECT_PROTOTYPE_GETTER = require("../internals/correct-prototype-getter");
var IE_PROTO = sharedKey("IE_PROTO");
var $Object = Object;
var ObjectPrototype = $Object.prototype;
// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
// eslint-disable-next-line es/no-object-getprototypeof -- safe
module.exports = CORRECT_PROTOTYPE_GETTER ? $Object.getPrototypeOf : function(O) {
    var object = toObject(O);
    if (hasOwn(object, IE_PROTO)) return object[IE_PROTO];
    var constructor = object.constructor;
    if (isCallable(constructor) && object instanceof constructor) return constructor.prototype;
    return object instanceof $Object ? ObjectPrototype : null;
};

},{"../internals/has-own-property":"gC2Q5","../internals/is-callable":"l3Kyn","../internals/to-object":"5cb35","../internals/shared-key":"eAjGz","../internals/correct-prototype-getter":"i8nB5"}],"i8nB5":[function(require,module,exports) {
var fails = require("../internals/fails");
module.exports = !fails(function() {
    function F() {}
    F.prototype.constructor = null;
    // eslint-disable-next-line es/no-object-getprototypeof -- required for testing
    return Object.getPrototypeOf(new F()) !== F.prototype;
});

},{"../internals/fails":"hL6D2"}],"2EnFi":[function(require,module,exports) {
/* eslint-disable no-proto -- safe */ var uncurryThis = require("../internals/function-uncurry-this");
var anObject = require("../internals/an-object");
var aPossiblePrototype = require("../internals/a-possible-prototype");
// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
// eslint-disable-next-line es/no-object-setprototypeof -- safe
module.exports = Object.setPrototypeOf || ("__proto__" in {} ? function() {
    var CORRECT_SETTER = false;
    var test = {};
    var setter;
    try {
        // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
        setter = uncurryThis(Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set);
        setter(test, []);
        CORRECT_SETTER = test instanceof Array;
    } catch (error) {}
    return function setPrototypeOf(O, proto) {
        anObject(O);
        aPossiblePrototype(proto);
        if (CORRECT_SETTER) setter(O, proto);
        else O.__proto__ = proto;
        return O;
    };
}() : undefined);

},{"../internals/function-uncurry-this":"7GlkT","../internals/an-object":"4isCr","../internals/a-possible-prototype":"5X5vY"}],"5X5vY":[function(require,module,exports) {
var isCallable = require("../internals/is-callable");
var $String = String;
var $TypeError = TypeError;
module.exports = function(argument) {
    if (typeof argument == "object" || isCallable(argument)) return argument;
    throw $TypeError("Can't set " + $String(argument) + " as a prototype");
};

},{"../internals/is-callable":"l3Kyn"}],"lY4mS":[function(require,module,exports) {
var toLength = require("../internals/to-length");
// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
module.exports = function(obj) {
    return toLength(obj.length);
};

},{"../internals/to-length":"fU04N"}],"fU04N":[function(require,module,exports) {
var toIntegerOrInfinity = require("../internals/to-integer-or-infinity");
var min = Math.min;
// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function(argument) {
    return argument > 0 ? min(toIntegerOrInfinity(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};

},{"../internals/to-integer-or-infinity":"kLXGe"}],"kLXGe":[function(require,module,exports) {
var trunc = require("../internals/math-trunc");
// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
module.exports = function(argument) {
    var number = +argument;
    // eslint-disable-next-line no-self-compare -- NaN check
    return number !== number || number === 0 ? 0 : trunc(number);
};

},{"../internals/math-trunc":"7O8gb"}],"7O8gb":[function(require,module,exports) {
var ceil = Math.ceil;
var floor = Math.floor;
// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es/no-math-trunc -- safe
module.exports = Math.trunc || function trunc(x) {
    var n = +x;
    return (n > 0 ? floor : ceil)(n);
};

},{}],"clBaP":[function(require,module,exports) {
var toPositiveInteger = require("../internals/to-positive-integer");
var $RangeError = RangeError;
module.exports = function(it, BYTES) {
    var offset = toPositiveInteger(it);
    if (offset % BYTES) throw $RangeError("Wrong offset");
    return offset;
};

},{"../internals/to-positive-integer":"7mAN6"}],"7mAN6":[function(require,module,exports) {
var toIntegerOrInfinity = require("../internals/to-integer-or-infinity");
var $RangeError = RangeError;
module.exports = function(it) {
    var result = toIntegerOrInfinity(it);
    if (result < 0) throw $RangeError("The argument can't be less than 0");
    return result;
};

},{"../internals/to-integer-or-infinity":"kLXGe"}],"9GjXb":[function(require,module,exports) {
/**
 *  base64.ts
 *
 *  Licensed under the BSD 3-Clause License.
 *    http://opensource.org/licenses/BSD-3-Clause
 *
 *  References:
 *    http://en.wikipedia.org/wiki/Base64
 *
 * @author Dan Kogai (https://github.com/dankogai)
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// makecjs:CUT //
parcelHelpers.export(exports, "version", ()=>version);
parcelHelpers.export(exports, "VERSION", ()=>VERSION);
parcelHelpers.export(exports, "atob", ()=>_atob);
parcelHelpers.export(exports, "atobPolyfill", ()=>atobPolyfill);
parcelHelpers.export(exports, "btoa", ()=>_btoa);
parcelHelpers.export(exports, "btoaPolyfill", ()=>btoaPolyfill);
parcelHelpers.export(exports, "fromBase64", ()=>decode);
parcelHelpers.export(exports, "toBase64", ()=>encode);
parcelHelpers.export(exports, "utob", ()=>utob);
parcelHelpers.export(exports, "encode", ()=>encode);
parcelHelpers.export(exports, "encodeURI", ()=>encodeURI);
parcelHelpers.export(exports, "encodeURL", ()=>encodeURI);
parcelHelpers.export(exports, "btou", ()=>btou);
parcelHelpers.export(exports, "decode", ()=>decode);
parcelHelpers.export(exports, "isValid", ()=>isValid);
parcelHelpers.export(exports, "fromUint8Array", ()=>fromUint8Array);
parcelHelpers.export(exports, "toUint8Array", ()=>toUint8Array);
parcelHelpers.export(exports, "extendString", ()=>extendString);
parcelHelpers.export(exports, "extendUint8Array", ()=>extendUint8Array);
parcelHelpers.export(exports, "extendBuiltins", ()=>extendBuiltins);
// and finally,
parcelHelpers.export(exports, "Base64", ()=>gBase64);
var Buffer = require("buffer").Buffer;
const version = "3.7.3";
/**
 * @deprecated use lowercase `version`.
 */ const VERSION = version;
const _hasatob = typeof atob === "function";
const _hasbtoa = typeof btoa === "function";
const _hasBuffer = typeof Buffer === "function";
const _TD = typeof TextDecoder === "function" ? new TextDecoder() : undefined;
const _TE = typeof TextEncoder === "function" ? new TextEncoder() : undefined;
const b64ch = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
const b64chs = Array.prototype.slice.call(b64ch);
const b64tab = ((a)=>{
    let tab = {};
    a.forEach((c, i)=>tab[c] = i);
    return tab;
})(b64chs);
const b64re = /^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/;
const _fromCC = String.fromCharCode.bind(String);
const _U8Afrom = typeof Uint8Array.from === "function" ? Uint8Array.from.bind(Uint8Array) : (it, fn = (x)=>x)=>new Uint8Array(Array.prototype.slice.call(it, 0).map(fn));
const _mkUriSafe = (src)=>src.replace(/=/g, "").replace(/[+\/]/g, (m0)=>m0 == "+" ? "-" : "_");
const _tidyB64 = (s)=>s.replace(/[^A-Za-z0-9\+\/]/g, "");
/**
 * polyfill version of `btoa`
 */ const btoaPolyfill = (bin)=>{
    // console.log('polyfilled');
    let u32, c0, c1, c2, asc = "";
    const pad = bin.length % 3;
    for(let i = 0; i < bin.length;){
        if ((c0 = bin.charCodeAt(i++)) > 255 || (c1 = bin.charCodeAt(i++)) > 255 || (c2 = bin.charCodeAt(i++)) > 255) throw new TypeError("invalid character found");
        u32 = c0 << 16 | c1 << 8 | c2;
        asc += b64chs[u32 >> 18 & 63] + b64chs[u32 >> 12 & 63] + b64chs[u32 >> 6 & 63] + b64chs[u32 & 63];
    }
    return pad ? asc.slice(0, pad - 3) + "===".substring(pad) : asc;
};
/**
 * does what `window.btoa` of web browsers do.
 * @param {String} bin binary string
 * @returns {string} Base64-encoded string
 */ const _btoa = _hasbtoa ? (bin)=>btoa(bin) : _hasBuffer ? (bin)=>Buffer.from(bin, "binary").toString("base64") : btoaPolyfill;
const _fromUint8Array = _hasBuffer ? (u8a)=>Buffer.from(u8a).toString("base64") : (u8a)=>{
    // cf. https://stackoverflow.com/questions/12710001/how-to-convert-uint8-array-to-base64-encoded-string/12713326#12713326
    const maxargs = 0x1000;
    let strs = [];
    for(let i = 0, l = u8a.length; i < l; i += maxargs)strs.push(_fromCC.apply(null, u8a.subarray(i, i + maxargs)));
    return _btoa(strs.join(""));
};
/**
 * converts a Uint8Array to a Base64 string.
 * @param {boolean} [urlsafe] URL-and-filename-safe a la RFC4648 §5
 * @returns {string} Base64 string
 */ const fromUint8Array = (u8a, urlsafe = false)=>urlsafe ? _mkUriSafe(_fromUint8Array(u8a)) : _fromUint8Array(u8a);
// This trick is found broken https://github.com/dankogai/js-base64/issues/130
// const utob = (src: string) => unescape(encodeURIComponent(src));
// reverting good old fationed regexp
const cb_utob = (c)=>{
    if (c.length < 2) {
        var cc = c.charCodeAt(0);
        return cc < 0x80 ? c : cc < 0x800 ? _fromCC(0xc0 | cc >>> 6) + _fromCC(0x80 | cc & 0x3f) : _fromCC(0xe0 | cc >>> 12 & 0x0f) + _fromCC(0x80 | cc >>> 6 & 0x3f) + _fromCC(0x80 | cc & 0x3f);
    } else {
        var cc = 0x10000 + (c.charCodeAt(0) - 0xD800) * 0x400 + (c.charCodeAt(1) - 0xDC00);
        return _fromCC(0xf0 | cc >>> 18 & 0x07) + _fromCC(0x80 | cc >>> 12 & 0x3f) + _fromCC(0x80 | cc >>> 6 & 0x3f) + _fromCC(0x80 | cc & 0x3f);
    }
};
const re_utob = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g;
/**
 * @deprecated should have been internal use only.
 * @param {string} src UTF-8 string
 * @returns {string} UTF-16 string
 */ const utob = (u)=>u.replace(re_utob, cb_utob);
//
const _encode = _hasBuffer ? (s)=>Buffer.from(s, "utf8").toString("base64") : _TE ? (s)=>_fromUint8Array(_TE.encode(s)) : (s)=>_btoa(utob(s));
/**
 * converts a UTF-8-encoded string to a Base64 string.
 * @param {boolean} [urlsafe] if `true` make the result URL-safe
 * @returns {string} Base64 string
 */ const encode = (src, urlsafe = false)=>urlsafe ? _mkUriSafe(_encode(src)) : _encode(src);
/**
 * converts a UTF-8-encoded string to URL-safe Base64 RFC4648 §5.
 * @returns {string} Base64 string
 */ const encodeURI = (src)=>encode(src, true);
// This trick is found broken https://github.com/dankogai/js-base64/issues/130
// const btou = (src: string) => decodeURIComponent(escape(src));
// reverting good old fationed regexp
const re_btou = /[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g;
const cb_btou = (cccc)=>{
    switch(cccc.length){
        case 4:
            var cp = (0x07 & cccc.charCodeAt(0)) << 18 | (0x3f & cccc.charCodeAt(1)) << 12 | (0x3f & cccc.charCodeAt(2)) << 6 | 0x3f & cccc.charCodeAt(3), offset = cp - 0x10000;
            return _fromCC((offset >>> 10) + 0xD800) + _fromCC((offset & 0x3FF) + 0xDC00);
        case 3:
            return _fromCC((0x0f & cccc.charCodeAt(0)) << 12 | (0x3f & cccc.charCodeAt(1)) << 6 | 0x3f & cccc.charCodeAt(2));
        default:
            return _fromCC((0x1f & cccc.charCodeAt(0)) << 6 | 0x3f & cccc.charCodeAt(1));
    }
};
/**
 * @deprecated should have been internal use only.
 * @param {string} src UTF-16 string
 * @returns {string} UTF-8 string
 */ const btou = (b)=>b.replace(re_btou, cb_btou);
/**
 * polyfill version of `atob`
 */ const atobPolyfill = (asc)=>{
    // console.log('polyfilled');
    asc = asc.replace(/\s+/g, "");
    if (!b64re.test(asc)) throw new TypeError("malformed base64.");
    asc += "==".slice(2 - (asc.length & 3));
    let u24, bin = "", r1, r2;
    for(let i = 0; i < asc.length;){
        u24 = b64tab[asc.charAt(i++)] << 18 | b64tab[asc.charAt(i++)] << 12 | (r1 = b64tab[asc.charAt(i++)]) << 6 | (r2 = b64tab[asc.charAt(i++)]);
        bin += r1 === 64 ? _fromCC(u24 >> 16 & 255) : r2 === 64 ? _fromCC(u24 >> 16 & 255, u24 >> 8 & 255) : _fromCC(u24 >> 16 & 255, u24 >> 8 & 255, u24 & 255);
    }
    return bin;
};
/**
 * does what `window.atob` of web browsers do.
 * @param {String} asc Base64-encoded string
 * @returns {string} binary string
 */ const _atob = _hasatob ? (asc)=>atob(_tidyB64(asc)) : _hasBuffer ? (asc)=>Buffer.from(asc, "base64").toString("binary") : atobPolyfill;
//
const _toUint8Array = _hasBuffer ? (a)=>_U8Afrom(Buffer.from(a, "base64")) : (a)=>_U8Afrom(_atob(a), (c)=>c.charCodeAt(0));
/**
 * converts a Base64 string to a Uint8Array.
 */ const toUint8Array = (a)=>_toUint8Array(_unURI(a));
//
const _decode = _hasBuffer ? (a)=>Buffer.from(a, "base64").toString("utf8") : _TD ? (a)=>_TD.decode(_toUint8Array(a)) : (a)=>btou(_atob(a));
const _unURI = (a)=>_tidyB64(a.replace(/[-_]/g, (m0)=>m0 == "-" ? "+" : "/"));
/**
 * converts a Base64 string to a UTF-8 string.
 * @param {String} src Base64 string.  Both normal and URL-safe are supported
 * @returns {string} UTF-8 string
 */ const decode = (src)=>_decode(_unURI(src));
/**
 * check if a value is a valid Base64 string
 * @param {String} src a value to check
  */ const isValid = (src)=>{
    if (typeof src !== "string") return false;
    const s = src.replace(/\s+/g, "").replace(/={0,2}$/, "");
    return !/[^\s0-9a-zA-Z\+/]/.test(s) || !/[^\s0-9a-zA-Z\-_]/.test(s);
};
//
const _noEnum = (v)=>{
    return {
        value: v,
        enumerable: false,
        writable: true,
        configurable: true
    };
};
/**
 * extend String.prototype with relevant methods
 */ const extendString = function() {
    const _add = (name, body)=>Object.defineProperty(String.prototype, name, _noEnum(body));
    _add("fromBase64", function() {
        return decode(this);
    });
    _add("toBase64", function(urlsafe) {
        return encode(this, urlsafe);
    });
    _add("toBase64URI", function() {
        return encode(this, true);
    });
    _add("toBase64URL", function() {
        return encode(this, true);
    });
    _add("toUint8Array", function() {
        return toUint8Array(this);
    });
};
/**
 * extend Uint8Array.prototype with relevant methods
 */ const extendUint8Array = function() {
    const _add = (name, body)=>Object.defineProperty(Uint8Array.prototype, name, _noEnum(body));
    _add("toBase64", function(urlsafe) {
        return fromUint8Array(this, urlsafe);
    });
    _add("toBase64URI", function() {
        return fromUint8Array(this, true);
    });
    _add("toBase64URL", function() {
        return fromUint8Array(this, true);
    });
};
/**
 * extend Builtin prototypes with relevant methods
 */ const extendBuiltins = ()=>{
    extendString();
    extendUint8Array();
};
const gBase64 = {
    version: version,
    VERSION: VERSION,
    atob: _atob,
    atobPolyfill: atobPolyfill,
    btoa: _btoa,
    btoaPolyfill: btoaPolyfill,
    fromBase64: decode,
    toBase64: encode,
    encode: encode,
    encodeURI: encodeURI,
    encodeURL: encodeURI,
    utob: utob,
    btou: btou,
    decode: decode,
    isValid: isValid,
    fromUint8Array: fromUint8Array,
    toUint8Array: toUint8Array,
    extendString: extendString,
    extendUint8Array: extendUint8Array,
    extendBuiltins: extendBuiltins
};

},{"buffer":"fCgem","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fCgem":[function(require,module,exports) {
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */ /* eslint-disable no-proto */ "use strict";
var base64 = require("base64-js");
var ieee754 = require("ieee754");
var customInspectSymbol = typeof Symbol === "function" && typeof Symbol["for"] === "function" // eslint-disable-line dot-notation
 ? Symbol["for"]("nodejs.util.inspect.custom") // eslint-disable-line dot-notation
 : null;
exports.Buffer = Buffer;
exports.SlowBuffer = SlowBuffer;
exports.INSPECT_MAX_BYTES = 50;
var K_MAX_LENGTH = 0x7fffffff;
exports.kMaxLength = K_MAX_LENGTH;
/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Print warning and recommend using `buffer` v4.x which has an Object
 *               implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * We report that the browser does not support typed arrays if the are not subclassable
 * using __proto__. Firefox 4-29 lacks support for adding new properties to `Uint8Array`
 * (See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438). IE 10 lacks support
 * for __proto__ and has a buggy typed array implementation.
 */ Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport();
if (!Buffer.TYPED_ARRAY_SUPPORT && typeof console !== "undefined" && typeof console.error === "function") console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
function typedArraySupport() {
    // Can typed array instances can be augmented?
    try {
        var arr = new Uint8Array(1);
        var proto = {
            foo: function() {
                return 42;
            }
        };
        Object.setPrototypeOf(proto, Uint8Array.prototype);
        Object.setPrototypeOf(arr, proto);
        return arr.foo() === 42;
    } catch (e) {
        return false;
    }
}
Object.defineProperty(Buffer.prototype, "parent", {
    enumerable: true,
    get: function() {
        if (!Buffer.isBuffer(this)) return undefined;
        return this.buffer;
    }
});
Object.defineProperty(Buffer.prototype, "offset", {
    enumerable: true,
    get: function() {
        if (!Buffer.isBuffer(this)) return undefined;
        return this.byteOffset;
    }
});
function createBuffer(length) {
    if (length > K_MAX_LENGTH) throw new RangeError('The value "' + length + '" is invalid for option "size"');
    // Return an augmented `Uint8Array` instance
    var buf = new Uint8Array(length);
    Object.setPrototypeOf(buf, Buffer.prototype);
    return buf;
}
/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */ function Buffer(arg, encodingOrOffset, length) {
    // Common case.
    if (typeof arg === "number") {
        if (typeof encodingOrOffset === "string") throw new TypeError('The "string" argument must be of type string. Received type number');
        return allocUnsafe(arg);
    }
    return from(arg, encodingOrOffset, length);
}
Buffer.poolSize = 8192 // not used by this implementation
;
function from(value, encodingOrOffset, length) {
    if (typeof value === "string") return fromString(value, encodingOrOffset);
    if (ArrayBuffer.isView(value)) return fromArrayView(value);
    if (value == null) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value);
    if (isInstance(value, ArrayBuffer) || value && isInstance(value.buffer, ArrayBuffer)) return fromArrayBuffer(value, encodingOrOffset, length);
    if (typeof SharedArrayBuffer !== "undefined" && (isInstance(value, SharedArrayBuffer) || value && isInstance(value.buffer, SharedArrayBuffer))) return fromArrayBuffer(value, encodingOrOffset, length);
    if (typeof value === "number") throw new TypeError('The "value" argument must not be of type number. Received type number');
    var valueOf = value.valueOf && value.valueOf();
    if (valueOf != null && valueOf !== value) return Buffer.from(valueOf, encodingOrOffset, length);
    var b = fromObject(value);
    if (b) return b;
    if (typeof Symbol !== "undefined" && Symbol.toPrimitive != null && typeof value[Symbol.toPrimitive] === "function") return Buffer.from(value[Symbol.toPrimitive]("string"), encodingOrOffset, length);
    throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value);
}
/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/ Buffer.from = function(value, encodingOrOffset, length) {
    return from(value, encodingOrOffset, length);
};
// Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
// https://github.com/feross/buffer/pull/148
Object.setPrototypeOf(Buffer.prototype, Uint8Array.prototype);
Object.setPrototypeOf(Buffer, Uint8Array);
function assertSize(size) {
    if (typeof size !== "number") throw new TypeError('"size" argument must be of type number');
    else if (size < 0) throw new RangeError('The value "' + size + '" is invalid for option "size"');
}
function alloc(size, fill, encoding) {
    assertSize(size);
    if (size <= 0) return createBuffer(size);
    if (fill !== undefined) // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpreted as a start offset.
    return typeof encoding === "string" ? createBuffer(size).fill(fill, encoding) : createBuffer(size).fill(fill);
    return createBuffer(size);
}
/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/ Buffer.alloc = function(size, fill, encoding) {
    return alloc(size, fill, encoding);
};
function allocUnsafe(size) {
    assertSize(size);
    return createBuffer(size < 0 ? 0 : checked(size) | 0);
}
/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */ Buffer.allocUnsafe = function(size) {
    return allocUnsafe(size);
};
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */ Buffer.allocUnsafeSlow = function(size) {
    return allocUnsafe(size);
};
function fromString(string, encoding) {
    if (typeof encoding !== "string" || encoding === "") encoding = "utf8";
    if (!Buffer.isEncoding(encoding)) throw new TypeError("Unknown encoding: " + encoding);
    var length = byteLength(string, encoding) | 0;
    var buf = createBuffer(length);
    var actual = buf.write(string, encoding);
    if (actual !== length) // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    buf = buf.slice(0, actual);
    return buf;
}
function fromArrayLike(array) {
    var length = array.length < 0 ? 0 : checked(array.length) | 0;
    var buf = createBuffer(length);
    for(var i = 0; i < length; i += 1)buf[i] = array[i] & 255;
    return buf;
}
function fromArrayView(arrayView) {
    if (isInstance(arrayView, Uint8Array)) {
        var copy = new Uint8Array(arrayView);
        return fromArrayBuffer(copy.buffer, copy.byteOffset, copy.byteLength);
    }
    return fromArrayLike(arrayView);
}
function fromArrayBuffer(array, byteOffset, length) {
    if (byteOffset < 0 || array.byteLength < byteOffset) throw new RangeError('"offset" is outside of buffer bounds');
    if (array.byteLength < byteOffset + (length || 0)) throw new RangeError('"length" is outside of buffer bounds');
    var buf;
    if (byteOffset === undefined && length === undefined) buf = new Uint8Array(array);
    else if (length === undefined) buf = new Uint8Array(array, byteOffset);
    else buf = new Uint8Array(array, byteOffset, length);
    // Return an augmented `Uint8Array` instance
    Object.setPrototypeOf(buf, Buffer.prototype);
    return buf;
}
function fromObject(obj) {
    if (Buffer.isBuffer(obj)) {
        var len = checked(obj.length) | 0;
        var buf = createBuffer(len);
        if (buf.length === 0) return buf;
        obj.copy(buf, 0, 0, len);
        return buf;
    }
    if (obj.length !== undefined) {
        if (typeof obj.length !== "number" || numberIsNaN(obj.length)) return createBuffer(0);
        return fromArrayLike(obj);
    }
    if (obj.type === "Buffer" && Array.isArray(obj.data)) return fromArrayLike(obj.data);
}
function checked(length) {
    // Note: cannot use `length < K_MAX_LENGTH` here because that fails when
    // length is NaN (which is otherwise coerced to zero.)
    if (length >= K_MAX_LENGTH) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + K_MAX_LENGTH.toString(16) + " bytes");
    return length | 0;
}
function SlowBuffer(length) {
    if (+length != length) length = 0;
    return Buffer.alloc(+length);
}
Buffer.isBuffer = function isBuffer(b) {
    return b != null && b._isBuffer === true && b !== Buffer.prototype // so Buffer.isBuffer(Buffer.prototype) will be false
    ;
};
Buffer.compare = function compare(a, b) {
    if (isInstance(a, Uint8Array)) a = Buffer.from(a, a.offset, a.byteLength);
    if (isInstance(b, Uint8Array)) b = Buffer.from(b, b.offset, b.byteLength);
    if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
    if (a === b) return 0;
    var x = a.length;
    var y = b.length;
    for(var i = 0, len = Math.min(x, y); i < len; ++i)if (a[i] !== b[i]) {
        x = a[i];
        y = b[i];
        break;
    }
    if (x < y) return -1;
    if (y < x) return 1;
    return 0;
};
Buffer.isEncoding = function isEncoding(encoding) {
    switch(String(encoding).toLowerCase()){
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
            return true;
        default:
            return false;
    }
};
Buffer.concat = function concat(list, length) {
    if (!Array.isArray(list)) throw new TypeError('"list" argument must be an Array of Buffers');
    if (list.length === 0) return Buffer.alloc(0);
    var i;
    if (length === undefined) {
        length = 0;
        for(i = 0; i < list.length; ++i)length += list[i].length;
    }
    var buffer = Buffer.allocUnsafe(length);
    var pos = 0;
    for(i = 0; i < list.length; ++i){
        var buf = list[i];
        if (isInstance(buf, Uint8Array)) {
            if (pos + buf.length > buffer.length) Buffer.from(buf).copy(buffer, pos);
            else Uint8Array.prototype.set.call(buffer, buf, pos);
        } else if (!Buffer.isBuffer(buf)) throw new TypeError('"list" argument must be an Array of Buffers');
        else buf.copy(buffer, pos);
        pos += buf.length;
    }
    return buffer;
};
function byteLength(string, encoding) {
    if (Buffer.isBuffer(string)) return string.length;
    if (ArrayBuffer.isView(string) || isInstance(string, ArrayBuffer)) return string.byteLength;
    if (typeof string !== "string") throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof string);
    var len = string.length;
    var mustMatch = arguments.length > 2 && arguments[2] === true;
    if (!mustMatch && len === 0) return 0;
    // Use a for loop to avoid recursion
    var loweredCase = false;
    for(;;)switch(encoding){
        case "ascii":
        case "latin1":
        case "binary":
            return len;
        case "utf8":
        case "utf-8":
            return utf8ToBytes(string).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
            return len * 2;
        case "hex":
            return len >>> 1;
        case "base64":
            return base64ToBytes(string).length;
        default:
            if (loweredCase) return mustMatch ? -1 : utf8ToBytes(string).length // assume utf8
            ;
            encoding = ("" + encoding).toLowerCase();
            loweredCase = true;
    }
}
Buffer.byteLength = byteLength;
function slowToString(encoding, start, end) {
    var loweredCase = false;
    // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
    // property of a typed array.
    // This behaves neither like String nor Uint8Array in that we set start/end
    // to their upper/lower bounds if the value passed is out of range.
    // undefined is handled specially as per ECMA-262 6th Edition,
    // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
    if (start === undefined || start < 0) start = 0;
    // Return early if start > this.length. Done here to prevent potential uint32
    // coercion fail below.
    if (start > this.length) return "";
    if (end === undefined || end > this.length) end = this.length;
    if (end <= 0) return "";
    // Force coercion to uint32. This will also coerce falsey/NaN values to 0.
    end >>>= 0;
    start >>>= 0;
    if (end <= start) return "";
    if (!encoding) encoding = "utf8";
    while(true)switch(encoding){
        case "hex":
            return hexSlice(this, start, end);
        case "utf8":
        case "utf-8":
            return utf8Slice(this, start, end);
        case "ascii":
            return asciiSlice(this, start, end);
        case "latin1":
        case "binary":
            return latin1Slice(this, start, end);
        case "base64":
            return base64Slice(this, start, end);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
            return utf16leSlice(this, start, end);
        default:
            if (loweredCase) throw new TypeError("Unknown encoding: " + encoding);
            encoding = (encoding + "").toLowerCase();
            loweredCase = true;
    }
}
// This property is used by `Buffer.isBuffer` (and the `is-buffer` npm package)
// to detect a Buffer instance. It's not possible to use `instanceof Buffer`
// reliably in a browserify context because there could be multiple different
// copies of the 'buffer' package in use. This method works even for Buffer
// instances that were created from another copy of the `buffer` package.
// See: https://github.com/feross/buffer/issues/154
Buffer.prototype._isBuffer = true;
function swap(b, n, m) {
    var i = b[n];
    b[n] = b[m];
    b[m] = i;
}
Buffer.prototype.swap16 = function swap16() {
    var len = this.length;
    if (len % 2 !== 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
    for(var i = 0; i < len; i += 2)swap(this, i, i + 1);
    return this;
};
Buffer.prototype.swap32 = function swap32() {
    var len = this.length;
    if (len % 4 !== 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
    for(var i = 0; i < len; i += 4){
        swap(this, i, i + 3);
        swap(this, i + 1, i + 2);
    }
    return this;
};
Buffer.prototype.swap64 = function swap64() {
    var len = this.length;
    if (len % 8 !== 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
    for(var i = 0; i < len; i += 8){
        swap(this, i, i + 7);
        swap(this, i + 1, i + 6);
        swap(this, i + 2, i + 5);
        swap(this, i + 3, i + 4);
    }
    return this;
};
Buffer.prototype.toString = function toString() {
    var length = this.length;
    if (length === 0) return "";
    if (arguments.length === 0) return utf8Slice(this, 0, length);
    return slowToString.apply(this, arguments);
};
Buffer.prototype.toLocaleString = Buffer.prototype.toString;
Buffer.prototype.equals = function equals(b) {
    if (!Buffer.isBuffer(b)) throw new TypeError("Argument must be a Buffer");
    if (this === b) return true;
    return Buffer.compare(this, b) === 0;
};
Buffer.prototype.inspect = function inspect() {
    var str = "";
    var max = exports.INSPECT_MAX_BYTES;
    str = this.toString("hex", 0, max).replace(/(.{2})/g, "$1 ").trim();
    if (this.length > max) str += " ... ";
    return "<Buffer " + str + ">";
};
if (customInspectSymbol) Buffer.prototype[customInspectSymbol] = Buffer.prototype.inspect;
Buffer.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
    if (isInstance(target, Uint8Array)) target = Buffer.from(target, target.offset, target.byteLength);
    if (!Buffer.isBuffer(target)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof target);
    if (start === undefined) start = 0;
    if (end === undefined) end = target ? target.length : 0;
    if (thisStart === undefined) thisStart = 0;
    if (thisEnd === undefined) thisEnd = this.length;
    if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) throw new RangeError("out of range index");
    if (thisStart >= thisEnd && start >= end) return 0;
    if (thisStart >= thisEnd) return -1;
    if (start >= end) return 1;
    start >>>= 0;
    end >>>= 0;
    thisStart >>>= 0;
    thisEnd >>>= 0;
    if (this === target) return 0;
    var x = thisEnd - thisStart;
    var y = end - start;
    var len = Math.min(x, y);
    var thisCopy = this.slice(thisStart, thisEnd);
    var targetCopy = target.slice(start, end);
    for(var i = 0; i < len; ++i)if (thisCopy[i] !== targetCopy[i]) {
        x = thisCopy[i];
        y = targetCopy[i];
        break;
    }
    if (x < y) return -1;
    if (y < x) return 1;
    return 0;
};
// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
    // Empty buffer means no match
    if (buffer.length === 0) return -1;
    // Normalize byteOffset
    if (typeof byteOffset === "string") {
        encoding = byteOffset;
        byteOffset = 0;
    } else if (byteOffset > 0x7fffffff) byteOffset = 0x7fffffff;
    else if (byteOffset < -2147483648) byteOffset = -2147483648;
    byteOffset = +byteOffset // Coerce to Number.
    ;
    if (numberIsNaN(byteOffset)) // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : buffer.length - 1;
    // Normalize byteOffset: negative offsets start from the end of the buffer
    if (byteOffset < 0) byteOffset = buffer.length + byteOffset;
    if (byteOffset >= buffer.length) {
        if (dir) return -1;
        else byteOffset = buffer.length - 1;
    } else if (byteOffset < 0) {
        if (dir) byteOffset = 0;
        else return -1;
    }
    // Normalize val
    if (typeof val === "string") val = Buffer.from(val, encoding);
    // Finally, search either indexOf (if dir is true) or lastIndexOf
    if (Buffer.isBuffer(val)) {
        // Special case: looking for empty string/buffer always fails
        if (val.length === 0) return -1;
        return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
    } else if (typeof val === "number") {
        val = val & 0xFF // Search for a byte value [0-255]
        ;
        if (typeof Uint8Array.prototype.indexOf === "function") {
            if (dir) return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
            else return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
        }
        return arrayIndexOf(buffer, [
            val
        ], byteOffset, encoding, dir);
    }
    throw new TypeError("val must be string, number or Buffer");
}
function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
    var indexSize = 1;
    var arrLength = arr.length;
    var valLength = val.length;
    if (encoding !== undefined) {
        encoding = String(encoding).toLowerCase();
        if (encoding === "ucs2" || encoding === "ucs-2" || encoding === "utf16le" || encoding === "utf-16le") {
            if (arr.length < 2 || val.length < 2) return -1;
            indexSize = 2;
            arrLength /= 2;
            valLength /= 2;
            byteOffset /= 2;
        }
    }
    function read(buf, i) {
        if (indexSize === 1) return buf[i];
        else return buf.readUInt16BE(i * indexSize);
    }
    var i;
    if (dir) {
        var foundIndex = -1;
        for(i = byteOffset; i < arrLength; i++)if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
            if (foundIndex === -1) foundIndex = i;
            if (i - foundIndex + 1 === valLength) return foundIndex * indexSize;
        } else {
            if (foundIndex !== -1) i -= i - foundIndex;
            foundIndex = -1;
        }
    } else {
        if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;
        for(i = byteOffset; i >= 0; i--){
            var found = true;
            for(var j = 0; j < valLength; j++)if (read(arr, i + j) !== read(val, j)) {
                found = false;
                break;
            }
            if (found) return i;
        }
    }
    return -1;
}
Buffer.prototype.includes = function includes(val, byteOffset, encoding) {
    return this.indexOf(val, byteOffset, encoding) !== -1;
};
Buffer.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
    return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
};
Buffer.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
    return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
};
function hexWrite(buf, string, offset, length) {
    offset = Number(offset) || 0;
    var remaining = buf.length - offset;
    if (!length) length = remaining;
    else {
        length = Number(length);
        if (length > remaining) length = remaining;
    }
    var strLen = string.length;
    if (length > strLen / 2) length = strLen / 2;
    for(var i = 0; i < length; ++i){
        var parsed = parseInt(string.substr(i * 2, 2), 16);
        if (numberIsNaN(parsed)) return i;
        buf[offset + i] = parsed;
    }
    return i;
}
function utf8Write(buf, string, offset, length) {
    return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
}
function asciiWrite(buf, string, offset, length) {
    return blitBuffer(asciiToBytes(string), buf, offset, length);
}
function base64Write(buf, string, offset, length) {
    return blitBuffer(base64ToBytes(string), buf, offset, length);
}
function ucs2Write(buf, string, offset, length) {
    return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
}
Buffer.prototype.write = function write(string, offset, length, encoding) {
    // Buffer#write(string)
    if (offset === undefined) {
        encoding = "utf8";
        length = this.length;
        offset = 0;
    // Buffer#write(string, encoding)
    } else if (length === undefined && typeof offset === "string") {
        encoding = offset;
        length = this.length;
        offset = 0;
    // Buffer#write(string, offset[, length][, encoding])
    } else if (isFinite(offset)) {
        offset = offset >>> 0;
        if (isFinite(length)) {
            length = length >>> 0;
            if (encoding === undefined) encoding = "utf8";
        } else {
            encoding = length;
            length = undefined;
        }
    } else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
    var remaining = this.length - offset;
    if (length === undefined || length > remaining) length = remaining;
    if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) throw new RangeError("Attempt to write outside buffer bounds");
    if (!encoding) encoding = "utf8";
    var loweredCase = false;
    for(;;)switch(encoding){
        case "hex":
            return hexWrite(this, string, offset, length);
        case "utf8":
        case "utf-8":
            return utf8Write(this, string, offset, length);
        case "ascii":
        case "latin1":
        case "binary":
            return asciiWrite(this, string, offset, length);
        case "base64":
            // Warning: maxLength not taken into account in base64Write
            return base64Write(this, string, offset, length);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
            return ucs2Write(this, string, offset, length);
        default:
            if (loweredCase) throw new TypeError("Unknown encoding: " + encoding);
            encoding = ("" + encoding).toLowerCase();
            loweredCase = true;
    }
};
Buffer.prototype.toJSON = function toJSON() {
    return {
        type: "Buffer",
        data: Array.prototype.slice.call(this._arr || this, 0)
    };
};
function base64Slice(buf, start, end) {
    if (start === 0 && end === buf.length) return base64.fromByteArray(buf);
    else return base64.fromByteArray(buf.slice(start, end));
}
function utf8Slice(buf, start, end) {
    end = Math.min(buf.length, end);
    var res = [];
    var i = start;
    while(i < end){
        var firstByte = buf[i];
        var codePoint = null;
        var bytesPerSequence = firstByte > 0xEF ? 4 : firstByte > 0xDF ? 3 : firstByte > 0xBF ? 2 : 1;
        if (i + bytesPerSequence <= end) {
            var secondByte, thirdByte, fourthByte, tempCodePoint;
            switch(bytesPerSequence){
                case 1:
                    if (firstByte < 0x80) codePoint = firstByte;
                    break;
                case 2:
                    secondByte = buf[i + 1];
                    if ((secondByte & 0xC0) === 0x80) {
                        tempCodePoint = (firstByte & 0x1F) << 0x6 | secondByte & 0x3F;
                        if (tempCodePoint > 0x7F) codePoint = tempCodePoint;
                    }
                    break;
                case 3:
                    secondByte = buf[i + 1];
                    thirdByte = buf[i + 2];
                    if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
                        tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | thirdByte & 0x3F;
                        if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) codePoint = tempCodePoint;
                    }
                    break;
                case 4:
                    secondByte = buf[i + 1];
                    thirdByte = buf[i + 2];
                    fourthByte = buf[i + 3];
                    if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
                        tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | fourthByte & 0x3F;
                        if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) codePoint = tempCodePoint;
                    }
            }
        }
        if (codePoint === null) {
            // we did not generate a valid codePoint so insert a
            // replacement char (U+FFFD) and advance only 1 byte
            codePoint = 0xFFFD;
            bytesPerSequence = 1;
        } else if (codePoint > 0xFFFF) {
            // encode to utf16 (surrogate pair dance)
            codePoint -= 0x10000;
            res.push(codePoint >>> 10 & 0x3FF | 0xD800);
            codePoint = 0xDC00 | codePoint & 0x3FF;
        }
        res.push(codePoint);
        i += bytesPerSequence;
    }
    return decodeCodePointsArray(res);
}
// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000;
function decodeCodePointsArray(codePoints) {
    var len = codePoints.length;
    if (len <= MAX_ARGUMENTS_LENGTH) return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
    ;
    // Decode in chunks to avoid "call stack size exceeded".
    var res = "";
    var i = 0;
    while(i < len)res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
    return res;
}
function asciiSlice(buf, start, end) {
    var ret = "";
    end = Math.min(buf.length, end);
    for(var i = start; i < end; ++i)ret += String.fromCharCode(buf[i] & 0x7F);
    return ret;
}
function latin1Slice(buf, start, end) {
    var ret = "";
    end = Math.min(buf.length, end);
    for(var i = start; i < end; ++i)ret += String.fromCharCode(buf[i]);
    return ret;
}
function hexSlice(buf, start, end) {
    var len = buf.length;
    if (!start || start < 0) start = 0;
    if (!end || end < 0 || end > len) end = len;
    var out = "";
    for(var i = start; i < end; ++i)out += hexSliceLookupTable[buf[i]];
    return out;
}
function utf16leSlice(buf, start, end) {
    var bytes = buf.slice(start, end);
    var res = "";
    // If bytes.length is odd, the last 8 bits must be ignored (same as node.js)
    for(var i = 0; i < bytes.length - 1; i += 2)res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
    return res;
}
Buffer.prototype.slice = function slice(start, end) {
    var len = this.length;
    start = ~~start;
    end = end === undefined ? len : ~~end;
    if (start < 0) {
        start += len;
        if (start < 0) start = 0;
    } else if (start > len) start = len;
    if (end < 0) {
        end += len;
        if (end < 0) end = 0;
    } else if (end > len) end = len;
    if (end < start) end = start;
    var newBuf = this.subarray(start, end);
    // Return an augmented `Uint8Array` instance
    Object.setPrototypeOf(newBuf, Buffer.prototype);
    return newBuf;
};
/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */ function checkOffset(offset, ext, length) {
    if (offset % 1 !== 0 || offset < 0) throw new RangeError("offset is not uint");
    if (offset + ext > length) throw new RangeError("Trying to access beyond buffer length");
}
Buffer.prototype.readUintLE = Buffer.prototype.readUIntLE = function readUIntLE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);
    var val = this[offset];
    var mul = 1;
    var i = 0;
    while(++i < byteLength && (mul *= 0x100))val += this[offset + i] * mul;
    return val;
};
Buffer.prototype.readUintBE = Buffer.prototype.readUIntBE = function readUIntBE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);
    var val = this[offset + --byteLength];
    var mul = 1;
    while(byteLength > 0 && (mul *= 0x100))val += this[offset + --byteLength] * mul;
    return val;
};
Buffer.prototype.readUint8 = Buffer.prototype.readUInt8 = function readUInt8(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 1, this.length);
    return this[offset];
};
Buffer.prototype.readUint16LE = Buffer.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    return this[offset] | this[offset + 1] << 8;
};
Buffer.prototype.readUint16BE = Buffer.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    return this[offset] << 8 | this[offset + 1];
};
Buffer.prototype.readUint32LE = Buffer.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 0x1000000;
};
Buffer.prototype.readUint32BE = Buffer.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return this[offset] * 0x1000000 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
};
Buffer.prototype.readIntLE = function readIntLE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);
    var val = this[offset];
    var mul = 1;
    var i = 0;
    while(++i < byteLength && (mul *= 0x100))val += this[offset + i] * mul;
    mul *= 0x80;
    if (val >= mul) val -= Math.pow(2, 8 * byteLength);
    return val;
};
Buffer.prototype.readIntBE = function readIntBE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);
    var i = byteLength;
    var mul = 1;
    var val = this[offset + --i];
    while(i > 0 && (mul *= 0x100))val += this[offset + --i] * mul;
    mul *= 0x80;
    if (val >= mul) val -= Math.pow(2, 8 * byteLength);
    return val;
};
Buffer.prototype.readInt8 = function readInt8(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 1, this.length);
    if (!(this[offset] & 0x80)) return this[offset];
    return (0xff - this[offset] + 1) * -1;
};
Buffer.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    var val = this[offset] | this[offset + 1] << 8;
    return val & 0x8000 ? val | 0xFFFF0000 : val;
};
Buffer.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    var val = this[offset + 1] | this[offset] << 8;
    return val & 0x8000 ? val | 0xFFFF0000 : val;
};
Buffer.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
};
Buffer.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
};
Buffer.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return ieee754.read(this, offset, true, 23, 4);
};
Buffer.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return ieee754.read(this, offset, false, 23, 4);
};
Buffer.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 8, this.length);
    return ieee754.read(this, offset, true, 52, 8);
};
Buffer.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 8, this.length);
    return ieee754.read(this, offset, false, 52, 8);
};
function checkInt(buf, value, offset, ext, max, min) {
    if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance');
    if (value > max || value < min) throw new RangeError('"value" argument is out of bounds');
    if (offset + ext > buf.length) throw new RangeError("Index out of range");
}
Buffer.prototype.writeUintLE = Buffer.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) {
        var maxBytes = Math.pow(2, 8 * byteLength) - 1;
        checkInt(this, value, offset, byteLength, maxBytes, 0);
    }
    var mul = 1;
    var i = 0;
    this[offset] = value & 0xFF;
    while(++i < byteLength && (mul *= 0x100))this[offset + i] = value / mul & 0xFF;
    return offset + byteLength;
};
Buffer.prototype.writeUintBE = Buffer.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) {
        var maxBytes = Math.pow(2, 8 * byteLength) - 1;
        checkInt(this, value, offset, byteLength, maxBytes, 0);
    }
    var i = byteLength - 1;
    var mul = 1;
    this[offset + i] = value & 0xFF;
    while(--i >= 0 && (mul *= 0x100))this[offset + i] = value / mul & 0xFF;
    return offset + byteLength;
};
Buffer.prototype.writeUint8 = Buffer.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0);
    this[offset] = value & 0xff;
    return offset + 1;
};
Buffer.prototype.writeUint16LE = Buffer.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
    return offset + 2;
};
Buffer.prototype.writeUint16BE = Buffer.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
    this[offset] = value >>> 8;
    this[offset + 1] = value & 0xff;
    return offset + 2;
};
Buffer.prototype.writeUint32LE = Buffer.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
    this[offset + 3] = value >>> 24;
    this[offset + 2] = value >>> 16;
    this[offset + 1] = value >>> 8;
    this[offset] = value & 0xff;
    return offset + 4;
};
Buffer.prototype.writeUint32BE = Buffer.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 0xff;
    return offset + 4;
};
Buffer.prototype.writeIntLE = function writeIntLE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) {
        var limit = Math.pow(2, 8 * byteLength - 1);
        checkInt(this, value, offset, byteLength, limit - 1, -limit);
    }
    var i = 0;
    var mul = 1;
    var sub = 0;
    this[offset] = value & 0xFF;
    while(++i < byteLength && (mul *= 0x100)){
        if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) sub = 1;
        this[offset + i] = (value / mul >> 0) - sub & 0xFF;
    }
    return offset + byteLength;
};
Buffer.prototype.writeIntBE = function writeIntBE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) {
        var limit = Math.pow(2, 8 * byteLength - 1);
        checkInt(this, value, offset, byteLength, limit - 1, -limit);
    }
    var i = byteLength - 1;
    var mul = 1;
    var sub = 0;
    this[offset + i] = value & 0xFF;
    while(--i >= 0 && (mul *= 0x100)){
        if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) sub = 1;
        this[offset + i] = (value / mul >> 0) - sub & 0xFF;
    }
    return offset + byteLength;
};
Buffer.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -128);
    if (value < 0) value = 0xff + value + 1;
    this[offset] = value & 0xff;
    return offset + 1;
};
Buffer.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -32768);
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
    return offset + 2;
};
Buffer.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -32768);
    this[offset] = value >>> 8;
    this[offset + 1] = value & 0xff;
    return offset + 2;
};
Buffer.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -2147483648);
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
    this[offset + 2] = value >>> 16;
    this[offset + 3] = value >>> 24;
    return offset + 4;
};
Buffer.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -2147483648);
    if (value < 0) value = 0xffffffff + value + 1;
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 0xff;
    return offset + 4;
};
function checkIEEE754(buf, value, offset, ext, max, min) {
    if (offset + ext > buf.length) throw new RangeError("Index out of range");
    if (offset < 0) throw new RangeError("Index out of range");
}
function writeFloat(buf, value, offset, littleEndian, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -340282346638528860000000000000000000000);
    ieee754.write(buf, value, offset, littleEndian, 23, 4);
    return offset + 4;
}
Buffer.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
    return writeFloat(this, value, offset, true, noAssert);
};
Buffer.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
    return writeFloat(this, value, offset, false, noAssert);
};
function writeDouble(buf, value, offset, littleEndian, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000);
    ieee754.write(buf, value, offset, littleEndian, 52, 8);
    return offset + 8;
}
Buffer.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
    return writeDouble(this, value, offset, true, noAssert);
};
Buffer.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
    return writeDouble(this, value, offset, false, noAssert);
};
// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy(target, targetStart, start, end) {
    if (!Buffer.isBuffer(target)) throw new TypeError("argument should be a Buffer");
    if (!start) start = 0;
    if (!end && end !== 0) end = this.length;
    if (targetStart >= target.length) targetStart = target.length;
    if (!targetStart) targetStart = 0;
    if (end > 0 && end < start) end = start;
    // Copy 0 bytes; we're done
    if (end === start) return 0;
    if (target.length === 0 || this.length === 0) return 0;
    // Fatal error conditions
    if (targetStart < 0) throw new RangeError("targetStart out of bounds");
    if (start < 0 || start >= this.length) throw new RangeError("Index out of range");
    if (end < 0) throw new RangeError("sourceEnd out of bounds");
    // Are we oob?
    if (end > this.length) end = this.length;
    if (target.length - targetStart < end - start) end = target.length - targetStart + start;
    var len = end - start;
    if (this === target && typeof Uint8Array.prototype.copyWithin === "function") // Use built-in when available, missing from IE11
    this.copyWithin(targetStart, start, end);
    else Uint8Array.prototype.set.call(target, this.subarray(start, end), targetStart);
    return len;
};
// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill(val, start, end, encoding) {
    // Handle string cases:
    if (typeof val === "string") {
        if (typeof start === "string") {
            encoding = start;
            start = 0;
            end = this.length;
        } else if (typeof end === "string") {
            encoding = end;
            end = this.length;
        }
        if (encoding !== undefined && typeof encoding !== "string") throw new TypeError("encoding must be a string");
        if (typeof encoding === "string" && !Buffer.isEncoding(encoding)) throw new TypeError("Unknown encoding: " + encoding);
        if (val.length === 1) {
            var code = val.charCodeAt(0);
            if (encoding === "utf8" && code < 128 || encoding === "latin1") // Fast path: If `val` fits into a single byte, use that numeric value.
            val = code;
        }
    } else if (typeof val === "number") val = val & 255;
    else if (typeof val === "boolean") val = Number(val);
    // Invalid ranges are not set to a default, so can range check early.
    if (start < 0 || this.length < start || this.length < end) throw new RangeError("Out of range index");
    if (end <= start) return this;
    start = start >>> 0;
    end = end === undefined ? this.length : end >>> 0;
    if (!val) val = 0;
    var i;
    if (typeof val === "number") for(i = start; i < end; ++i)this[i] = val;
    else {
        var bytes = Buffer.isBuffer(val) ? val : Buffer.from(val, encoding);
        var len = bytes.length;
        if (len === 0) throw new TypeError('The value "' + val + '" is invalid for argument "value"');
        for(i = 0; i < end - start; ++i)this[i + start] = bytes[i % len];
    }
    return this;
};
// HELPER FUNCTIONS
// ================
var INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g;
function base64clean(str) {
    // Node takes equal signs as end of the Base64 encoding
    str = str.split("=")[0];
    // Node strips out invalid characters like \n and \t from the string, base64-js does not
    str = str.trim().replace(INVALID_BASE64_RE, "");
    // Node converts strings with length < 2 to ''
    if (str.length < 2) return "";
    // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
    while(str.length % 4 !== 0)str = str + "=";
    return str;
}
function utf8ToBytes(string, units) {
    units = units || Infinity;
    var codePoint;
    var length = string.length;
    var leadSurrogate = null;
    var bytes = [];
    for(var i = 0; i < length; ++i){
        codePoint = string.charCodeAt(i);
        // is surrogate component
        if (codePoint > 0xD7FF && codePoint < 0xE000) {
            // last char was a lead
            if (!leadSurrogate) {
                // no lead yet
                if (codePoint > 0xDBFF) {
                    // unexpected trail
                    if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
                    continue;
                } else if (i + 1 === length) {
                    // unpaired lead
                    if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
                    continue;
                }
                // valid lead
                leadSurrogate = codePoint;
                continue;
            }
            // 2 leads in a row
            if (codePoint < 0xDC00) {
                if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
                leadSurrogate = codePoint;
                continue;
            }
            // valid surrogate pair
            codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000;
        } else if (leadSurrogate) // valid bmp char, but last char was a lead
        {
            if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
        }
        leadSurrogate = null;
        // encode utf8
        if (codePoint < 0x80) {
            if ((units -= 1) < 0) break;
            bytes.push(codePoint);
        } else if (codePoint < 0x800) {
            if ((units -= 2) < 0) break;
            bytes.push(codePoint >> 0x6 | 0xC0, codePoint & 0x3F | 0x80);
        } else if (codePoint < 0x10000) {
            if ((units -= 3) < 0) break;
            bytes.push(codePoint >> 0xC | 0xE0, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
        } else if (codePoint < 0x110000) {
            if ((units -= 4) < 0) break;
            bytes.push(codePoint >> 0x12 | 0xF0, codePoint >> 0xC & 0x3F | 0x80, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
        } else throw new Error("Invalid code point");
    }
    return bytes;
}
function asciiToBytes(str) {
    var byteArray = [];
    for(var i = 0; i < str.length; ++i)// Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF);
    return byteArray;
}
function utf16leToBytes(str, units) {
    var c, hi, lo;
    var byteArray = [];
    for(var i = 0; i < str.length; ++i){
        if ((units -= 2) < 0) break;
        c = str.charCodeAt(i);
        hi = c >> 8;
        lo = c % 256;
        byteArray.push(lo);
        byteArray.push(hi);
    }
    return byteArray;
}
function base64ToBytes(str) {
    return base64.toByteArray(base64clean(str));
}
function blitBuffer(src, dst, offset, length) {
    for(var i = 0; i < length; ++i){
        if (i + offset >= dst.length || i >= src.length) break;
        dst[i + offset] = src[i];
    }
    return i;
}
// ArrayBuffer or Uint8Array objects from other contexts (i.e. iframes) do not pass
// the `instanceof` check but they should be treated as of that type.
// See: https://github.com/feross/buffer/issues/166
function isInstance(obj, type) {
    return obj instanceof type || obj != null && obj.constructor != null && obj.constructor.name != null && obj.constructor.name === type.name;
}
function numberIsNaN(obj) {
    // For IE11 support
    return obj !== obj // eslint-disable-line no-self-compare
    ;
}
// Create lookup table for `toString('hex')`
// See: https://github.com/feross/buffer/issues/219
var hexSliceLookupTable = function() {
    var alphabet = "0123456789abcdef";
    var table = new Array(256);
    for(var i = 0; i < 16; ++i){
        var i16 = i * 16;
        for(var j = 0; j < 16; ++j)table[i16 + j] = alphabet[i] + alphabet[j];
    }
    return table;
}();

},{"base64-js":"eIiSV","ieee754":"cO95r"}],"eIiSV":[function(require,module,exports) {
"use strict";
exports.byteLength = byteLength;
exports.toByteArray = toByteArray;
exports.fromByteArray = fromByteArray;
var lookup = [];
var revLookup = [];
var Arr = typeof Uint8Array !== "undefined" ? Uint8Array : Array;
var code = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for(var i = 0, len = code.length; i < len; ++i){
    lookup[i] = code[i];
    revLookup[code.charCodeAt(i)] = i;
}
// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup["-".charCodeAt(0)] = 62;
revLookup["_".charCodeAt(0)] = 63;
function getLens(b64) {
    var len = b64.length;
    if (len % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
    // Trim off extra bytes after placeholder bytes are found
    // See: https://github.com/beatgammit/base64-js/issues/42
    var validLen = b64.indexOf("=");
    if (validLen === -1) validLen = len;
    var placeHoldersLen = validLen === len ? 0 : 4 - validLen % 4;
    return [
        validLen,
        placeHoldersLen
    ];
}
// base64 is 4/3 + up to two characters of the original data
function byteLength(b64) {
    var lens = getLens(b64);
    var validLen = lens[0];
    var placeHoldersLen = lens[1];
    return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}
function _byteLength(b64, validLen, placeHoldersLen) {
    return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}
function toByteArray(b64) {
    var tmp;
    var lens = getLens(b64);
    var validLen = lens[0];
    var placeHoldersLen = lens[1];
    var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));
    var curByte = 0;
    // if there are placeholders, only get up to the last complete 4 chars
    var len = placeHoldersLen > 0 ? validLen - 4 : validLen;
    var i;
    for(i = 0; i < len; i += 4){
        tmp = revLookup[b64.charCodeAt(i)] << 18 | revLookup[b64.charCodeAt(i + 1)] << 12 | revLookup[b64.charCodeAt(i + 2)] << 6 | revLookup[b64.charCodeAt(i + 3)];
        arr[curByte++] = tmp >> 16 & 0xFF;
        arr[curByte++] = tmp >> 8 & 0xFF;
        arr[curByte++] = tmp & 0xFF;
    }
    if (placeHoldersLen === 2) {
        tmp = revLookup[b64.charCodeAt(i)] << 2 | revLookup[b64.charCodeAt(i + 1)] >> 4;
        arr[curByte++] = tmp & 0xFF;
    }
    if (placeHoldersLen === 1) {
        tmp = revLookup[b64.charCodeAt(i)] << 10 | revLookup[b64.charCodeAt(i + 1)] << 4 | revLookup[b64.charCodeAt(i + 2)] >> 2;
        arr[curByte++] = tmp >> 8 & 0xFF;
        arr[curByte++] = tmp & 0xFF;
    }
    return arr;
}
function tripletToBase64(num) {
    return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F];
}
function encodeChunk(uint8, start, end) {
    var tmp;
    var output = [];
    for(var i = start; i < end; i += 3){
        tmp = (uint8[i] << 16 & 0xFF0000) + (uint8[i + 1] << 8 & 0xFF00) + (uint8[i + 2] & 0xFF);
        output.push(tripletToBase64(tmp));
    }
    return output.join("");
}
function fromByteArray(uint8) {
    var tmp;
    var len = uint8.length;
    var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
    ;
    var parts = [];
    var maxChunkLength = 16383 // must be multiple of 3
    ;
    // go through the array every three bytes, we'll deal with trailing stuff later
    for(var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength)parts.push(encodeChunk(uint8, i, i + maxChunkLength > len2 ? len2 : i + maxChunkLength));
    // pad the end with zeros, but make sure to not forget the extra bytes
    if (extraBytes === 1) {
        tmp = uint8[len - 1];
        parts.push(lookup[tmp >> 2] + lookup[tmp << 4 & 0x3F] + "==");
    } else if (extraBytes === 2) {
        tmp = (uint8[len - 2] << 8) + uint8[len - 1];
        parts.push(lookup[tmp >> 10] + lookup[tmp >> 4 & 0x3F] + lookup[tmp << 2 & 0x3F] + "=");
    }
    return parts.join("");
}

},{}],"cO95r":[function(require,module,exports) {
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */ exports.read = function(buffer, offset, isLE, mLen, nBytes) {
    var e, m;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var nBits = -7;
    var i = isLE ? nBytes - 1 : 0;
    var d = isLE ? -1 : 1;
    var s = buffer[offset + i];
    i += d;
    e = s & (1 << -nBits) - 1;
    s >>= -nBits;
    nBits += eLen;
    for(; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8);
    m = e & (1 << -nBits) - 1;
    e >>= -nBits;
    nBits += mLen;
    for(; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8);
    if (e === 0) e = 1 - eBias;
    else if (e === eMax) return m ? NaN : (s ? -1 : 1) * Infinity;
    else {
        m = m + Math.pow(2, mLen);
        e = e - eBias;
    }
    return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
};
exports.write = function(buffer, value, offset, isLE, mLen, nBytes) {
    var e, m, c;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
    var i = isLE ? 0 : nBytes - 1;
    var d = isLE ? 1 : -1;
    var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
    value = Math.abs(value);
    if (isNaN(value) || value === Infinity) {
        m = isNaN(value) ? 1 : 0;
        e = eMax;
    } else {
        e = Math.floor(Math.log(value) / Math.LN2);
        if (value * (c = Math.pow(2, -e)) < 1) {
            e--;
            c *= 2;
        }
        if (e + eBias >= 1) value += rt / c;
        else value += rt * Math.pow(2, 1 - eBias);
        if (value * c >= 2) {
            e++;
            c /= 2;
        }
        if (e + eBias >= eMax) {
            m = 0;
            e = eMax;
        } else if (e + eBias >= 1) {
            m = (value * c - 1) * Math.pow(2, mLen);
            e = e + eBias;
        } else {
            m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
            e = 0;
        }
    }
    for(; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8);
    e = e << mLen | m;
    eLen += mLen;
    for(; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8);
    buffer[offset + i - d] |= s * 128;
};

},{}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"1hTeY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _webcryptoShimMjs = require("./webcrypto-shim.mjs");
exports.default = window.crypto;

},{"./webcrypto-shim.mjs":"jpoeZ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jpoeZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @file Web Cryptography API shim
 * @author Artem S Vybornov <vybornov@gmail.com>
 * @license MIT
 */ (function(global, factory) {
    if (typeof define === "function" && define.amd) // AMD. Register as an anonymous module.
    define([], function() {
        return factory(global);
    });
    else if (module.exports) // CommonJS-like environments that support module.exports
    module.exports = factory(global);
    else factory(global);
})(typeof self !== "undefined" ? self : undefined, function(global) {
    "use strict";
    if (typeof Promise !== "function") throw "Promise support required";
    var _crypto = global.crypto || global.msCrypto;
    if (!_crypto) return;
    var _subtle = _crypto.subtle || _crypto.webkitSubtle;
    if (!_subtle) return;
    var _Crypto = global.Crypto || _crypto.constructor || Object, _SubtleCrypto = global.SubtleCrypto || _subtle.constructor || Object, _CryptoKey = global.CryptoKey || global.Key || Object;
    var isEdge = global.navigator.userAgent.indexOf("Edge/") > -1;
    var isIE = !!global.msCrypto && !isEdge;
    var isWebkit = !_crypto.subtle && !!_crypto.webkitSubtle;
    if (!isIE && !isWebkit) return;
    function s2a(s) {
        return btoa(s).replace(/\=+$/, "").replace(/\+/g, "-").replace(/\//g, "_");
    }
    function a2s(s) {
        s += "===", s = s.slice(0, -s.length % 4);
        return atob(s.replace(/-/g, "+").replace(/_/g, "/"));
    }
    function s2b(s) {
        var b = new Uint8Array(s.length);
        for(var i = 0; i < s.length; i++)b[i] = s.charCodeAt(i);
        return b;
    }
    function b2s(b) {
        if (b instanceof ArrayBuffer) b = new Uint8Array(b);
        return String.fromCharCode.apply(String, b);
    }
    function alg(a) {
        var r = {
            "name": (a.name || a || "").toUpperCase().replace("V", "v")
        };
        switch(r.name){
            case "SHA-1":
            case "SHA-256":
            case "SHA-384":
            case "SHA-512":
                break;
            case "AES-CBC":
            case "AES-GCM":
            case "AES-KW":
                if (a.length) r["length"] = a.length;
                break;
            case "HMAC":
                if (a.hash) r["hash"] = alg(a.hash);
                if (a.length) r["length"] = a.length;
                break;
            case "RSAES-PKCS1-v1_5":
                if (a.publicExponent) r["publicExponent"] = new Uint8Array(a.publicExponent);
                if (a.modulusLength) r["modulusLength"] = a.modulusLength;
                break;
            case "RSASSA-PKCS1-v1_5":
            case "RSA-OAEP":
                if (a.hash) r["hash"] = alg(a.hash);
                if (a.publicExponent) r["publicExponent"] = new Uint8Array(a.publicExponent);
                if (a.modulusLength) r["modulusLength"] = a.modulusLength;
                break;
            default:
                throw new SyntaxError("Bad algorithm name");
        }
        return r;
    }
    function jwkAlg(a) {
        return ({
            "HMAC": {
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
                "128": "A128KW",
                "192": "A192KW",
                "256": "A256KW"
            },
            "AES-GCM": {
                "128": "A128GCM",
                "192": "A192GCM",
                "256": "A256GCM"
            },
            "AES-CBC": {
                "128": "A128CBC",
                "192": "A192CBC",
                "256": "A256CBC"
            }
        })[a.name][(a.hash || {}).name || a.length || ""];
    }
    function b2jwk(k) {
        if (k instanceof ArrayBuffer || k instanceof Uint8Array) k = JSON.parse(decodeURIComponent(escape(b2s(k))));
        var jwk = {
            "kty": k.kty,
            "alg": k.alg,
            "ext": k.ext || k.extractable
        };
        switch(jwk.kty){
            case "oct":
                jwk.k = k.k;
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
                ].forEach(function(x) {
                    if (x in k) jwk[x] = k[x];
                });
                break;
            default:
                throw new TypeError("Unsupported key type");
        }
        return jwk;
    }
    function jwk2b(k) {
        var jwk = b2jwk(k);
        if (isIE) jwk["extractable"] = jwk.ext, delete jwk.ext;
        return s2b(unescape(encodeURIComponent(JSON.stringify(jwk)))).buffer;
    }
    function pkcs2jwk(k) {
        var info = b2der(k), prv = false;
        if (info.length > 2) prv = true, info.shift(); // remove version from PKCS#8 PrivateKeyInfo structure
        var jwk = {
            "ext": true
        };
        switch(info[0][0]){
            case "1.2.840.113549.1.1.1":
                var rsaComp = [
                    "n",
                    "e",
                    "d",
                    "p",
                    "q",
                    "dp",
                    "dq",
                    "qi"
                ], rsaKey = b2der(info[1]);
                if (prv) rsaKey.shift(); // remove version from PKCS#1 RSAPrivateKey structure
                for(var i = 0; i < rsaKey.length; i++){
                    if (!rsaKey[i][0]) rsaKey[i] = rsaKey[i].subarray(1);
                    jwk[rsaComp[i]] = s2a(b2s(rsaKey[i]));
                }
                jwk["kty"] = "RSA";
                break;
            default:
                throw new TypeError("Unsupported key type");
        }
        return jwk;
    }
    function jwk2pkcs(k) {
        var key, info = [
            [
                "",
                null
            ]
        ], prv = false;
        switch(k.kty){
            case "RSA":
                var rsaComp = [
                    "n",
                    "e",
                    "d",
                    "p",
                    "q",
                    "dp",
                    "dq",
                    "qi"
                ], rsaKey = [];
                for(var i = 0; i < rsaComp.length; i++){
                    if (!(rsaComp[i] in k)) break;
                    var b = rsaKey[i] = s2b(a2s(k[rsaComp[i]]));
                    if (b[0] & 0x80) rsaKey[i] = new Uint8Array(b.length + 1), rsaKey[i].set(b, 1);
                }
                if (rsaKey.length > 2) prv = true, rsaKey.unshift(new Uint8Array([
                    0
                ])); // add version to PKCS#1 RSAPrivateKey structure
                info[0][0] = "1.2.840.113549.1.1.1";
                key = rsaKey;
                break;
            default:
                throw new TypeError("Unsupported key type");
        }
        info.push(new Uint8Array(der2b(key)).buffer);
        if (!prv) info[1] = {
            "tag": 0x03,
            "value": info[1]
        };
        else info.unshift(new Uint8Array([
            0
        ])); // add version to PKCS#8 PrivateKeyInfo structure
        return new Uint8Array(der2b(info)).buffer;
    }
    var oid2str = {
        "KoZIhvcNAQEB": "1.2.840.113549.1.1.1"
    }, str2oid = {
        "1.2.840.113549.1.1.1": "KoZIhvcNAQEB"
    };
    function b2der(buf, ctx) {
        if (buf instanceof ArrayBuffer) buf = new Uint8Array(buf);
        if (!ctx) ctx = {
            pos: 0,
            end: buf.length
        };
        if (ctx.end - ctx.pos < 2 || ctx.end > buf.length) throw new RangeError("Malformed DER");
        var tag = buf[ctx.pos++], len = buf[ctx.pos++];
        if (len >= 0x80) {
            len &= 0x7f;
            if (ctx.end - ctx.pos < len) throw new RangeError("Malformed DER");
            for(var xlen = 0; len--;)xlen <<= 8, xlen |= buf[ctx.pos++];
            len = xlen;
        }
        if (ctx.end - ctx.pos < len) throw new RangeError("Malformed DER");
        var rv;
        switch(tag){
            case 0x02:
                rv = buf.subarray(ctx.pos, ctx.pos += len);
                break;
            case 0x03:
                if (buf[ctx.pos++]) throw new Error("Unsupported bit string");
                len--;
            case 0x04:
                rv = new Uint8Array(buf.subarray(ctx.pos, ctx.pos += len)).buffer;
                break;
            case 0x05:
                rv = null;
                break;
            case 0x06:
                var oid = btoa(b2s(buf.subarray(ctx.pos, ctx.pos += len)));
                if (!(oid in oid2str)) throw new Error("Unsupported OBJECT ID " + oid);
                rv = oid2str[oid];
                break;
            case 0x30:
                rv = [];
                for(var end = ctx.pos + len; ctx.pos < end;)rv.push(b2der(buf, ctx));
                break;
            default:
                throw new Error("Unsupported DER tag 0x" + tag.toString(16));
        }
        return rv;
    }
    function der2b(val, buf) {
        if (!buf) buf = [];
        var tag = 0, len = 0, pos = buf.length + 2;
        buf.push(0, 0); // placeholder
        if (val instanceof Uint8Array) {
            tag = 0x02, len = val.length;
            for(var i = 0; i < len; i++)buf.push(val[i]);
        } else if (val instanceof ArrayBuffer) {
            tag = 0x04, len = val.byteLength, val = new Uint8Array(val);
            for(var i = 0; i < len; i++)buf.push(val[i]);
        } else if (val === null) tag = 0x05, len = 0;
        else if (typeof val === "string" && val in str2oid) {
            var oid = s2b(atob(str2oid[val]));
            tag = 0x06, len = oid.length;
            for(var i = 0; i < len; i++)buf.push(oid[i]);
        } else if (val instanceof Array) {
            for(var i = 0; i < val.length; i++)der2b(val[i], buf);
            tag = 0x30, len = buf.length - pos;
        } else if (typeof val === "object" && val.tag === 0x03 && val.value instanceof ArrayBuffer) {
            val = new Uint8Array(val.value), tag = 0x03, len = val.byteLength;
            buf.push(0);
            for(var i = 0; i < len; i++)buf.push(val[i]);
            len++;
        } else throw new Error("Unsupported DER value " + val);
        if (len >= 0x80) {
            var xlen = len, len = 4;
            buf.splice(pos, 0, xlen >> 24 & 0xff, xlen >> 16 & 0xff, xlen >> 8 & 0xff, xlen & 0xff);
            while(len > 1 && !(xlen >> 24))xlen <<= 8, len--;
            if (len < 4) buf.splice(pos, 4 - len);
            len |= 0x80;
        }
        buf.splice(pos - 2, 2, tag, len);
        return buf;
    }
    function CryptoKey(key, alg, ext, use) {
        Object.defineProperties(this, {
            _key: {
                value: key
            },
            type: {
                value: key.type,
                enumerable: true
            },
            extractable: {
                value: ext === undefined ? key.extractable : ext,
                enumerable: true
            },
            algorithm: {
                value: alg === undefined ? key.algorithm : alg,
                enumerable: true
            },
            usages: {
                value: use === undefined ? key.usages : use,
                enumerable: true
            }
        });
    }
    function isPubKeyUse(u) {
        return u === "verify" || u === "encrypt" || u === "wrapKey";
    }
    function isPrvKeyUse(u) {
        return u === "sign" || u === "decrypt" || u === "unwrapKey";
    }
    [
        "generateKey",
        "importKey",
        "unwrapKey"
    ].forEach(function(m) {
        var _fn = _subtle[m];
        _subtle[m] = function(a, b, c) {
            var args = [].slice.call(arguments), ka, kx, ku;
            switch(m){
                case "generateKey":
                    ka = alg(a), kx = b, ku = c;
                    break;
                case "importKey":
                    ka = alg(c), kx = args[3], ku = args[4];
                    if (a === "jwk") {
                        b = b2jwk(b);
                        if (!b.alg) b.alg = jwkAlg(ka);
                        if (!b.key_ops) b.key_ops = b.kty !== "oct" ? "d" in b ? ku.filter(isPrvKeyUse) : ku.filter(isPubKeyUse) : ku.slice();
                        args[1] = jwk2b(b);
                    }
                    break;
                case "unwrapKey":
                    ka = args[4], kx = args[5], ku = args[6];
                    args[2] = c._key;
                    break;
            }
            if (m === "generateKey" && ka.name === "HMAC" && ka.hash) {
                ka.length = ka.length || ({
                    "SHA-1": 512,
                    "SHA-256": 512,
                    "SHA-384": 1024,
                    "SHA-512": 1024
                })[ka.hash.name];
                return _subtle.importKey("raw", _crypto.getRandomValues(new Uint8Array(ka.length + 7 >> 3)), ka, kx, ku);
            }
            if (isWebkit && m === "generateKey" && ka.name === "RSASSA-PKCS1-v1_5" && (!ka.modulusLength || ka.modulusLength >= 2048)) {
                a = alg(a), a.name = "RSAES-PKCS1-v1_5", delete a.hash;
                return _subtle.generateKey(a, true, [
                    "encrypt",
                    "decrypt"
                ]).then(function(k) {
                    return Promise.all([
                        _subtle.exportKey("jwk", k.publicKey),
                        _subtle.exportKey("jwk", k.privateKey)
                    ]);
                }).then(function(keys) {
                    keys[0].alg = keys[1].alg = jwkAlg(ka);
                    keys[0].key_ops = ku.filter(isPubKeyUse), keys[1].key_ops = ku.filter(isPrvKeyUse);
                    return Promise.all([
                        _subtle.importKey("jwk", keys[0], ka, true, keys[0].key_ops),
                        _subtle.importKey("jwk", keys[1], ka, kx, keys[1].key_ops)
                    ]);
                }).then(function(keys) {
                    return {
                        publicKey: keys[0],
                        privateKey: keys[1]
                    };
                });
            }
            if ((isWebkit || isIE && (ka.hash || {}).name === "SHA-1") && m === "importKey" && a === "jwk" && ka.name === "HMAC" && b.kty === "oct") return _subtle.importKey("raw", s2b(a2s(b.k)), c, args[3], args[4]);
            if (isWebkit && m === "importKey" && (a === "spki" || a === "pkcs8")) return _subtle.importKey("jwk", pkcs2jwk(b), c, args[3], args[4]);
            if (isIE && m === "unwrapKey") return _subtle.decrypt(args[3], c, b).then(function(k) {
                return _subtle.importKey(a, k, args[4], args[5], args[6]);
            });
            var op;
            try {
                op = _fn.apply(_subtle, args);
            } catch (e) {
                return Promise.reject(e);
            }
            if (isIE) op = new Promise(function(res, rej) {
                op.onabort = op.onerror = function(e) {
                    rej(e);
                };
                op.oncomplete = function(r) {
                    res(r.target.result);
                };
            });
            op = op.then(function(k) {
                if (ka.name === "HMAC") {
                    if (!ka.length) ka.length = 8 * k.algorithm.length;
                }
                if (ka.name.search("RSA") == 0) {
                    if (!ka.modulusLength) ka.modulusLength = (k.publicKey || k).algorithm.modulusLength;
                    if (!ka.publicExponent) ka.publicExponent = (k.publicKey || k).algorithm.publicExponent;
                }
                if (k.publicKey && k.privateKey) k = {
                    publicKey: new CryptoKey(k.publicKey, ka, kx, ku.filter(isPubKeyUse)),
                    privateKey: new CryptoKey(k.privateKey, ka, kx, ku.filter(isPrvKeyUse))
                };
                else k = new CryptoKey(k, ka, kx, ku);
                return k;
            });
            return op;
        };
    });
    [
        "exportKey",
        "wrapKey"
    ].forEach(function(m) {
        var _fn = _subtle[m];
        _subtle[m] = function(a, b, c) {
            var args = [].slice.call(arguments);
            switch(m){
                case "exportKey":
                    args[1] = b._key;
                    break;
                case "wrapKey":
                    args[1] = b._key, args[2] = c._key;
                    break;
            }
            if ((isWebkit || isIE && (b.algorithm.hash || {}).name === "SHA-1") && m === "exportKey" && a === "jwk" && b.algorithm.name === "HMAC") args[0] = "raw";
            if (isWebkit && m === "exportKey" && (a === "spki" || a === "pkcs8")) args[0] = "jwk";
            if (isIE && m === "wrapKey") return _subtle.exportKey(a, b).then(function(k) {
                if (a === "jwk") k = s2b(unescape(encodeURIComponent(JSON.stringify(b2jwk(k)))));
                return _subtle.encrypt(args[3], c, k);
            });
            var op;
            try {
                op = _fn.apply(_subtle, args);
            } catch (e) {
                return Promise.reject(e);
            }
            if (isIE) op = new Promise(function(res, rej) {
                op.onabort = op.onerror = function(e) {
                    rej(e);
                };
                op.oncomplete = function(r) {
                    res(r.target.result);
                };
            });
            if (m === "exportKey" && a === "jwk") op = op.then(function(k) {
                if ((isWebkit || isIE && (b.algorithm.hash || {}).name === "SHA-1") && b.algorithm.name === "HMAC") return {
                    "kty": "oct",
                    "alg": jwkAlg(b.algorithm),
                    "key_ops": b.usages.slice(),
                    "ext": true,
                    "k": s2a(b2s(k))
                };
                k = b2jwk(k);
                if (!k.alg) k["alg"] = jwkAlg(b.algorithm);
                if (!k.key_ops) k["key_ops"] = b.type === "public" ? b.usages.filter(isPubKeyUse) : b.type === "private" ? b.usages.filter(isPrvKeyUse) : b.usages.slice();
                return k;
            });
            if (isWebkit && m === "exportKey" && (a === "spki" || a === "pkcs8")) op = op.then(function(k) {
                k = jwk2pkcs(b2jwk(k));
                return k;
            });
            return op;
        };
    });
    [
        "encrypt",
        "decrypt",
        "sign",
        "verify"
    ].forEach(function(m) {
        var _fn = _subtle[m];
        _subtle[m] = function(a, b, c, d) {
            if (isIE && (!c.byteLength || d && !d.byteLength)) throw new Error("Empy input is not allowed");
            var args = [].slice.call(arguments), ka = alg(a);
            if (isIE && m === "decrypt" && ka.name === "AES-GCM") {
                var tl = a.tagLength >> 3;
                args[2] = (c.buffer || c).slice(0, c.byteLength - tl), a.tag = (c.buffer || c).slice(c.byteLength - tl);
            }
            args[1] = b._key;
            var op;
            try {
                op = _fn.apply(_subtle, args);
            } catch (e) {
                return Promise.reject(e);
            }
            if (isIE) op = new Promise(function(res, rej) {
                op.onabort = op.onerror = function(e) {
                    rej(e);
                };
                op.oncomplete = function(r) {
                    var r = r.target.result;
                    if (m === "encrypt" && r instanceof AesGcmEncryptResult) {
                        var c = r.ciphertext, t = r.tag;
                        r = new Uint8Array(c.byteLength + t.byteLength);
                        r.set(new Uint8Array(c), 0);
                        r.set(new Uint8Array(t), c.byteLength);
                        r = r.buffer;
                    }
                    res(r);
                };
            });
            return op;
        };
    });
    if (isIE) {
        var _digest = _subtle.digest;
        _subtle["digest"] = function(a, b) {
            if (!b.byteLength) throw new Error("Empy input is not allowed");
            var op;
            try {
                op = _digest.call(_subtle, a, b);
            } catch (e) {
                return Promise.reject(e);
            }
            op = new Promise(function(res, rej) {
                op.onabort = op.onerror = function(e) {
                    rej(e);
                };
                op.oncomplete = function(r) {
                    res(r.target.result);
                };
            });
            return op;
        };
        global.crypto = Object.create(_crypto, {
            getRandomValues: {
                value: function(a) {
                    return _crypto.getRandomValues(a);
                }
            },
            subtle: {
                value: _subtle
            }
        });
        global.CryptoKey = CryptoKey;
    }
    if (isWebkit) {
        _crypto.subtle = _subtle;
        global.Crypto = _Crypto;
        global.SubtleCrypto = _SubtleCrypto;
        global.CryptoKey = CryptoKey;
    }
});
exports.default = {} // section modified by isomorphic-webcrypto build 
;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8wzf3":[function(require,module,exports) {
var global = arguments[3];
(function(factory) {
    typeof define === "function" && define.amd ? define(factory) : factory();
})(function() {
    "use strict";
    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    }
    function _defineProperties(target, props) {
        for(var i = 0; i < props.length; i++){
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps) _defineProperties(Constructor.prototype, protoProps);
        if (staticProps) _defineProperties(Constructor, staticProps);
        Object.defineProperty(Constructor, "prototype", {
            writable: false
        });
        return Constructor;
    }
    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                writable: true,
                configurable: true
            }
        });
        Object.defineProperty(subClass, "prototype", {
            writable: false
        });
        if (superClass) _setPrototypeOf(subClass, superClass);
    }
    function _getPrototypeOf(o) {
        _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
            return o.__proto__ || Object.getPrototypeOf(o);
        };
        return _getPrototypeOf(o);
    }
    function _setPrototypeOf(o, p) {
        _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
            o.__proto__ = p;
            return o;
        };
        return _setPrototypeOf(o, p);
    }
    function _isNativeReflectConstruct() {
        if (typeof Reflect === "undefined" || !Reflect.construct) return false;
        if (Reflect.construct.sham) return false;
        if (typeof Proxy === "function") return true;
        try {
            Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
            return true;
        } catch (e) {
            return false;
        }
    }
    function _assertThisInitialized(self1) {
        if (self1 === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return self1;
    }
    function _possibleConstructorReturn(self1, call) {
        if (call && (typeof call === "object" || typeof call === "function")) return call;
        else if (call !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
        return _assertThisInitialized(self1);
    }
    function _createSuper(Derived) {
        var hasNativeReflectConstruct = _isNativeReflectConstruct();
        return function _createSuperInternal() {
            var Super = _getPrototypeOf(Derived), result;
            if (hasNativeReflectConstruct) {
                var NewTarget = _getPrototypeOf(this).constructor;
                result = Reflect.construct(Super, arguments, NewTarget);
            } else result = Super.apply(this, arguments);
            return _possibleConstructorReturn(this, result);
        };
    }
    function _superPropBase(object, property) {
        while(!Object.prototype.hasOwnProperty.call(object, property)){
            object = _getPrototypeOf(object);
            if (object === null) break;
        }
        return object;
    }
    function _get() {
        if (typeof Reflect !== "undefined" && Reflect.get) _get = Reflect.get.bind();
        else _get = function _get(target, property, receiver) {
            var base = _superPropBase(target, property);
            if (!base) return;
            var desc = Object.getOwnPropertyDescriptor(base, property);
            if (desc.get) return desc.get.call(arguments.length < 3 ? target : receiver);
            return desc.value;
        };
        return _get.apply(this, arguments);
    }
    var Emitter = /*#__PURE__*/ function() {
        function Emitter() {
            _classCallCheck(this, Emitter);
            Object.defineProperty(this, "listeners", {
                value: {},
                writable: true,
                configurable: true
            });
        }
        _createClass(Emitter, [
            {
                key: "addEventListener",
                value: function addEventListener(type, callback, options) {
                    if (!(type in this.listeners)) this.listeners[type] = [];
                    this.listeners[type].push({
                        callback: callback,
                        options: options
                    });
                }
            },
            {
                key: "removeEventListener",
                value: function removeEventListener(type, callback) {
                    if (!(type in this.listeners)) return;
                    var stack = this.listeners[type];
                    for(var i = 0, l = stack.length; i < l; i++)if (stack[i].callback === callback) {
                        stack.splice(i, 1);
                        return;
                    }
                }
            },
            {
                key: "dispatchEvent",
                value: function dispatchEvent(event) {
                    if (!(event.type in this.listeners)) return;
                    var stack = this.listeners[event.type];
                    var stackToCall = stack.slice();
                    for(var i = 0, l = stackToCall.length; i < l; i++){
                        var listener = stackToCall[i];
                        try {
                            listener.callback.call(this, event);
                        } catch (e) {
                            Promise.resolve().then(function() {
                                throw e;
                            });
                        }
                        if (listener.options && listener.options.once) this.removeEventListener(event.type, listener.callback);
                    }
                    return !event.defaultPrevented;
                }
            }
        ]);
        return Emitter;
    }();
    var AbortSignal = /*#__PURE__*/ function(_Emitter) {
        _inherits(AbortSignal, _Emitter);
        var _super = _createSuper(AbortSignal);
        function AbortSignal() {
            var _this;
            _classCallCheck(this, AbortSignal);
            _this = _super.call(this); // Some versions of babel does not transpile super() correctly for IE <= 10, if the parent
            // constructor has failed to run, then "this.listeners" will still be undefined and then we call
            // the parent constructor directly instead as a workaround. For general details, see babel bug:
            // https://github.com/babel/babel/issues/3041
            // This hack was added as a fix for the issue described here:
            // https://github.com/Financial-Times/polyfill-library/pull/59#issuecomment-477558042
            if (!_this.listeners) Emitter.call(_assertThisInitialized(_this));
             // Compared to assignment, Object.defineProperty makes properties non-enumerable by default and
            // we want Object.keys(new AbortController().signal) to be [] for compat with the native impl
            Object.defineProperty(_assertThisInitialized(_this), "aborted", {
                value: false,
                writable: true,
                configurable: true
            });
            Object.defineProperty(_assertThisInitialized(_this), "onabort", {
                value: null,
                writable: true,
                configurable: true
            });
            Object.defineProperty(_assertThisInitialized(_this), "reason", {
                value: undefined,
                writable: true,
                configurable: true
            });
            return _this;
        }
        _createClass(AbortSignal, [
            {
                key: "toString",
                value: function toString() {
                    return "[object AbortSignal]";
                }
            },
            {
                key: "dispatchEvent",
                value: function dispatchEvent(event) {
                    if (event.type === "abort") {
                        this.aborted = true;
                        if (typeof this.onabort === "function") this.onabort.call(this, event);
                    }
                    _get(_getPrototypeOf(AbortSignal.prototype), "dispatchEvent", this).call(this, event);
                }
            }
        ]);
        return AbortSignal;
    }(Emitter);
    var AbortController = /*#__PURE__*/ function() {
        function AbortController() {
            _classCallCheck(this, AbortController);
            // Compared to assignment, Object.defineProperty makes properties non-enumerable by default and
            // we want Object.keys(new AbortController()) to be [] for compat with the native impl
            Object.defineProperty(this, "signal", {
                value: new AbortSignal(),
                writable: true,
                configurable: true
            });
        }
        _createClass(AbortController, [
            {
                key: "abort",
                value: function abort(reason) {
                    var event;
                    try {
                        event = new Event("abort");
                    } catch (e) {
                        if (typeof document !== "undefined") {
                            if (!document.createEvent) {
                                // For Internet Explorer 8:
                                event = document.createEventObject();
                                event.type = "abort";
                            } else {
                                // For Internet Explorer 11:
                                event = document.createEvent("Event");
                                event.initEvent("abort", false, false);
                            }
                        } else // Fallback where document isn't available:
                        event = {
                            type: "abort",
                            bubbles: false,
                            cancelable: false
                        };
                    }
                    var signalReason = reason;
                    if (signalReason === undefined) {
                        if (typeof document === "undefined") {
                            signalReason = new Error("This operation was aborted");
                            signalReason.name = "AbortError";
                        } else try {
                            signalReason = new DOMException("signal is aborted without reason");
                        } catch (err) {
                            // IE 11 does not support calling the DOMException constructor, use a
                            // regular error object on it instead.
                            signalReason = new Error("This operation was aborted");
                            signalReason.name = "AbortError";
                        }
                    }
                    this.signal.reason = signalReason;
                    this.signal.dispatchEvent(event);
                }
            },
            {
                key: "toString",
                value: function toString() {
                    return "[object AbortController]";
                }
            }
        ]);
        return AbortController;
    }();
    if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
        // These are necessary to make sure that we get correct output for:
        // Object.prototype.toString.call(new AbortController())
        AbortController.prototype[Symbol.toStringTag] = "AbortController";
        AbortSignal.prototype[Symbol.toStringTag] = "AbortSignal";
    }
    function polyfillNeeded(self1) {
        if (self1.__FORCE_INSTALL_ABORTCONTROLLER_POLYFILL) {
            console.log("__FORCE_INSTALL_ABORTCONTROLLER_POLYFILL=true is set, will force install polyfill");
            return true;
        } // Note that the "unfetch" minimal fetch polyfill defines fetch() without
        // defining window.Request, and this polyfill need to work on top of unfetch
        // so the below feature detection needs the !self.AbortController part.
        // The Request.prototype check is also needed because Safari versions 11.1.2
        // up to and including 12.1.x has a window.AbortController present but still
        // does NOT correctly implement abortable fetch:
        // https://bugs.webkit.org/show_bug.cgi?id=174980#c2
        return typeof self1.Request === "function" && !self1.Request.prototype.hasOwnProperty("signal") || !self1.AbortController;
    }
    (function(self1) {
        if (!polyfillNeeded(self1)) return;
        self1.AbortController = AbortController;
        self1.AbortSignal = AbortSignal;
    })(typeof self !== "undefined" ? self : global);
});

},{}]},["g8F36","l6Vub"], "l6Vub", "parcelRequire17b7")

//# sourceMappingURL=index.cdd48a52.js.map
