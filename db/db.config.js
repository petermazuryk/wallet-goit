const MongoClient = require('mongodb').MongoClient;
const { mongodb_URI } = require('../config');

const client = new MongoClient(mongodb_URI, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect(err => {
  const collection = client.db("wallet").collection("users");
  // perform actions on the collection object
  collection.insertOne({}, (err, result) => {
      if (err) console.log(err);
      if (result) console.log("insertOne: ", result);
  });

  collection.insertMany([], (err, result) => {
    if (err) console.log(err);
    if (result) console.log("insertOne: ", result);
});

  collection.find({}, (err, result) => {
    if (err) console.log(err);
    if (result) console.log("insertOne: ", result);
});

  collection.findOne({}, (err, result) => {
    if (err) console.log(err);
    if (result) console.log("insertOne: ", result);
});

  collection.updateMany({}, (err, result) => {
    if (err) console.log(err);
    if (result) console.log("insertOne: ", result);
  });
  
  collection.updateOne({}, (err, result) => {
    if (err) console.log(err);
    if (result) console.log("insertOne: ", result);
  });
  collection.update({ _id: ObjectId() }, { $set: { name: "NewText" } }, (err, result) => {
    if (err) console.log(err);
    if (result) console.log("insertOne: ", result);
  });

  client.close();
});
