"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Application = /** @class */ (function () {
    function Application(info, bird) {
        this.gravity = 1.5;
        this.gravitySpeed = 0;
        this.canApplyGravity = true;
        this.y = 10;
        this.win = info;
        this.bird = bird;
    }
    Application.prototype.initialise = function (canvas) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');
    };
    Application.prototype.setWindowInfo = function (info) {
        this.win = info;
        if (this.canvas === undefined)
            throw new Error('Canvas cannot be undefined');
        this.canvas.width = info.w;
        this.canvas.height = info.h;
    };
    Application.prototype.draw = function () {
        if (this.ctx === undefined)
            throw new Error('Canvas cannot be undefined');
        this.ctx.fillStyle = 'black';
        //this.ctx.clearRect(0,0,  this.win.w , this.win.h)
        this.ctx.fillRect(0, 0, this.win.w, this.win.h);
        console.log('drawing');
        var birdsAlt = this.win.h - (this.bird.y);
        //this.ctx.fillStyle = 'blue'
        //this.ctx.fillRect(10, this.y, 20, 20)
        //this.y += 15        
        this.bird.draw(this.ctx);
    };
    return Application;
}());
exports.Application = Application;
