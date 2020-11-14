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
    setUsers(users.concat(user));
    // setUsers([...users, user]);
    setInputs({
      username: '',
      email: ''
    });

    console.log(nextId.current);
    nextId.current += 1;
  }
  const onRemove = (id) => {
    setUsers(users.filter(user => user.id !== id));
  }


  return (
    <>
      <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate}/>
      <UserList users={users} onRemove={onRemove}/>
    </>
  );
}

export default App;


```

```jsx
import React from 'react';

function User({ user , onRemove }){
    const { username, email, id } = user;

    return (            
    <div>
        <b>{username}</b> <span>({email})</span>
        {/* 화살표 함수 안쓰면 다 최초 렌더링때 삭제 */}
        <button onClick={()=> onRemove(id)}>삭제</button>
    </div>)
}

function UserList({ users,  onRemove}) {
    
    return (
        <div>
            {
                users.map(
                    // (user, index) => 비효율적이다. 적거나 자주 업데이트 되지 않거나 그러면 괜찮긴한데 비추
                    user => (<User 
                                user={user}
                                key={user.id}
                                onRemove={onRemove} 
                            />)
                )
            }
        </div>
    )
}

export default UserList;

```