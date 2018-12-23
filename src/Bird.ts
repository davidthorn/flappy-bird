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
    altitude: number
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
    rateOfAcceleration: number = 0.025
    velocityY: number = 0
    gravity: number = 0
    dx: number = 1
    altitude: number = 0

    constructor(currentAltitude: number){
        this.altitude = currentAltitude
        console.log('Starting altitude is:' , this.altitude)
        document.addEventListener('keydown' , (e) => {
            if(this.isFlapping()) return
            this.flap()
            
            
        })
    
        document.addEventListener('keyup' , (e) => {
            this.flapStrength = 0
        })
        

    }

    fall(): void {
        if(this.hasLanded()) return
        let d = this.distanceCanFall(this.altitude)
        let fallAmount = d >= this.velocityY ? this.velocityY : d
        this.y += fallAmount
        this.altitude -= fallAmount
    }

    distanceCanFall(currentAltitude: number): number {
        return currentAltitude >= this.height ? currentAltitude - this.height : currentAltitude
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
        this.velocityY = -this.velocityY                                              
    }

    isFlapping(): boolean {
        return this.flapStrength > 0
    }

    hasLanded(): boolean {
        return (this.altitude - this.height) === 0
    }


}