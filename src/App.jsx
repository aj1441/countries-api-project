import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/my-profile';


function App() {


  return (
    <>
      <header>
        <h1>Where in the world?</h1>
        <ul>
          <li>
            <Link to="/my-profile">Saved Countries</Link>
          </li>
          <li>
            <Link to="/dark-mode">Dark Mode</Link>
          </li>
        </ul>
      </header>
      <div className="body">
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/my-profile" element={<Profile />} />
      </Routes>
    </>
  )
}

export default App
