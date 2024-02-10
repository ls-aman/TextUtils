// import { useState } from "react";
import React, {useState} from 'react';


export default function Form(props) {
    const [text, setText] = useState("");

    const onChange = (event) => {
        setText(event.target.value)
    }

    const onLowClick = () => {
        let newText = text.toLowerCase();         
        setText(newText)
        props.showAlert("Convert to LowerCase", "success");
    }

    const onUpClick = () => {
        let newText = text.toUpperCase();         
        setText(newText)
        props.showAlert("Convert to UpperCase", "success");
    }

    const onClear = () => {
        let newText = "";
        setText(newText)
        props.showAlert("Text is Cleared", "success");
    }

    const onCopy = () => {
        var copyText = document.getElementById("textBox");
        // copyText.select();
        navigator.clipboard.writeText(copyText.value);
        props.showAlert("Text Copied", "success");
    }    

    const onEraseSpace = () => {
        console.log(text.length)
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Text removed", "success");
    }

    const myStyle = {
        backgroundColor: props.mode==='light'?'white':'#292929', 
        color : props.mode==='light'?'black':'white',
    }
    
  return (
    <>
      <div className='container' style={{color: props.mode==='light'?'black':'white'}}>
        <h2>{props.heading}</h2> 
        {/* <div className="mb-3"> */}
            <textarea className="form-control" id="textBox" style={myStyle} rows="8" value={text} onChange={onChange}></textarea>
        {/* </div> */}
            <button className='my-3 mr-1 btn btn-primary' onClick={onUpClick} disabled = {text.length === 0}>UpperClass</button>
            <button className='my-3 mx-1 btn btn-primary' onClick={onLowClick} disabled = {text.length === 0}>LowerClass</button>
            <button className='my-3 mx-1 btn btn-primary' onClick={onClear} disabled = {text.length === 0}>Clear Text</button>
            <button className='my-3 mx-1 btn btn-primary' onClick={onCopy} disabled = {text.length === 0}>Copy Text</button>
            <button className='my-3 mx-1 btn btn-primary' onClick={onEraseSpace} disabled = {text.length === 0}>Remove Extra Space</button>
        </div>
        <div className='container my-3' style={{color: props.mode==='light'?'black':'white'}}>
            <h3>Text Summary</h3>
            <p>{text.split(" ").filter((element) => {return element.length !== 0}).length} Words and {text.length} Letters</p>
            <p>{0.008 * text.split(" ").filter((element) => {return element.length !== 0}).length} minutes to read</p>
            <h3>Preview</h3>
            <p>{text.length > 0 ? text : "Nothing to show!"}</p>
        </div>
        </>
  );
}
