import express from 'express'
require('dotenv').config()
import cors from 'cors'
import initRoutes from './src/routes'
import connectDatabase from './src/config/connectDatabase'
const fs = require('fs');
const db = require('./src/models');


const app =  express()
app.use( cors({
    origin: process.env.CLIENT_URL,
    methods: ["POST", 'GET', 'PUT', "DELETE"]
}))

app.use(express.json())
app.use(express.urlencoded({extended: true}))

initRoutes(app)

connectDatabase()

// fs.readFile('./src/controllers/agoda-hcm-3.json', 'utf-8', function(err, data){
//     JSON.parse(data).map(async (item) => {
//         await db.Hotel.create(item)
//         await item.images.map(async (image) => {
//             image.hotelID = item.id
//             await db.Photo.create(image);
//         });

//         await item.rooms.map(async (room) => {
//             room.hotelID = item.id;
//             await db.Room.create(room);
//         });
//     })
//     console.log("add db thanh cong");
// });

const port = process.env.PORT ||8888
const listener =app.listen(port, () => {
    console.log(`server on port ${listener.address().port}`)
})

