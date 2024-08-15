const express = require('express');
const bodyParser = require('body-parser');
const path = require('path')


const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
const PORT = 3000;

// ejs config
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

// add website routes
app.use('/', require('./routes/website'))

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
});