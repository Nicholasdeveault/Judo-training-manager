"use strict";

const express = require("express");
const morgan = require("morgan");
const {
  getExercises,
  getAllExercises,
  getExercisesByType,
  addNote,
  getNotes,
  listSearch,
  addNewExercise,
  getNewExercises,
} = require("./handlers");

const PORT = process.env.PORT || 4000;

express()
  .use(morgan("tiny"))
  .use(express.static("public"))
  .use(express.json())
  .use(express.urlencoded({ extended: false }))
  .use("/", express.static(__dirname + "/"))

  //SearchBar Endpoint
  .use("/exercisesList", listSearch)

  //endpoints\
  //Login page .get()
  // .get("/Homepage",  getAllExercises) //<-- Homepage to plan the training of the day
  .get("/Exercises", getAllExercises) //<-- page to see every exercises
  .get("/Exercises/:type", getExercisesByType) //<-- Page to search by type
  .get("/newExercises", getNewExercises)
  // .post("/note", addNote)
  // .get("/notes", getNotes)
  .post("/newExercise", addNewExercise)

  .use((req, res) => res.status(404).type("txt").send("🤷‍♂️"))

  .listen(PORT, () => console.info(`Listening on port ${PORT}`));
