import  { Application } from './Application'
import { Bird } from './Bird'

const animate = (application: Application)  => {
    
    requestAnimationFrame(() => {
         application.draw()
         animate(application)
    })

    
}

const runApp = () => {

    const winHeight = 800
    const winWidth = winHeight

    const bird = new Bird(winHeight)

    const application = new Application({
        w: winWidth,
        h: winHeight
    } , bird)

    window.addEventListener('load' , () => {
        application.initialise(document.createElement('canvas') as HTMLCanvasElement)
        
        animate(application)
        document.addEventListener('dblclick' , () => {
            
        })

        
    })

    return () => {
        if(application.canvas === undefined) return
        if(application.ctx === undefined) return
        const { canvas } = application

        // application.setWindowInfo({
        //     w: window.innerWidth,
        //     h: window.innerHeight
        // })
        application.setWindowInfo({
            w: winWidth,
            h: winHeight
        })
        document.body.appendChild(canvas)
        
    }
}

const app = runApp()
window.addEventListener('load' , app)
window.addEventListener('resize' , app)


