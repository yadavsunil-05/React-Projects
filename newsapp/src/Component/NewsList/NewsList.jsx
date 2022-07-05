import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./NewsList.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

const NewsList = () => {
  const [newsState, setNewsState] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        let res = await axios.get(
          "https://newsapi.org/v2/top-headlines?apiKey=6d36a43e2ab643af9f2a95f64b8bf2cc&country=in"
        );
        setNewsState(res.data.articles);
      } catch (error) {
        console.error(error);
      }
    };
    fetchNews();
  }, []);

  return (
    <>
      <Container>
        <Row>
          {newsState.map((singNews, indx) => (
            <Col md={4} key={indx} className="single-news">
              <Card>
                <Card.Img variant="top" src={singNews.urlToImage} alt="news" />
                <Card.Body>
                  <Card.Title>{singNews.title}</Card.Title>
                  <Card.Text>{singNews.description}</Card.Text>
                  <Button variant="primary">Read More..</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default NewsList;
