import React from "react";
import SimpleStorage from "react-simple-storage";
import PropTypes from "prop-types";

import RepositoryForm from "./RepositoryForm";
import RepositoryTable from "./RepositoryTable";

const HomePageComponent = ({
  self, handleAddRepository, repositories, handleRemoveRepository,
}) => (
  <div>
    <SimpleStorage parent={self} />
    <RepositoryForm onAddRepository={handleAddRepository} />
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
