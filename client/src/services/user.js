import axios from '../axiosConfig'

export const apiGetCurrent = () => new Promise(async (resolve, reject) => {
    try {
        const response = await axios({
            method: 'post',
            url: '/api/v1/user/get-current',
            data:''
        })
        resolve(response)

    } catch (error) {
        reject(error)
    }
})