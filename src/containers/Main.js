import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import "./Main.css";

import HomePage from "../components/HomePage";
import AboutPage from "../components/AboutPage";
import FaqPage from "../components/FaqPage";
import ContributePage from "../components/ContributePage";
import ResourcesPage from "../components/ResourcesPage";

import ManageAccountPage from "../components/ManageAccountPage";
import UpdateUsername from "../components/updateUser/UpdateUsername";
import UpdateEmail from "../components/updateUser/UpdateEmail";
import UpdatePassword from "../components/updateUser/UpdatePassword";
import DeleteAccount from "../components/updateUser/DeleteAccount";
import AuthForm from "../components/AuthForm";
import RequestResetPasswordPage from "../components/RequestResetPasswordPage";
import ResetPasswordTokenPage from "../components/ResetPasswordTokenPage";
import VerifyAccountTokenPage from "../components/VerifyAccountTokenPage";
import withAuth from "../hocs/withAuth";

import TechniqueCreate from "../components/techniques/TechniqueCreate";
import TechniqueEdit from "../components/techniques/TechniqueEdit";
import TechniqueAddRefPage from "../components/techniques/TechniqueAddRefPage";
import TechniqueDelete from "../components/techniques/TechniqueDelete";
import TechniqueShow from "../components/techniques/TechniqueShow";
import TechniqueIndex from "./TechniqueIndex";

import SequenceCreate from "../components/sequences/SequenceCreate";
import SequenceEdit from "../components/sequences/SequenceEdit";
import SequenceDelete from "../components/sequences/SequenceDelete";
import SequenceShow from "../components/sequences/SequenceShow";
import SequenceIndex from "./SequenceIndex";

import NoMatch from '../components/NoMatch';

import { authUser } from "../store/actions/auth";
import { removeError } from "../store/actions/errors";


const Main = props => {
  const { errors, currentUser } = props;
  return(
    <Switch>
      <Route exact path="/"
        render={ () => <HomePage />} />
      <Route exact path="/about"
        render={ () => <AboutPage />}/>
      <Route exact path="/faq"
        render={ () => <FaqPage />} />
      <Route exact path="/contribute"
        render={ () => <ContributePage />} />
      <Route exact path="/resources"
        render={ () => <ResourcesPage />} />

      {/* ========================== */}
      {/* Auth and Account Management Pages */}
      {/* ========================== */}

      <Route exact path="/users/:userid/manageaccount"
        component={ withAuth( ManageAccountPage ) } />
      <Route exact path="/users/:userid/update-username"
        component={ withAuth( UpdateUsername ) } />
      <Route exact path="/users/:userid/update-email"
      component={ withAuth( UpdateEmail ) } />
      <Route exact path="/users/:userid/update-password"
      component={ withAuth( UpdatePassword ) } />
      <Route exact path="/users/:userid/delete-account"
      component={ withAuth( DeleteAccount ) } />
      <Route exact  path="/signin" 
        render={ props => {
          return(
            <AuthForm
              errors={ errors }
              buttonText="Log in now"
              heading="Login"
              {...props}
            />
          )
        }} 
      />
      <Route exact path="/signup"
        render={props => {
          return(
            <AuthForm
              errors={ errors }
              signUp
              buttonText="Sign up now"
              heading="Sign up"
              {...props}
            />
          )
        }}
      />
      <Route exact path="/passwordreset"
        component={ RequestResetPasswordPage } />
      <Route exact path="/resetpassword/:token"
        component={ ResetPasswordTokenPage } />
        <Route exact path="/verifyaccount/:accountVerificationToken"
        component={ VerifyAccountTokenPage } />

      {/* ====================== */}
      {/* Index pages */}
      {/* ====================== */}

      <Route exact path="/techniques/all"
        render={ props => {
          let search;
          if( !props.history.location.state ) {
            search=""
          } else {
            search = props.history.location.state.search.search
          }

          return(
            <TechniqueIndex 
              currentUser={ currentUser }
              search={ search }
            />
          );
        }}
      />
      <Route exact path="/sequences/all"
        render={ props => {
          let search;
          if( !props.history.location.state ) {
            search=""
          } else {
            search = props.history.location.state.search.search
          }

          return(
            <SequenceIndex 
              currentUser={ currentUser }
              search={ search }
            />
          );
        }}
      />

      {/* ========================== */}
      {/* Technique Pages */}
      {/* ========================== */}

      <Route exact path="/users/:userid/techniques/new"
        component={ withAuth( TechniqueCreate )} />
      <Route exact path="/users/:userid/techniques/:techid/edit"
        component={ withAuth( TechniqueEdit )} />
      <Route exact path="/users/:userid/techniques/addRef/:techid"
        component={ withAuth( TechniqueAddRefPage )} />
      <Route exact path="/users/:userid/techniques/:techid/delete"
        component={ withAuth( TechniqueDelete )} />
      <Route exact path="/techniques/:techid"
        component={ TechniqueShow } />

      {/* ========================== */}
      {/* Sequence Pages */}
      {/* ========================== */}

      <Route exact path="/users/:userid/sequences/new"
        component={ withAuth( SequenceCreate )} />
      <Route exact path="/users/:userid/sequences/:sequenceid/edit"
        component={ withAuth( SequenceEdit )} />
      <Route exact path="/users/:userid/sequences/:sequenceid/delete"
        component={ withAuth( SequenceDelete )} />
      <Route exact path="/sequences/:sequenceid"
        component={ SequenceShow } />
      <Route component={ NoMatch } />
    </Switch>
  )
}

function mapStateToProps( state ){
  return {
    currentUser: state.currentUser,
    errors: state.errors,
  }
}

export default withRouter( connect( mapStateToProps, { authUser, removeError })( Main ));