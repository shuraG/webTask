const connection = require('../db');

class ImageService {
    findIdByCar(id, callback) {
        connection.query('SELECT idcar_pictures FROM car_pictures where item_number_car = ?', id, (err, rows) => {
            if (err) throw err;
            callback(null, rows);
        });
    }

    findPathById(id, callback) {
        connection.query('SELECT path FROM car_pictures where idcar_pictures = ?', id, (err, rows) => {
            if (err) throw err;
            if (rows.length == 0) {                
                callback("There is not a picure!", null);
            } else {
                let path = rows[0].path;
                callback(null, path);
            }

        });
    }

}

module.exports = ImageService;