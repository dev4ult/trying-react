import React from 'react';

export default function Header() {
  return (
    <header>
      <nav className="flex">
        <img id="react-logo" src="./logo/react-icon.png" alt="react icon" />
        <ul className="flex">
          <li>Home</li>
          <li>Pricing</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}
