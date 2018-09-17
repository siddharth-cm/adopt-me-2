import React, { Component } from "react";
import { connect } from "react-redux";
import getBreeds from "../reducers/getBreeds";
import changeLocation from "../actions/changeLocation";
import changeAnimal from "../actions/changeAnimal";
import changeBreed from "../actions/changeBreed";
import { ANIMALS } from "petfinder-client";

class SearchBox extends Component {
  render() {
    return (
      <div className="search-params">
        <label htmlFor="location">
          Location
          <input
            id="location"
            name="location"
            onChange={this.props.handleLocationChange}
            onBlur={this.props.handleLocationChange}
            value={this.props.location}
            placeholder="Location"
          />
        </label>
        <label htmlFor="animal">
          animal
          <select
            id="animal"
            name="animal"
            value={this.props.animal}
            onChange={this.props.handleAnimalChange}
            onBlur={this.props.handleAnimalChange}
          >
            <option />
            {ANIMALS.map(animal => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="breed">
          breed
          <select
            disabled={!this.props.breeds.length}
            id="breed"
            value={this.props.breed}
            onChange={this.props.handleBreedChange}
            onBlur={this.props.handleBreedChange}
          >
            <option />
            {this.props.breeds.map(breed => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>
        <button onClick={this.props.search}>Submit</button>
      </div>
    );
  }
}

const mapStateToProps = ({ breed, breeds, animal, location }) => ({
  breed,
  breeds,
  animal,
  location
});

const mapDispatchToProps = dispatch => ({
  handleAnimalChange(event) {
    dispatch(changeAnimal(event.target.value));
    dispatch(getBreeds());
  },
  handleBreedChange(event) {
    dispatch(changeBreed(event.target.value));
  },
  handleLocationChange(event) {
    dispatch(changeLocation(event.target.value));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBox);
