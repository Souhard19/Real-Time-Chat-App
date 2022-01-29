import React from 'react';

import Navbar from './components/navbar.component';
import LeftSideBar from './components/leftSideBar.component';
import RightSideBar from './components/rightSideBar.component';
import CenterBar from './components/centerBar.component';
import ChatBox from './components/chatBox.component';

import '../styles/chatboard.css';

const ChatBoard = (props) => {
   return (
      <div id='chatBoard_container'>
         <Navbar/>
         <div className="dashboard">
            <LeftSideBar />
            <CenterBar />
            <RightSideBar />
            <ChatBox />
         </div>
      </div>
   );
}

export default ChatBoard;