import PropTypes from "prop-types";
import "./styles.css";

const ProjectCard = ({ projectName, projectDescription, projectLink }) => {
    const handleRedirect = () => {
        if (projectLink) {
            window.open(projectLink, "_blank");
        }
    }
  return (
    <div onClick={handleRedirect} className="card">
      <p className="heading">{projectName}</p>
      <p>{projectDescription}</p>
      <p>Uiverse</p>
    </div>
  );
};

ProjectCard.propTypes = {
  projectDescription: PropTypes.string,
  projectName: PropTypes.string,
  projectLink: PropTypes.string,
};

export default ProjectCard;
