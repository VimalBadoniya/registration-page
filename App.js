import "./App.css";
import LoginPage from "./Components/LoginPage";
import Header from "./UI/Header";
import Account from "./Components/Account";
import { useEffect, useState } from "react";

function App() {
  const [isLoggedIn , setLoggedIn] = useState(false);

  useEffect(()=>{
    let LoginInfo = localStorage.getItem("isLoggedIn")
    if(LoginInfo==="1"){setLoggedIn(true)}
  } , [])

  const LoginButtonHandler = ()=>{
    setLoggedIn(true)
  }

  const LogoutButtonHandler = ()=>{
    setLoggedIn(false);
    localStorage.removeItem("isLoggedIn")
  }
  return (
    <div className="App">
      <Header></Header>
      {!isLoggedIn && <LoginPage onLoginClick = {LoginButtonHandler}></LoginPage>}
      {isLoggedIn && <Account onLogoutClick={LogoutButtonHandler}></Account>}
    </div>
  );
}

export default App;
