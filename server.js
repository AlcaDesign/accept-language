const { PORT } = require('dotenv').config().parsed;
const server = require('http').createServer((req, res) => {
	res.setHeader('access-control-allow-origin', '*');
	res.setHeader('content-type', 'application/json; charset=utf-8');
	try {
		const data = {
			language: req.headers['accept-language'] || '',
			status: 200
		};
		const body = JSON.stringify(data);
		res.statusCode = 200;
		res.write(body);
	} catch {
		res.statusCode = 500;
		res.write('{"language":null,"status":500}');
	}
	res.end();
}).listen(PORT, () => console.log('Listening :' + server.address().port));