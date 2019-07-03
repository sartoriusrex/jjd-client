import React from 'react';
import UpdateUserForm from './UpdateUserForm';

const UpdateEmail = () => {

  return(
    <div className="container main min-vh-100 pt-3 pl-1 pr-1">
      <UpdateUserForm
        heading='Update Email'
        item="email"
      />
    </div>
  )
}


export default UpdateEmail;