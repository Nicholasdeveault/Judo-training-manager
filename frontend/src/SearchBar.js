import React, { useState, useEffect } from "react";
import styled from "styled-components";

const SearchBar = ({ searched, setSearched }) => {
  const [selectedSuggestionIndex, setSelectedSuggestionIndex] = useState(0);
  const [items, setItems] = useState();

  useEffect(() => {
    fetch("/exercisesList")
      .then((res) => res.json())
      .then((data) => {
        setItems(data.data);
      });
  }, []);

  let filteredExercises;

  if (items && searched.length > 1) {
    filteredExercises = items.filter((exercise) => {
      return (
        exercise.name &&
        exercise.name.toLowerCase().includes(searched.toLowerCase())
      );
    });
  }

  //   const handleSelect = items.filter((exercise) => {
  //     return window.alert(
  //       exercise.name &&
  //         exercise.name.toLowerCase().includes(searched.toLowerCase())
  //     );
  //   });

  return (
    <>
      <Container>
        <Div>
          <Input
            type="text"
            value={searched}
            onChange={(event) => {
              setSearched(event.target.value);
            }}
            onKeyDown={(ev) => {
              switch (ev.key) {
                // case "Enter": {
                //   handleSelect(searched);
                //   return;
                // }
                case "ArrowUp": {
                  setSelectedSuggestionIndex(selectedSuggestionIndex - 1);
                  return;
                }
                case "ArrowDown": {
                  setSelectedSuggestionIndex(selectedSuggestionIndex + 1);
                  return;
                }
              }
            }}
          />
          <Button onClick={() => setSearched("")}>Clear</Button>
          {/* This button to show the exercise in the list highlighted */}
          {/* <Button onClick={() => setSearched("")}>Search</Button> */}
        </Div>
        {filteredExercises && filteredExercises.length > 0 && (
          <Ul>
            {filteredExercises.map((suggestion, index) => {
              let startPosition = suggestion.name
                .toLowerCase()
                .indexOf(searched.toLowerCase());
              let endPosition = startPosition + searched.length - 1;
              let firstHalf = suggestion.name.slice(0, endPosition + 1);
              let secondHalf = suggestion.name.slice(endPosition + 1);

              const isSelected = selectedSuggestionIndex === index;

              return (
                <Suggestion
                  key={suggestion.name}
                  style={{
                    background: isSelected
                      ? "hsla(247, 0%, 69%, 0.26)"
                      : "transparent",
                  }}
                  onMouseEnter={() => setSelectedSuggestionIndex(index)}
                >
                  <span>
                    <Prediction1>{firstHalf}</Prediction1>
                    <Prediction>{secondHalf}</Prediction>
                  </span>
                </Suggestion>
              );
            })}
          </Ul>
        )}
      </Container>
    </>
  );
};

const Container = styled.div`
  margin-left: -100px;
  width: 280px;
`;

const Div = styled.div``;

const Input = styled.input`
  height: 25px;
  border-radius: 5px;
  border: 2px solid gray;

  &:hover {
    border: 2px solid black;
  }
`;

const Button = styled.button`
  width: 60px;
  height: 25px;
  color: black;
  background-color: white;
  border: 2px solid gray;
  border-radius: 5px;
  margin-left: 40px;

  &:hover {
    background-color: gray;
    color: white;
    transition: 300ms;
  }
`;

const Ul = styled.ul`
  box-shadow: 2px 4px 8px 4px lightgray;
  padding: 5px;
  /* line-height: 1.8; */
`;

const Suggestion = styled.div`
  margin: 10px;
  padding: 5px;
`;

const Prediction = styled.div`
  font-weight: bold;
`;

const Prediction1 = styled.div``;

export default SearchBar;
