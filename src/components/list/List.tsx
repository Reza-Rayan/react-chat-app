// Custom Components
import UserInfo from "./user-info/UserInfo";
import ChatList from "./chat-list/ChatList";

const List = () => {
  return (
    <div className="flex flex-col flex-1 h-full w-full">
      <UserInfo />
      <ChatList />
    </div>
  );
};

export default List;
