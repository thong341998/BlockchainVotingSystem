var express = require('express');
require('express-async-errors');
var mongoose = require('mongoose')
var app = express();


app.use(express.json());

require('./middlewares/blockchain');

const uri ='mongodb://localhost/blockchain' // có thể link mongo onl cũng đc
mongoose.connect(
  uri,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("Database connected!")
);


app.use('/', require('./routes/blockchain.route'))
app.use('/', require('./routes/user.route'))

app.use((req, res, next) => {
    res.status(404).json({err:false});
  })
  app.use(function (err, req, res, next) {
    console.log(err.stack);
    // console.log(err.status);
    const statusCode = err.status || 500;
    res.status(statusCode).json({err:err.stack});
  })

app.listen(3000, () => {
    console.log('server is running at http://localhost:3000');
})