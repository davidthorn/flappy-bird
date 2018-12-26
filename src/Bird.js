"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Bird = /** @class */ (function () {
    function Bird(currentAltitude) {
        var _this = this;
        this.x = 100;
        this.y = 0;
        this.width = 50;
        this.height = 50;
        this.velocity = 0;
        this.gravity = 1;
        this.lift = -15;
        this.altitude = currentAltitude;
        this.y = this.altitude / 2;
        document.addEventListener('keydown', function () {
            _this.up();
        });
    }
    Bird.prototype.up = function () {
        this.velocity += this.lift;
    };
    Bird.prototype.draw = function (context) {
        this.velocity += this.gravity;
        this.velocity *= 0.99;
        this.y += this.velocity;
        if (this.y > this.altitude - this.width / 2) {
            this.y = this.altitude - this.width / 2;
            this.velocity = 0;
        }
        context.beginPath();
        context.fillStyle = 'red';
        context.arc(this.x, this.y, this.width / 2, 0, 2 * Math.PI);
        context.fill();
        context.closePath();
    };
    return Bird;
}());
exports.Bird = Bird;
