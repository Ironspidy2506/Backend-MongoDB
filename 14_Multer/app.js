const express = require('express');
const app = express();
const path = require('path');
const upload = require('./config/multerconfig');

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('test.ejs');
});

app.post('/upload', upload.single('image'), (req, res) => {
    console.log(req.file);
});

app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});