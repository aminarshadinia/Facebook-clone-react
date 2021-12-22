import React, { useEffect, useState } from 'react'
import './Feed.css'
import StoryReel from './StoryReel'
import MessageSender from '../MessageSender/MessageSender'
import Post from './Post'
import { useStateValue } from '../StateProvider/StateProvider'
import db from '../../firebase';

const Feed = () => {
  const [{ user }, dispatch] = useStateValue();
  const [posts, setPosts] = useState();

  useEffect(() => {
    db.collection('posts').onSnapshot((snapshot) =>
      setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))));
  }, [])

  return (
    <div className='feed'>
      <StoryReel />
      <MessageSender />
      {/* <Post key={id} profilePic={profilePic} message={message} timestamp={timestamp} username={username} image={image} /> */}

      {posts && posts.map(post => (

        <Post
          key={post.data.id}
          profilePic={post.data.profilePic}
          message={post.data.message}
          timestamp={post.data.timestamp}
          username={post.data.username}
          image={post.data.image} />
          )
        )
      }

    </div>
  )
}

export default Feed
