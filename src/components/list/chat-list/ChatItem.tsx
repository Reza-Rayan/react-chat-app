const ChatItem = () => {
  return (
    <div
      className="flex items-center gap-3 p-4 cursor-pointer border-b border-[#dddddd35]
    transition-all hover:bg-[#FFFFFF20] rounded-lg"
    >
      <img
        src="/images/avatar.png"
        alt=""
        width={50}
        className="rounded-full object-cover"
      />
      <div className="flex flex-col gap-2">
        <span className=" font-medium">Salar Aghili</span>
        <p className="text-sm text-[#FFFFFF80]">Salam Dada</p>
      </div>
    </div>
  );
};

export default ChatItem;
