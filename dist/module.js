!function(e){if("object"==typeof exports)module.exports=e();else if("function"==typeof define&&define.amd)define(e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.out=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
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

},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlcyI6WyIvVXNlcnMvc29lbmtlL0RldmVsb3Blci9Xb3Jrc3BhY2VzL0dpdGh1Yi9qcy1tb2R1bGUtdGVtcGxhdGUvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsIi9Vc2Vycy9zb2Vua2UvRGV2ZWxvcGVyL1dvcmtzcGFjZXMvR2l0aHViL2pzLW1vZHVsZS10ZW1wbGF0ZS9zcmMvbW9kdWxlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKX12YXIgZj1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwoZi5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxmLGYuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLypcbiAqIE1vZHVsZVxuICogaHR0cHM6Ly9naXRodWIuY29tL3NvZW5rZWtsdXRoL2pzLW1vZHVsZS10ZW1wbGF0ZVxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxNCBTb2Vua2UgS2x1dGhcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cbiAqL1xuXG4oZnVuY3Rpb24ocm9vdCwgZmFjdG9yeSkge1xuICAgIGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgLy8gQ29tbW9uSlMsIE5vZGUsIEdsb2JhbFxuICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJvb3QuZG9jdW1lbnQgPyBmYWN0b3J5KHJvb3QpIDogZmFjdG9yeSgpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gICAgICAgIC8vIEFNRFxuICAgICAgICBkZWZpbmUoWydNb2R1bGUnXSwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFjdG9yeSgpO1xuICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyBHbG9iYWwgVmFyaWFibGVzXG4gICAgICAgIHJvb3QuTW9kdWxlID0gZmFjdG9yeSgpO1xuICAgIH1cbn0odHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHRoaXMsIGZ1bmN0aW9uKGIpIHtcblxuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIC8qKlxuICAgICAqIFRoZSBhY3R1YWwgTW9kdWxlXG4gICAgICovXG4gICAgdmFyIE1vZHVsZSA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHRoaXMudmVyc2lvbiA9IFwiMC4wLjFcIjtcblxuICAgICAgICB0aGlzLmluaXRpYWxpemUoKTtcbiAgICB9O1xuXG5cbiAgICBNb2R1bGUucHJvdG90eXBlID0ge1xuXG4gICAgICAgIGluaXRpYWxpemU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2luaXRpYWxpemUnKTtcbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIGlmIChiKSB7XG4gICAgICAgIGIuTW9kdWxlID0gTW9kdWxlO1xuICAgIH1cbiAgICByZXR1cm4gTW9kdWxlO1xufSkpO1xuIl19
(1)
});
