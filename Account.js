import React from "react";
import "./Account.css"
import MenuBar from "./MenuBar";

const Account = ()=>{
    return (
        <React.Fragment>
          <MenuBar></MenuBar>
          <div className="box">
            <h2 >Welcome Back User !</h2>
          </div>
        </React.Fragment>
        
    )
};

export default Account ; 