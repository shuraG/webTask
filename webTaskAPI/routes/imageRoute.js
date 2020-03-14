const express = require('express');
const router = express.Router();
const ImageService = require('../service/imageService.js');
var imageService = new ImageService();


router.get('/image/:id', (req, res) => {
    let id = req.params.id;
    imageService.findPathById(id, (err, data) => {
        if (err) { res.status(404).send(err) } else res.sendFile(data);
    });
});

module.exports = router;