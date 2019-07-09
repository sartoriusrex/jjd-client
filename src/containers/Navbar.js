import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../store/actions/auth";

class Navbar extends React.Component {
  logout = e => {
    e.preventDefault();
    this.props.logout();
  }

  render(){
    return(
      <nav className="navbar fixed-top navbar-expand-sm navbar-dark bg-primary d-flex justify-content-between">

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <Link to="/" className="navbar-brand d-sm-none">
          <h4 className="mb-0">JJD</h4>
        </Link>

        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="container-fluid d-flex justify-content-between pl-0 pr-0">

            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Jiu Jitsu Distilled
                </Link>
                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <Link to="/" className="dropdown-item">
                    Home
                  </Link>
                  <Link className="dropdown-item" to="/about">
                    About
                  </Link>
                  <Link to="/faq" className="dropdown-item">
                    FAQ
                  </Link>
                  <Link to="/contribute" className="dropdown-item">
                    Contribute
                  </Link>
                  <Link to="/resources" className="dropdown-item">
                    Resources
                  </Link>
                </div>
              </li>
            </ul>

            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/techniques/all" className="nav-link">
                  Techniques
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/sequences/all" className="nav-link">
                  Sequences
                </Link>
              </li>

            </ul>
          { this.props.isAuthenticated ? 
            (
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to="/signout" onClick={this.logout} className="nav-link">
                    Log Out
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to={`/users/${ this.props.userid }/manageaccount`} 
                    className="nav-link"
                  >
                    Account
                  </Link>
                </li>
              </ul>
            ) : 
            (
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to="/signin" className="nav-link">
                    Log In
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/signup" className="nav-link">
                    Sign Up
                  </Link>
                </li>
              </ul>
            )
          }
          </div>
        </div>

      </nav>
    )
  }
}

function mapStateToProps( state ) {
  return {
    isAuthenticated: state.currentUser.isAuthenticated,
    userid: state.currentUser.user.id
  };
}

export default connect( mapStateToProps , { logout } )(Navbar);