import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios";

const EnlargePhoto = () => {

  const { id } = useParams()
  const [singleDetail, setSingDetail] = useState({})

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(`https://picsum.photos/id/${id}/info`)
        setSingDetail(res.data)
      }
      catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [id])

  const imgStyle = {
    height: "85vh",
    width: "90vw",
    margin: "30px 0 0",
  };
  return (
    <div>
      <img
        src={singleDetail.download_url}
        alt="logo"
        style={imgStyle}
      />
    </div>
  );
};

export default EnlargePhoto;
