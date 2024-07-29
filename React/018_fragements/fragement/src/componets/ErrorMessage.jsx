import PropTypes from "prop-types";
const ErrorMessage = (props) => {
  // return <>{props.Items.length === 0 && <h3>I am still hungry</h3>}</>;
  return <>{props.Items.length === 0 ? <h3>I am still hungry</h3> : null}</>;
};

ErrorMessage.propTypes = {
  Items: PropTypes.oneOfType([
    PropTypes.string, // Allow string content
    PropTypes.object,
    PropTypes.array, // Allow object content
  ]).isRequired, // Mark prop as required
};

export default ErrorMessage;
