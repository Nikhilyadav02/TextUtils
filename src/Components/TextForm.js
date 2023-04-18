import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TextForm(props) {
  const [text, setText] = useState();
  // const [text, setText] = useState("enter the text here");
  // setText("Text has been change");
  const handleUpClick = () => {
    //console.log('you just clicked on the button');
    //setText('you have clicked on handleUpClicked');
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <h1>{props.heading} </h1>
      <div className="container">
        {/* <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label> */}
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="exampleFormControlTextarea1"
          rows="8"
        ></textarea>
      </div>
      <button className="btn btn-danger mx-1 my-2" onClick={handleUpClick}>
        Convert to uppercase
      </button>
      <button className="btn btn-danger mx-1 my-2" onClick={handleLoClick}>
        Convert to lowercase
      </button>
    </>
  );
}

TextForm.defaultProps = {
  email: "xyz@email.com",
};
