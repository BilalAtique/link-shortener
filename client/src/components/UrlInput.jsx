const UrlInput = () => {
  return (
    <div className="bg-gray-900 text-white h-[30%] ">
      <div className="flex flex-col  items-center h-full">
        <h2 className="my-6 text-4xl text-pink-800 font-semibold">Short URL</h2>
        <div className="text-2xl">
          <input
            className="px-4 h-11 outline-none bg-gray-200 rounded-l-md text-gray-800"
            type="text"
            placeholder="Enter the Link Here..."
          />
          <button className="px-4 h-11 bg-pink-800 rounded-r-md outline-none hover:bg-pink-700">
            Get your Link
          </button>
        </div>
        <div className="p-5 text-sm">
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default UrlInput;
