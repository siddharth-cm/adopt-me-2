import React, { Component } from "react";
import SearchBox from "./searchbox";
import { navigate } from "@reach/router";

class SearchParams extends Component {
  search() {
    navigate("/");
  }
  render() {
    return (
      <div className="search-route">
        <SearchBox search={this.search} />
      </div>
    );
  }
}

export default SearchParams;
