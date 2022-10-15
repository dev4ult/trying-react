const root = ReactDOM.createRoot(document.querySelector('#root'));
function alertMe() {
  alert('hello World!');
}
const world = 'earth';
const element = /*#__PURE__*/React.createElement("div", {
  className: "box"
}, /*#__PURE__*/React.createElement("button", {
  onClick: alertMe
}, "Click me!"));
root.render(element);