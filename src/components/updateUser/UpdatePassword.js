import React from 'react';
import UpdateUserForm from './UpdateUserForm';

const UpdatePassword = () => {

  return(
    <div className="container main min-vh-100 pt-3 pl-1 pr-1">
      <UpdateUserForm
        heading='Update Password'
        item="password"
      />
    </div>
  )
}


export default UpdatePassword;