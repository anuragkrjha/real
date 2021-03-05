import React from "react";
import "./App.css";
import anu from "./anu.jpg";

function Menu(){
    return(
        <div className="nav" >
            <ul>
             <li><a className="so">FORTIS</a></li>
             <li><div className="navi"><a className="navi"><img src={anu}></img></a></div></li>
            </ul>
        </div>
    );

}
export default Menu;