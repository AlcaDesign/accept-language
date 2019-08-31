const { PORT } = require('dotenv').config().parsed;
const server = require('http').createServer((req, res) => {
	try {
		res.write(req.headers['accept-language'] || '');
		res.end();
	} catch {}
}).listen(PORT, () => console.log('Listening :' + server.address().port));