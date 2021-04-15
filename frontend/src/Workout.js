import React, { useEffect, useState, useReducer } from "react";
import moment from "moment";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { getExercisesTypeData } from "./reducers/warmUpReducer";

//   function reducer(state, action) {
//     switch (action.type) {
//       case "Cardio":
//         return { isSelected: state.false };

//     case "Educatifs musculaires" :
//         return { state.isSelected: false }

//     case "Educatifs coordination" :
//         return { state.isSelected: false }

//     case "Travail global" :
//         return { state.isSelected: false }

//     case "Chutes" :
//         return { state.isSelected: false }

//     case "Retournements" :
//         return { state.isSelected: false }

//     case "Cardio" :
//         return { state.isSelected: false }

//     case "Ukemi (chutes)" :
//          return { state.isSelected: false }

//     case "Nage-waza (projections)" :
//         return { state.isSelected: false }

//     case "Kumi-Kata (garde)" :
//         return { state.isSelected: false }

//     case "Osae-waza (immobilisations)" :
//          return { state.isSelected: false }

//     case "Hairi-Kata (renversements)" :
//          return { state.isSelected: false }

//     case "Terminologie" :
//          return { state.isSelected: false }
//       };
//     }
//     case principalPart: {
//     }
//     status: "hasen't loaded",
// }
//   }

