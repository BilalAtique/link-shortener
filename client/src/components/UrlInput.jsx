const UrlInput = () => {
  return (
    <div className="bg-gray-800 text-white h-[30%] ">
      <div className="flex flex-col  items-center h-full">
        <h2 className="my-6 text-4xl text-pink-700 font-semibold">Short URL</h2>
        <div className="text-2xl">
          <input
            className="px-4 h-11 w-96 outline-none bg-gray-200 rounded-s-full text-gray-800"
            type="text"
            placeholder="Enter the Link Here...    "
          />
          <button className="px-7 h-11 bg-pink-700 rounded-r-full outline-none hover:bg-pink-900">
            Get your Link
          </button>
        </div>
        <div className="p-5 text-2xl">
          <p>shorten link</p>
        </div>
      </div>
    </div>
  );
};

export default UrlInput;
