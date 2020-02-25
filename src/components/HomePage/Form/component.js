import React from "react";
import PropTypes from "prop-types";

const FormComponent = ({
  handleSubmit, handleChange, value, valid,
}) => (
  <form onSubmit={handleSubmit}>
    <input type="text" placeholder="Enter repository name e.g. facebook/react" value={value} onChange={handleChange} />
    <input type="submit" value="Add" />
    {valid === false ? <p className="red">Repository not found</p> : null}
  </form>
);

FormComponent.propTypes = {
  value: PropTypes.string.isRequired,
  valid: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default FormComponent;
