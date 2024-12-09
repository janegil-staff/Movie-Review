const mongoose = require('mongoose');

mongoose
    .connect(process.env.DATABASE_URL)
    .then(() => {
        console.log('db is connected!')
    })
    .catch((ex) => {
        console.log('db connection failed: ', ex)
    })