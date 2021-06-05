import React from 'react';
import './Nav.css';
import { useState,useEffect } from 'react';



function Nav() {
    const [show, handleShow] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener('scroll');
        };
    }, []);


    return (
      <div className={`nav ${show && "nav__black"}`}>
        <img
          className="nav__logo"
          src="https://www.freepnglogos.com/uploads/netflix-tv-logo-png-9.png"
          alt="Netflix Logo"
        />
        <img
          className="nav__avatar"
          src="https://www.blexar.com/avatar.png"
          alt="Netflix Logo"
        />
      </div>
    );
}

export default Nav
