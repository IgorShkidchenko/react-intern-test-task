import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withFormik } from "formik";
import * as yup from "yup";

import { repositoryActions } from "../../../store/repositories";
import RepositoryFormComponent from "./component";

const validationSchema = yup.object({
  repositoryUrl: yup
    .string()
    .required("Required.")
    .matches(/^.+\/{1}.+$/, "Invalid repository address"),
});

const RepositoryFormContainer = withFormik({
  mapPropsToValues: () => ({ repositoryUrl: "" }),
  validationSchema,

  handleSubmit: (values, { props, setSubmitting, setErrors }) => {
    const payload = {
      repositoryUrl: values.repositoryUrl,
      setSubmitting,
      setErrors,
    };

    props.onAddRepository(payload);
  },

  displayName: "RepositoryFormContainer",
})(RepositoryFormComponent);

RepositoryFormContainer.propTypes = {
  onAddRepository: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  onAddRepository: payload => dispatch(repositoryActions.getRepository(payload)),
});

export default connect(null, mapDispatchToProps)(RepositoryFormContainer);
