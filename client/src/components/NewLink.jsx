import PropTypes from "prop-types";
import { toast } from "react-toastify";
import { IoCopySharp } from "react-icons/io5";
import { MdDeleteSweep } from "react-icons/md";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Cookies from "universal-cookie";

const getFormattedDate = (date) => {
  if(!date) return " - "
  const currentDate = new Date(date);
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return currentDate.toLocaleDateString(undefined, options);
};


const NewLink = ({ index, shortenedLink, originalLink, clicks, linkId, expiryDate, createdDate }) => {
  const queryClient = useQueryClient();
  const cookies = new Cookies();
  const deleteLink = async () => {
    const response = await fetch(
      `${import.meta.env.VITE_BASE_URL}api/short-links/${linkId}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${cookies.get("accessToken")}`,
        },
      }
    );

    await new Promise((resolve) => setTimeout(resolve, 300));

    if (!response.ok) {
      const data = await response.json();
      throw new Error(data?.message);
    }
  };

  const { mutate: handleDelete, isPending: loading } = useMutation({
    mutationFn: deleteLink,
    onSuccess: async () => {
      toast.success("Link deleted successfully", {
        style: {
          color: "red",
          fontWeight: "bold",
        },
        progressStyle: {
          backgroundColor: "red",
        },
        icon: <MdDeleteSweep size={24} color="black" />,
      });
      queryClient.invalidateQueries({ queryKey: ["userLinks"] });
    },
    onError: async (error) => {
      toast.error(error?.message);
    },
  });

  return (
    <tr>
      <td className=" border px-4 py-2">{index}</td>
      <td className="border px-4 py-2  ">
        {shortenedLink}
        <button
          className="  px-4 py-2 text-white bg-black rounded-md ml-2 hover:bg-gray-500 hover:text-black"
          onClick={() => {
            navigator.clipboard.writeText(shortenedLink);
            toast.success("Copied!");
          }}
        >
          <IoCopySharp />
        </button>
      </td>
      <td className=" border px-4 py-2">{originalLink}</td>
      <td className=" border px-4 py-2">
        <div className="flex justify-center text-2xl text-[#1cfc03]">
          {clicks}
        </div>
      </td>
      <td  className=" border px-4 py-2">{getFormattedDate(createdDate)}</td>
      <td className=" border px-4 py-2">{getFormattedDate(expiryDate)}</td>
      <td className="  px-4 py-2 ">
        <div className="flex justify-center">
          <button
            disabled={loading}
            className="text-red-600 py-2 justify-center border bg-black rounded-md px-4 hover:bg-red-600 hover:text-white onclick=disable"
            onClick={(e) => {
              e.preventDefault();
              handleDelete();
            }}
          >
            <MdDeleteSweep size={24} />
          </button>
        </div>
      </td>
    </tr>
  );
};

NewLink.propTypes = {
  index: PropTypes.number.isRequired,
  shortenedLink: PropTypes.string.isRequired,
  originalLink: PropTypes.string.isRequired,
  clicks: PropTypes.number.isRequired,
  linkId: PropTypes.number.isRequired,
};

export default NewLink;
