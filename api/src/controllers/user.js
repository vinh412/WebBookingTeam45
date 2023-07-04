import * as services from '../services/user'

export const getCurrent = async (req, res) => {
    console.log(req.body)
    
    try {
        const response = await services.getOne(req.body.gmail)
        return res.status(200).json(response)

    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: 'Failed at category controller: ' + error
        })
    }
}