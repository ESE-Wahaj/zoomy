const React = require("react");
const ReactDOM = require("react-dom");
const App = require("./App").default;
const { Provider } = require("react-redux");
const { store } = require("./app/store");
const { BrowserRouter } = require("react-router-dom");

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
