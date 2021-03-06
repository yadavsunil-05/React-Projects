import "./Shorts.css"
import app from "../assets/app.png"
import google from "../assets/google.png"
import error from "../assets/error.gif"
import loader from "../assets/loader.gif"

function Shorts({ news }) {
  return (
    <div className="main-container">
      <div className="header-container hidden">
        <p className="header-text">For the best experience use inshorts app on your smartphone</p>
        <img src={app} alt="app" className="store" />
        <img src={google} alt="google" className="store" />
      </div>
      <div className="short-container">
        {news.length === 0 ? <img src={loader} /> :
          news.map(sinInfo => (
            <div className="card-container" key={sinInfo.id}>
              <div className="img-container">
                <img src={sinInfo.urlToImage ? sinInfo.urlToImage : error} alt="" className="card-img" />
              </div>
              <div className="info">
                <p className="info-heading">{sinInfo.title}</p>
                <p className="info-subheading"> <b>short </b> by {sinInfo.author ? sinInfo.author : "unknown"} <span>{sinInfo.publishedAt.slice(0, 10)}</span></p>
                <p className="info-desc">{`${sinInfo.content ? sinInfo.content.slice(0, 200) : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, quo corrupti? Laboriosam omnis tempore autem mollitia, at voluptatem aspernatur ad facere non id amet ipsa labore dolor similique quibusdam magnam."}`}
                </p>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Shorts