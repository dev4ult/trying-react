import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from 'Header.js';
const root = ReactDOM.createRoot(document.querySelector('#root'));

// React Component
function List() {
  return (
    <>
      <h1>reason why i learn react</h1>
      <ol>
        <li>Unique</li>
        <li>MERN Stack</li>
        <li>Fun</li>
      </ol>
    </>
  );
}

// jsx is actually just returning javascript literal object
function Main() {
  return (
    <main>
      <h1>Fun facts about React</h1>
      <ol>
        <li>Was first released in 2013</li>
        <li>Was originally create by Jordan Walke</li>
        <li>Has well over 100k stars on GitHub</li>
        <li>Is maintainerd by Facebook</li>
        <li>Powers thousand of enterprise apps, including mobile apps</li>
      </ol>
      <List />
    </main>
  );
}

function Footer() {
  return (
    <footer>
      <small>c 2021 Ziroll development. All rights reserverd.</small>
    </footer>
  );
}

// include all here
const page = (
  <>
    <Header />
    <Main />
    <Footer />
  </>
);

root.render(page);
