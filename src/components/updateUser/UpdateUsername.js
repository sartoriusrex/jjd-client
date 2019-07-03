import React from 'react';
import UpdateUserForm from './UpdateUserForm';

const UpdateUsername = () => {

  return(
    <div className="container main min-vh-100 pt-3 pl-1 pr-1">
      <UpdateUserForm
        heading='Update Username'
        item="username"
      />
    </div>
  )
}


export default  UpdateUsername;