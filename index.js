const express = require('express')
const path = require('path')
const app = express()
const port = 3000

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
	let respath = __dirname + '/public/index.html';
	res.sendFile(respath);
})

app.get('/simplecvc', (req, res) => {
	let respath = __dirname + '/public/basiccvc.html';
	res.sendFile(respath);
})

app.get('/customizedlist', (req, res) => {
	let respath = __dirname + '/public/customizedlist.html';
	res.sendFile(respath);
})

app.get('/lifecycles', (req, res) => {
	let respath = __dirname + '/public/lifecycles.html';
	res.sendFile(respath);
})

app.get('/cardcomponent', (req, res) => {
	let respath = __dirname + '/public/cardcomponent.html';
	res.sendFile(respath);
})

app.listen(port, () => console.log(`Custom element app listening on port ${port}!`))
