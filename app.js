const http = require('http'); // Node specific module

const express = require('express'); // third party package;


const app = express();

const server = http.createServer(app);

server.listen(3000);