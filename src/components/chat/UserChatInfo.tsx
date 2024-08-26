// Icons
import {
  PhoneIcon,
  VideoCameraIcon,
  InformationCircleIcon,
} from "@heroicons/react/solid";

const UserChatInfo = () => {
  return (
    <div className="flex p-4 justify-between border-b border-[#dddddd35]">
      <div className="flex gap-4 items-center">
        <img
          src="/images/avatar.png"
          alt=""
          width={50}
          className="rounded-full object-cover"
        />
        <div className="flex flex-col">
          <span className=" font-bold text-lg">Salar Aghili</span>
          <p className="text-sm text-[#a5a5a5]">Lorem ipsum, dolor sit amet.</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <PhoneIcon
          width={36}
          className="bg-[#FFFFFF40] rounded-full p-2 transition-all hover:border hover:border-[#FFFFFF60] hover:bg-transparent"
        />
        <VideoCameraIcon
          width={36}
          className="bg-[#FFFFFF40] rounded-full p-2 transition-all hover:border hover:border-[#FFFFFF60] hover:bg-transparent"
        />
        <InformationCircleIcon
          width={36}
          className="bg-[#FFFFFF40] rounded-full p-2 transition-all hover:border hover:border-[#FFFFFF60] hover:bg-transparent"
        />
      </div>
    </div>
  );
};

export default UserChatInfo;
