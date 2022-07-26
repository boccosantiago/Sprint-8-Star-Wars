import { React, useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/App.css";
import Starships from "./components/Starships";
import Header from "./components/Header";
import Home from "./components/Home";
import InfoStarship from "./components/InfoStarship";
import Popup from "./components/Popup";
import Unauthorized from "./components/Unauthorized";
import Protected from "./components/Protected";
import NotFound from "./components/NotFound";

function App() {
  const [popupLogin, setPopupLogin] = useState(false);
  const [popupSignin, setPopupSignin] = useState(false);
  const [loginValues, setLoginValues] = useState({
    email: "",
    password: "",
  });

  const [userLogin, setUserLogin] = useState(() => {
    const initial = false;
    try {
      const data = localStorage.getItem("userLogin");
      return data ? JSON.parse(data) : initial;
    } catch (e) {
      return initial;
    }
  })

  useEffect(()=>{
    localStorage.setItem("userLogin", JSON.stringify(userLogin));
  }, [userLogin]);


  const [newUsers, setNewUsers] = useState(() => {
    const initial = [];
    try {
      const data = localStorage.getItem("registeredUsers");
      return data ? JSON.parse(data) : initial;
    } catch (e) {
      return initial;
    }
  });

  useEffect(() => {
    localStorage.setItem("registeredUsers", JSON.stringify(newUsers));
  }, [newUsers]);

  function addNewUserLogin(){
    const newUserLogin = {
      email: loginValues.email,
      password: loginValues.password
    }
    setUserLogin(newUserLogin)
  }

  const isLoggedIn = (userLogin) ? true : false
  
console.log('USERLOGIN', userLogin)

  return (
    <div className="main-container">
      <BrowserRouter>
        <Header
          setPopupLogin={setPopupLogin} 
          setPopupSignin={setPopupSignin} 
          isLoggedIn={isLoggedIn} 
          newUsers={newUsers}
          loginValues={loginValues}
          setLoginValues={setLoginValues}
          setUserLogin={setUserLogin}
          userLogin={userLogin}
        />
        <Popup
          triggerLogin={popupLogin}
          setTriggerLogin={setPopupLogin}
          triggerSignin={popupSignin}
          setTriggerSignin={setPopupSignin}
          isLoggedIn={isLoggedIn}
          setNewUsers={setNewUsers}
          newUsers={newUsers}
          loginValues={loginValues}
          setLoginValues={setLoginValues}
          addNewUserLogin={addNewUserLogin}
        />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path="unauthorized" element={<Unauthorized />}/>
          <Route path="starships" 
          element={ <Protected  isLoggedIn={isLoggedIn}>
          {<Starships />}
          </Protected>} 
          />
          <Route path="starships/:id" 
          element= {<Protected  isLoggedIn={isLoggedIn}>
          {<InfoStarship />}
          </Protected>}
          />
          <Route path='*' element={<NotFound />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
