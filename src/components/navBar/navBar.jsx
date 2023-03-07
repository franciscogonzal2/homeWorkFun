import React, { useState } from "react";
import { Link } from "react-router-dom";
import  './navBar.scss';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className="navbar">
        <div className="nav_logo"> HomeWorks Fun </div>
        <div className={`nav_items ${isOpen && "open"}`}>
                <Link to="/">ADD HOMEWORK</Link>
                <Link to="/homeWorks">LIST OF HOMEWORK</Link>
            </div>
            <div className={`nav_toggle ${isOpen && "open"}`} onClick={ () => setIsOpen(!isOpen)} >
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    )
}
export default Navbar