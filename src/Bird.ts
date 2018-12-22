import { fileURLToPath } from "url";

export interface BirdType {
    x: number
    y: number
    width: number
    height: number
    dx: number /// the accelaration x
    dy: number /// the accelaration y
    fall(gravitySpeed: number, winHeight: number): void
    distanceCanFall(winHeight: number): number
    draw(context: CanvasRenderingContext2D): void
    flap(): void
}

export class Bird implements BirdType {

    x: number = 0
    y: number = 0
    width: number = 50
    height: number = 50
    dy: number = 8
    dx: number = 1

    constructor(){}

    fall(gravitySpeed: number, winHeight: number): void {
        let d = this.distanceCanFall(winHeight)
        let w = gravitySpeed + this.dy
        this.y += d >= w ? w : d
    }

    distanceCanFall(winHeight: number): number {
        const totalFallingDistance = winHeight - this.height
        const distance = totalFallingDistance - this.y
        return distance < 0 ? 0 : distance
    }

    draw(context: CanvasRenderingContext2D): void {
        context.fillStyle = 'red'
        context.fillRect(this.x,this.y, this.width , this.height)
    }

    flap() {
        
    }

}