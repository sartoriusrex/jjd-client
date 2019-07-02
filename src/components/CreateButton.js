import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class CreateButton extends React.Component {
  render(){
    let { userId, to, classStyle="btn btn-primary shadow-lg" } = this.props;
    let link;

    if ( to === "Technique" ){
      link = `/users/${ userId }/techniques/new`
    } else {
      link = `/users/${ userId }/sequences/new`
    }

    return(
      <Link to={{
        pathname: link,
        state: { initialValues: {} }
      }}>
        <button
          className={ classStyle }
        >
          Create { to }
        </button>
      </Link>
    );
  }
}

function mapStateToProps( state ){
  return {
    techniques: state.techniques,
    userId: state.currentUser.user.id,
  };
}

export default connect( mapStateToProps )( CreateButton );