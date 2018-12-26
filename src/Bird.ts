import { timingSafeEqual } from "crypto";

export interface BirdType {
    x: number
    y: number
    width: number
    height: number
    draw(context: CanvasRenderingContext2D): void
}

export class Bird implements BirdType {
    x: number = 100
    y: number = 0
    width: number = 50
    height: number = 50
    altitude: number
    velocity: number = 0
    gravity: number = 1
    lift: number = -15

    constructor(currentAltitude: number) {
        this.altitude = currentAltitude
        this.y = this.altitude / 2

        document.addEventListener('keydown' , () => {
            this.up()
        })

    }

    up() {
        this.velocity += this.lift   
        
    }

    draw(context: CanvasRenderingContext2D): void {

        this.velocity += this.gravity
        this.velocity *= 0.99
        this.y += this.velocity

        if(this.y > this.altitude - this.width / 2) {
            this.y = this.altitude - this.width / 2
            this.velocity = 0
        }

        context.beginPath()
        context.fillStyle = 'red'
        context.arc(this.x, this.y, this.width / 2, 0, 2 * Math.PI)
        context.fill()
        context.closePath()


    }

}