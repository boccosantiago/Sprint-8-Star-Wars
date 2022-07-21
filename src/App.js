import {React, useState} from 'react';
import './styles/App.css';
import Starships from './components/Starships';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import InfoStarship from './components/InfoStarship';
import Popup from './components/Popup';


function App() {
  const [popupLogin, setPopupLogin] = useState(false);
  const [popupSignin, setPopupSignin] = useState(false);
  
  return (
    <div className='main-container'>
      <BrowserRouter>
      <Header 
      setPopupLogin={setPopupLogin}
      setPopupSignin={setPopupSignin}
      />
      <Popup
        triggerLogin={popupLogin}
        setTriggerLogin={setPopupLogin}
        triggerSignin={popupSignin}
        setTriggerSignin={setPopupSignin}
      />
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path = '/starships' element={<Starships />}></Route>
        <Route path = '/starships/:id' element={<InfoStarship/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
