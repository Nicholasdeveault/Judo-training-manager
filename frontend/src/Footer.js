import React, { useEffect, useState } from "react";
import styled from "styled-components";
import moment from "moment";

const Footer = () => {
  const [userInput, setUserInput] = useState("");
  const [newNote, setNewNote] = useState("idle");

  // const handleTime = () => {
  //   {
  //     moment(newNote.timestamp).format("h:mm a • MMMM Do YYYY");
  //   }
  //   console.log(
  //     "HI",
  //     moment(newNote.timestamp).format("h:mm a • MMMM Do YYYY")
  //   );
  // };

  const handleChange = (event) => {
    setUserInput({
      ...userInput,
      [event.target.name]: event.target.value,
    });
    console.log([event.target.name]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const input = { ...userInput, sheetId: "id" };

    fetch("/note", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userInput),
    })
      .then((res) => res.json())
      .then((data) => setNewNote(data));

    if ({ status: 200 }) {
      setNewNote("");
    }
  };

  //add useEffect and fetch for a .get()
  // useEffect(() => {
  //   console.log("Before fetch");
  //   try {
  //     fetch("/notes")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         newNote(data);
  //         console.log("Hell0", data);
  //       });
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }, []);

  //Need to add the Note printed out on the bottom of the page.

  return newNote ? (
    <>
      <Form onChange={(event) => handleChange(event)}>
        <Div>
          <Input
            name="note"
            placeholder=" Add a reminder"
            type="text"
            onChange={(event) => setUserInput(event.target.value)}
          />
          <Button type="submit" onClick={handleSubmit}>
            Add reminder
          </Button>
        </Div>
        <Status userInput={userInput} />
      </Form>
    </>
  ) : (
    <div>Loading...</div>
  );
};

const Form = styled.form`
  height: 145px;
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
