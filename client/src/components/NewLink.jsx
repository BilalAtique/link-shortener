import PropTypes from "prop-types";
import { toast } from "react-toastify";
import { IoCopySharp } from "react-icons/io5";
import { MdDeleteSweep } from "react-icons/md";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Cookies from "universal-cookie";

const NewLink = ({ index, shortenedLink, originalLink, clicks, linkId }) => {
  const queryClient = useQueryClient();
  const cookies = new Cookies();
  const deleteLink = async () => {
    const response = await fetch(
      `http://127.0.0.1:3000/api/short-links/${linkId}`,
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
      <td className="border px-4 py-2">{index}</td>
      <td className="border px-4 py-2  ">
        {shortenedLink}
        <button
          className=" px-4 py-2"
          onClick={() => {
            navigator.clipboard.writeText(shortenedLink);
            toast.success("Copied!");
          }}
        >
          <IoCopySharp />
        </button>
      </td>
      <td className="border px-4 py-2">{originalLink}</td>
      <td className="border px-4 py-2">{clicks}</td>
      <td className="border px-4 py-2">
        <button
          disabled={loading}
          className="text-red-700 py-2"
          onClick={(e) => {
            e.preventDefault();
            handleDelete();
          }}
        >
          <MdDeleteSweep size={24} />
        </button>
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
