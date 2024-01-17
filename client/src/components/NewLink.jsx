import PropTypes from "prop-types";
import { toast } from "react-toastify";
import { IoCopySharp } from "react-icons/io5";
import { MdDeleteSweep } from "react-icons/md";

const NewLink = ({ index, shortenedLink, originalLink, clicks }) => {
  return (
    <tr>
      <td className="border px-4 py-2">{index}</td>
      <td className="border px-4 py-2 flex justify-between ">
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
          className="text-red-700 py-2"
          onClick={() => {
            toast.success("Deleted", {
              style: {
                color: "red",
                fontWeight: "bold",
              },
              progressStyle: {
                backgroundColor: "red",
              },
              icon: <MdDeleteSweep size={24} color="black" />,
            });
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
};

export default NewLink;
