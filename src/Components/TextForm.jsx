import React,{useState} from 'react'


function TextForm(props) {
    const changeHandle =(event)=>{
        setText(event.target.value)
    }
    const clickHandle =()=>{
        let updateUpper = text.toUpperCase();
        setText(updateUpper);
    }
    const clickHandle2 =()=>{
        let updateLower = text.toLowerCase();
        setText(updateLower);
    }
    const clickHandle3= ()=>{
        setText("");
    }
    const clickHandle4= ()=>{
        let copyText = document.getElementById("myText");
        copyText.select();
        navigator.clipboard.writeText(copyText.value)
    }
    const[text,setText] = useState("Enter Text")
    console.log(text)
    return (
        <>
        <div className="main">
            <div className="mb-3">
                <h1>{props.textHead}</h1>
                <label for="myText" className="form-label">Example textarea</label>
                <textarea className="form-control" id="myText" rows="8" value={text} onChange={changeHandle}></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={clickHandle}>Convert to UpperCase</button>
            <button className="btn btn-primary mx-2" onClick={clickHandle2}>Convert to LowerCase</button>
            <button className="btn btn-primary mx-2" onClick={clickHandle3}>Clear Text</button>
            <button className="btn btn-primary mx-2"  onClick={clickHandle4}>Copy Text</button>
            
        </div>
        <div className="main2 my-3">
            <h2>Summary</h2>
            <p>Number of Words : {text.split(" ").length} </p>
            <p>Number of Characters : {text.length}</p>
            <p>Estimate Time to read the content : {0.008 * text.split(" ").length } minutes </p>
            <h3>Preview of your Content</h3>
            <p>{text}</p>
        </div>
        </>
    )
}

export default TextForm