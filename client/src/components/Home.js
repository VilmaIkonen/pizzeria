import React from 'react';
import {NavLink} from 'react-router-dom';

const Home = () => {
  return (
    <>
      <main>
        <div class='hero'>
          <h1>Welcome to Pizzeria Mamma Mia online shop!</h1>
          <h2>Ready for super delicious pizza?</h2>
          <NavLink to='/products'><button>Make your order here</button></NavLink>
        </div>
      </main>
    </>
  );
};

export default Home;
