require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const express = require('express');
const app = express();

moongoose.Promise = global.Promise;

moongoose.connect(process.env.MONGODB_URI);
const connection = mongoose.connection;

connection.on('connected', () => {
  console.log('mongoose connected');
})

connection.on('error', (err) => {
  console.log('mongoose connection failed ' + err);
})


app.use(bodyParser.json());

app.get('/', (res, req)=>{
    res.send('Hello World');
});









const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('App listening on ' + PORT);
});
Add Comment Collapse
