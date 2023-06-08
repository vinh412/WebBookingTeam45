import db from '../models'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { v4 } from 'uuid';
require('dotenv').config()



export const registerService = ({gmail, passWord, typeUser}) => new Promise(async(resolve, reject) => {
    try {
       
        const response= await db.Account.findOrCreate({
            where: {gmail:gmail},
            defaults :{
                gmail:gmail,
                passWord: bcrypt.hashSync(passWord, 10),
                typeUser:typeUser
            },
               
              
            
        });
        const token = response[1]&& jwt.sign({id: response[0].id,gmail: response[0].gmail}, process.env.SECRET_KEY, { expiresIn: '2d' })
       
        resolve({
            err: token ? 0 : 2,
            msg: token ? 'Register is successfully !' : 'Phone number has been aldready used !',
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