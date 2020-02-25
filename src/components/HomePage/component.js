import React from "react";
import SimpleStorage from "react-simple-storage";
import PropTypes from "prop-types";

import Form from "./Form";
import RepositoryTable from "./RepositoryTable";

const HomePageComponent = ({
  self, handleAddRepository, repositories, handleRemoveRepository,
}) => (
  <div>
    <SimpleStorage parent={self} />
    <Form
      onAddRepository={handleAddRepository}
    />
    <RepositoryTable
      repositories={repositories}
      onRemoveRepository={handleRemoveRepository}
    />
  </div>
);

HomePageComponent.propTypes = {
  self: PropTypes.object.isRequired,
  repositories: PropTypes.array.isRequired,
  handleAddRepository: PropTypes.func.isRequired,
  handleRemoveRepository: PropTypes.func.isRequired,
};

export default HomePageComponent;
