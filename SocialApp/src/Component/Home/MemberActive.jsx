import { Row, Col, Badge, ListGroup } from "react-bootstrap";
import "./Home.css";
import { FaUserCircle } from "react-icons/fa";

const MemberActive = ({ posts }) => {
  return (
    <Col md={3}>
      <Row className="list-container">
        <ListGroup as="ol">
          {posts.map((post) => {
            let isActive = Math.ceil(Math.random() * 2) % 2;
            return (
              <ListGroup.Item
                as="li"
                className={`d-flex justify-content-between align-items-start member-list-item ${
                  isActive ? "inactive" : ""
                }`}
              >
                <div className="ms-2 me-auto">
                  <div className="fw-bold">
                    {" "}
                    <FaUserCircle /> {post.author}
                  </div>
                </div>
                {isActive ? (
                  <Badge bg="secondary" pill>
                    away
                  </Badge>
                ) : (
                  <Badge bg="success" pill>
                    Active
                  </Badge>
                )}
              </ListGroup.Item>
            );
          })}
        </ListGroup>
      </Row>
    </Col>
  );
};

export default MemberActive;
