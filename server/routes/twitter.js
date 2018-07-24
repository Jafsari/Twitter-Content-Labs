
const express = require('express');
const router = express.Router();
const config = require('../config.json')

var response;
console.log(response)

var error = function (err, response, body) {
    console.log('ERROR [%s]', err);
};
var success = function (data,cb) {
    console.log('Data [%s]', data);
    cb(data)
};

var Twitter = require('twitter-node-client').Twitter

var twitter = new Twitter(config);

router.post('/',(req,res,err) => {
    console.log(req.body)
    twitter.getSearch({'q':req.body.hashtag,'count': req.body.results, 'result\_type':req.body}, error, (success,function(data){
        let parseData = JSON.parse(data)
        console.log(parseData)
        return res.status(200).json(parseData)
    }))
   
})

module.exports = router


