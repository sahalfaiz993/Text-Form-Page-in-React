import React,{useState} from 'react'

const TextForm = (props) => {
  const handleUpClick = ()=>{
  console.log("upper case was click" +text)
   const newText = text.toUpperCase();
  setText(newText)
  }
  const handleOnChage = (event)=>{
    console.log("upper case was click")
    setText(event.target.value)

      }
      const handleupdown = (event)=>{
        console.log("upper case was removed")
        setText(event.target.value)
    
          }
          const handleuplower = (event)=>{
            console.log("Convert Lowercase")
        const newText = text.toLowerCase();
  setText(newText)
              }

              
  const  [text ,setText] = useState("enter a text")
  return (
    
   <>

<h1>{props.hea}</h1>
<div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChage}  id="Mytext" rows="8"></textarea>
</div>
  <button className="btn btn-primary" onClick= {handleUpClick}>Convert to Uppercase</button>
  <button className="btn btn-secondary" onClick= {handleupdown}>Text Remove</button>
  <button className="btn btn-danger" onClick= {handleuplower}>Convert to Lowercase</button>
    </>
  )
}

export default TextForm
