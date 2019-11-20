import React from "react";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.Books array
function SearchForm(props) {
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="Book">Book Name:</label>
        <input
          value={props.search}
          onChange={props.handleSearchInput}
          name="Book"
          // list="Books"
          type="text"
          className="form-control"
        
          id="Book"
        />
        {/* <datalist id="Books">
          {props.Books.map(Book => (
            <option value={Book} key={Book} />
          ))}
        </datalist> */}
        <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
