import React, { useEffect, useState } from 'react'
import UserCards from '../../components/userCards/UserCards'
import { cardsPerLoad } from "../home/Home";
import { api } from '../../api';

const Users = () => {
  const [userData, setUserData] = useState([]);
  const [count, setCount] = useState(0);
  const [lastUser, setLastUser] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    api.get(`/users?limit=${cardsPerLoad}&skip=${count}`)
      .then((response) => {
        setUserData((prev) => {
          const allUsers = { ...response.data, users: [...(prev.users || []), ...response.data.users] };
          if (allUsers.users.length >= userData.total) {
            setLastUser(true);
          }
          return allUsers;
        })
      }).catch((error) => {
        console.log(error);
      }).finally(() => {
        setLoading(false);
      })
  }, [count]);
  return (
    <>
      <UserCards userData={userData} count={count} setCount={setCount} loading={loading} lastUser={lastUser} />
    </>
  )
}

export default React.memo(Users);