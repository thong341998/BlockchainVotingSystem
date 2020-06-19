const SHA256 = require("crypto-js/sha256");
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');
let transmodel = require('../model/transaction');
let blockmodel = require('../model/block');
class Block {
    constructor(timestamp, transactions, previousHash = '') {
        this.previousHash = previousHash;
        this.timestamp = timestamp;
        this.transactions = transactions;
        this.hash = this.calculateHash();
        this.nonce = 0;
    }
    calculateHash() {
        return SHA256(this.previousHash + this.timestamp + JSON.stringify(this.transactions) + this.nonce).toString();
      }

    mineBlock(difficulty) {
        while (this.hash.substring(0, difficulty) !== Array(difficulty + 1).join("0")) {
            this.nonce++;
            this.hash = this.calculateHash();
        }
        console.log("BLOCK MINED: " + this.hash);
    }
    hasValidTransactions() {
        for (const tx of this.transactions) {
          if (!tx.isValid()) {
            return false;
          }
        }
        return true;
      }

}
class Blockchain {
    constructor() {
        // console.log("abc: ",this.createFirstBlock())
        this.chain = [];
        this.difficulty = 1;

        // Nơi lưu trữ các transaction đang chờ được xữ lý để đưa vào block
        this.pendingTransactions = [];
     
    }
    createFirstBlock(block) {
        // blockmodel.find(function(err,re){
        //     // console.log(re)
        //     return [...re]
        // })
        // return new Block("01/06/2020", [], "0");  
        this.chain=[block];
    }

    newbockchain(block){
        this.chain=block;
    }

    getLatestBlock() {
        return this.chain[this.chain.length - 1];
    }

    createTransaction(transaction) {
        this.pendingTransactions = [];
        this.pendingTransactions.push(transaction);
    }

    minePendingTransactions() {
        // Tạo một block mới với tất cả các transaction pending và đào nó
        let block = new Block(Date.now().toString(), this.pendingTransactions, this.getLatestBlock().hash);
        block.mineBlock(this.difficulty);
    
        // Thêm block vừa được đào vào chuỗi
        this.chain.push(block);
        // console.log("block ",)
        blockmodel.insertMany(block);
    }
    addTransaction(transaction) {
        // Verify the transactiion
        if (!transaction.isValid()) {
            throw new Error('Cannot add invalid transaction to chain');
        }

        // if (transaction.amount <= 0) {
        //     throw new Error('Transaction amount should be higher than 0');
        // }

        this.pendingTransactions = [];
        this.pendingTransactions.push(transaction);
        // console.log("transaction: ",transaction)
        transmodel.insertMany(transaction);
    }


    getBalanceOfAddress(VoteId,listVote) {

        let result = [...listVote];

        // Lặp qua từng block và các transaction bên trong một block
        // console.log("chain: ",this.chain)
        for (const block of this.chain) {
            for (const trans of block.transactions) {
                // Nếu address cần kiểm tra số dư là người gửi, hãy giảm balance
                if (trans.VoteId === VoteId) {
                   
                    result[trans.personId]++;
                    
                    break;
                }
            }
        }
        return result;
    }

    isChainValid() {
        // Check if the Genesis block hasn't been tampered with by comparing
        // the output of createGenesisBlock with the first block on our chain
        const realGenesis = JSON.stringify(this.createGenesisBlock());

        if (realGenesis !== JSON.stringify(this.chain[0])) {
            return false;
        }

        // Check the remaining blocks on the chain to see if there hashes and
        // signatures are correct
        for (let i = 1; i < this.chain.length; i++) {
            const currentBlock = this.chain[i];

            if (!currentBlock.hasValidTransactions()) {
                return false;
            }

            if (currentBlock.hash !== currentBlock.calculateHash()) {
                return false;
            }
        }

        return true;
    }
}


class Transaction {
    constructor(pubKey, VoteId, ListpersonId,personId) {
        this.pubKey = pubKey;
        this.VoteId = VoteId;
        this.ListpersonId = ListpersonId;
        this.personId = personId;
        this.date = Date.now().toString();
    }
    calculateHash() {
        return SHA256(this.previousHash + this.timestamp + JSON.stringify(this.transactions) + this.nonce).toString();
      }
    signTransaction(signingKey) {
        // You can only send a transaction from the wallet that is linked to your
        // key. So here we check if the pubKey matches your publicKey
        if (signingKey.getPublic('hex') !== this.pubKey) {
            throw new Error('You cannot sign transactions for other wallets!');
        }

        const hashTx = this.calculateHash();
        const sig = signingKey.sign(hashTx, 'base64');

        this.signature = sig.toDER('hex');
    }
    isValid() {
        if (this.pubKey === null) return true;

        if (!this.signature || this.signature.length === 0) {
            throw new Error('No signature in this transaction');
        }

        const publicKey = ec.keyFromPublic(this.pubKey, 'hex');
        return publicKey.verify(this.calculateHash(), this.signature);
    }
}

module.exports = {
    Blockchain,
    Block,
    Transaction
};

