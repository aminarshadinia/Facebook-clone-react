import React from 'react'
import StoryReel from './StoryReel'
import MessageSender from '../MessageSender/MessageSender'
import './Feed.css'
import Post from './Post'

const Feed = () => {
  return (
    <div className='feed'>
      <StoryReel />
      <MessageSender />
      {/* <Post key={id} profilePic={profilePic} message={message} timestamp={timestamp} username={username} image={image} /> */}
      <Post 
      profilePic={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_vs_k5NOVwYHvlV8obHSPjsmlQG-6BLI5-Q&usqp=CAU'} 
      message={'New Post is Here'} 
      timestamp={'This is a timestamp'} 
      username={'AminArshadi'} 
      image={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNu5wnDZDHVNdpRUeND2y8XaVqWogoVk2xsf2zBsjEzvJLzHR6Ow6iwo95d3foYrGcs8E&usqp=CAU'} />
      <Post 
      profilePic={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_vs_k5NOVwYHvlV8obHSPjsmlQG-6BLI5-Q&usqp=CAU'} 
      message={'Second post with no image is Here...'} 
      timestamp={'This is a timestamp'} 
      username={'AminArshadi'} 
      image={null} />
    </div>
  )
}

export default Feed
