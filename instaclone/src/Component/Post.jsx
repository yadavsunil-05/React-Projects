import React from 'react'
import "./Post.css"
import Avatar from '@mui/material/Avatar'


function Post({ photos }) {
  // {id: '0C5C9xPwE9NsGgPCUEtz', post: {…}}
  return (
    <div className='post__container'>
      {
        photos.map(({ id, post }) => (
          <div className='post' key={id}>
            <div className="post__header">
              <Avatar src={post.download_url} alt="" className="post__ava" />
              <h3>{post.author}</h3>
            </div>
            <img src={post.download_url} alt=""
              className="post__image"
            />
            <p className='post__text'><strong>{post.author}</strong> When you have a dream, you've got to grab it and
              never let go.</p>
          </div>
        ))
      }
    </div>
  )
}

export default Post