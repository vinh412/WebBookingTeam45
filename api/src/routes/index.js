import authRouter from './auth'
import hotelsRouter from './hotels'

const initRouters = (app) =>{
    app.use('/api/v1/auth',authRouter)
    app.use('/api/v1/hotels',hotelsRouter)

    return app.use('/', (req,res) =>{
        res.send('server on')
    })
}
export default initRouters