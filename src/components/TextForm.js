import React, { useState } from 'react';



export default function TextForm(props) {
    const handleUpClick=()=>{
        console.log("Uppercase was clicked" + text)
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to upper case","Success")
    }
    const handlelowClick=()=>{
        console.log("Lowercase was clicked" + text)
        let newText1=text.toLowerCase();
        setText(newText1)
        props.showAlert("Converted to lower case","Success")
    }

    const handleOnChange=(event)=>{
        console.log("on change")
        setText(event.target.value);
        
    }
    const handleCopy=()=>{
        var text=document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value)
        props.showAlert("Text copied to clipboard","Success")

    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!", "success");
    }
    const cleartheText=()=>{
        let newtext2=("");
        setText(newtext2)
    }
    const [text ,setText] = useState("Enter your text here");
    // setText("new text");
    return (
    <>
    <div className='contianer' style={{color:(props.mode==='light'?'black':'white')}}>
        <h1>{props.heading}</h1>
        <div class="form-group">
        <textarea name="Forms-control" value={text} onChange={handleOnChange}  style={{backgroundColor:(props.mode==='light'?'white':'grey'),color:(props.mode==='light'?'black':'white')}}  id="myBox" cols="120" rows="8" placeholder='Enter your text here'></textarea>
        </div>
        <button class="btn btn-primary mx-2 my-1" onClick={handleUpClick} >Conver to Uppercase</button>
        <button class="btn btn-primary mx-2 my-1" onClick={handlelowClick} >Conver to Lowercase</button>
        <button class="btn btn-primary mx-2 my-1" onClick={cleartheText} >Clear</button>
        <button class="btn btn-primary mx-2 my-1" onClick={handleCopy} >Copy</button>
        <button class="btn btn-primary mx-2 my-1" onClick={handleExtraSpaces} >Remoce Extra spaces</button>
    </div>
    <div className="contianer my-3" style={{color:(props.mode==='light'?'black':'white')}}>
        <h1>Your text summary</h1>
        <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} word,{text.length}characters </p>
        <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} mins to read</p>
        <h2>preview</h2>
        <p>{text.length>0?text:"Enter something to preview here"}</p>

    </div>
    </>
    )
}
