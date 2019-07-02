import React from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import { fetchRef } from '../../store/actions/techniqueRefs';
import Thumbnail from '../Thumbnail';


class TechniqueAddRefListItem extends React.Component { 
  
  renderInput = ({ id, userId }) => {
    return(
      <div className="input-group-text border-0 bg-transparent">
        <input
          type="checkbox" 
          aria-label="add or remove as entry"
          onClick={ e => this.onSubmit( id, userId ) }
        />
      </div>
    )
  }

  onSubmit = ( formValue, userId ) => {
    this.props.fetchRef( formValue, userId );
  }

  render(){
    const { id, name, thumbnail, type, positionMajor, positionMinor, mode, username, userId } = this.props;

    return(
      <div
        className="list-group-item list-group-item-action card mb-3 w-100 shadow-sm">
        <div className="row no-gutters card-body d-flex justify-content-start flex-nowrap align-items-center p-0">

          <form
            onSubmit={ this.props.handleSubmit( this.onSubmit )}
            className="container-fluid m-0 p-0 d-flex justify-content-start flex-nowrap align-items-center"
          >
            <Field
              name="entry"
              component={ this.renderInput }
              defaultValue={ id }
              id={ id }
              userId={ userId }
            />

            <Link
              to={ `/techniques/${id}` }
              className="d-flex flex-fill justify-content-start align-items center mw-100 p-0"
            >
              <Thumbnail thumbnail={ thumbnail } />

              {/* {
              !thumbnail ?
              <div className="d-flex justify-content-center align-items-center p-0"></div>
              :
              <div className="d-flex justify-content-center align-items-center p-0">
                <img className="img-thumbnail p-0 border-0" src={ thumbnail } alt="technique thumbnail" />
              </div>
              } */}

              <div
                className="btn text-left pl-4"
              >

                <h6 className="card-title">{name} </h6>
                <div>
                  {type} from {positionMinor} of {positionMajor} - {mode}
                </div>
                <div>
                  <small className="card-text">
                    created by {username}
                  </small>
                </div>
              </div>

            </Link>

          </form>

        </div>
      </div>
    )
  }
}


const wrappedForm = reduxForm({
  form: 'techAddRef',
  enableReinitialize: true,
  keepDirtyOnReinitialize: true,
  destroyOnUnmount: false
})( TechniqueAddRefListItem );

export default connect( null, { fetchRef } )( wrappedForm );