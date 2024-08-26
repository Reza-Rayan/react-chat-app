import { useState } from "react";
// Icons
import { PlusIcon, MinusIcon, SearchIcon } from "@heroicons/react/outline";
// Custom Components
import ChatItem from "./ChatItem";
// ------------------------------------------------------------------------

const ChatList = () => {
  const [addMode, setAddMode] = useState(false);
  return (
    <div className="p-5 overflow-y-scroll min-h-full ">
      <div className="flex items-center justify-between gap-4">
        <div className="flex bg-[#17254050] p-2 rounded-xl w-full gap-2">
          <SearchIcon width={25} />
          <input
            type="text"
            placeholder="search ..."
            className="bg-transparent border-none outline-none text-white font-medium w-full"
          />
        </div>
        {addMode ? (
          <MinusIcon
            width={36}
            className="bg-[#17254050] p-2 rounded-lg cursor-pointer hover:bg-[#ffffff30] transition-all"
            onClick={() => setAddMode(!addMode)}
          />
        ) : (
          <PlusIcon
            width={36}
            className="bg-[#17254050] p-2 rounded-lg cursor-pointer hover:bg-[#ffffff30] transition-all"
            onClick={() => setAddMode(!addMode)}
          />
        )}
      </div>
      <div className="mt-2">
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
      </div>
      {/* List of */}
    </div>
  );
};

export default ChatList;
