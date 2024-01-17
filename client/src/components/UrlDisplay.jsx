import { useQuery } from "@tanstack/react-query";
import NewLink from "./NewLink";
import Cookies from "universal-cookie";

const UrlDisplay = () => {
  const cookies = new Cookies();
  const fetchLinks = async () => {
    const response = await fetch("http://127.0.0.1:3000/api/short-links", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${cookies.get("accessToken")}`,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch links");
    }

    return await response.json();
  };

  const { data, isPending } = useQuery({
    queryKey: ["userLinks"],
    queryFn: fetchLinks,
  });

  if (isPending) {
    return <div>Loading...</div>;
  }

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
            {data?.data?.userLinks.map((link, index) => (
              <NewLink
                key={link._id}
                index={index + 1}
                shortenedLink={"http://127.0.0.1:3000/" + link.shortLink}
                originalLink={link.originalLink}
                clicks={link.visits}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UrlDisplay;
