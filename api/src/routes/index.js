import authRouter from './auth'
import hotelsRouter from './hotels'
import roomsRouter from './rooms'



const initRouters = (app) =>{
    app.use('/api/v1/auth',authRouter)
    app.use('/api/v1/hotels',hotelsRouter)
    app.use('/api/v1/rooms',roomsRouter)


    return app.use('/', (req,res) =>{
        res.send('server on')
    })
}
export default initRouters