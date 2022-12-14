import React from 'react';

export default function App() {
  const [squares, setSquares] = React.useState(boxes);

  function toggle(id) {
    setSquares((prevSquares) => {
      return prevSquares.map((square) => {
        return square.id === id ? { ...square, on: !square.on } : square;
      });
    });
  }

  const boxesElement = squares.map((square) => {
    return <Box key={square.id} handleClick={toggle.bind(this, square.id)} selectedBox={square} />;
  });

  return <div className="container">{boxesElement}</div>;
}
