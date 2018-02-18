const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const {findUser, showUser} = require('middleWare');

server.use(bodyParser.json());
server.use(cors());




const server = express();

server.get('/', findUser, showUser);

server.listen(8000);