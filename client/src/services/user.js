import axiosConfig from '../axiosConfig'

export const apiGetCurrent = (payload) => new Promise(async (resolve, reject) => {
    try {
        const response = await axiosConfig({
            method: 'post',
            url: '/api/v1/user/get-current',
            data: payload
        })
        resolve(response)
       // console.log(response)

    } catch (error) {
        reject(error)
    }
})