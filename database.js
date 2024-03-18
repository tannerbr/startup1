const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('startup');
const talkCollection = db.collection('talk');

// This will asynchronously test the connection and exit the process if it fails
(async function testConnection() {
  await client.connect();
  await db.command({ ping: 1 });
})().catch((ex) => {
  console.log(`Unable to connect to database with ${url} because ${ex.message}`);
  process.exit(1);
});

async function addTalk(talk) {
  const result = await talkCollection.insertOne(talk);
  return result;
}

function getTalk() {
  const query = { talk: { $gt: 0, $lt: 900 } };
  const options = {
    sort: { talk: -1 },
  };
  const cursor = talkCollection.find(query, options);
  return cursor.toArray();
}

module.exports = { addTalk, getTalk };
