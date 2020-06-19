var express = require('express');

var router = express.Router();
var randomstring = require("randomstring");
let posting = require('../model/posting');
var blockmodel =require('../model/block');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');
var {Transaction, Blockchain,Block} = require("../middlewares/blockchain");
var myChain = new Blockchain();

blockmodel.find(function(err,re){
  if(re.length===0){
    myChain.createFirstBlock(new Block("01/06/2020", [], "0"))
  }else{
    myChain.newbockchain(re)
  }
})


router.get('/posting',async (req, res, next) => {
  let {VoteId}=req.body;
  let result = await posting.findOne({"_id":VoteId});
  res.json(result);

})

router.post('/posting',async (req, res, next) => {
 let {content,title,ListpersonId}= req.body;

 let result = await posting.insertMany({content,title,ListpersonId});
 res.json(result);
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

router.get('/block', (req, res, next) => {
  var result=[];
  for(const block of myChain.chain){
   
      result.push(block)

  }
  res.json({result});
})

router.post('/vote',async (req, res, next) => { 
  var {publicKey,privateKey,VoteId,personId} =req.body;
  let re = await posting.findOne({"_id":VoteId});
  const myKey = ec.keyFromPrivate(privateKey);
  const tx1 = new Transaction(publicKey, VoteId,re.ListpersonId,personId);
  tx1.signTransaction(myKey);
  myChain.addTransaction(tx1);
 
  console.log('Starting the miner:');
  myChain.minePendingTransactions();

  
  let tem =[...re.ListpersonId]
  for(var i=0 ;i<tem.length;i++){
    tem[i]=0;
  }
  // console.log("tem: ",tem)

  console.log('address2 is', myChain.getBalanceOfAddress(VoteId,tem));

  let result = await myChain.getBalanceOfAddress(VoteId,tem);

  res.json({result})
})



module.exports = router;
