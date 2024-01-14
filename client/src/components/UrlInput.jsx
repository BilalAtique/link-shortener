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

    await new Promise((resolve) => setTimeout(resolve, 1000));

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data?.message);
    }

    return data;
  };

  const { mutate: shortenLink, isPending: loading } = useMutation({
    mutationFn: handleSubmit,
    onSuccess: async (data) => {
      setShortLink(data?.data?.createdLink?.shortLink);
      toast.success("Link shortened!");
      queryClient.invalidateQueries({ queryKey: ["userLinks"] });
    },
    onError: async (error) => {
      toast.error(error?.message);
    },
  });

  return (
    <div className="text-white h-[30%] w-[50%] mx-auto shadow-2xl shadow-gray-950 rounded-3xl">
      <div className="flex flex-col  items-center h-full">
        <h2 className="my-6 text-4xl text-white font-semibold">Short URL</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            shortenLink();
          }}
        >
          <div className="text-2xl">
            <input
              className="px-4 h-11 w-96 outline-none bg-gray-200 rounded-s-full text-gray-950"
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
              className="px-7 h-11 bg-green-800 rounded-r-full outline-none hover:bg-green-900"
            >
              Get your Link
            </button>
          </div>
        </form>
        <div className="p-5 text-2xl">
          <p>{shortLink || ""}</p>
        </div>
      </div>
    </div>
  );
};

export default UrlInput;
