import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import SearchForm from "../components/SearchForm";

function About() {
  return (
    <div>
      <Hero >
        <h1>Google Book Search</h1>
        
      </Hero>
      <Container style={{ marginTop: 30 }}>
        
        <Row>
          <Col size="md-12">
           <SearchForm/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
