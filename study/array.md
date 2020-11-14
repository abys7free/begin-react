```jsx
import React from 'react';

function UserList() {
    const users = [
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
    ];

    return (
        <div>
            <div>
                <b>{users[0].username}</b> <span>({users[0].email})</span>
            </div>
            <div>
                <b>{users[1].username}</b> <span>({users[1].email})</span>
            </div>
            <div>
                <b>{users[2].username}</b> <span>({users[2].email})</span>
            </div>
        </div>
    )
}

export default UserList;
```


```jsx
import React from 'react';

function User({ user }){
    return (            
    <div>
        <b>{user.username}</b> <span>({user.email})</span>
    </div>)
}

function UserList() {
    const users = [
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
    ];

    return (
        <div>
            <User user={users[0]} />
            <User user={users[1]} />
            <User user={users[2]} />
        </div>
    )
}

export default UserList;
```


```jsx
import React from 'react';

function User({ user }){
    return (            
    <div>
        <b>{user.username}</b> <span>({user.email})</span>
    </div>)
}

function UserList() {
    const users = [
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
    ];

    return (
        <div>
            {
                users.map(
                    // (user, index) => 비효율적이다. 적거나 자주 업데이트 되지 않거나 그러면 괜찮긴한데 비추
                    user => (<User user={user} key={user.id} />)
                )
            }
        </div>
    )
}

export default UserList;
```