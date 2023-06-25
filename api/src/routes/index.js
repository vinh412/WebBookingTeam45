import authRouter from './auth'
import hotelRouter from './hotels'

const initRouters = (app) =>{
    app.use('/api/v1/auth',authRouter)
    app.use('/api/v1/hotel', hotelRouter)
    return app.use('/', (req,res) =>{
        res.send('server on')
    })
}
export default initRouters