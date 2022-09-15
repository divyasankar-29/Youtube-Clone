import React from 'react'
import SidebarElements from './SidebarElements'
import {Home,Whatshot,Subscriptions,VideoLibrary,History,
    OndemandVideo,WatchLater,ThumbDownAltOutlined,ExpandMoreOutlined} from '@material-ui/icons'

function SideBar() {
  return (
    <div className='sidebar'>
        <SidebarElements selected Icon={Home} title="Home"/>
        <SidebarElements Icon={Whatshot} title="Trending" />
        <SidebarElements Icon={Subscriptions} title="Subscription" />
        <hr />
        <SidebarElements Icon={VideoLibrary} title="Library" />
        <SidebarElements Icon={History} title="History" />
        <SidebarElements Icon={OndemandVideo} title="Your Videos" />
        <SidebarElements Icon={WatchLater} title="Watch Later" />
        <SidebarElements Icon={ThumbDownAltOutlined} title="Liked Videos" />
        <SidebarElements Icon={ExpandMoreOutlined} title="Show More" />
        <hr />
    </div>
  )
}

export default SideBar
