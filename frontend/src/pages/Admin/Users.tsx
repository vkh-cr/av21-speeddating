import React, { useEffect, useState } from 'react'
import axios from 'axios'
import UserCard from '../../components/UserCard';

export const Users = () => {
  const [users, setUsers] = useState<any>([]);

  const downloadUsers = async () => {
    const result = await axios(
      'http://192.168.0.51:3200/users',
    );

    setUsers(result.data);
  }
  useEffect(() => {
    downloadUsers()
  }, []); 

  return (
    <ul>
      {users.map((user: { id: string, name: string; phone: string, surname: string, imagePath: string}) => (
        <UserCard key={user.id} user={user} />
      ))}
    </ul>
  );

}