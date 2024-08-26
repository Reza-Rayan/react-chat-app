// Icons
import {
  UserIcon,
  PencilAltIcon,
  VideoCameraIcon,
} from "@heroicons/react/solid";

const UserInfo = () => {
  return (
    <div className="p-5 flex justify-between items-center ">
      <div className="flex items-center gap-1">
        <UserIcon width={40} className="bg-slate-700 rounded-full p-1" />
        <h2 className="font-semibold text-lg">Reza Rayan</h2>
      </div>
      <div className="flex items-center gap-1">
        <PencilAltIcon
          width={35}
          className="cursor-pointer hover:bg-[#ffffff30] p-2 rounded-full transition-all border border-white"
        />
        <VideoCameraIcon
          width={35}
          className="cursor-pointer hover:bg-[#ffffff30] p-2 rounded-full transition-all border border-white"
        />
      </div>
    </div>
  );
};

export default UserInfo;
