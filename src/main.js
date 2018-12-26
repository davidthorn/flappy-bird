"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Application_1 = require("./Application");
var Bird_1 = require("./Bird");
var animate = function (application) {
    requestAnimationFrame(function () {
        application.draw();
        animate(application);
    });
};
var runApp = function () {
    var winHeight = 800;
    var winWidth = winHeight;
    var bird = new Bird_1.Bird(winHeight);
    var application = new Application_1.Application({
        w: winWidth,
        h: winHeight
    }, bird);
    window.addEventListener('load', function () {
        application.initialise(document.createElement('canvas'));
        animate(application);
        document.addEventListener('dblclick', function () {
        });
    });
    return function () {
        if (application.canvas === undefined)
            return;
        if (application.ctx === undefined)
            return;
        var canvas = application.canvas;
        // application.setWindowInfo({
        //     w: window.innerWidth,
        //     h: window.innerHeight
        // })
        application.setWindowInfo({
            w: winWidth,
            h: winHeight
        });
        document.body.appendChild(canvas);
    };
};
var app = runApp();
window.addEventListener('load', app);
window.addEventListener('resize', app);
