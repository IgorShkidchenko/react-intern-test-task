import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";

import { repositoryActions } from "../../../store/repositories";

export class RepositoryForm extends React.Component {
  render() {
    return (
      <Formik
        initialValues={{ repositoryUrl: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.repositoryUrl) {
            errors.repositoryUrl = "Required";
          } else if (
            !/^.+\/{1}.+$/.test(values.repositoryUrl)
          ) {
            errors.repositoryUrl = "Invalid repository address";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting, setErrors }) => {
          const payload = {
            repositoryUrl: values.repositoryUrl,
            setSubmitting,
            setErrors,
          };
          this.props.onAddRepository(payload);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field type="repositoryUrl" name="repositoryUrl" placeholder="Enter repository name e.g. facebook/react" />
            <ErrorMessage name="repositoryUrl" component="p" />
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    );
  }
}

RepositoryForm.propTypes = {
  onAddRepository: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  onAddRepository: payload => dispatch(repositoryActions.getRepository(payload)),
});

export default connect(null, mapDispatchToProps)(RepositoryForm);
