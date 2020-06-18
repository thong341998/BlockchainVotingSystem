import Block from '../../test/models';

const SHA25 = require("crypto-js/sha256");

export const calculateHash = (block) =>{
	return SHA256(block.index + block.previousHash + block.timeStamp + JSON.stringify(block.data)).toString();
}

export const createGenesisBlock(){
	return new Block(0,"")
}
