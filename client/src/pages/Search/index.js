import React, { Component } from "react";
import Hero from "../../components/Hero";
import Container from "../../components/Container";
import API from "../../utils/API";
import Row from "../../components/Row";
import Col from "../../components/Col";
import Card from "../../components/Card";
// import SearchResults from "../../components/SearchResults";
import SearchForm from "../../components/SearchForm";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      books: [],
    //   title: "",
    //   authors:[],
    //   description:[],
    //   image:"",
    //   link:""
     };
  }

  // // handle search input term
  handleSearchInput = event => {
    event.preventDefault();
    const value =  event.target.value
    this.setState({ search: value });
    console.log(this.state.search)
  };
  // on form sumbit -> search for books
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchBooks(this.state.search);
   console.log("button clicked")
  }


searchBooks = query => {
      API.searchBooks(query)
       .then((res) => {
         console.log(res)
            let results = res.data.items
            const booksArray = results.map((obj) => {
                const { title, 
                        authors, 
                        description, 
                        previewLink, 
                        imageLinks} = obj.volumeInfo;
               
                return { 
                    title,
                    authors,
                    description,
                    link: previewLink,
                    imageLinks,
                };
            })
            this.setState({
                books: booksArray
                
            })
       
    })
  };

render () {
  return (
    <div>
      <Hero >
        <h1>Google Book Search</h1>
      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <SearchForm
              handleSearchInput={this.handleSearchInput}
              handleFormSubmit={this.handleFormSubmit} />
          </Col>
        </Row>
        <Row>
          <Col size="md-12" >
            {this.state.books.map(book => {
              return(
        
              <Card
                title = {book.title}
                key = {book.id}
                authors = {book.authors}
                description = {book.description}
                image = {book.imageLinks.thumbnail}
                link = {book.previewLink}
                // onClick = {handleSaveBook}
              />
                )
                })} 
               
          </Col>
        </Row>
      </Container>
   </div>
  );
}
}
export default Search;
