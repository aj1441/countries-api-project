import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import SavedCountries from './pages/SavedCountries';
import Country from './pages/Country';
import * as FaIcons from 'react-icons/fa';
// import Header from './custom_components/header';
// import { useState } from 'react';
// import Header from './custom_components/header';


function App() {


  return (
    <>
      <header className="header">
        <h1>Where in the world?</h1>
        <ul className="navContainter">
          <li>

            <Link className="linkToSaved" to="/SavedCountries">
              <FaIcons.FaHeart strokeWidth={25} stroke="black" size={15} fill="white"/> Saved Countries
            </Link>
          </li>
          <li>
            <Link className="darkMode" to="/dark-mode">
            <FaIcons.FaMoon strokeWidth={25} stroke="black" size={15} fill="white"  /> Dark Mode</Link>
          </li>
        </ul>
      </header>
      <div className="body">
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/savedcountries" element={<SavedCountries />} />
        <Route path="/country" element={<Country />} />
      </Routes>
    </>
  )
}

export default App
