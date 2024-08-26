const Message = () => {
  return (
    <div className="p-4 flex-1 overflow-scroll">
      <div className="flex gap-4 max-w-[70%]">
        <img
          src="/images/avatar.png"
          alt=""
          width={30}
          className="rounded-full w-8 h-8 object-cover "
        />
        <div className="flex-1 flex flex-col gap-1">
          <p className="bg-[#17254030] p-5 rounded-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <span>1minute ago</span>
        </div>
      </div>
      {/* Own Message */}
      <div className="own_message flex justify-end">
        <div>
          <div className="flex justify-end">
            <img
              src="/images/bg.jpg"
              alt=""
              className="h-[300px] w-[300px] object-cover rounded-lg"
            />
          </div>
          <p className="bg-indigo-600 bg-opacity-40 p-5 rounded-lg ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <span className="text-sm">1minute ago</span>
        </div>
      </div>
    </div>
  );
};

export default Message;
