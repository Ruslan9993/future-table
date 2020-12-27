import React from 'react';

const UserData = ({ user, click }) => {

  
  
  return (
    <tbody>
<tr onClick={click}>
      <td>{user.id}</td>
      <td>{user.firstName}</td>
      <td>{user.lastName}</td>
      <td>{user.email}</td>
      <td>{user.phone}</td>
      
    </tr>
    </tbody>
    
  )
}

export default UserData;