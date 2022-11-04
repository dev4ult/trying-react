import React from 'react';

export default function WindowTracker() {
  const [widthWindow, setWidthWindow] = React.useState(window.innerWidth);

  React.useEffect(() => {
    console.log('Setting up component');

    function watchWidth() {
      window.addEventListener('resize', () => {
        setWidthWindow(window.innerWidth);
      });
    }

    window.addEventListener('resize', watchWidth);

    return function () {
      console.log('cleaning up component');
      window.removeEventListener('resize', watchWidth);
    };
  }, []);

  return (
    <div className="Child">
      <h2>Window With : {widthWindow}</h2>
    </div>
  );
}
