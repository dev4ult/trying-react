const root = ReactDOM.createRoot(document.querySelector('#root'));
function App() {
  const [count, setCount] = React.useState(0);
  const [click, setClick] = React.useState(false);

  // trying useEffect
  React.useEffect(function () {
    console.log(document.querySelector('.newDiv'));
  }, [click]);
  return /*#__PURE__*/React.createElement("div", {
    className: "newDiv"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: setClick.bind(this, true)
  }, "Click me"), /*#__PURE__*/React.createElement("button", {
    onClick: setCount.bind(this, count + 1)
  }, "Tambah"), /*#__PURE__*/React.createElement("span", null, "Count saat ini ", count));
}
const element = /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("h2", null, "Something here"), /*#__PURE__*/React.createElement(App, null));
root.render(element);