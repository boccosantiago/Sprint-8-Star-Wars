import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import logo from './img/star-wars.svg'


function App() {

const [starships, setStarships] = useState([])

useEffect(() => {
  axios.get("https://swapi.dev/api/starships/")
  .then(res => {
 // console.log('nombre',res.data.results[0].name)
 console.log('data', res.data.results)
      setStarships(res.data.results)})
}, [])

console.log('starships', starships)

const starshipList = starships.map(data => {
  return (
  <div 
  key={data.name} 
  className='ship-container'
  >
    <a href="https://www.google.com" className='name'>{data.name}</a>
    <div className='model'>{data.model}</div> 
    </div>)})

  
  return (
    <div className='main-container'>
      <header>
        <div className='wrapper'>
        <img className='logo' alt='logo' src={logo}/>
        </div>
          <ul className='nav-log'>
          <li><a href='/login'>LOG IN</a></li>
          <li><a href='/signin'>SIGN IN</a></li>
          </ul>
      </header>
      <nav>
      <ul className='nav-links'>
          <li><a href='/'>HOME</a></li>
          <li><a href='/starships'>STARSHIPS</a></li>
      </ul>
      </nav>
      <main>
     {starshipList}
     </main>
    </div>
  );
}

export default App;
