import { fileURLToPath } from "url";

export interface BirdType {
    isFlapping(): boolean
    flapStrength: number
    x: number
    y: number
    width: number
    height: number
    dx: number /// the accelaration x
    velocityY: number /// the accelaration y
    gravity: number
    fall(winHeight: number): void
    distanceCanFall(winHeight: number): number
    draw(context: CanvasRenderingContext2D): void
    flap(): void
}

export class Bird implements BirdType {

    flapStrength: number = 0
    x: number = 0
    y: number = 0
    width: number = 50
    height: number = 50
    rateOfAcceleration: number = 0.015
    velocityY: number = 0
    gravity: number = 0
    dx: number = 1

    constructor(){}

    fall(winHeight: number): void {
        let d = this.distanceCanFall(winHeight)
        let w = this.gravity + this.velocityY
        this.y += d >= w ? w : d
    }

    distanceCanFall(winHeight: number): number {
        const totalFallingDistance = winHeight - this.height
        const distance = totalFallingDistance - this.y
        return distance < 0 ? 0 : distance
    }

    draw(context: CanvasRenderingContext2D): void {
        if(this.isFlapping()) {
            this.flapStrength = this.flapStrength * 0.9
        }
        
        context.fillStyle = 'red'
        context.fillRect(this.x,this.y, this.width , this.height)

        this.velocityY += this.gravity
        this.gravity += this.rateOfAcceleration
    }

    flap() {
        if(this.isFlapping()) throw new Error('the bird is already flapping')
        this.flapStrength = 1
    }

    isFlapping(): boolean {
        return this.flapStrength > 0
    }

}