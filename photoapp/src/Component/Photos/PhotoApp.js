import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import "./PhotoApp.css";
import loader from "../../assets/loader.svg";

const Photo = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const res = await axios.get("https://picsum.photos/v2/list");
        setPhotos(res.data);
      } catch (err) {
        console.log(err);
      }
    }
    getData();
  }, []);

  return (
    <Container>
      <Row className="row-container">
        {(photos.length === 0)
          ?
          <div className="loader">
            <img src={loader} alt="loader" />
          </div>
          :
          photos.map((photo) => (
            <Col md={3} key={photo.id} className="single-photo">
              <Card>
                <Card.Title>{photo.author}</Card.Title>
                <Card.Img
                  variant="top"
                  src={photo.download_url}
                  className="images"
                />
                <Card.Body className="cardBtn">
                  <Button variant="dark"><a href={photo.url} className="explore">Explore</a></Button>
                  <Button variant="dark">
                    <Link to={`/photos/${photo.id}`} className="explore">View Enlarge</Link>
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
      </Row>
    </Container>
  );
};
export default Photo;
