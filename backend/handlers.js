const exercisesList = require(".././backend/exercisesList.json");

const { MongoClient } = require("mongodb");

require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const getExercisesByType = async (req, res) => {
  const client = await MongoClient(MONGO_URI, options);
  await client.connect();

  const db = client.db("judo-exercises");
  const result = await db.collection("exercisesList").find().toArray();

  const type = result.filter((type) => {
    return type.type === req.params.type;
  });
  // console.log(type);
  type
    ? res.status(200).json({ status: 200, data: type })
    : res.status(404).json({ status: 404, msg: "can't find data" });

  client.close();
};

const getAllExercises = async (req, res) => {
  const client = await MongoClient(MONGO_URI, options);

  try {
    await client.connect();
    const db = client.db("judo-exercises");
    const data = await db.collection("exercisesList").find().toArray();

    res.status(200).json({
      status: 200,
      data: data,
    });
  } catch (err) {
    res.status(404).json({
      status: 404,
      // data: data,
      msg: err.message,
    });
    client.close();
  }
};

const getExercises = async (req, res) => {
  const client = await MongoClient(MONGO_URI, options);
  await client.connect();

  const _id = req.params._id;
  const db = client.db("judo-exercises");
  db.collection("exercisesList").findOne({ _id }, (err, result) => {
    result
      ? res.status(200).json({ status: 200, _id, data: result })
      : res.status(404).json({ status: 404, _id, data: "Not Found" });
    client.close();
  });
};

//Add a new daily note

const addNote = async (req, res) => {
  const client = await MongoClient(MONGO_URI, options);
  console.log(req.body);

  try {
    await client.connect();

    const db = client.db("judo-exercises");
    await db.collection("NoteSection").insertOne(req.body);
    const result = await db.collection("NoteSection").find().toArray();

    res.status(200).json({ status: 200, data: result });
  } catch (err) {
    res.status(404).json({ status: 404, data: "Not Found" });
  }
  client.close();
};

const getNotes = async (req, res) => {
  // const client = await MongoClient(MONGO_URI, options);
  // await client.connect();
  // const db = client.db("judo-exercises");
  // const result = await db.collection("NoteSection").find().toArray();
  // const date = result.filter((date) => {
  //   return date.date === req.params.date;
  // });
  // // console.log(type);
  // date
  //   ? res.status(200).json({ status: 200, data: date })
  //   : res.status(404).json({ status: 404, msg: "can't find data" });
  // client.close();
};

//Add new exercises

const addNewExercise = async (req, res) => {
  const client = await MongoClient(MONGO_URI, options);
  console.log(req.body);

  try {
    await client.connect();

    const db = client.db("judo-exercises");
    await db.collection("NoteSection").insertOne(req.body);
    const result = await db.collection("NoteSection").find().toArray();

    res.status(200).json({ status: 200, data: result });
  } catch (err) {
    res.status(404).json({ status: 404, data: "Not Found" });
  }
  client.close();
};

const getNewExercises = async (req, res) => {};

//Search an exercise in the list

const listSearch = (req, res) => {
  const filterList = exercisesList.filter((exercise) => {
    const givenName = req.params.name.toLowerCase();
    let exerciseIdMatch = exercises.filter((exercise) => {
      const exerciseName = exercise.name.toLowerCase();

      if (givenName === exerciseName || exerciseName.includes(givenName)) {
        return exercise;
      }
    });
  });
  if (filterList) {
    res.status(202).json({ data: filterList });
  }
};

module.exports = {
  getExercises,
  getAllExercises,
  getExercisesByType,
  addNote,
  getNotes,
  listSearch,
  addNewExercise,
  getNewExercises,
};
