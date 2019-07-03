import React from 'react';
import { connect } from "react-redux";

import LoadSpinner from '../LoadSpinner';
import Delete from '../Delete';
import { deleteUser } from '../../store/actions/auth';


class DeleteAccount extends React.Component {

  onSubmit = ( userid, itemid ) => {
    const { deleteUser } = this.props;

    deleteUser( userid );
  } 

  render(){
    const { userid } = this.props.match.params;
    const { stateUserId } = this.props;

    if ( !stateUserId || ( stateUserId !== userid ) ){
      return <LoadSpinner />
    }

    return (
      <div className="container main min-vh-100 pt-3 pl-1 pr-1">
        <Delete
          item="Account"
          actionHandler={ this.onSubmit }
          userid={ userid }
          itemid={ userid }
        />
      </div>
    );
  }
}

const mapStateToProps = ( state ) => ({
  stateUserId: state.currentUser.user.id
})

export default connect( mapStateToProps, { deleteUser })( DeleteAccount );