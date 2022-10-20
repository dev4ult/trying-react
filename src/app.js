import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));

function Navbar() {
  return (
    <nav className="flex">
      <h1>Logo.</h1>
      <ul>
        <li>Home</li>
        <li>Pricing</li>
        <li>Search</li>
        <li>Login</li>
      </ul>
    </nav>
  );
}

function Header() {
  return (
    <header>
      <h1>This is header</h1>
    </header>
  );
}

function MainContent() {
  return (
    <main>
      <h2>This is a main content</h2>
      <p>lorem ipsum awoipjdaoipw jkdaowip jkdoiapwkd oiaw</p>
      <p>lorem ipsum awoipjdaoipw jkdaowip jkdoiapwkd oiawawoipdj aoiwjd oaiwjdoai wj</p>
    </main>
  );
}

function Footer() {
  return (
    <footer>
      <h1>This is a footer</h1>
    </footer>
  );
}

const element = (
  <div>
    <Navbar />
    <Header />
    <MainContent />
    <Footer />
  </div>
);

root.render(element);
