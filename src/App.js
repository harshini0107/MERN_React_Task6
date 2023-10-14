/*
import './App.css';

function App() {
  return (
    <div>
      
    </div>
  );
}

export default App;*/

import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <header className="bg-dark text-white text-center p-5">
        <h1 className="display-4">Harshini Chendilkumar</h1>
        <p className="lead">Live the Moment</p>
      </header>
      <section className="container mt-5">
        <h2>About Me</h2>
        <p> I am currently in my third year of B. Tech  Computer Science and Engineering at VIT Chennai.<br></br> I am expected to graduate in 2025. I have completed my 5th semester.<br></br> I completed my schooling at Srimathi Sundaravalli Memorial School , New Perungalathur , Chennai </p>
      </section>
      <section className="container mt-5">
        <h2>Projects</h2>
        <p>•	Neural Cryptography Based on Generalized Tree Parity Machine for Real-Life Systems <br></br>• Snack Shop Billing Web Application</p>
      </section>
      <section className="container mt-5 mb-5">
        <h2>Contact Me</h2>
        <p> You can contact me at xxxxx@gmail.com. <br></br>My contact number is 91xxxxxxxx <br></br></p>
      </section>
    </div>
  );
}

export default App;

