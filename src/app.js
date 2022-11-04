import React from 'react';
import WindowTracker from './components/WindowTracker';
import './css/styles.css';

export default function App() {
  const [show, setShow] = React.useState(true);

  function toggleShow() {
    setShow((prevShow) => !prevShow);
  }

  return (
    <div className="App">
      <button type="button" onClick={toggleShow}>
        Toggle WindowTracker
      </button>
      {show && <WindowTracker />}
    </div>
  );
}
