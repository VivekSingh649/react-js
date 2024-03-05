import { useState } from 'react';
import './index.css'

export default function ChangeBackground(){
    
    function setBackground(e){
        let body = document.getElementById("root");
        body.style.backgroundColor = e;
    }

    return(
        <>
            <div className="btns_wrapper">
                <div className="btn" style={{ backgroundColor: "#FF6F61" }} onClick={() => setBackground("#FF6F61")}></div>
                <div className="btn" style={{ backgroundColor: "#87CEEB" }} onClick={() => setBackground("#87CEEB")}></div>
                <div className="btn" style={{ backgroundColor: "#E6E6FA" }} onClick={() => setBackground("#E6E6FA")}></div>
                <div className="btn" style={{ backgroundColor: "#50C878" }} onClick={() => setBackground("#50C878")}></div>
                <div className="btn" style={{ backgroundColor: "#DAA520" }} onClick={() => setBackground("#DAA520")}></div>
                <div className="btn" style={{ backgroundColor: "#DA70D6" }} onClick={() => setBackground("#DA70D6")}></div>
                <div className="btn" style={{ backgroundColor: "#40E0D0" }} onClick={() => setBackground("#40E0D0")}></div>
                <div className="btn" style={{ backgroundColor: "#FFDAB9" }} onClick={() => setBackground("#FFDAB9")}></div>
                <div className="btn" style={{ backgroundColor: "#4169E1" }} onClick={() => setBackground("#4169E1")}></div>
                <div className="btn" style={{ backgroundColor: "#DC143C" }} onClick={() => setBackground("#DC143C")}></div>
            </div>
        </>
    )
}
