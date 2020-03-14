const connection = require('../db');

class ModelCarService {

    findByCar(id, callback) {
        connection.query('SELECT * FROM car_model where item_number_car = ?', id, (err, rows) => {
            if (err) throw err;
            callback(null, rows);
        });     
        // connection.end();
    }

}

module.exports = ModelCarService;


