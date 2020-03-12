import React from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";

const RepositoryForm = ({ onAddRepository }) => (
  <Formik
    initialValues={{ repository: "" }}
    validate={(values) => {
      const errors = {};
      if (!values.repository) {
        errors.repository = "Required";
      } else if (
        !/^\w+\/{1}\w+$/.test(values.repository)
      ) {
        errors.repository = "Invalid repository address";
      }
      return errors;
    }}
    onSubmit={(values, { setSubmitting, setErrors }) => {
      const url = `https://api.github.com/repos/${values.repository}`;
      let promiseResponse;

      axios.get(url)
        .then((response) => {
          promiseResponse = response.data;
          onAddRepository(promiseResponse);
        })
        .catch(() => {
          setErrors({ repository: "Repository not found" });
        });
      setSubmitting(false);
    }}
  >
    {({ isSubmitting }) => (
      <Form>
        <Field type="repository" name="repository" placeholder="Enter repository name e.g. facebook/react" />
        <ErrorMessage name="repository" component="div" />
        <button type="submit" disabled={isSubmitting}>
          Submit
        </button>
      </Form>
    )}
  </Formik>
);

RepositoryForm.propTypes = {
  onAddRepository: PropTypes.func.isRequired,
};

export default RepositoryForm;
