import { Avatar } from '@material-ui/core'
import React, { useState } from 'react'
import './MessageSender.css'
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoAlbumIcon from '@material-ui/icons/PhotoAlbum';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';


const MessageSender = () => {
  const [input , setInput] = useState('');
  const [imageUrl , setImageUrl] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefaul();
  
    setInput('');
    setImageUrl('');
  };


  return (
    <div className='messageSender'>
      <div className='messageSender__top'>
        <Avatar />
        <form>
          <input className='messageSender__input'
           placeholder={`what's on your mind?`} 
           value={input}
           onChange={e => setInput(e.target.value)}
           />
          <input className='' placeholder={`Image URL (optional)`} 
          value={imageUrl}
          onChange={e => setImageUrl(e.target.value)}
          />

          <button onClick={handleSubmit} type='submit'>Hidden Btn</button>
        </form>
      </div>
      <div className='messageSender__bottom'>
        <div className='messageSender__option'>
          <VideocamIcon style={{color: 'red'}} />
          <h4>Live Video</h4>
        </div>
        <div className='messageSender__option'>
          <PhotoAlbumIcon style={{color: 'green'}} />
          <h4>Photo / Video</h4>
        </div>
        <div className='messageSender__option'>
          <InsertEmoticonIcon style={{color: 'orange'}} />
          <h4>Live Video</h4>
        </div>
      </div>
    </div>
  )
}

export default MessageSender
