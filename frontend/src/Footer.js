import React, { useEffect, useState } from "react";
import styled from "styled-components";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";

const Footer = () => {
  const dispatch = useDispatch();
  const [userInput, setUserInput] = useState("");
  const [newNote, setNewNote] = useState("");

  // const handleTime = () => {
  //     moment(newNote.timestamp).format("h:mm a • MMMM Do YYYY");
  //   };

  return (
    <>
      <Form>
        <Div>
          <Input
            name="note"
            value={newNote}
            placeholder=" Add a reminder"
            type="text"
            onChange={(event) => setNewNote(event.target.value)}
          />
          <Button
            type="submit"
            onClick={() => {
              console.log(newNote);
              const noteInfo = {
                type: "add_note",
                payload: {
                  noteType: newNote,
                  noteTime: moment(newNote.timestamp).format(
                    "h:mm a • MMMM Do YYYY"
                  ),
                },
              };
              dispatch(noteInfo);
            }}
          >
            Add reminder
          </Button>
        </Div>
        <Status>{newNote}</Status>
      </Form>
    </>
  );
};

const Form = styled.div`
  /* height: 100px; */
  display: flex;
  justify-content: column;
`;

const Input = styled.input`
  margin-left: 50px;
  margin-right: 20px;
  height: 30px;
  border: 2px solid gray;
  border-radius: 5px;

  &:hover {
    border: 2px solid black;
  }
`;

const Button = styled.button`
  width: 100px;
  height: 30px;
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

const Div = styled.div``;

const Status = styled.p``;

export default Footer;
