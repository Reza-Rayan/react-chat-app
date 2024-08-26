import EmojiPicker from "emoji-picker-react";
import { useState } from "react";
// Icons
import { PaperAirplaneIcon } from "@heroicons/react/solid";
// --------------------------------------------------------

const MessageSender = () => {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");

  const handleEmoji = async (e: any) => {
    setText((prev) => prev + e.emoji);
    setOpen(false);
  };

  return (
    <div className="flex justify-between items-center gap-4 border-t border-[#DDDDDD35] mx-auto pt-2 w-full">
      <div className="flex items-center gap-2">
        <img src="/images/img.png" alt="" width={20} />
        <img src="/images/camera.png" alt="" width={20} />
        <img src="/images/mic.png" alt="" width={20} />
      </div>
      <input
        type="text"
        placeholder="Type a message ..."
        value={text}
        className=" bg-[#17254050] border-none outline-none text-white p-4 flex-1 rounded-xl text-base w-full"
        onChange={(e) => setText(e.target.value)}
      />
      <div className="relative">
        <img
          src="/images/emoji.png"
          alt=""
          className="w-8 h-8 cursor-pointer p-1 transition-all hover:bg-[#FFFFFF35] rounded-full z-10"
          onClick={() => setOpen((prev) => !prev)}
        />
        {open ? (
          <div className="absolute bottom-10 left-0">
            <EmojiPicker open={open} onEmojiClick={handleEmoji} />
          </div>
        ) : null}
      </div>
      <div className="flex items-center gap-1">
        <button className="bg-indigo-700 text-white p-3 rounded-lg">
          <PaperAirplaneIcon width={20} className="rotate-90" />
        </button>
      </div>
    </div>
  );
};

export default MessageSender;
