import React from 'react'
import '../App.css'
const Sidebar = () => {
  return (
    <div className='Sidebar'>
      <div className='Sidebar-item_1'>
        <img src="https://www.globalsign.com/application/files/7416/3763/0034/General_Banner_WhatisIOT_4_APAC_2021_11_22.jpg" alt="profilepicture"/>
        <p>IOT HUB</p>
        </div>
      <div className='Sidebar-item_2'>
        <img src="/Icons/pencil-edit.png" alt="sidebar_img"></img>
        <img src="/Icons/inbox.png"  alt="sidebar_img"></img>
        <img src="/Icons/bookmark.png"  alt="sidebar_img"></img>
        <img src="/Icons/share.png"  alt="sidebar_img"></img>
        <img src="/Icons/download.png"  alt="sidebar_img"></img>
        <img src="/Icons/printer.png"  alt="sidebar_img"></img>
        <img src="/Icons/settings.png"  alt="sidebar_img"></img>
        </div>

    </div>
  )
}

export default Sidebar