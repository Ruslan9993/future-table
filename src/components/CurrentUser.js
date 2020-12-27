import React from 'react';
import '../index';

export const CurrentUser = ({users, active}) => {
  if (!users || !users[active]) { return null }
  const user = users[active];
  return (
    <div className='center' >
      <p>Выбран пользователь {user.id}</p>
      <div>
        Описание: {user.description}
        Адрес проживания: <b>{user.address.city}</b>
        <p>Город: {user.address.city}</p>
        <p>Провинция/штат: {user.id}</p>
        <p>Индекс: {user.id}</p>
      </div>
     
    </div>
  )
}