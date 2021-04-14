import React, { useState } from "react";
import styled from "styled-components";

const Footer = () => {
  const [note, setNote] = useState("");
  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState();

  const handleChange = (value) => {
    setNote({ ...note, "": value });
  };

  let errMsg = "Note did't go through";
  let successMsg = "Note went through!";

  const handleSubmit = (event) => {
    event.preventDefault();

    const isWritten = note.includes("");
    if (!isWritten) {
      setMessage(errMsg);
    } else {
      setSuccess(true);
      setMessage(successMsg);
    }
  };

  return (
    <FooterDiv>
      <>
        <InnerDiv>
          <p>Leave a Reminder</p>
          <form action="submit">
            <label htmlFor="note" aria-label="note-input">
              <input
                id="note"
                type="text"
                value={note}
                onChange={(ev) => handleChange(ev.target.value, "")}
              />
            </label>
            <button onClick={handleSubmit}>Submit</button>
          </form>
        </InnerDiv>
        <Message>
          <Msg>{message}</Msg>
        </Message>
      </>
    </FooterDiv>
  );
};

const FooterDiv = styled.footer`
  border: 2px solid red;
  padding-top: 60px;
`;

const InnerDiv = styled.div``;

const Message = styled.div``;

const Msg = styled.p``;

export default Footer;
