import React from "react";

function Search(props) {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="search">Search:</label>
        
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="book"
          list="books"
          type="text"
          className="form-control"
          placeholder="Type in a book to begin"
          id="book"
        />
        {/* <datalist id="books">
          {props.books.map(book => (
            <option value={book} key={book} />
          ))}
        </datalist> */}
        
        
         <br />
        <button onClick={props.handleFormSubmit} className="btn btn-primary">
          Search
        </button>
      </div>
    </form>
  );
}

export default Search;
