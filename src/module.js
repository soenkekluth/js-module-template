/*
 * Module
 * https://github.com/soenkekluth/js-module-template
 *
 * Copyright (c) 2014 Soenke Kluth
 * Licensed under the MIT license.
 */

(function(root, factory) {
    if (typeof exports === 'object') {
        // CommonJS, Node, Global
        module.exports = root.document ? factory(root) : factory();
    } else if (typeof define === 'function' && define.amd) {
        // AMD
        define(['Module'], function() {
            return factory();
        });
    } else {
        // Global Variables
        root.Module = factory();
    }
}(typeof window !== "undefined" ? window : this, function(b) {

    'use strict';

    /**
     * The actual Module
     */
    var Module = function() {

        this.version = "0.0.1";

        this.initialize();
    };


    Module.prototype = {

        initialize: function() {
            console.log('initialize');
        }

    };

    if (b) {
        b.Module = Module;
    }
    return Module;
}));
