// Custom Components
import UserChatInfo from "./UserChatInfo";
import MessageSender from "./MessageSender";
import Message from "./Message";
// ------------------------------------------
const Chat = () => {
  return (
    <div className="flex-[3] flex flex-col h-[98%] border-l border-r border-[#dddddd35] relative px-4">
      <UserChatInfo />
      <Message />
      <MessageSender />
    </div>
  );
};

export default Chat;
