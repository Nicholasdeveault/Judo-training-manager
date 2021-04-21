import React, { useState, useEffect } from "react";
import styled from "styled-components";

const AddBar = () => {
  const [addedToList, setAddedToList] = useState();

  const handleButtonClick = () => {
    fetch("/newExercise", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(),
    })
      .then((res) => res.json)
      .then((data) => setAddedToList(data));
  };

  return (
    <>
      <Div>
        <Span>Add exercises to the list </Span>
        <DivAddType>
          <Input
            type="text"
            value={addedToList}
            name="newExerciseType"
            placeholder="Type"
            rows="2"
            onChange={(event) => setAddedToList(event.target.value)}
          />
        </DivAddType>
        <DivAddName>
          <Input
            type="text"
            value={addedToList}
            name="newExerciseName"
            placeholder="Name"
            rows="2"
            onChange={(event) => setAddedToList(event.target.value)}
          />
        </DivAddName>
        <Button>Add to list</Button>
      </Div>
    </>
  );
};

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Span = styled.span`
  font-weight: bold;
  border-bottom: 2px solid gray;
  font-size: 20px;
  margin-bottom: 10px;
`;

const Input = styled.input`
  border: 2px solid gray;
  border-radius: 5px;
  width: 400px;
  margin: 20px;
  height: 30px;
`;

const Button = styled.button`
  width: 120px;
  height: 25px;
  margin-top: 10px;
  border-radius: 5px;
  border: 2px solid gray;
  font-weight: bold;
  border: none;

  &:hover {
    background-color: #ffca33;
    transition: 300ms;
  }
`;

const DivAddType = styled.div``;

const DivAddName = styled.div``;

export default AddBar;
