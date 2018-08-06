'use strict';

require('dotenv').config();

const port = process.env.PORT || 4000;
require('./src/app').listen(port);
