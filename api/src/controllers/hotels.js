import * as hotelService from '../services/hotels'
const fs = require('fs');

const db = require('../models');

export const addHotel = async (req, res) => {
    let newHotel = {
        accountID: req.body.accountID,
        name: req.body.name,
        revenua: req.body.revenua,
        fee: req.body.fee,
        phoneNumber: req.body.phoneNumber,
        type: req.body.type,
        address: req.body.address,
        longitude: req.body.longitude,
        latitude: req.body.latitude,
        evaluate: req.body.evaluate,
        numberReview: req.body.numberReview,
        description: req.body.description,
        minCost: req.body.minCost
    };

    try {
        const savedHotel = await db.Hotel.create(newHotel);
        res.status(200).json(savedHotel);
    } catch (err) {
        res.status(500).json(err);
    }
};

export const getSumRooms = async (req, res) => {
    try {
        const response = await db.Room.sum('quantity',{
            where: {
                hotelID: 7431632
            }
        });
        return res.status(200).json(response)
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: 'Failed at hotel controller' + error,
        })
    }
}

export const getHotelById = async (req, res) => {
    try {
        const hotel = await hotelService.getHotelById(req);
        res.status(200).json(hotel);
    } catch (err) {
        res.status(500).json(err);
    }
}

export const addImage = async (req, res) => {
    let newImage = {
        hotelID: 1,
        src: req.body.src
    };
    try {
        const savedImage = await db.Photo.create(newImage);
        res.status(200).json(savedImage);
    } catch (err) {
        res.status(500).json(err);
    }
}

export const getoneHotel = async (req, res) =>{
   console.log(req.body)
    try {
        
        const response = await hotelService.getOneHotel(req.body)
        return res.status(200).json(response)
    } catch (error) {
        return res.status(500).json({
            err:-1,
            msg:'Failed at hotel controller'
        })

    }
}

export const addRoom = async (req, res) => {
    let newRoom = {
        hotelID: 1,
        name: req.body.name,
        image: req.body.image,
        cost: req.body.cost,
        quantity: req.body.quantity,
        emptyRoom: req.body.emptyRoom,
        salePrice: req.body.salePrice,
        area: req.body.area,
        singleBed: req.body.singleBed,
        doubleBed: req.body.doubleBed
    };
    try {
        const savedRoom = await db.Room.create(newRoom);
        res.status(200).json(savedRoom);
    } catch (err) {
        res.status(500).json(err);
    }
}

export const getHotels = async (req, res) => {
    const { searchterm, daystart, dayend } = req.body;
    try {

        if (!searchterm) {
            const response = await hotelService.getAllHotels();
            return res.status(200).json(response)
        } else {
            const response = await hotelService.getHotelsService(req.body);
            return res.status(200).json(response)
        }
    } catch (error) {
        return res.status(500).json({
            err: error,
            msg: 'Failed at hotel controller'
        })

    }
}
export const createHotel = async (req, res) => {

    try {

        const response = await hotelService.createHotelsService(req.body)
        return res.status(200).json(response)
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: 'Failed at hotel controller'
        })

    }
}

export const deleteHotel = async (req, res) => {

    try {

        const response = await hotelService.deleteHotelsService(req.body)
        return res.status(200).json(response)
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: 'Failed at hotel controller'
        })

    }
}

export const updateHotel = async (req, res) => {

    try {

        const response = await hotelService.updateHotelsService(req.body)
        return res.status(200).json(response)
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: 'Failed at hotel controller'
        })

    }
}