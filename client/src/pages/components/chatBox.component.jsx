import React, { useState } from 'react';

import './styles/chatBox.css'

const ChatBox = (props) => {
   const [ShowChatBox, SetShowChatBox] = useState(false);

   const create_person_tile = (src) => {
      return <div className="person_tile"><img src={src} alt="" /></div>
   }

   return (
      <div className={ 'card ' + (ShowChatBox ? 'show_chatBox' : 'hide_chatBox')} id='chatBox' >
         <img src="assets/arrow.png" alt='' className={ShowChatBox? '':'flip180'} id='open_close' onClick={() => SetShowChatBox(!ShowChatBox)} />
         <div id="current_openChats" >
            {
               // Fetch data
            }
            
         </div>
         <div className="chat_section">
            <div className="chat card">
               <div className="messages">
                  <div>
                     <div className="msg">
                        <p>msfdfgsdgsdg</p>
                        {/* <p>time</p> */}
                     </div>
                  </div>
               </div>
               <div className="new_message">
                  <textarea name="" id="" placeholder='Write your message here...' cols="30" rows="10"></textarea>
                  <div className="send"><img src="assets/send.png" alt="" /></div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default ChatBox;