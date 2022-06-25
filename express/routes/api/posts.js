const express=require('express');
const fs=require('fs');
const router=express.Router();
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "";

router.get('/', (req, res) =>{
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
    client.connect(async err => {
    const collection = client.db("test").collection("angularProject");
    const pipeline=[
        {
          '$sort': {
            'date': -1
          }
        }, {
          '$limit': 10
        }
    ];
    const posts = await collection.aggregate(pipeline).toArray();
    //console.log(posts);
    res.set('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.json(posts);
    client.close();
    });
});

module.exports = router;