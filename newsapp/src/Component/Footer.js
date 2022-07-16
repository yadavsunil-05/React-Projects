import logo from "../assets/logo_footer.png"
import "./Footer.css"
import { FaLinkedin } from "react-icons/fa"
import { AiFillGithub, AiOutlineMail } from "react-icons/ai"

function Footer() {
  return (
    <div className="footer">
      <div className="footer-info">
        <img src={logo} className="footer-logo" />
        <p> Clone by - Sunil Yadav</p>
      </div>
      <div className="social">
        <a href="https://www.linkedin.com/in/sunil-yadav-01a66b126/" target="_blank" className="social-logo"><FaLinkedin /></a>
        <a href="https://github.com/yadavsunil-05" target="_blank" className="social-logo" ><AiFillGithub /></a>
        <a href="#" className="social-logo" ><AiOutlineMail /></a>
      </div>
    </div>
  )
}

export default Footer










