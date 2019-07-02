import React from 'react';

import CreateButton from "../components/CreateButton";
import SearchForm from "../components/SearchBar";
import ListTabNav from "../components/ListTabNav";
import SequenceList from "../components/sequences/SequenceList";
import ErrorsDisplay from '../components/ErrorsDisplay';


const SequenceIndex = ({ errors, search }) => {
  return(
    <>
      { errors.message &&
        <ErrorsDisplay errors={ errors.message } />
      }

      <div className="d-flex justify-content-between align-items-center mb-4">
        <SearchForm to="Sequences" />
        <CreateButton to="Sequence" classStyle="btn btn-info shadow-lg"/>
      </div>
      <ListTabNav to="Sequence" />
      <SequenceList search={ search }/>
    </>
  );
}

export default ( SequenceIndex );