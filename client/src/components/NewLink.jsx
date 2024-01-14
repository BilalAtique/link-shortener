import PropTypes from "prop-types";

const NewLink = ({ index, shortenedLink, originalLink, clicks }) => {
  return (
    <tr>
      <td className="border px-4 py-2">{index}</td>
      <td className="border px-4 py-2">{shortenedLink}</td>
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
