import React from 'react'
import './Widgets.css'

const Widgets = () => {
  return (
    <div className='widget'>
      <iframe
        src='https://www.facebook.com/
        plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FCleverProgrammerr%2F&tabs=timeline&width=340&height=1500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId'
        width='340'
        height='1500'
        scrolling='no'
        style={{border :'none' , overflow: 'hidden'}}
        frameBorder='no'
        allowTransparency='true'
        allow='encrypted-media'
      >

      </iframe>
    </div>
  )
}

export default Widgets
