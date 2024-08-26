const UserDetailInfo = () => {
  return (
    <div className="border-b border-[#dddddd35] px-6 py-5 flex flex-col items-center gap-4 w-full">
      <img
        src="/images/avatar.png"
        alt=""
        className="w-28 h-28 object-cover rounded-full"
      />
      <h2 className="font-bold text-lg">Salar Aghili</h2>
      <p className=" text-center text-sm text-slate-200">
        Lorem ipsum dolor sit amet
      </p>

      <button className="px-5 py-2.5 bg-red-800 w-full rounded-lg text-white transition-all hover:bg-red-700">
        Block
      </button>
    </div>
  );
};

export default UserDetailInfo;
