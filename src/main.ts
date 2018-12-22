type Application = {
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
        height: number
    }
}

const drawBird = (appContext: CanvasRenderingContext2D , application: Application) => {
    const { bird } = application
    const { x,y, width , height } = bird
    appContext.fillStyle = 'red'
    appContext.fillRect(x,y,width , height)
}

const animate = (application: Application)  => {
    const { ctx, bird } = application
    if(ctx === undefined)  return
    drawBird(ctx, application)
    
    
}


const runApp = () => {

    let _canvas: HTMLCanvasElement
    let _cxt: CanvasRenderingContext2D

    let application: Application = {
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
            height: 50
        }
    }

    window.addEventListener('load' , () => {
        console.log('app running')
        application.canvas = document.createElement('canvas') as HTMLCanvasElement
        application.ctx = application.canvas.getContext('2d') as CanvasRenderingContext2D
        setInterval(() => {
            animate(application)
        }, 1000 / 1)
        
    })
    
    return () => {
        if(application.canvas === undefined) return
        if(application.ctx === undefined) return
        const { ctx, canvas, win } = application

        application.canvas.width = window.innerWidth
        application.canvas.height = window.innerHeight
        
        application.win.h = window.innerWidth
        
        ctx.fillStyle = 'black'
        ctx.fillRect(0,0, win.w , win.h)
        
        document.body.appendChild(canvas)
    }
}

const app = runApp()
window.addEventListener('load' , app)
window.addEventListener('resize' , app)

