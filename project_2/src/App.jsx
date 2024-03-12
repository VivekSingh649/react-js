import { useState } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(15);

  return (
    <>
      <div className="main_container">
        <h2 className="tittle">Generate a<span>random password</span></h2>
        <div className="pass_length">
            <p>Password length</p>
            <p className="password_length">15</p>
              <input type="range" name="range"  value={length} 
              onChange={()=>{
                console.log(length);
              }} max="30"/>
        </div>
        <div className="input_wrapper">
            <input type="text" placeholder='Password is' readOnly />
            <span className="icon" title="copy text"><i className="bi bi-copy"></i></span>
        </div>
        <button className="button"><i className="bi bi-lightning-fill"></i>Generate</button>
     </div>
    </>
  )
}
export default App
