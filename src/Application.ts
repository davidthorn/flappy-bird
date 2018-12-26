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
    canApplyGravity: boolean = true

    constructor(info: WinInfo, bird: BirdType) {
        this.win = info
        
        this.bird = bird
    }

    initialise(canvas: HTMLCanvasElement) {
        this.canvas = canvas
        this.ctx = this.canvas.getContext('2d') as CanvasRenderingContext2D
    }

    setWindowInfo(info: WinInfo): void {
        this.win = info
        if(this.canvas === undefined) throw new Error('Canvas cannot be undefined')
        this.canvas.width = info.w
        this.canvas.height = info.h
        
    }

    y: number = 10
    draw(): void {
        if(this.ctx === undefined) throw new Error('Canvas cannot be undefined')
        this.ctx.fillStyle = 'black'
        //this.ctx.clearRect(0,0,  this.win.w , this.win.h)
        this.ctx.fillRect(0,0, this.win.w , this.win.h)
        console.log('drawing')
        let birdsAlt = this.win.h - (this.bird.y)

        //this.ctx.fillStyle = 'blue'
        //this.ctx.fillRect(10, this.y, 20, 20)
        //this.y += 15        
        this.bird.draw(this.ctx)
    }
}