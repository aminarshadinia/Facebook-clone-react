import React from 'react'
import './Sidebar.css'
import SidebarRow from './SidebarRow'
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import MailIcon from '@material-ui/icons/Mail';
import SaveIcon from '@material-ui/icons/Save';
import TimelapseIcon from '@material-ui/icons/Timelapse';
import EventIcon from '@material-ui/icons/Event';
import EWorkIcon from '@material-ui/icons/Work';
import {useStateValue} from '../StateProvider/StateProvider'

const Sidebar = () => {
  const [{user} , dispatch] = useStateValue();
  return (
    <div className='sidebar'>
    <SidebarRow src={user.photoURL} title={user.displayName} />
    <SidebarRow title='Find Friends'  Icon={LocalHospitalIcon}/>
    <SidebarRow title='Groups'  Icon={EmojiFlagsIcon}/>
    <SidebarRow title='Watch'  Icon={MailIcon}/>
    <SidebarRow title='Memories'  Icon={TimelapseIcon}/>
    <SidebarRow title='Saved'  Icon={SaveIcon}/>
    <SidebarRow title='Events'  Icon={EventIcon}/>
    <SidebarRow title='Jobs'  Icon={EWorkIcon}/>
  </div>
  )
}


export default Sidebar
