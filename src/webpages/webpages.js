import React from 'react'
import {BrowserRouter as Router, Route, NavLink, Routes} from 'react-router-dom'
import Home from './home';
import User from './user';
function Webpages(){

    return(
        <Router>
            <NavLink to="/"> <span>Home</span></NavLink>
            <NavLink to="/user"> <span>User</span></NavLink>

            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/user/:id" element={<User/>}></Route>
            </Routes>
        </Router>
    )
}
export default Webpages;