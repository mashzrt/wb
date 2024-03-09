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
})({"ha8hf":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "0a8ecb283d214d75";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
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
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
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
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        if (e.message) console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
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
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
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
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
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
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
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
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
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
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
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
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
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
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"bB7Pu":[function(require,module,exports) {
document.addEventListener("DOMContentLoaded", function createHeader() {
    const root1 = document.getElementById("root");
    const header = document.createElement("header");
    header.classList.add("header");
    root1.append(header);
    const headerContainer = document.createElement("div");
    headerContainer.classList.add("header-container");
    header.append(headerContainer);
    const headerIcon = document.getElementById("header-icon");
    headerContainer.append(headerIcon);
    const searchInp = document.createElement("input");
    searchInp.placeholder = "\u041D\u0430\u0439\u0442\u0438 \u043D\u0430 Wildberries";
    searchInp.classList.add("search-inp");
    headerContainer.append(searchInp);
    const basketBtn = document.createElement("button");
    basketBtn.classList.add("basket-btn");
    basketBtn.textContent = "\u041A\u043E\u0440\u0437\u0438\u043D\u0430";
    headerContainer.append(basketBtn);
    const basketImg = document.getElementById("basket-img");
    basketBtn.append(basketImg);
});
const basketBtn = document.createElement("button");
basketBtn.classList.add("basket-btn");
root.append(basketBtn);
const basketImg = document.createElement("img");
basketImg.src = "/styles/basket-img.png";
basketBtn.append(basketImg);
const modalWindow = document.createElement("div");
modalWindow.classList.add("modalWindow");
root.append(modalWindow);
const closeBtn = document.createElement("button");
closeBtn.classList.add("closeButton");
closeBtn.textContent = "x";
modalWindow.append(closeBtn);
//события
basketBtn.addEventListener("click", function() {
    modalWindow.style.display = "block";
});
closeBtn.addEventListener("click", function() {
    modalWindow.style.display = "none";
});
document.addEventListener("DOMContentLoaded", function() {
    const body = document.querySelector("body");
    const root1 = document.getElementById("root");
    let productsInTheCart = [];
    function addClass(element, elemClass) {
        element.classList.add(elemClass);
    }
    const section = document.createElement("section");
    addClass(section, "products");
    root1.appendChild(section);
    const container = document.createElement("div");
    addClass(container, "container");
    section.appendChild(container);
    const sectionTitle = document.createElement("h2");
    addClass(sectionTitle, "products__title");
    sectionTitle.textContent = "\u0425\u0438\u0442\u044B \u043F\u0440\u043E\u0434\u0430\u0436";
    container.appendChild(sectionTitle);
    const modalData = createModal();
    section.appendChild(modalData.modal);
    const cardsContainer = document.createElement("div");
    addClass(cardsContainer, "products__container");
    container.appendChild(cardsContainer);
    if (!localStorage.getItem("Products")) fetchDataAndRenderCards();
    else renderCardsFromLocalStorage();
    function fetchDataAndRenderCards() {
        Promise.all([
            fetch("https://65d7760427d9a3bc1d7b168a.mockapi.io/product").then((response)=>{
                console.log(response);
                return response.json();
            }),
            fetch("https://pixabay.com/api/?key=42728531-79aa93e813ebff2abafbfc81d&q=dress&image_type=photo&per_page=12").then((response)=>{
                console.log(response);
                return response.json();
            })
        ]).then(([mockResponse, pixabayResponse])=>{
            console.log(mockResponse);
            console.log(pixabayResponse);
            const products = mockResponse.map((product, index)=>{
                product.img = pixabayResponse.hits[index].webformatURL;
                let rating = parseFloat(product.rating / 10).toFixed(1);
                if (rating > 5.0 || rating < 3.8) rating = (Math.random() * (5.0 - 3.8) + 3.8).toFixed(1);
                product.rating = rating;
                product.discount_price = product.price - Math.ceil(product.price * product.discount / 100);
                return product;
            });
            localStorage.setItem("Products", JSON.stringify(products));
            renderCards(products);
        });
    }
    function renderCardsFromLocalStorage() {
        const products = JSON.parse(localStorage.getItem("Products"));
        renderCards(products);
    }
    function renderCards(products) {
        products.forEach((product)=>{
            const card = createCard(product);
            cardsContainer.appendChild(card);
        });
    }
    function createCard(product) {
        const card = document.createElement("div");
        addClass(card, "product__card");
        const imgWrapper = document.createElement("div");
        addClass(imgWrapper, "product__img-wrapper");
        const productImg = document.createElement("img");
        productImg.src = `${product.img}`;
        addClass(productImg, "product__img");
        const quickViewBtn = document.createElement("button");
        quickViewBtn.textContent = "\u0411\u044B\u0441\u0442\u0440\u044B\u0439 \u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440";
        addClass(quickViewBtn, "product__btn--quickview");
        const showQuickBtn = ()=>{
            quickViewBtn.classList.toggle("show");
        };
        productImg.addEventListener("mouseover", showQuickBtn);
        productImg.addEventListener("mouseleave", showQuickBtn);
        quickViewBtn.addEventListener("mouseenter", showQuickBtn);
        quickViewBtn.addEventListener("mouseleave", showQuickBtn);
        const productTitle = document.createElement("h2");
        addClass(productTitle, "product__title");
        const brand = document.createElement("span");
        addClass(brand, "product__brand");
        brand.textContent = product.brand;
        const name = document.createElement("span");
        name.textContent = ` / ${product.name}`;
        productImg.alt = product.name;
        addClass(name, "product__name");
        productTitle.append(brand, name);
        const rating = document.createElement("div");
        addClass(rating, "product__rating");
        rating.textContent = product.rating;
        let evaluationCase;
        let evaluationLastSymbol = product.evaluation % 10;
        let evaluationLastTwoSymbols = product.evaluation % 100;
        if (evaluationLastTwoSymbols >= 11 && evaluationLastTwoSymbols <= 14 || evaluationLastSymbol === 0 || evaluationLastSymbol >= 5 && evaluationLastSymbol <= 9) evaluationCase = "\u043E\u0446\u0435\u043D\u043E\u043A";
        else if (evaluationLastSymbol == 1) evaluationCase = "\u043E\u0446\u0435\u043D\u043A\u0430";
        else evaluationCase = "\u043E\u0446\u0435\u043D\u043A\u0438";
        const evaluation = document.createElement("div");
        addClass(evaluation, "product__evaluation");
        evaluation.textContent = `${product.evaluation.toLocaleString()} ${evaluationCase}`;
        const review = document.createElement("div");
        addClass(review, "product__review");
        review.append(rating, evaluation);
        const price = document.createElement("div");
        price.textContent = `${product.price} \u{440}`;
        addClass(price, "product__price");
        const discountPrice = document.createElement("div");
        discountPrice.textContent = `${product.discount_price} p`;
        addClass(discountPrice, "product__discount-price");
        const discountSignature = document.createElement("p");
        addClass(discountSignature, "product__discount-signature");
        discountSignature.textContent = "\u0441 WB \u043A\u043E\u0448\u0435\u043B\u044C\u043A\u043E\u043C";
        const discount = document.createElement("span");
        discount.textContent = `-${product.discount}%`;
        addClass(discount, "product__discount");
        const addBtn = document.createElement("button");
        addClass(addBtn, "icon-cart");
        imgWrapper.append(productImg, quickViewBtn, discount);
        card.append(imgWrapper, discountPrice, price, discountSignature, productTitle, review, addBtn);
        addBtn.addEventListener("click", function(e) {
            const productCopy = Object.assign({}, product);
            productsInTheCart.push(productCopy);
            console.log(productsInTheCart);
        });
        quickViewBtn.addEventListener("click", function(event) {
            event.stopPropagation();
            body.style.overflow = "hidden";
            modalData.modal.style.display = "block";
            modalData.modalImg.src = product.img;
            modalData.modalTitle.textContent = `${product.brand} / ${product.name}`;
            modalData.modalRating.textContent = product.rating;
            modalData.modalDiscountPrice.textContent = `${product.discount_price} p`;
            modalData.modalPrice.textContent = `${product.price} p`;
            modalData.modalArticle.textContent = `\u{410}\u{440}\u{442}: ${product.article}`;
            modalData.modalWbWallet.textContent = "\u0441 WB \u043A\u043E\u0448\u0435\u043B\u044C\u043A\u043E\u043C";
            modalData.modalEvaluation.textContent = `${product.evaluation.toLocaleString()} ${evaluationCase}`;
        });
        return card;
    }
    function createModal() {
        const modal = document.createElement("div");
        addClass(modal, "products__modal");
        const modalContent = document.createElement("div");
        addClass(modalContent, "products__modal-content");
        modal.appendChild(modalContent);
        const modalCloseBtn = document.createElement("button");
        addClass(modalCloseBtn, "products__btn--closemodal");
        modalContent.appendChild(modalCloseBtn);
        const modalImgWrapper = document.createElement("div");
        addClass(modalImgWrapper, "products__img-wrapper");
        const modalImg = document.createElement("img");
        addClass(modalImg, "products__modal-img");
        modalImgWrapper.appendChild(modalImg);
        modalContent.appendChild(modalImgWrapper);
        const modalDescrip = document.createElement("div");
        addClass(modalDescrip, "products__modal-description");
        modalContent.appendChild(modalDescrip);
        const modalTitle = document.createElement("p");
        addClass(modalTitle, "products__modal-title");
        const modalReview = document.createElement("div");
        addClass(modalReview, "products__modal-review");
        const modalRating = document.createElement("span");
        addClass(modalRating, "products__modal-rating");
        const modalEvaluation = document.createElement("span");
        addClass(modalEvaluation, "products__modal-evaluation");
        const modalArticle = document.createElement("span");
        addClass(modalArticle, "products__modal-article");
        modalReview.append(modalRating, modalEvaluation, modalArticle);
        const modalDiscountPrice = document.createElement("div");
        addClass(modalDiscountPrice, "products__modal-discountprice");
        const modalPrice = document.createElement("div");
        addClass(modalPrice, "products__modal-price");
        const modalWbWallet = document.createElement("p");
        addClass(modalWbWallet, "products__modal-wbwallet");
        modalDescrip.append(modalTitle, modalReview, modalDiscountPrice, modalPrice, modalWbWallet);
        modalImgWrapper.addEventListener("mousemove", (event)=>{
            const rect = modalImgWrapper.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;
            modalImg.style.transformOrigin = `${x}px ${y}px`;
            modalImg.style.transform = "scale(1.7)";
        });
        modalImgWrapper.addEventListener("mouseleave", ()=>{
            modalImg.style.transformOrigin = "center";
            modalImg.style.transform = "scale(1)";
        });
        modal.addEventListener("click", function(event) {
            if (event.target.classList.contains("products__btn--closemodal")) {
                modal.style.display = "none";
                body.style.overflow = "visible";
            }
        });
        window.addEventListener("click", function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
                body.style.overflow = "visible";
            }
        });
        return {
            modal,
            modalImg,
            modalTitle,
            modalRating,
            modalDiscountPrice,
            modalPrice,
            modalArticle,
            modalEvaluation,
            modalWbWallet
        };
    }
});

},{}]},["ha8hf","bB7Pu"], "bB7Pu", "parcelRequired6d9")

//# sourceMappingURL=index.3d214d75.js.map
