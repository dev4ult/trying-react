import React from 'react';

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

export default function Main() {
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
