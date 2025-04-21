const express = require('express');
const bodyParser =require('body-parser');

const { PORT } = require('./config/serverConfig');
const apiRoutes = require('./routes/index');

//   const UserService = require('./services/user-service');

//const UserRepository = require('./repository/user-repository');

const app = express();

const prepareAndStartService =() => {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    
    app.use('/api',apiRoutes);

    app.listen(PORT, async() => {
        console.log(`Server started on Port: ${PORT}`);

        //const service = new UserService();
        // const newToken = service.createToken({email: 'sanket@admin.com', id: 1});
        // console.log("new token is ", newToken);
        // const token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNhbmtldEBhZG1pbi5jb20iLCJpZCI6MSwiaWF0IjoxNzQ1MDY1NTkyLCJleHAiOjE3NDUwNjU2MjJ9.gAEWUjjOWUGZHG66-s_MOQY6jjBy_YdGibjNDfQ6ttQ'
        // const response =service.verifyToken(token);
        // console.log(response);
    });
}
prepareAndStartService();