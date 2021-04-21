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
  addTraining,
  showTrainings,
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

  //endpoints
  .get("/Exercises", getAllExercises) //<-- page to see every exercises
  // .get("/Exercises/:type", getExercisesByType) //<-- Page to search by type

  .post("/note", addNote)
  // .get("/notes", getNotes)
  .post("/newExercise", addNewExercise)
  .get("/newExercises", getNewExercises)
  //Endpoint for sign in page
  // .post("/", )
  // .post("/", )

  //Endpoint to add new trainings to the Database
  .post("/Trainings", addTraining)
  .get("/pastTrainings", showTrainings)

  .use((req, res) => res.status(404).type("txt").send("🤷‍♂️"))

  .listen(PORT, () => console.info(`Listening on port ${PORT}`));
