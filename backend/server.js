"use strict";

const express = require("express");
const morgan = require("morgan");
const { getExercises, getAllExercises, getExercisesByType } = require("./handlers");

const PORT = process.env.PORT || 4000;

express()
  .use(morgan("tiny"))
  .use(express.static("public"))
  .use(express.json())
  .use(express.urlencoded({ extended: false }))
  .use("/", express.static(__dirname + "/"))

//endpoints\
//Login page .get()
.get("/Homepage",  getAllExercises) //<-- Homepage to plan the training of the day 
.get("/Exercises", getAllExercises) //<-- page to see every exercises
.get("/Exercises/:type", getExercisesByType) //<-- Page to search by type
.get("/Exercises/:_id", getExercises)  //<-- Might not need this one
//.post() --> Add new exercises to the list (STRETCH)

//GOOGLE CALENDAR API GOES HERE
//.get("/api/googleCalendar")


  .use((req, res) => res.status(404).type("txt").send("🤷‍♂️"))

  .listen(PORT, () => console.info(`Listening on port ${PORT}`));