const Workout = () => {
  //   const [state, dispatch] = useReducer(reducer, { isSelected: false });
  const [warmUp, setWarmup] = useState("none");
  const [name, setName] = useState("none");
  const [name2, setName2] = useState("none");
  const [sequence, setSequence] = useState("none");
  // const [workoutSelection, setWorkoutSelection] = useState({
  //   warmUp: {
  //     Cardio: { isSelected: false },
  //     "Educatifs musculaires": { isSelected: false },
  //     "Educatifs coordination": { isSelected: false },
  //     "Travail global": { isSelected: false },
  //     Chutes: { isSelected: false },
  //     Retournements: { isSelected: false },
  //     "Tandoku-renshu": { isSelected: false },
  //     "Ukemi (chutes)": { isSelected: false },
  //     "Nage-waza (projections)": { isSelected: false },
  //     "Kumi-Kata (garde)": { isSelected: false },
  //     "Osae-waza (immobilisations)": { isSelected: false },
  //     "Hairi-Kata (renversements)": { isSelected: false },
  //     Terminologie: { isSelected: false },
  //   },
  //   principalPart: {},
  //   status: "hasen't loaded",
  // });

  const exercises = useSelector((state) => state.exercises);
  console.log(exercises);

  let types = exercises?.exercises?.map((exercise) => {
    return exercise.type;
  });

  let filteredTypes = types?.filter((item, index) => {
    return types?.indexOf(item) === index;
  });
  console.log(filteredTypes);

  let names = exercises?.exercises?.map((exercise) => {
    return exercise.name;
  });
  console.log(names);

  const cardioExercises = exercises?.exercises?.filter((exercise) => {
    return exercise.type === "Cardio";
  });
  console.log(cardioExercises);

  // const handleWarmUpChange = (event) => {
  //   // dispatch({ type: "Cardio", payload: { } });
  //   console.log(event.target.checked);
  //   console.log(event.target.name);
  //   setWorkoutSelection({
  //     ...workoutSelection,
  //     warmUp: {
  //       ...workoutSelection.warmUp,
  //       [event.target.name]: { isSelected: event.target.checked },
  //     },
  //   });
  // };

  //const handleWarmUpExercisesChange = () => {};

  const handleSubmit = (event) => {
    return event.target.submit;
  };
  console.log(warmUp);
  return exercises.status === "idle" ? (
    <>
      <Container>
        {/* Form for WarmUp portion */}

        <FormWarmUp>
          <H1>Warm up: </H1>
          <Select
            name="WarmUp"
            value={warmUp}
            onChange={(event) => {
              console.log(event.target);
              setWarmup(event.target.value);
            }}
          >
            <Option value="none">Select a type</Option>
            {filteredTypes?.map((type) => {
              return <Option value={type}>{type}</Option>;
            })}
          </Select>
          <Select
            name="WarmUp"
            value={name}
            onChange={(event) => setName(event.target.value)}
          >
            {warmUp === "none" ? (
              <Option value="none">First select a workout type</Option>
            ) : (
              <Option value="none">Select an exercise</Option>
            )}
            {names?.map((name) => {
              return <Option value={name}>{name}</Option>;
            })}
          </Select>
          <Button onClick={handleSubmit}>Add to today's training</Button>
        </FormWarmUp>

        {/* Form for sequences */}

        <FormMainTraining>
          <H1>Main Training: </H1>
          <Select
            name="Sequences"
            value={sequence}
            onChange={(event) => setSequence(event.target.value)}
          >
            <Option value="none">Select a sequence</Option>
            {filteredTypes?.map((type) => {
              return <Option value={type}>{type}</Option>;
            })}
          </Select>
          <Select
            name="Sequences"
            value={name2}
            onChange={(event) => setName2(event.target.value)}
          >
            {warmUp === "none" ? (
              <Option value="none">First select a sequence</Option>
            ) : (
              <Option value="none">Select an exercise</Option>
            )}
            {names?.map((name) => {
              return <Option value={name}>{name}</Option>;
            })}
          </Select>
          <Button onClick={handleSubmit}>Add to today's training</Button>
        </FormMainTraining>
      </Container>

      {/* <form>
        
        <label htmlFor="Cardio">Cardio</label>
        <input
          type="checkbox"
          name="Cardio"
          //   checked={state.Cardio.isSelected}
          checked={workoutSelection.warmUp.Cardio.isSelected}
          onChange={handleWarmUpChange}
        />
        <label htmlFor="Educatifs musculaires">Educatifs musculaires</label>
        <input
          type="checkbox"
          name="Educatifs musculaires"
          checked={workoutSelection.warmUp["Educatifs musculaires"].isSelected}
          onChange={handleWarmUpChange}
        />
        <label htmlFor="Educatifs coordination">Educatifs coordiantion</label>
        <input
          type="checkbox"
          name="Educatifs coordination"
          checked={workoutSelection.warmUp["Educatifs coordination"].isSelected}
          onChange={handleWarmUpChange}
        />
        <label htmlFor="Travail global">Travail global</label>
        <input
          type="checkbox"
          name="Travail global"
          checked={workoutSelection.warmUp["Travail global"].isSelected}
          onChange={handleWarmUpChange}
        />
        <label htmlFor="Chutes">Chutes</label>
        <input
          type="checkbox"
          name="Chutes"
          checked={workoutSelection.warmUp.Chutes.isSelected}
          onChange={handleWarmUpChange}
        />
        <label htmlFor="Retournements">Retournements</label>
        <input
          type="checkbox"
          name="Retournements"
          checked={workoutSelection.warmUp.Retournements.isSelected}
          onChange={handleWarmUpChange}
        />
        <label htmlFor="Tandoku-renshu">Tandoku-renshu</label>
        <input
          type="checkbox"
          name="Tandoku-renshu"
          checked={workoutSelection.warmUp["Tandoku-renshu"].isSelected}
          onChange={handleWarmUpChange}
        />
        <label htmlFor="Ukemi (chutes)">Ukemi</label>
        <input
          type="checkbox"
          name="Ukemi (chutes)"
          checked={workoutSelection.warmUp["Ukemi (chutes)"].isSelected}
          onChange={handleWarmUpChange}
        />
        <label htmlFor="Nage-waza (projections)">Nage-waza</label>
        <input
          type="checkbox"
          name="Nage-waza (projections)"
          checked={
            workoutSelection.warmUp["Nage-waza (projections)"].isSelected
          }
          onChange={handleWarmUpChange}
        />
        <label htmlFor="Kumi-Kata (garde)">Kumi-Kata</label>
        <input
          type="checkbox"
          name="Kumi-Kata (garde)"
          checked={workoutSelection.warmUp["Kumi-Kata (garde)"].isSelected}
          onChange={handleWarmUpChange}
        />
        <label htmlFor="Osae-waza (immobilisations)">Osae-waza</label>
        <input
          type="checkbox"
          name="Osae-waza (immobilisations)"
          checked={
            workoutSelection.warmUp["Osae-waza (immobilisations)"].isSelected
          }
          onChange={handleWarmUpChange}
        />
        <label htmlFor="Hairi-Kata (renversements)">Hairi-Kata</label>
        <input
          type="checkbox"
          name="Hairi-Kata (renversements)"
          checked={
            workoutSelection.warmUp["Hairi-Kata (renversements)"].isSelected
          }
          onChange={handleWarmUpChange}
        />
        <label htmlFor="Terminologie">Terminologie</label>
        <input
          type="checkbox"
          name="Terminologie"
          checked={workoutSelection.warmUp.Terminologie.isSelected}
          onChange={handleWarmUpChange}
        /> */}
      {/* {cardioExercises.map((exercise) => {})} */}
      {/* </form> */}
    </>
  ) : (
    <div>Loading...</div>
  );
};

const Container = styled.div`
  /* border: 2px solid blue; */
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 1000px;
  margin-left: 60px;
`;

const Button = styled.button`
  height: 25px;
  color: black;
  background-color: white;
  border: 2px solid gray;
  border-radius: 5px;

  &:hover {
    background-color: gray;
    color: white;
    transition: 300ms;
  }
`;

const FormWarmUp = styled.form`
  margin-top: 20px;
  margin-bottom: 100px;
  padding-bottom: 100px;
  border-bottom: 2px solid gray;
`;

const FormMainTraining = styled.form`
  /* border: 2px solid red; */
`;

const Option = styled.option``;

const Select = styled.select`
  width: 400px;
  margin-bottom: 30px;
  height: 30px;
  border: 2px solid gray;
  border-radius: 5px;

  &:hover {
    background-color: gray;
    color: white;
    transition: 300ms;
  }
`;

const H1 = styled.h1`
  margin-bottom: 20px;
  font-size: 25px;
`;

export default Workout;
