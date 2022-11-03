import React from 'react';
import './css/styles.css';

export default function App() {
  const [starWarsData, setStarWarsData] = React.useState({});
  const [count, setCount] = React.useState(1);

  React.useEffect(() => {
    fetch(`https://swapi.dev/api/people/${count}`)
      .then((res) => res.json())
      .then((data) => setStarWarsData(data));
  }, [count]);

  function handleClick() {
    setCount((prevCount) => prevCount + 1);
  }

  return (
    <div className="App">
      <button type="button" onClick={handleClick}>
        Next Character
      </button>
      <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
    </div>
  );
}
