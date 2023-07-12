import PropTypes from "prop-types"
import '../Button/styles.css';

const Button = ({ btnContent, btnId, btnType, onClick }) => {
    return (
        <button
        id={ btnId }
        type={ btnType }
        onClick={onClick}
        >
            <span className="btn-content">{ btnContent }</span>
        </button>
    )
};

Button.propTypes = {
  btnContent: PropTypes.string,
  btnId: PropTypes.string,
  btnType: PropTypes.string,
  onClick: PropTypes.func,
}

export default Button;