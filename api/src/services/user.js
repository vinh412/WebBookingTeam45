import db from '../models'

// GET CURRENT
export const getOne = (gmail) => new Promise(async (resolve, reject) => {
    try {
        const response = await db.User.findOne({
            where: { gmail:gmail },
            raw: true,
          
        })
        resolve({
            err: response ? 0 : 1,
            msg: response ? 'OK' : 'Failed to get provinces.',
            response
        })
    } catch (error) {
        reject(error)
    }
})