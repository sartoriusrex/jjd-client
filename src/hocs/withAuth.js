import React from 'react';
import { connect } from 'react-redux';
import history from '../history';

export default function withAuth( ComponentToBeRendered ){
  class Authenticate extends React.Component {
    
    componentDidMount() {
      if( this.props.isAuthenticated === false ) {
        history.push("/signin");
      }
    }

    componentDidUpdate( nextProps ) {
      if( nextProps.isAuthenticated === false ) {
        history.push("/signin");
      }
    }

    render(){
      return <ComponentToBeRendered {...this.props} />
    }

  }

  function mapStateToProps( state ){
    return {
      isAuthenticated: state.currentUser.isAuthenticated
    }
  }
  
  return connect( mapStateToProps )( Authenticate );
}