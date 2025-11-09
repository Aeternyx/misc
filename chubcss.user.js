// ==UserScript==
// @name         chub css import workaround
// @namespace    https://chub.ai/
// @version      2025-11-09
// @description  add css imports to chub chats
// @author       You
// @match        https://chub.ai/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=chub.ai
// @grant        none
// ==/UserScript==

(function() {
    "use strict";

    const observer = new MutationObserver(() => {
        for (const element of document.querySelectorAll("[data-css-import]")) {
            const url = element.dataset.cssImport;
            const styleElement = document.createElement("style");
            styleElement.innerHTML = `@import "${url}";`;
            element.replaceWith(styleElement);
        }
    });

    observer.observe(document.body, { childList: true, subtree: true });
})();
