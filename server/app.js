const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/', express.static(path.join(__dirname, '../client')));


app.listen(port, (err) =>{
    if(err){
        console.log('Failed to start server! \n', err);
        return process.exit(1);
    }

    console.log(`Server  listening on Port: ${port}`)
});



