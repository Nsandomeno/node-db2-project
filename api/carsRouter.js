const express = require('express')
const db = require('../data/dbConfig.js')
const router = express.Router()

router.get('/', (req, res) => {
    db('cars').then((cars) => {
        res.status(200).json(cars)
    }).catch((error) => {
        res.status(500).json({message:"The request could not be processed."})
    })
})

router.post('/', (req, res) => {
    const car = req.body

    db('cars').insert(car).then((car) => {
        res.status(200).json(car)
    }).catch((error) => {
        res.status(500).json({message:"The car could not be added."})
    })
})

module.exports = router

// function validateCar(req, res, next) {
//     const car = req.body

//     if (!car.VinNumber || !car.Make || !car.Model || !car.Mileage) {
//         res.status(404).json({message:"Please provide inputs for all fields."})
//     } else {
//         next()
//     }
// }