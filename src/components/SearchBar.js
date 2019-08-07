import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import { fetchTechniques } from "../store/actions/techniques";
import { fetchSequences } from "../store/actions/sequences";
import history from "../history";

import { ReactComponent as MagGlass } from '../icons/button_search.svg';
import "./ButtonGroup.css";


class SearchBar extends React.Component {

  renderInput = ({ input, label, placeholder, classStyle="input-group shadow" }) => {
    return (
      <div className={ classStyle }>
        <input
          autoComplete="off"
          className="form-control flex-grow-1"
          placeholder={ placeholder }
          { ...input }
        />
        <div className="input-group-append">
          <span className="input-group-text" id="addon-wrapping">
            <MagGlass width="17px" height="17px" className="path-color" />
          </span>
        </div>
      </div>
    )
  }

  onSubmit = formValues => {
    const { fetchTechniques, fetchSequences, to, go } = this.props;


    if( go && go === "techs" ) {
      history.push({
        pathname: '/techniques/all',
        state: { search: formValues }
      });

    } else if ( go && go === "seqs") {
      history.push({
        pathname: '/sequences/all',
        state: { search: formValues }
      });
    }

    if( to === "Techniques" ) {
      fetchTechniques( formValues.search );
    } else {
      fetchSequences( formValues.search );
    }
  }

  render(){
    let { to } = this.props;
    let placeholder = `Search for ${ to }`;

    return(
      <div className="input-group mb-3 col-10 col-sm-6 p-0">
        <form
          onSubmit={ this.props.handleSubmit( this.onSubmit ) }
          className="w-100 "
        >
          <Field
            type="text"
            component={ this.renderInput }
            // className="form-control"
            name="search"
            autoComplete="off"
            placeholder={ placeholder }
          />
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return{
    errors: state.errors,
  }
}

const SearchForm = reduxForm({
  form: 'searchForm',
  enableReinitialize: true,
  keepDirtyOnReinitialize: true
})( SearchBar )

export default connect( mapStateToProps, { fetchTechniques, fetchSequences } )( SearchForm );