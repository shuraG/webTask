const express = require('express');
const router = express.Router();
const CarService = require('../service/carService');
var carService = new CarService();
const ModelCarService = require('../service/modelCarService');
var modelCarService = new ModelCarService();
const StatisticsService = require('../service/statisticsService');
var statisticsService = new StatisticsService();
const ImageService = require('../service/imageService.js');
var imageService = new ImageService();

router.get('/cars', (req, res) => {
    carService.findAll((err, data) => {
        res.json(data);
    });
});

router.get('/cars/:id', (req, res) => {
    let id = req.params.id;

    carService.findById(id, (err, data) => {
        res.json(data);
    });
});

router.get('/cars/:id/model', (req, res) => {
    let id = req.params.id;

    modelCarService.findByCar(id, (err, data) => {
        res.json(data);
    });
});

router.get('/cars/:id/statistics', (req, res) => {
    let id = req.params.id;
    statisticsService.findByCar(id, (err, data) => {
        res.status(200).json(data);
    });
});

router.get('/cars/:id/images', (req, res) => {
    let id = req.params.id;
    imageService.findIdByCar(id, (err, data) => {
        res.status(200).json(data);
    });
});

module.exports = router;