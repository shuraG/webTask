const express = require('express');
const app = express();
const cors = require('cors');

app.set('port','8081');
app.use(express.json());
app.use(cors());
app.use(require('./routes/carRoute'));
app.use(require('./routes/imageRoute'));

app.listen(app.get('port'), () => {console.log('Server on port', app.get('port'))});
