import React from "react";
import { Provider } from "react-redux";
import { Router, Link } from "@reach/router";
import Results from "./components/results";
import Details from "./components/details";
import SearchParams from "./components/searchparams";
import store from "./store";

const App = () => (
  <Provider store={store}>
    <div>
      <header>
        <Link to="/">Adopt Me!</Link>
        <Link to="/search-params">
          <span aria-label="search" role="img">
            🔍
          </span>
        </Link>
      </header>
      <Router>
        <Results path="/" />
        <Details path="/details/:id" />
        <SearchParams path="/search-params" />
      </Router>
    </div>
  </Provider>
);

export default App;
