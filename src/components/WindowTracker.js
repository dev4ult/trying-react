import React from 'react';

export default function WindowTracker() {
  const [widthWindow, setWidthWindow] = React.useState(window.innerWidth);

  React.useEffect(() => {
    console.log('Test');

    function watchWidth() {
      window.addEventListener('resize', () => {
        setWidthWindow(window.innerWidth);
      });
    }
  }, []);

  return (
    <div className="Child">
      <button type="button">Toggle WindowTracker</button>
      <h2>Window With : {widthWindow}</h2>
    </div>
  );
}
