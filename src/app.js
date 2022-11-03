import React from 'react';
import WindowTracker from './components/WindowTracker';
import './css/styles.css';

export default function App() {
  React.useEffect(() => {}, [window.innerWidth]);

  return (
    <div className="App">
      <WindowTracker />
    </div>
  );
}
