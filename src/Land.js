import React from "react";
import "./App.css";
import l from "./l.jpg";

function Land(){
    return(
        <div className="l">

            <div className="right">
                <h2>Fortis construction</h2>
                <p>fortis construction has a unique business model with <br /> proven experience in innovative thinking  .Project and cost <br/> management we are focused on delevering high quality work</p>
        

            </div>
            <div className="limks">
                <h2>links</h2>
                <ul>
                    <li> About us</li>
                    <li>contact us</li>
                    <li>submit property</li>
                </ul>
            </div>
            <div className="la">
                <img src={l}></img>

            </div>


        </div>

    );
}
export default Land;