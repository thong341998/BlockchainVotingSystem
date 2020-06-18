CREATE SCHEMA e_voting_system;

CREATE TABLE Account(
 ID INTEGER NOT NULL,
 Username TEXT,
 Pass TEXT,
 PublicKey TEXT,
 DisplayName TEXT,
 PRIMARY KEY (ID)
);

CREATE TABLE Vote(
 ID INTEGER NOT NULL,
 Title TEXT,
 Content TEXT,
 PRIMARY KEY (ID)
);

CREATE TABLE Candidate(
 ID INTEGER NOT NULL,
 VoteID INTEGER,
 AccountID INTEGER,
 
 PRIMARY KEY(ID),
 FOREIGN KEY(VoteID) REFERENCES Vote(ID),
 FOREIGN KEY (AccountID) REFERENCES Account(ID)
);

CREATE TABLE VoteBlock(
 ID INTEGER NOT NULL PRIMARY KEY,
 CreateTime DateTime,
 BlockHash TEXT NOT NULL,
 BlockPreviousHash TEXT NOT NULL
);


CREATE TABLE VoteTransaction(
 ID INTEGER NOT NULL ,
 VoterPublicKey TEXT,
 VoterSignature TEXT,
 BlockID INTEGER,
 IsPending BIT,
 CreatedTime DateTime,
 VoteID INTEGER,
 CandidateID INTEGER,
 
 PRIMARY KEY(ID),
 FOREIGN KEY (VoteID) REFERENCES Vote(ID),
 FOREIGN KEY (CandidateID) REFERENCES Candidate(ID),
 FOREIGN KEY (BlockID) REFERENCES VoteBlock(ID)
);


DROP TABLE Account;
DROP TABLE Candidate;
DROP TABLE Vote;
DROP TABLE VoteTransaction;
DROP TABLE VoteBlock



