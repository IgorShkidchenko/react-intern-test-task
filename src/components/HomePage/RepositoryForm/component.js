import React from "react";
import PropTypes from "prop-types";
import { Form, Field, ErrorMessage } from "formik";

const RepositoryFormComponent = ({ isSubmitting }) => (
  <Form>
    <Field type="repositoryUrl" name="repositoryUrl" placeholder="Enter repository name e.g. facebook/react" />
    <ErrorMessage name="repositoryUrl" component="p" />
    <button type="submit" disabled={isSubmitting}>
      Submit
    </button>
  </Form>
);

RepositoryFormComponent.propTypes = {
  isSubmitting: PropTypes.bool.isRequired,
};

export default RepositoryFormComponent;
