#!/usr/bin/env node

const
express = require('express'),

addr = process.env.ADDR || '127.0.0.1',
port = process.env.PORT || 3000,

app = express();

app.get('/', function(req, res, next) {
	res.send('Hello, World!');
});

app.listen(port, addr, function() {
	console.log(`Listening on ${addr}:${port}...`);
});
