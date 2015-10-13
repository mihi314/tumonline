// ==UserScript==
// @name         TUMonline
// @namespace    mihi314
// @version      1.2
// @updateURL    https://github.com/mihi314/tumonline/raw/master/TUMonline.user.js
// @description  don't open every goddamned link in a new window
// @match        https://campus.tum.de/tumonline/*
// @grant        none
// ==/UserScript==

if (window.CO) {
    WIN_ORIG = window.CO.WIN
    window.CO.WIN = function(pAnchor, pType, pCustom) {
        // don't do anything when called with more than one argument
        if (pType === undefined)
            return true
        return WIN_ORIG(pAnchor, pType, pCustom)
    }
}

if (window.GLOBALnarrowWindow) {
    window.GLOBALnarrowWindow = function(href) {window.location.href = href}
}
