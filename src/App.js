import './App.css';
import Starships from './components/Starships';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import InfoStarship from './components/InfoStarship';


function App() {

  return (
    <div className='main-container'>
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path = '/' element={<Home/>}></Route>
        <Route path = '/starships' element={<Starships />}></Route>
        <Route path = '/starships/:id' element={<InfoStarship/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
