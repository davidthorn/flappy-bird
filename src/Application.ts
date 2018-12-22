export type Application = {
    win: { 
        w: number , 
        h : number 
    }
    ctx: CanvasRenderingContext2D | undefined
    canvas: HTMLCanvasElement | undefined
    bird: {
        x: number,
        y: number,
        width: number,
        height: number,
        dx: number, /// the accelaration x
        dy: number /// the accelaration y
    }
}


export const application: Application = {
    win: {
        w: window.innerWidth,
        h: window.innerHeight
    },
    ctx: undefined,
    canvas: undefined,
    bird: {
        x: 0,
        y: 0,
        width: 50,
        height: 50,
        dx: 1,
        dy: 0.1

    }
}