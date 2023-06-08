import *as authService from '../services/auth'

export const register = async(req,res)=>{

  const {gmail, passWord,typeUser} = req.body
   
    try {
        
        if( !typeUser|| !gmail || !passWord){ 
          return res.status(400).json({
          err:1,
          msg:'missing inputs!'
        
        })}
      
        const response = await authService.registerService(req.body)
         return res.status(200).json(response)
       
    } catch (error) {
        return res.status(500).json({
            err:-1,
            msg: 'Fail at auth controller: ' + error  
        })
    }
}

export const login = async(req,res)=>{

  const {gmail, passWord} = req.body
   
    try {
        
        if( !gmail || !passWord){ 
          return res.status(400).json({
          err:1,
          msg:'missing inputs!'
        
        })}
      
        const response = await authService.loginService(req.body)
         return res.status(200).json(response)
       
    } catch (error) {
        return res.status(500).json({
            err:-1,
            msg: 'Fail at auth controller: ' + error  
        })
    }
}