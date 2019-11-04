const express = require('express');
const app = express();
const compression = require('compression');
const morgan = require('morgan');
const debug = require('debug')('app:');

app.use(compression());
app.use(morgan('dev'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    debug(`server listening on port: ${PORT}`);
});