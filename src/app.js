const root = ReactDOM.createRoot(document.querySelector('#root'));

function alertMe() {
  alert('hello World!');
}

const world = 'earth';
const element = (
  <div className="box">
    <button onClick={alertMe}>Click me!</button>
  </div>
);

root.render(element);
