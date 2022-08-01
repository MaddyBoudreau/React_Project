import { useState, useContext } from 'react'
import Weather from "./views/Weather"
import Favorites from "./views/Favorites"
import Login from "./views/Login"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom'
// import Inventory from './views/Inventory'
// import InventorySingle from './views/InventorySingle'
// import Profile from './views/Profile'
//import firebase from './firebase'
// import { AuthContext } from './contexts/AuthProvider'
export default function App() {
  // const { login, logout, user } = useContext
  //   (AuthContext)
  return (
    <>
       <Router>
        {/* <nav>
          <ul>
            { <li>
              {<Link to="/">Login</Link>}
            </li> }
            <li>
              <Link to="/Favorites">Favorites</Link>
            </li>
            <li>
              <Link to="/Weather">Weather</Link>
            </li>
          </ul>
           <ul>
            {
              (user.loggedIn) ?
                <li>
                  <button onClick={logout}>Logout</button>
                </li>
                :
                <li>
                  <button onClick={login}>Login</button>
                </li>
            }
          </ul>}
      </nav>  */}



        <nav class="navbar navbar-expand-lg bg-dark">
  <a class="navbar-brand" href="#">Weather App</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#"><li>
              <Link to="/Favorites">Favorites</Link>
            </li><span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#"><li>
              <Link to="/Weather">Weather</Link>
            </li></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#"><li>
              <Link to="/Login">Login</Link>
      </li></a>
          <li class="nav-item">
          <button>Logout</button>
              </li>
      </li>
    </ul>
  </div>
</nav>

        
        {/* <h2>Current User: {user.username}</h2> */}
        <Routes>
          {/* <Route path="/" element={<login />} /> */}
          <Route path="/Favorites" element={<Favorites />} />
          <Route path="/Weather" element={<Weather />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </Router>
    </>
  )
}

