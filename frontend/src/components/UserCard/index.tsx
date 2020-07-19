import React from 'react';

import { Card } from './styles';

interface IUser {
  id: string,
  name: string,
  surname: string,
  imagePath: string,
  phone: string,
}

const UserCard = ({ user }: {user: IUser}) => {

  return (
      <Card>
        <h1>{`${user.name} ${user.surname}`}</h1>
        <ul>
          <li>Phone: {user.phone}</li>
          <li><img src={`http://192.168.0.51:3200/users/${user.imagePath}`} alt={user.name} width={'200px'} /></li>
        </ul>
      </Card>
  );
};

export default UserCard;
