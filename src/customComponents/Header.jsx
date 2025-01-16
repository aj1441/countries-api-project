import { Routes, Route, Link } from 'react-router-dom';// import Home from '../pages/Home';
import Home from '../pages/Home';
import SavedCountries from '../pages/SavedCountries';
import Country from '../pages/Country';
import * as FaIcons from 'react-icons/fa';
import { ColorModeButton } from "../components/ui/color-mode"



function Header() {
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
                   <ColorModeButton />
                     {/* <Link className="darkMode" to="/dark-mode">
                     <FaIcons.FaMoon strokeWidth={25} stroke="black" size={15} fill="white"  /> Dark Mode</Link> */}
                   </li>
                 </ul>
               </header>
               <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/savedcountries" element={<SavedCountries />} />
                <Route path="/country/:id" element={<Country />} />
            </Routes>
        </>
    )
}
export default Header;