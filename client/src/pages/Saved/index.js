import React, { Component } from "react";
import API from "../utils/API";
// import Card from "../components/Card";
// import axios from "axios";

class Saved extends Component {
  state = {
    results: [],
    query: "",
    books: []
    };
  
 componentDidMount() {
    API.searchBooks()
      .then(res => this.setState({ books: res.data.items }))
      this.showResults(this.books)
      .catch(err => console.log(err));
  }


  //  searchBooks = () => {
  //                   .then(res => {
  //               const validArr = res.data.items.filter(result => 
  //                   result.volumeInfo.title &&
  //                   result.volumeInfo.infoLink &&
  //                   result.volumeInfo.authors &&
  //                   result.volumeInfo.description &&
  //                   result.volumeInfo.imageLinks &&
  //                   result.volumeInfo.imageLinks.thumbnail);
  //                   this.setState({
  //                       books: validArr
  //                   })
  //                   this.showResults(validArr);
  //           })
  //           .catch(err => {
  //               console.log(err);
  //           });




  render() {
    return (
      <div>
        Search Results
      </div>
    );
  }
}

export default Saved;
