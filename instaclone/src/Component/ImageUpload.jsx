import React, { useState } from 'react'
import { storage, db } from "../firebase"




function ImageUpload() {

  const [caption, setCaption] = useState("")
  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);

  const handleChange = (e) => {
    if (e.target.files[0])
      setImage(e.target.files[0])
  }

  const handleUpload = (e) => {
    const uploadTask = storage.ref(`images/${image.name}`).put(image)
  }

  return (
    <div>
      <input type="text" placeholder="Enter the Caption..."
        value={caption} onChange={(e) => setCaption(e.target.value)}
      />
      <input type="file" onChange={handleChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  )
}

export default ImageUpload