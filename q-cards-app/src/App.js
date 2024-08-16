// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
// import Card from './q-cards/components/Card';
import CardsPage from './q-cards/components/CardsPage';
import AddCard from './q-cards/components/AddCard';

//handles menu bar line 8-37 plus the pages
const App = () => {
  const [showMenu, setShowMenu] = useState(false)
  const [showDefault, setShowDefault] = useState(true);


    const handleMenuToggle = () => {
      setShowMenu(!showMenu);
    };

    const handleOptionClick = (option) => {
      setShowMenu(false);
      if (option === 'Card') {
        setShowDefault(false);
      } else {
        setShowDefault(true);
      }
    };

    return (
      <div className='App-Page'>
        <button className='menu-toggle' onClick={handleMenuToggle}><svg xmlns="http://www.w3.org/2000/svg" height='20px' viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/></svg></button>
        {showMenu && (
          <div className='menu-dropdown'>
            <ul>
              <h3>PAGES</h3>
              <li onClick={() => handleOptionClick('Default')}>⮞ DEFAULT</li>
              <li onClick={() => handleOptionClick('Card')}>⮞ CARD</li>
            </ul>
            </div>
        )}
        {showDefault ? (
          <div className='App'>
            <header className="App-header">
              <img src={logo} className='App-logo' alt="logo" />
              <h3 className='M'>Welcome to React!</h3>
        <p className='Introduction'>
        A popular JavaScript library for building user interfaces with a focus on reusable components, along with HTML and CSS that allow developers to create complex UIs from simple, isolated pieces of code.</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
         ⮞ Learn React
        </a>
            </header>
          </div>
        ) : (
          <div className='card-component'>
          <CardsPage />
          </div>
          )}
          </div>
    );
};

export default App;
