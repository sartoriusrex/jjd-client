import React from 'react';

import CreateButton from "../components/CreateButton";
import SearchForm from "../components/SearchBar";
import ListTabNav from "../components/ListTabNav";
import TechniqueList from "../components/techniques/TechniqueList";
import ErrorsDisplay from '../components/ErrorsDisplay';


const TechniqueIndex = ({ errors, search }) => {
  return(
    <>
      { errors.message &&
        <ErrorsDisplay errors={ errors.message } />
      }

      <div className="d-flex justify-content-between align-items-center mb-4">
        <SearchForm to="Techniques" />
        <CreateButton to="Technique" />
      </div>
      <ListTabNav to="Technique" />
      <TechniqueList search={ search }/>
    </>
  );
}

export default ( TechniqueIndex );