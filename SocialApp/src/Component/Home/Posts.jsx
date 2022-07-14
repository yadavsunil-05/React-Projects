import { Card, Button, Row, Col, Badge } from "react-bootstrap";
import loader from "../../assets/loader.svg";
import { AiOutlineLike, AiFillLike } from "react-icons/ai";
import { FaRegComment, FaUserCircle } from "react-icons/fa";

const Posts = ({ posts, setPosts }) => {
  const toggleLike = (postId) => {
    let updatedPost = posts.map((sinPost) => {
      if (sinPost.id === postId) {
        if (sinPost.isLiked) {
          sinPost.likeCount = sinPost.likeCount - 1;
          sinPost.isLiked = false;
        } else {
          sinPost.likeCount = sinPost.likeCount + 1;
          sinPost.isLiked = true;
        }
      }
      return sinPost;
    });
    setPosts(updatedPost);
  };

  const incCommentCnt = (postId) => {
    let updatedPost = posts.map((sinPost) => {
      if (sinPost.id === postId) {
        sinPost.commentCount = sinPost.commentCount + 1;
      }
      return sinPost;
    });
    setPosts(updatedPost);
  };

  return (
    <Col md={6}>
      <Row className="row-container">
        {posts.length === 0 ? (
          <div className="loader">
            <img src={loader} alt="loader" />
          </div>
        ) : (
          posts.map((post) => (
            <Col md={12} key={post.id} className="single-photo">
              <Card>
                <Card.Title className="cardTitle">
                  <div>
                    <FaUserCircle /> {post.author}
                  </div>
                  <p className="muted">{post.time}</p>
                </Card.Title>
                <Card.Img
                  variant="top"
                  src={post.download_url}
                  className="images"
                />
                <Card.Body className="socialBtn">
                  {post.desc}
                  <div className="Btn-Container">
                    <div className="Btn-InnerCont">
                      <Button
                        variant="light"
                        onClick={() => toggleLike(post.id)}
                        className="actionBtn"
                      >
                        {post.isLiked ? <AiFillLike /> : <AiOutlineLike />}
                        <Badge pill bg="dark">
                          {post.likeCount}
                        </Badge>
                      </Button>
                    </div>
                    <div className="Btn-InnerCont">
                      <Button
                        variant="light"
                        onClick={() => incCommentCnt(post.id)}
                        className="actionBtn"
                      >
                        <FaRegComment />
                        <Badge pill bg="dark">
                          {post.commentCount}
                        </Badge>
                      </Button>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))
        )}
      </Row>
    </Col>
  );
};
export default Posts;
