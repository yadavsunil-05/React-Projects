import { useEffect, useState } from "react";
import "./App.css";
import logo from "./assets/logo.png";
import Post from "./Component/Post";
import { db, auth } from "./firebase";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Input } from "@mui/material";
import ImageUpload from "./Component/ImageUpload";
// import PostData from "./Data/PostData";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

function App() {
  const [photos, setPhotos] = useState([])
  const [open, setOpen] = useState(false)
  const [openSignIn, setOpenSignIn] = useState(false)
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  const [username, setUsername] = useState("")
  const [user, setUser] = useState(null)

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      if (authUser)
        setUser(authUser) //User has logged In..
      else
        setUser(null)    //User Logged Out..
    })
  }, [user, username])


  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) => {
      //every time a new post is added this code gets run
      setPhotos(
        snapshot.docs.map((doc) => {
          return { id: doc.id, post: doc.data() };
        })
      );
    });
  }, []);


  const handleSignUp = (e) => {
    e.preventDefault()
    auth.createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        return authUser.user.updateProfile({ displayName: username })
      })
      .catch(err => alert(err.message))
    setOpen(false)
    setPassword("")
    setEmail("")
    setUsername("")
  }


  const handleSignIn = (e) => {
    e.preventDefault()
    auth.signInWithEmailAndPassword(email, password)
      .catch(err => alert(err.message))
    setOpenSignIn(false)
    setPassword("")
    setEmail("")
  }


  return (
    <div className="App">

      <ImageUpload />

      <Modal open={open} onClose={() => setOpen(false)}>
        <Box sx={style}>
          <form>
            <center>
              <img src={logo} alt="logo" className="insta__logo" />
              <Input
                placeholder="Enter UserName"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="app__input"
              />
              <Input
                placeholder="Enter Email.."
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="app__input"
              />
              <Input
                placeholder="Enter Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="app__input"
              />
              <div>
                <button className="app__btn" onClick={handleSignUp} type="submit">
                  Sign Up
                </button>
              </div>
            </center>
          </form>
        </Box>
      </Modal>

      <Modal open={openSignIn} onClose={() => setOpenSignIn(false)}>
        <Box sx={style}>
          <form>
            <center>
              <img src={logo} alt="logo" className="insta__logo" />
              <Input
                placeholder="Enter Email.."
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="app__input"
              />
              <Input
                placeholder="Enter Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="app__input"
              />
              <div>
                <button className="app__btn" onClick={handleSignIn} type="submit">
                  Sign In
                </button>
              </div>
            </center>
          </form>
        </Box>
      </Modal>

      <div className="app__header">
        <div>
          <img src={logo} alt="logo" className="insta__logo" />
        </div>
        <div className="app_btn_container">
          {
            user ?
              (<button onClick={auth.signOut()}
                className="app__btn">
                Logout
              </button>) :
              (
                <div className="app_sign">
                  <div>
                    <button onClick={() => setOpen(true)} className="app__btn">
                      Sign Up
                    </button>
                  </div>
                  <div>
                    <button onClick={() => setOpenSignIn(true)} className="app__btn">
                      Sign In
                    </button>
                  </div>
                </div>)
          }
        </div>
      </div>

      <Post photos={photos} />
    </div>
  );
}

export default App;


/*
useEffect(() => {
  const batch = db.batch()
  PostData.forEach(doc => {
    const docRef = db.collection("posts").doc()
    batch.set(docRef, doc)
  })
  batch.commit()
}, [])
*/