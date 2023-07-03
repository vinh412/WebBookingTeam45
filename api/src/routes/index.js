import authRouter from './auth'
import hotelsRouter from './hotels'
import roomsRouter from './rooms'
import userRouter from './user'
import bookingRouter from './bookings'
import paymentRouter from './payment'




const initRouters = (app) =>{
    app.use('/api/v1/auth',authRouter)
    app.use('/api/v1/hotel',hotelsRouter)
    app.use('/api/v1/rooms',roomsRouter)
    app.use('/api/v1/user',userRouter)
    app.use('/api/v1/booking',bookingRouter)
    app.use('/api/v1/payment',paymentRouter)


    return app.use('/', (req,res) =>{
        res.send('server on')
    })
}
export default initRouters