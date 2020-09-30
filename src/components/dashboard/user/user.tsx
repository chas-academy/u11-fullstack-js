import React from 'react';
import { useMutation } from 'react-apollo';

import { removeUserQuery } from '../../../queries/user-queries';

interface UserProps {
  showHoverBox: Function;
  user: {
    username: string;
    email: string;
    id: string;
  };
}

interface removedData {
  user: {
    username: string;
    email: string;
    id: string;
    admin: string;
  };
}

interface removeVariables {
  id: string;
}

export default function User(props: UserProps) {
  const [remove, { error, data }] = useMutation<removedData, removeVariables>(removeUserQuery, {
    variables: { id: props.user.id },
  });

  const handleremove = () => {
    remove();
    window.location.reload();
  };

  return (
    <tr>
      <td>{props.user.username}</td>
      <td>{props.user.email}</td>
      <td>
        <button className="btn" onClick={(e) => props.showHoverBox(e)} id="editUser">
          EDIT
        </button>
      </td>
      <td>
        <button className="btn" onClick={() => handleremove()}>
          REMOVE
        </button>
      </td>
    </tr>
  );
}
