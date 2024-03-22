const { MongoClient } = require('mongodb');
const bcrypt = require('bcrypt');
const uuid = require('uuid');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('startup');
const userCollection = db.collection('user');
const talkCollection = db.collection('talk');
const likeCollection = db.collection("like");

// This will asynchronously test the connection and exit the process if it fails
(async function testConnection() {
  await client.connect();
  await db.command({ ping: 1 });
})().catch((ex) => {
  console.log(`Unable to connect to database with ${url} because ${ex.message}`);
  process.exit(1);
});

function getUser(userName) {
  return userCollection.findOne({ userName: userName });
}

function getUserByToken(token) {
  return userCollection.findOne({ token: token });
}

async function createUser(userName, password) {
  // Hash the password before we insert it into the database
  const passwordHash = await bcrypt.hash(password, 10);

  const user = {
    userName: userName,
    password: passwordHash,
    token: uuid.v4(),
  };
  await userCollection.insertOne(user);

  return user;
}

async function addTalk(talk) {
  const result = await talkCollection.insertOne(talk);
  return result;
}

function getTalk() {
  const cursor = talkCollection.find({});
  return cursor.toArray();
}

async function countLikes() {
  event.stopPropagation();
    if (userClicked === false) {
        likeCountInt = likeCountInt + 1;
        userClicked = true;
    } //save for database section
    likeCountInt = likeCountInt + 1;
    console.log(likeCountInt);
    showLikeCount.innerHTML = likeCountInt;
    console.log(likeCountInt);
    // .setItem('likeCountStored', likeCountInt);
    // call front end to service
    // front end call countLikes
    // call likesCollection (mongodb updateOne)
    // likeCollection.updateOne
    // return new count
    console.log(likeCountInt);
}

module.exports = { 
  addTalk, 
  getTalk, 
  getUser, 
  getUserByToken,
  countLikes, 
  createUser 
};
