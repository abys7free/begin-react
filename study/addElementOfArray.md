```jsx
import React, {useRef, useState} from 'react';
import CreateUser from './CreateUser';
import UserList from './UserList';


function App() {
  const [inputs, setInputs] = useState({
    username: '',
    email: ''
  });
  const { username, email } = inputs;
  const onChange = e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    })
  }


  const [users, setUsers] = useState([
    {
        id: 1,
        username: 'velopert',
        email: 'public.velopert@gamil.com'
    },
    {
        id: 2,
        username: 'tester',
        email: 'tester@gamil.com'
    },
    {
        id: 3,
        username: 'liz',
        email: 'liz@gamil.com'
    },
  ]);
  const nextId = useRef(4);

  const onCreate = () => {
    const user = {
      id: nextId.current,
      username: username,
      email: email
    }
    // setUsers(users.concat(user)); 도 가능
    setUsers([...users, user]);
    setInputs({
      username: '',
      email: ''
    });

    console.log(nextId.current);
    nextId.current += 1;
  }

  return (
    <>
      <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate}/>
      <UserList users={users}/>
    </>
  );
}

export default App;

```