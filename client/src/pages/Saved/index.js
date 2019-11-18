import React, { Component } from "react";
// import Card from "../../components/Card";
// import axios from "axios";
import Hero from "../../components/Hero";
import Container from "../../components/Container";
import Row from "../../components/Row";
import Col from "../../components/Col";


class Saved extends Component {
  state = {
    results: [],
    query: "",
    books: []
    };
  
//  componentDidMount() {
//     API.searchBooks()
//       .then(res => this.setState({ books: res.data.items }))
//       this.showResults(this.books)
//       .catch(err => console.log(err));
//   }


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

        <Hero >
        <h1>Google Book Search</h1>
        
      </Hero>
      <Container style={{ marginTop: 30 }}>
        
        <Row>
          
          <Col size="md-12">
          Saved Books
          </Col>
        </Row>
      </Container>
        
      </div>
    );
  }
}

export default Saved;
