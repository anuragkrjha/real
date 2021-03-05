
import React from "react";
import "./App.css";
import b1 from "./b1.jpg";
import b2 from "./b2.jpg";
import b3 from "./b3.jpg";
import b4 from "./b4.jpg";


function Nav(){
  return(
    <div className="bm">
        <div className="boxa">
           <div className="box1">
              <img src={b1} alt="loo" />
           </div>
           <div className="box2">
            <h1>2 BHK flat </h1>
            <p>Outer Ring Road, Nagarbhavi, Bangalore,<br></br></p>
            <button className="button">KNOW-MORE</button>
           </div>
        </div>
        <div className="boxb">
            <div className="box1">
                <img src={b2} alt="logo" />
            </div>
            <div className="box2">
                <h1>3 BHK flat</h1>
                <p>bda complex, outer bangalore</p>
                <button className="button">KNOW-MORE</button>
            </div>


        </div>
        <div className="boxc">
            <div className="box1">
                <img src={b3} alt="logo"></img>
            </div>
            <div className="box2">
                <h1>3 BHK flat</h1>
                <p>outer ring road,bangalore</p>
                <button className="button">KNOW-MORE</button>
            </div>
        </div>
        <div className="boxd">
            <div className="box1">
                <img src={b4} alt="logo"></img>
            </div>
            <div className="box2">
                <h1>3 BHK flat</h1>
                <p>HSR LAYOUT,Bangalore</p>
                <button className="button">KNOW-MORE</button>
            </div>
        </div>

    </div>

  );

}
export default Nav;