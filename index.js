const app = require('./server/app');

const port = process.env.PORT || 3000;


app.listen(3000, (err, ...arg) =>{
    if(err){
        console.log('Failed to start server! \n', err);
        return process.exit(1);
    }

    console.log(`Server listening on Port: ${port}`);
});