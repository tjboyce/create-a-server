let express = require('express');

let app = express();

app.use(express.static('server/public'));
app.get('/welcome', function (req, res) {
    res.send('welcome');
})
app.get('/green', function (req, res) {
    res.send('turtle');
})



app.listen(5000, function () {
    console.log('Running on port 5000');
});