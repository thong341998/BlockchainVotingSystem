var express = require('express');

var router = express.Router();
var randomstring = require("randomstring");
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');
var {Transaction, Blockchain} = require("../middlewares/blockchain");
var myChain = new Blockchain();


router.post('/info', (req, res, next) => {
  var publicKey = req.body.address;
  var privateKey =req.body.password;
  var priKey = ec.keyFromPrivate(privateKey);
  if(priKey.getPublic('hex')==publicKey){
    var coin = myChain.getBalanceOfAddress(publicKey);
    var transfers=[];
    for(const block of myChain.chain){
      for(const trans of block.transactions){
          // Nếu address cần kiểm tra số dư là người gửi, hãy giảm balance
          if(trans.fromAddress === publicKey){
             transfers.push(trans);
          }
          // Nếu address cần kiểm tra số dư là người nhận, hãy tăng balance
          if(trans.toAddress === publicKey){
              transfers.push(trans);
          }
      }
    }
    res.render('infodetail',{coin,publicKey,transfers,privateKey})
  }else{
    res.redirect("/info")
  }
 
})

router.get('/posting', (req, res, next) => {
  // get db
  // res.json({VoteId,ListpersonId,title,content})
})

router.get('/history', (req, res, next) => {
  var result=[];
  for(const block of myChain.chain){
    for(const trans of block.transactions){
      result.push(trans)
    }
  }
  res.json({result});
})


router.post('/vote',async (req, res, next) => { 
  
  var {publicKey,privateKey,VoteId,ListpersonId,personId} =req.body;

  const myKey = ec.keyFromPrivate(privateKey);
  const tx1 = new Transaction(publicKey, VoteId,ListpersonId,personId);
  tx1.signTransaction(myKey);
  myChain.addTransaction(tx1);
 
  console.log('Starting the miner:');
  myChain.minePendingTransactions();


  console.log('address2 is', myChain.getBalanceOfAddress(VoteId,[0,0,0]));

  let result = await myChain.getBalanceOfAddress(VoteId,[0,0,0]);

  res.json({result})
})

module.exports = router;
