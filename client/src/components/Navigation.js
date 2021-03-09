import React from 'react';
import {NavLink} from 'react-router-dom';

const Navigation = (props) => {
  return (
    <header className='main-navigation'>
      <nav>
        <ul>
          <li>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink to='/products'>Products</NavLink>
          </li>
          <li>
            <NavLink to='/cart'>Cart ({props.cartItemCount})</NavLink>
          </li>
        </ul>
      </nav>
    </header>    
  );
};

export default Navigation;
