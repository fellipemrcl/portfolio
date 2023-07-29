import PropTypes from "prop-types";
import "./styles.css";

const ImageContainer = ({ imgSource, imgAlt }) => {
  return <img src={imgSource} alt={imgAlt} />;
};

ImageContainer.propTypes = {
  imgAlt: PropTypes.string,
  imgSource: PropTypes.string,
};

export default ImageContainer;
