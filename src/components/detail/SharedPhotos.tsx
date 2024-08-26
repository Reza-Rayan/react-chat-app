const SharedPhotos = () => {
  return (
    <div className="flex flex-col gap-4 mt-6">
      <div className="flex items-center justify-between gap-x-4">
        <div className="flex items-center gap-x-2">
          <img
            width={40}
            height={40}
            className="object-cover rounded-lg"
            src="/images/bg.jpg"
            alt=""
          />
          <span>photo_2024.png</span>
        </div>
        <img
          src="/images/download.png"
          alt=""
          width={28}
          className="opacity-75 bg-[#17254030] rounded-full p-1"
        />
      </div>
      <div className="flex items-center justify-between gap-x-4">
        <div className="flex items-center gap-x-2">
          <img
            width={40}
            height={40}
            className="object-cover rounded-lg"
            src="/images/bg.jpg"
            alt=""
          />
          <span>photo_2024.png</span>
        </div>
        <img
          src="/images/download.png"
          alt=""
          width={28}
          className="opacity-75 bg-[#17254030] rounded-full p-1"
        />
      </div>
      <div className="flex items-center justify-between gap-x-4">
        <div className="flex items-center gap-x-2">
          <img
            width={40}
            height={40}
            className="object-cover rounded-lg"
            src="/images/bg.jpg"
            alt=""
          />
          <span>photo_2024.png</span>
        </div>
        <img
          src="/images/download.png"
          alt=""
          width={28}
          className="opacity-75 bg-[#17254030] rounded-full p-1"
        />
      </div>
    </div>
  );
};

export default SharedPhotos;
