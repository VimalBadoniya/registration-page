import React, {  useState } from "react";
import "./LoginPage.css";
import Card from "../UI/Card";

const LoginPage = (props) => {
  let [DisableButton,setDisableButton] = useState(true) ; 
  let PasswordHandler = (event)=>{
    if(event.target.value.length>=8){setDisableButton(false)}
    else {setDisableButton(true)} 
  }

  const LoginHandler = (event)=>{
    localStorage.setItem("isLoggedIn" , "1")
    event.preventDefault();
    props.onLoginClick()
  }


  return (
    <Card>
      <form className="LoginPage" onSubmit={LoginHandler}>
        <div>
          <label htmlFor="username">User Id</label>
          <input id="username" type="email" placeholder="User Email Id" required></input>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            minLength={8}
            placeholder="Min 8 Characters"
            onChange={PasswordHandler}
          ></input>
        </div>
        <div>
          <label htmlFor="collegeName">College Name</label>
          <input id="collegeName" type="text" placeholder="Your College Name" required></input>
        </div>
        <div>
          <button type="submit" className="Button" disabled={DisableButton}>
            Login
          </button>
        </div>
      </form>
    </Card>
  );
};

export default LoginPage;
