import PropTypes from "prop-types";
import { toast } from "react-toastify";

const NewLink = ({ index, shortenedLink, originalLink, clicks }) => {
  return (
    <tr>
      <td className="border px-4 py-2">{index}</td>
      <td className="border px-4 py-2 flex justify-between ">
        {shortenedLink}
        <button
          className="bg-green-400 px-4 py-2"
          onClick={() => {
            navigator.clipboard.writeText(shortenedLink);
            toast.success("Copied!");
          }}
        >
          Copy
        </button>
      </td>
      <td className="border px-4 py-2">{originalLink}</td>
      <td className="border px-4 py-2">{clicks}</td>
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
