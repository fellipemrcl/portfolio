import PropTypes from "prop-types";
import "./styles.css";
import { useState } from "react";

const ProjectCard = ({
  className,
  projectName,
  projectDescription,
  projectLink,
}) => {
  const [isHovering, setIsHovering] = useState(false);
  const handleRedirect = () => {
    if (projectLink) {
      window.open(projectLink, "_blank");
    }
  };
  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };
  return (
    <div
      onClick={handleRedirect}
      className={className}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <p className="heading">{isHovering ? projectDescription : projectName}</p>
    </div>
  );
};

ProjectCard.propTypes = {
  className: PropTypes.string,
  projectDescription: PropTypes.string,
  projectName: PropTypes.string,
  projectLink: PropTypes.string,
};

export default ProjectCard;
