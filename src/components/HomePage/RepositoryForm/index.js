import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";

import * as actionTypes from "../../../store/repositories/actionTypes";

class RepositoryForm extends React.Component {
  render() {
    return (
      <Formik
        initialValues={{ repository: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.repository) {
            errors.repository = "Required";
          } else if (
            !/^.+\/{1}.+$/.test(values.repository)
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
              this.props.onAddRepository(promiseResponse);
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
            <ErrorMessage name="repository" component="p" />
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
  onAddRepository: repository => dispatch({ type: actionTypes.ADD_REPOSITORY, repository }),
});

export default connect(null, mapDispatchToProps)(RepositoryForm);
