import { BirdType } from './Bird'
import { deflateRaw } from 'zlib';

export type WinInfo = {
    h: number
    w: number
}



export interface ApplicationType {
    gravity: number
    gravitySpeed: number
    win: WinInfo
    ctx: CanvasRenderingContext2D | undefined
    canvas: HTMLCanvasElement | undefined
    bird: BirdType
    hasBirdLanded(): boolean
    setWindowInfo(info: WinInfo): void
    draw(): void
}

export class Application implements ApplicationType {
    
    gravity: number =  1.5
    gravitySpeed: number =   0
    win: WinInfo
    ctx: CanvasRenderingContext2D | undefined
    canvas: HTMLCanvasElement | undefined
    bird: BirdType 

    constructor(info: WinInfo, bird: BirdType) {
        this.win = info
        
        this.bird = bird
    }

    initialise(canvas: HTMLCanvasElement) {
        this.canvas = canvas
        this.ctx = this.canvas.getContext('2d') as CanvasRenderingContext2D
    }

    hasBirdLanded(): boolean {
        const { h } = this.win
        const { y, height } = this.bird
        return this.bird.distanceCanFall(h) === 0
    }

    setWindowInfo(info: WinInfo): void {
        this.win = info
        if(this.canvas === undefined) throw new Error('Canvas cannot be undefined')
        this.canvas.width = info.w
        this.canvas.height = info.h
        
    }

    draw(): void {
        if(this.ctx === undefined) throw new Error('Canvas cannot be undefined')
        this.ctx.clearRect(0,0,this.win.w, this.win.h)
        this.ctx.fillStyle = 'black'
        this.ctx.fillRect(0,0, this.win.w , this.win.h)
    
        if(!this.hasBirdLanded()) {
            this.gravitySpeed += this.gravity
            this.bird.fall(this.gravitySpeed, this.win.h)
        }

        this.bird.draw(this.ctx)
    }
}