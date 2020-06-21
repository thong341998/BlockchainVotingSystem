var express = require('express');

var router = express.Router();
var randomstring = require("randomstring");
let usermodel = require('../model/user');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');
var { Transaction, Blockchain } = require("../middlewares/blockchain");
var myChain = new Blockchain();


router.post('/signup', (req, res, next) => {
    var { usermane } = req.body;
    if(usermane ===undefined){
        return res.json(false);
    }
    const key = ec.genKeyPair();
    const publicKey = key.getPublic('hex');
    const privateKey = key.getPrivate('hex');
    //lưu vào db usermane publicKey
    usermodel.insertMany({usermane,publicKey})
    return res.status(200).json({ usermane, publicKey, privateKey });
})

router.post('/login',async (req, res, next) => {
    //user={
    //     req.body.publicKey
    //     req.body.privateKey
    // }
    var {publicKey,usermane} = req.body;
    let user = await usermodel.find({publicKey,usermane});
    console.log(user)
    if(user.length===0){
        return res.status(200).json(false);
    }else{
        return res.status(200).json({ usermane, publicKey });
    }
    
})


module.exports = router;
