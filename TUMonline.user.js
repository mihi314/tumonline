﻿// ==UserScript==
// @name         TUMonline
// @namespace    mihi314
// @version      1.0
// @description  don't open every goddamned link in a new window
// @match        https://campus.tum.de/tumonline/*
// @grant        none
// ==/UserScript==

if (window.CO) {
    window.CO.WIN = function() {return true;}
}