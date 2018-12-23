import  { Application } from './Application'
import { Bird } from './Bird'

const animate = (application: Application)  => {
    
    application.draw()
    requestAnimationFrame(() => {
        animate(application)
    })
}

const runApp = () => {

    const bird = new Bird()

    const application = new Application({
        w: window.innerWidth,
        h: window.innerHeight
    } , bird)

    window.addEventListener('load' , () => {
        application.initialise(document.createElement('canvas') as HTMLCanvasElement)
        requestAnimationFrame(() => {
            animate(application)
        })
    })

    document.addEventListener('keydown' , (e) => {
        if(application.bird.isFlapping()) return
        application.bird.flap()
        
    })

    document.addEventListener('keyup' , (e) => {
        application.bird.flapStrength = 0
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
            w: 800,
            h: 800
        })
        document.body.appendChild(canvas)
    }
}

const app = runApp()
window.addEventListener('load' , app)
window.addEventListener('resize' , app)


