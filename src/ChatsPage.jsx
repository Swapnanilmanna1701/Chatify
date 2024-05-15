/*import React from 'react';

import { PrettyChatWindow } from 'react-chat-engine-pretty';
const ChatsPage = (props) => {
  return (
    <div style={{height: '100vh'}}>
      <PrettyChatWindow
        projectID="b7eaf7c8-e679-4961-bee7-0e529880ff49"
        userName={props.user.username}
        userSecret={props.user.secret}
        styles={{ height: '100%' }}
      />
    </div>
  );
}
export default ChatsPage;


*/



import react from "react";
import {
  MultiChatSocket,
  MultiChatWindow,
  useMultiChatLogic
} from "react-chat-engine-advanced";
const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic(
      "b7eaf7c8-e679-4961-bee7-0e529880ff49",
      props.user.username,
      props.user.secret
    )
  
  return (
    <div style={{height: '100vh'}}>
      <MultiChatSocket {...chatProps} />
      <MultiChatWindow {...chatProps} style={{ height: "100%" }} />
    </div>
  );
};

export default ChatsPage;
