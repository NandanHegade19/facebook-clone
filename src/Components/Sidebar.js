import React from 'react'
import SidebarRow from './SidebarRow'
import LocalHospitalIcon from '@material-ui/icons/LocalHospital'
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags'
import PeopleIcon from '@material-ui/icons/People'
import ChatIcon from '@material-ui/icons/Chat'
import StorefrontIcon from '@material-ui/icons/Storefront'
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary'
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import ExpandMoreOutlined from '@material-ui/icons/ExpandMoreOutlined'
import '../Styles/Sidebar.css'
import { useStateValue } from '../StateProvider'
import { useHistory } from 'react-router-dom'


const Sidebar = () => {
    const [{ user }, dispatch] = useStateValue()
    const history = useHistory();
    const games = (e) => {
        e.preventDefault();
        history.push("/games")
    }
    const videos = (e) => {
        e.preventDefault();
        history.push("/videos")
      }
    return (
        <div className = "icons">
            {/* <SidebarRow src={user.photoURL} title={user.displayName} /> */}
            <SidebarRow src={user.photoURL} title={user.displayName} />
            <a href="https://covid-tracker-6cd23.web.app/" target = "_blank"><SidebarRow Icon={LocalHospitalIcon} title='COVID-19 Information Center' /></a> 
            <div  onClick = {games}><SidebarRow Icon={SportsEsportsIcon} title='Games'/></div>
            
            <SidebarRow Icon={PeopleIcon} title='Friends' />
            <SidebarRow Icon={ChatIcon} title='Messenger' />
            <SidebarRow Icon={StorefrontIcon} title='Marketplace' />

            <div  onClick = {videos}><SidebarRow Icon={VideoLibraryIcon} title='Videos' /></div>
            <SidebarRow Icon={ExpandMoreOutlined} title='More' />
        </div>
    )
}

export default Sidebar