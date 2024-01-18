import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "react-toastify";
import Cookies from "universal-cookie";

const UrlInput = () => {
  const [originalLink, setOriginalLink] = useState("");
  const [shortLink, setShortLink] = useState("");
  const queryClient = useQueryClient();

  const cookies = new Cookies();

  const handleSubmit = async () => {
    setShortLink("");
    const response = await fetch("http://127.0.0.1:3000/api/short-links", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${cookies.get("accessToken")}`,
      },
      body: JSON.stringify({ originalLink }),
    });

    await new Promise((resolve) => setTimeout(resolve, 200));

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data?.message);
    }

    return data;
  };

  const { mutate: shortenLink, isPending: loading } = useMutation({
    mutationFn: handleSubmit,
    onSuccess: async (data) => {
      setShortLink(
        "http://127.0.0.1:3000/" + data?.data?.createdLink?.shortLink
      );
      toast.success("Link shortened!");
      queryClient.invalidateQueries({ queryKey: ["userLinks"] });
    },
    onSettled: () => {
      setOriginalLink("");
    },
    onError: async (error) => {
      toast.error(error?.message);
    },
  });

  return (
    <div className="text-white max-w-[70%] min-w-[50%] mx-auto shadow-2xl shadow-gray-950 rounded-3xl">
      <div className="flex flex-col items-center h-full">
        <h2 className="my-6 text-4xl text-white font-semibold">Short URL</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            shortenLink();
          }}
        >
          <div className="text-2xl">
            <input
              className="px-4 h-11 w-full md:w-auto outline-none bg-gray-200 rounded-full text-gray-950 mb-2 md:mb-0 md:rounded-r-none"
              type="url"
              placeholder="Enter the Link Here..."
              id="originalLink"
              name="originalLink"
              value={originalLink}
              onChange={(e) => setOriginalLink(e.target.value)}
              required
            />
            <button
              type="submit"
              disabled={loading}
              className="px-7 h-11 w-full md:w-auto bg-green-800 rounded-full md:rounded-l-none outline-none hover:bg-green-900"
            >
              Get your Link
            </button>
          </div>
        </form>
        <div className="p-5 text-2xl overflow-hidden">
          <p className="whitespace-nowrap overflow-ellipsis text-sm md:text-2xl lg:text-2xl xl:text-2xl">
            {shortLink || ""}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UrlInput;
