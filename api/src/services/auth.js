import db from '../models'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { v4 } from 'uuid';
require('dotenv').config()



export const registerService = ({name, phone, gmail, passWord}) => new Promise(async(resolve, reject) => {
    try {
       
        const response= await db.Account.findOrCreate({
            where: {gmail:gmail},
            defaults :{
                gmail:gmail,
                passWord: bcrypt.hashSync(passWord, 10),
                typeUser:1
            }
            });

        if (response[1]==true){
            await db.Customer.create({
                accountID:response[0].id,
                name:name,
                numberPhone:phone
            });
        }
        
        const token = response[1]&& jwt.sign({id: response[0].id,gmail: response[0].gmail}, process.env.SECRET_KEY, { expiresIn: '2d' })
       
        resolve({
            err: token ? 0 : 2,
            msg: token ? 'Register is successfully !' : 'gmail has been aldready used !',
            token: token || null
        })

    } catch (error) {
        reject(error)
        
    }
})


export const loginService = ({gmail, passWord}) => new Promise(async(resolve, reject) => {
    try {
      
        const response= await db.Account.findOne({
            where: {gmail:gmail},
            raw: true,
               
        });

        console.log(response)
        const isCorrectPassword = response&& bcrypt.compareSync(passWord, response.passWord)
        const token = isCorrectPassword&& jwt.sign({id: response.id,gmail: response.gmail}, process.env.SECRET_KEY, { expiresIn: '2d' })
       
        resolve({
            err: token ? 0 : 2,
            msg: token ? 'Login is successfully !' : response?'Password is wrong' :'Phone number has been aldready used !',
            token: token || null
        })

    } catch (error) {
        reject(error)
        
    }
})

// const hotel={
//     id:1,
//     name: 'Hotel',
//     revenua:300,
//     fee: 100,
//     images: ["src1", "src2", "src3"],
//     type:3,
//     description: 'Hotel Description',
//     address: 'Hotel Address',
//     mincost:200,
//     phone:113,
//     evalute:3.5,
//     numberreviews:222

// }