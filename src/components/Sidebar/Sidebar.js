import React from 'react'
import './Sidebar.css'
import SidebarRow from './SidebarRow'
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import MailIcon from '@material-ui/icons/Mail';

const Sidebar = () => {
  return (
    <div className='sidebar'>
    <SidebarRow title='Pages' src={'https://www.w3schools.com/howto/img_avatar.png'} />
    <SidebarRow title='Friends'  Icon={LocalHospitalIcon}/>
    <SidebarRow title='Warlock'  Icon={EmojiFlagsIcon}/>
    <SidebarRow title='Mages'  Icon={MailIcon}/>
  </div>
  )
}


export default Sidebar
