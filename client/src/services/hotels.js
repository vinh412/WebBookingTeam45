import axiosConfig from '../axiosConfig'

export const apiGetHotels = (payload) => new Promise(async(resolve, reject) => {
    try {
        console.log(payload)
        
        const response = await axiosConfig({
           
            method: 'post',
            url: '/api/v1/hotels/all',
            data: payload
        })
        
       
        resolve(response)
    } catch (error) {
        
        reject(error)
       
    }
})