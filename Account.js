import React from "react";
import "./Account.css"
import MenuBar from "./MenuBar";

const Account = (props)=>{
    return (
        <React.Fragment>
          <MenuBar onLogout={props.onLogoutClick}></MenuBar>
          <div className="box">
            <h2 >Welcome Back User !</h2>
          </div>
        </React.Fragment>
        
    )
};

export default Account ; 