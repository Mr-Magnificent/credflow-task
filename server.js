const express = require('express');
const app = express();
const compression = require('compression');
const morgan = require('morgan');
const path = require('path');
const debug = require('debug')('app:');
const cors = require('cors');
require('dotenv').config();
require('./app/models');

app.use(cors());
app.use(compression());
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'client/build')));

const PORT = process.env.PORT || 5000;


const apiRouter = require('./routes/routes');

app.use('/api', apiRouter);

app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

app.listen(PORT, () => {
    debug(`server listening on port: ${PORT}`);
});
