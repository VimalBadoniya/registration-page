import React, { useEffect, useState, useReducer } from "react";
import "./LoginPage.css";
import Card from "../UI/Card";
import Input from "../Input/Input";

const LoginPage = (props) => {
  const [DisableButton, setDisableButton] = useState(true);
  //const [isEmailValid, setEmailValid] = useState(false);
  const [isPasswordValid, setPasswordValid] = useState(false);
  const [isCollegeValid, setCollegeValid] = useState(false);

  const initialEmail = { value: "", isValid: false };
  const emailReducer = (state, action) => {
    return { value: action.value, isValid: action.isValid };
  };
  const [EmailValid, dispatchEmail] = useReducer(emailReducer, initialEmail);

  const PasswordHandler = (event) => {
    if (event.target.value.length === 8) {
      setPasswordValid(true);
      console.log("length = 8");
    } else if (event.target.value.length < 8) {
      setPasswordValid(false);
      console.log("length < 8");
    }
  };

  const emailHandler = (event) => {
    dispatchEmail({
      value: event.target.value,
      isValid: event.target.value.includes("@"),
    });
    // if (event.target.value.includes("@")) {
    //   setEmailValid(true);
    // } else {
    //   setEmailValid(false);
    // }
  };

  const CollegeNameHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setCollegeValid(true);
    } else {
      setCollegeValid(false);
    }
  };

  useEffect(() => {
    let abc = setTimeout(() => {
      if (isCollegeValid && EmailValid.isValid && isPasswordValid) {
        setDisableButton(false);
      } else {
        setDisableButton(true);
      }
    }, 3000);

    return () => {
      clearTimeout(abc);
    };
  }, [isCollegeValid, EmailValid.isValid, isPasswordValid]);

  const LoginHandler = (event) => {
    localStorage.setItem("isLoggedIn", "1");
    event.preventDefault();
    props.onLoginClick();
  };

  return (
    <Card>
      <form className="LoginPage" onSubmit={LoginHandler}>
        <Input
          id="userName"
          type="text"
          placeholder="Enter User Name"
          label="User Name"
          onChange={emailHandler}
        ></Input>
        <Input
          id="password"
          type="password"
          placeholder="Min 8 Characters"
          label="Password"
          onChange={PasswordHandler}
          
        ></Input>
        <Input
          id="collegeName"
          type="text"
          placeholder="Your College Name"
          label="College Name"
          onChange={CollegeNameHandler}
        ></Input>

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
