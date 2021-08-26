import React,{useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
     
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleOnChannge = (event)=>{
        console.log("No change");
        setText(event.target.value);
    }
    
    const [text,setText] = useState('');
    return (
        <div>
            <h1>{props.heading}</h1>
            <div className=" container mb-3">
                   
                    <textarea className="form-control" value={text} onChange={handleOnChannge} id="myBox" rows="8"></textarea>
                    <button className="btn btn-primary my-3" onClick={ handleUpClick}>Convert To Upper Case</button>
                </div>
            </div>
            )
}
