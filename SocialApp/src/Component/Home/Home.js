import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row } from "react-bootstrap";
import "./Home.css";
import dummyPostText from "../../assets/dummyPostText.json";
import dummyPostTime from "../../assets/dummyPostTime.json";
import dummyChatText from "../../assets/dummyChatText.json"
import MemberActive from "./MemberActive";
import ChatList from "./ChatList";
import Posts from "./Posts";

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const res = await axios.get("https://picsum.photos/v2/list");
        const response = [...res.data]
        const PostsWithLike = response.map(post => {
          return {
            ...post,
            isLiked: false,
            likeCount: Math.ceil(Math.random() * 1000),
            commentCount: Math.ceil(Math.random() * 10),
            time: dummyPostTime[Math.ceil(Math.random() * 9)],
            desc: dummyPostText[Math.ceil(Math.random() * 3)],
            chat: dummyChatText[Math.ceil(Math.random() * 5)]
          }
        })
        setPosts(PostsWithLike);
      } catch (err) {
        console.log(err);
      }
    }
    getData();
  }, []);

  return (
    <Container className="posts-container">
      <Row className="Parent-Container">
        <MemberActive posts={posts} />
        <Posts posts={posts} setPosts={setPosts} />
        <ChatList posts={posts} />
      </Row>
    </Container>
  );
};
export default Home;
