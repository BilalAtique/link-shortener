import NewLink from "./NewLink";

const UrlDisplay = () => {
  const links = [
    {
      _id: 1,
      shortenedLink: "https://swiftshrink.com/123456",
      originalLink: "https://www.google.com",
      clicks: 10,
    },
    {
      _id: 2,
      shortenedLink: "https://swiftshrink.com/123456",
      originalLink: "https://www.google.com",
      clicks: 10,
    },
    {
      _id: 3,
      shortenedLink: "https://swiftshrink.com/123456",
      originalLink: "https://www.google.com",
      clicks: 10,
    },
    {
      _id: 4,
      shortenedLink: "https://swiftshrink.com/123456",
      originalLink: "https://www.google.com",
      clicks: 10,
    },
    {
      _id: 5,
      shortenedLink: "https://swiftshrink.com/123456",
      originalLink: "https://www.google.com",
      clicks: 10,
    },
    {
      _id: 6,
      shortenedLink: "https://swiftshrink.com/123456",
      originalLink: "https://www.google.com",
      clicks: 10,
    },
    {
      _id: 7,
      shortenedLink: "https://swiftshrink.com/123456",
      originalLink: "https://www.google.com",
      clicks: 10,
    },
    {
      _id: 8,
      shortenedLink: "https://swiftshrink.com/123456",
      originalLink: "https://www.google.com",
      clicks: 10,
    },
    {
      _id: 9,
      shortenedLink: "https://swiftshrink.com/123456",
      originalLink: "https://www.google.com",
      clicks: 10,
    },
    {
      _id: 10,
      shortenedLink: "https://swiftshrink.com/123456",
      originalLink: "https://www.google.com",
      clicks: 10,
    },
  ];
  return (
    <div className="flex w-full p-12 justify-center ">
      <div className="p-10 text-white w-[80%] shadow-2xl shadow-black rounded-3xl">
        {/* Your table of shortened links with numbers and number of clicks */}
        <table className="w-[100%] ">
          <thead>
            <tr className="text-xl">
              <th className="w-7 px-2 py-1">No.</th>
              <th className="px-4 py-2 text-left">Shortened Link</th>
              <th className="px-4 py-2 text-left">Original Link</th>
              <th className="w-16 px-1 py-1 ">Clicks</th>
            </tr>
          </thead>
          <tbody>
            {/*
                links --> array of links
                array of links - map - NewLink component props
             */}
            {links.map((link, index) => (
              <NewLink
                key={link._id}
                index={index + 1}
                shortenedLink={link.shortenedLink}
                originalLink={link.originalLink}
                clicks={link.clicks}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UrlDisplay;
