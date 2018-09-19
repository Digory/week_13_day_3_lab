const express = require('express');
const ObjectID = require('mongod').ObjectID;

const CreateRouter = function(collection){
    const router = express.Router();
    
    // INDEX
    router.get('/', (req,res)=>{
        collection
        .find()
        .toArray()
        .then((docs)=>res.json(docs));
    })

    return router;
}

module.exports = CreateRouter;