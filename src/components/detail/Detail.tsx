// Custom Components
import UserDetailInfo from "./UserDetailInfo";
import SharedPhotos from "./SharedPhotos";
// ---------------------------------------------
const Detail = () => {
  return (
    <div className="flex-1 flex flex-col items-center">
      <UserDetailInfo />
      <div className="p-4 flex flex-col gap-4 w-full">
        <div className="option">
          <div className="flex justify-between items-center cursor-pointer">
            <span>Chat Settings</span>
            <img
              width={28}
              className="opacity-75 bg-[#17254030] rounded-full p-1.5"
              src="/images/arrowUp.png"
              alt=""
            />
          </div>
        </div>
        <div className="option">
          <div className="flex justify-between items-center cursor-pointer">
            <span>Privacy & Help</span>
            <img
              width={28}
              className="opacity-75 bg-[#17254030] rounded-full p-1.5"
              src="/images/arrowUp.png"
              alt=""
            />
          </div>
        </div>
        <div className="option">
          <div className="flex justify-between items-center cursor-pointer">
            <span>Shared Photos</span>
            <img
              width={28}
              className="opacity-75 bg-[#17254030] rounded-full p-1.5"
              src="/images/arrowDown.png"
              alt=""
            />
          </div>
          <SharedPhotos />
        </div>
      </div>
    </div>
  );
};

export default Detail;
