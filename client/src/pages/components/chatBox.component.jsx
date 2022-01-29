import React, { useState } from 'react';

import './styles/chatBox.css'

const ChatBox = (props) => {
   const [ShowChatBox, SetShowChatBox] = useState(false);

   const create_person_tile = (src) => {
      return <div className="person_tile"><img src={src} alt="" /></div>
   }

   return (
      <div className={ShowChatBox ? 'show_chatBox' : 'hide_chatBox'} id='chatBox' >
         <img src="assets/arrow.png" alt='' className={ShowChatBox? '':'flip180'} id='open_close' onClick={() => SetShowChatBox(!ShowChatBox)} />
         <div id="current_openChats" >
            {
               // Fetch data
            }
            
         </div>
         <div className="chat_section">
            <div className="chat"></div>
         </div>
      </div>
   );
}

export default ChatBox;