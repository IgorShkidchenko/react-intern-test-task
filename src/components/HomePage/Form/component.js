import React from "react"

const FormComponent = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <input type="text" placeholder="Enter repository name e.g. facebook/react" value={props.value} onChange={props.handleChange} />
      <input type="submit" value="Add" />
      {props.valid === false ? <p className={'red'}>Repository not found</p> : null}
    </form>
  );
}

export default FormComponent
