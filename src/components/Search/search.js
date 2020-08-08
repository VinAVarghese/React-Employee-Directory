import React from "react";
import "./search.css";

function Search(props) {

  return (
    <form className="row justify-content-center">
      <div className="form-group">
        <input
          onChange={props.handleInputChange}
          value={props.value}
          name="search"
          type="text"
          className="form-control text-center"
          placeholder="Search For an Employee"
          id="search"
        />
        <br />
        <div className="row justify-content-center">
          <button onClick={props.handleFormSubmit} className="btn btn-primary">
            Search
          </button>
        </div>
      </div>
    </form>
  );
}

export default Search;
