var express = require('express');

var router = express.Router();
var randomstring = require("randomstring");
let usermodel = require('../model/user');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');
var { Transaction, Blockchain } = require("../middlewares/blockchain");
var myChain = new Blockchain();


router.post('/signup', (req, res, next) => {
    //user={
    //     req.body.usermane
    // }
    var { usermane } = req.body;
    const key = ec.genKeyPair();
    const publicKey = key.getPublic('hex');
    const privateKey = key.getPrivate('hex');
    //lưu vào db usermane publicKey
    usermodel.insertMany({usermane,publicKey})
    res.status(200).json({ usermane, publicKey, privateKey });
})

router.post('/login', (req, res, next) => {
    //user={
    //     req.body.publicKey
    //     req.body.privateKey
    // }
    var {publicKey,privateKey} = req.body;
    var priKey = ec.keyFromPrivate(privateKey);
    if (priKey.getPublic('hex') == publicKey) {
        return res.status(200).json({ usermane, publicKey, privateKey });
    }else{
        return res.status(400).json(false);
    }
})


module.exports = router;
