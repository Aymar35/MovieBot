'use strict';

const express = require('express') ;
const config = require('./config');
const fbeamer = require('./fbeamer');

const server = express() ;
const PORT = process.env.PORT || 3000;

const f = new fbeamer(config.FB);

server.get('/', (req,res) => f.registerHook(req, res));
server.listen(PORT , () => console.log (`The bot server is running on port ${PORT}`)) ;

//