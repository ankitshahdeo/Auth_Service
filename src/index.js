const express = require('express');

const { PORT } = require('./config/serverConfig');
const app = express();

const prepareAndStartService =() => {
    app.listen(3001,() => {
        console.log(`Server started on Port: ${PORT}`);
    })
}
prepareAndStartService();