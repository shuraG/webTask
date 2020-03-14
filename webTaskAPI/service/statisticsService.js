const connection = require('../db');

class StatisticsService {

    findByCar(id, callback) {
        connection.query('SELECT views,saves,shares FROM car_statistics where item_number_car = ?', id, (err, rows) => {
            if (err) throw err;
            callback(null, rows);
        });
        // connection.end();
    }

}

module.exports = StatisticsService;