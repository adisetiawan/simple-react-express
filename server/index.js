const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;
const public = path.join(__dirname, '../dist');

const homepage = path.join(public, 'index.html');

app.use(express.static(public));

app.get('/', (req, res) => {
 res.sendFile(homepage);
});

app.listen(port, function () {
 console.log('App listening on port: ' + port);
});