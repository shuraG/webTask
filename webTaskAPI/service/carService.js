const connection = require('../db');

class CarService {
    findAll(callback) {
        connection.query('SELECT * FROM car_for_sale', (err, rows) => {
            if (err) throw err;
            callback(null, rows);
        });
        // connection.end();
    }

    findById(id, callback) {
        connection.query('SELECT * FROM car_for_sale where item_number = ?', id, (err, rows) => {
            if (err) throw err;
            callback(null, rows);
        });
        // connection.end();
    }

}

module.exports = CarService;


