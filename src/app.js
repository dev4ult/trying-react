const root = ReactDOM.createRoot(document.querySelector('#root'));

function App() {
  const [count, setCount] = React.useState(0);
  const [click, setClick] = React.useState(false);

  // trying useEffect
  React.useEffect(
    function () {
      console.log(document.querySelector('.newDiv'));
    },
    [click]
  );

  return (
    <div className="newDiv">
      <button onClick={setClick.bind(this, true)}>Click me</button>
      <button onClick={setCount.bind(this, count + 1)}>Tambah</button>
      <span>Count saat ini {count}</span>
    </div>
  );
}

const element = (
  <main>
    <h2>Something here</h2>
    <App />
  </main>
);

root.render(element);
