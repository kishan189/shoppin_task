import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './compenents/header'
import SearchBar from './compenents/SearchBar';
import Lower from './compenents/Lower';
function App() {
 
  return (
    <div className='appContainer'>
      <Header/>
      <div className='verticalCenter'>
       <SearchBar/>
       <Lower/>
      </div>
    </div>
  )
}

export default App
