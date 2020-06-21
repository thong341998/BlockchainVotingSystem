var express = require('express');

var router = express.Router();
var randomstring = require("randomstring");
let posting = require('../model/posting');
var blockmodel = require('../model/block');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');
const moment = require('moment');
var { Transaction, Blockchain, Block } = require("../middlewares/blockchain");
var myChain = new Blockchain();

blockmodel.find(function (err, re) {
  if (re.length === 0) {
    myChain.createFirstBlock(new Block("01/06/2020", [], "0"))
  } else {
    myChain.newbockchain(re)
  }
})


router.get('/posting/:id', async (req, res, next) => {
  let _id = req.params.id;
  let result = await posting.findOne({ "_id": _id.toString() });

  let tem = [...result.ListpersonId]
  for (var i = 0; i < tem.length; i++) {
    tem[i] = 0;
  }
  let KQ = await myChain.getBalanceOfAddress(_id.toString(), tem);
  let voteCount = 0;
  for (var i = 0; i < KQ.length; i++) {
    voteCount+= KQ[i];
  }
  res.json({ result, KQ ,voteCount});

})

router.post('/posting', async (req, res, next) => {
  let { content, title, ListpersonId, endDay } = req.body;
  let startDay = moment().format('YYYY-MM-DD');
  let result = await posting.insertMany({ content, title, ListpersonId, startDay, endDay, delete: false });
  res.json(result);
})

router.get('/history', (req, res, next) => {
  var result = [];
  for (const block of myChain.chain) {
    for (const trans of block.transactions) {
      result.push(trans)
    }
  }
  res.json({ result });
})

router.get('/block', (req, res, next) => {
  var result = [];
  for (const block of myChain.chain) {
    result.push(block)
  }
  res.json({ result });
})

router.post('/vote', async (req, res, next) => {
  var { publicKey, privateKey, VoteId, personId } = req.body;
  let re = await posting.findOne({ "_id": VoteId });
  let startDay = moment().format('YYYY-MM-DD');
  if(re.endDay===startDay){
    console.log("re.endDay: ",re.endDay)
    return res.json({err:" endDay "});
  }
  const myKey = ec.keyFromPrivate(privateKey);
  const tx1 = new Transaction(publicKey, VoteId, re.ListpersonId, personId);
  tx1.signTransaction(myKey);
  myChain.addTransaction(tx1);

  console.log('Starting the miner:');
  myChain.minePendingTransactions();

  let tem = [...re.ListpersonId]
  for (var i = 0; i < tem.length; i++) {
    tem[i] = 0;
  }
  res.json(true)
})

module.exports = router;
