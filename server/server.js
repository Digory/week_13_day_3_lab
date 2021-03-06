const express = require('express');
const app = express();
const path = require('path');
const parser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');

const publicPath = path.join(__dirname,'../client/public');
app.use(express.static(publicPath));

app.use(parser.json());


MongoClient.connect('mongodb://localhost:27017')
    .then((client)=>{
        const db = client.db('bucket_list');
        const activitiesCollection = db.collection('activities');
        const activitiesRouter = createRouter(activitiesCollection);
        app.use('/api/activities', activitiesRouter);
    })
    .catch(console.error);

app.listen(3000, function(){
    console.log(`listening on port ${this.address().port}`);
});
