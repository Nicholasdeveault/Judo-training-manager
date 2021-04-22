const exercisesList = require(".././backend/exercisesList.json");
const bcrypt = require("bcrypt");

const { MongoClient, ObjectId } = require("mongodb");

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

const getNotes = async (req, res) => {};

//Add new exercises

const addNewExercise = async (req, res) => {
  const client = await MongoClient(MONGO_URI, options);
  console.log(req.body);

  try {
    await client.connect();

    const db = client.db("judo-exercises");
    await db.collection("exercisesList").insertOne(req.body);

    res.status(201).json({ status: 201 });
  } catch (err) {
    console.log(err.stack);
    res.status(404).json({ status: 404, data: "Not Found" });
  }
  client.close();
};

//Remove an exercise from the exercises list

const removeExercises = async (req, res) => {};

const getNewExercises = async (req, res) => {
  const client = await MongoClient(MONGO_URI, options);
  await client.connect();

  const _id = req.params._id;
  const db = client.db("judo-exercises");
  db.collection("NoteSection").findOne({ _id }, (err, result) => {
    result
      ? res.status(200).json({ status: 200, _id, data: result })
      : res.status(404).json({ status: 404, _id, data: "Not Found" });
    client.close();
  });
};

//Search an exercise in the list

const listSearch = async (req, res) => {
  const client = await MongoClient(MONGO_URI, options);
  console.log(req.body);

  try {
    await client.connect();

    const db = client.db("judo-exercises");
    const result = await db.collection("exercisesList").find().toArray();

    res.status(200).json({ status: 200, data: result });
  } catch (err) {
    res.status(404).json({ status: 404, data: "Not Found" });
  }
  client.close();
};

//Add a new training

const addTraining = async (req, res) => {
  const client = await MongoClient(MONGO_URI, options);
  console.log(req.body);

  try {
    await client.connect();

    const db = client.db("judo-exercises");
    await db.collection("Trainings").insertOne(req.body);
    const result = await db.collection("Trainings").find().toArray();

    res.status(200).json({ status: 200, data: result });
  } catch (err) {
    res.status(404).json({ status: 404, data: "Not Found" });
  }
  client.close();
};

const showTrainings = async (req, res) => {
  const client = await MongoClient(MONGO_URI, options);

  try {
    await client.connect();

    const _id = req.params._id;
    const db = client.db("judo-exercises");
    const result = await db.collection("Trainings").find().toArray();

    res.status(200).json({ status: 200, data: result });
  } catch (err) {
    res.status(404).json({ status: 404, data: "Not Found" });
  }
  client.close();
};

//SIGN IN HANDLERS

const getUsers = async (req, res) => {
  const client = await MongoClient(MONGO_URI, options);

  const _id = req.params._id;
  console.log(req.params);

  await client.connect();

  const db = client.db("judo-exercises");
  db.collection("Users").findOne({ _id: ObjectId(_id) }, (err, result) => {
    result
      ? res.status(200).json({ status: "success", _id, user: result })
      : res.status(404).json({ status: 404, _id, msg: "Not Found" });
    client.close();
  });
};

const createUsers = async (req, res) => {
  const client = await MongoClient(MONGO_URI, options);

  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    await client.connect();

    const db = client.db("judo-exercises");
    const user = await db
      .collection("Users")
      .findOne({ email: req.body.email });

    if (!user) {
      let response = await db.collection("Users").insertOne({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword,
      });
      res.status(201).json({ status: 201, user: response.ops[0] });
    } else {
      res.status(400).json({ status: "not allowed" });
    }
  } catch (err) {
    res.status(500).json({ status: 500, msg: "Not Found" });
  }
  client.close();
};

const loginUsers = async (req, res) => {
  const client = await MongoClient(MONGO_URI, options);

  try {
    await client.connect();

    const db = client.db("judo-exercises");
    const user = await db
      .collection("Users")
      .findOne({ email: req.body.email });

    if (user == null) {
      return res.status(400).json({ status: 400, data: "Cannot find user" });
    }

    if (await bcrypt.compare(req.body.password, user.password)) {
      res.status(201).json({ status: 201, data: "Success", user });
    } else {
      res.status(400).json({ status: 400, data: "Not allowed" });
    }
  } catch (err) {
    res.status(500).json({ status: 500, msg: "Not Found" });
  }
  client.close();
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
  addTraining,
  showTrainings,
  getUsers,
  createUsers,
  loginUsers,
};
