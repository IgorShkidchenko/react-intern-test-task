import React from "react"
import SimpleStorage from "react-simple-storage"

import Form from "./Form";
import RepositoryTable from "./RepositoryTable";

const HomePageComponent = (props) => {
  return (
    <div>
    <SimpleStorage parent={props.self} />
      <Form
        onAddRepository={props.handleAddRepository}
      />
      <RepositoryTable
        repositories={props.repositories}
        onRemoveRepository={props.handleRemoveRepository}
      />
    </div>
  );
}

export default HomePageComponent
