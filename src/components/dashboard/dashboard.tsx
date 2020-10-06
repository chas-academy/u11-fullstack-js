import React, { useState } from 'react';
import { useQuery } from 'react-apollo';
import styles from './dashboard.module.css';

import User from './user/user';
import AddUser from './addUser/addUser';
import EditUser from './editUser/editUser';
import { getUsersQuery, getUserQuery } from '../../queries/user-queries';

interface UserData {
  username: string;
  email: string;
  id: string;
}

interface UsersData {
  users: UserData[];
}

interface adminData {
  user: {
    username: string;
  };
}

interface adminVariables {
  accessToken: string;
}

export default function Dashboard() {
  let token: any = '';
  if (localStorage.getItem('accessToken')) {
    token = localStorage.getItem('accessToken');
  }

  const { error, data: adminData } = useQuery<adminData, adminVariables>(getUserQuery, {
    variables: {
      accessToken: token,
    },
    onCompleted: () => {
      console.log(data);
    },
    onError: () => {
      console.log(error);
    },
  });

  const { loading, data } = useQuery<UsersData>(getUsersQuery);
  const [isOpen, setIsOpen] = useState({
    addUser: false,
    editUser: false,
  });

  const showHoverBox = (e: any) => {
    e.preventDefault();
    if (e.target.id === 'addUser') {
      setIsOpen({ addUser: true, editUser: false });
    }
    if (e.target.id === 'editUser') {
      setIsOpen({ addUser: false, editUser: true });
      sessionStorage.setItem('userID', e.target.name);
    }
    return;
  };

  const closeModal = () => {
    setIsOpen({
      addUser: false,
      editUser: false,
    });
  };

  // window.onclick = function (e: any) {
  //   if (
  //     !e.target.matches('.form-container') &&
  //     !e.target.matches('#addUser') &&
  //     !e.target.matches('#editUser') &&
  //     !e.target.matches('.noClose')
  //   ) {
  //     setIsOpen({ addUser: false, editUser: false });
  //   }
  // };

  return (
    <div className={`${styles.container} bg-primary shadowed`}>
      <div className={styles.left}>
        <h3>Admin {adminData?.user.username}</h3>
        <hr />
        <div className={styles.category}>
          <h4>Users</h4>
          <i className="fas fa-users fa-2x"></i>
        </div>
      </div>
      <div className={styles.right}>
        <table>
          <thead>
            <th>Username</th>
            <th colSpan={3}>Email</th>
          </thead>
          {loading ? (
            <div>Loading users....</div>
          ) : (
            data?.users.map((user, i) => {
              return <User user={user} showHoverBox={showHoverBox} />;
            })
          )}
        </table>
        <button className={`${styles.button} btn`} id="addUser" onClick={(e) => showHoverBox(e)}>
          +
        </button>
        {isOpen.addUser ? (
          <div className={styles.form}>
            <AddUser closeModal={closeModal} />
          </div>
        ) : null}
        {isOpen.editUser ? (
          <div className={styles.form}>
            <EditUser closeModal={closeModal} />
          </div>
        ) : null}
      </div>
    </div>
  );
}
