import "./Home.css";
import { Col, Badge, ListGroup } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";

const ChatList = ({ posts }) => {
  return (
    <Col md={3}>
      <ListGroup as="ol">
        {posts.map((post) => (
          <ListGroup.Item
            as="li"
            className="d-flex justify-content-between align-items-start chat-list-item"
            key={post.id}
          >
            <div className="ms-2 me-auto">
              <div className="fw-bold">
                <FaUserCircle /> {post.author}
                <p className="chat-text">{post.chat.message}</p>
              </div>
            </div>
            <Badge bg="primary" pill>
              {post.chat.messageCount}
            </Badge>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Col>
  );
};

export default ChatList;
