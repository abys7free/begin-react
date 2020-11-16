


```jsx
import React, { useState } from 'react';

function Counter(){
    // number라는 상태를 만들건데, 기본값은 0으로 하겠다. setNumber는 number를 바꿔주는 함수 이다.

    //원래는 다음과 같이 작성해야한다.
    //const numberState = useState(0);
    //const number = numberState[0];
    //const setNumber = numberState[1];
    //0을 5로 바꾸면 5가 기본값이 될 것이다.
    //배열을 반환하는데, 첫번째는 현재 상태, 그리고 두번째는 바꾸는 함수
    const [number, setNumber] = useState(0);
    const onIncrease = () =>{
        // console.log('-1');
        //setNumber(number + 1)
        // 리액트 컵포넌트를 최적화하는 단계에서 이게 좋다는 것을 알게 될 것이다.
        setNumber( prevNumber => prevNumber + 1 );
    }
    const onDecrease = () =>{
        // console.log('-1');
        setNumber(number - 1)
    }
    return(
        <div>
            <h1>{ number }</h1>
            // 호출하면 안된다.
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    )
}

export default Counter;

```

```jsx
function App(){
    return (
        <Counter />
    )
}

export default App;
```

```jsx
import React, { useEffect } from 'react';

function User({ user , onRemove, onToggle }){
    const { username, email, id, active} = user;
    useEffect(() => {
        console.log("user 값이 설정됨");
        console.log(user);
        return () => {
            console.log(`user 값이 바뀌기 전`);
        console.log(user);
        }
    }, [user]);
    return (            
    <div>
        <b style={{
            color: active ? 'green' : 'black',
            cursor: 'pointer'
        }}
        onClick={()=> onToggle(id)}
        >
            {username}</b> <span>({email})</span>
        {/* 화살표 함수 안쓰면 다 최초 렌더링때 삭제 */}
        &nbsp;
        <button onClick={()=> onRemove(id)}>삭제</button>
    </div>)
}

function UserList({ users,  onRemove, onToggle}) {
    
    return (
        <div>
            {
                users.map(
                    // (user, index) => 비효율적이다. 적거나 자주 업데이트 되지 않거나 그러면 괜찮긴한데 비추
                    user => (<User 
                                user={user}
                                key={user.id}
                                onRemove={onRemove} 
                                onToggle={onToggle}
                            />)
                )
            }
        </div>
    )
}

export default UserList;

```

```jsx
import React, { useEffect } from 'react';

function User({ user , onRemove, onToggle }){
    const { username, email, id, active} = user;
    // 이렇게하면 전체 리렌더링된다. 이렇게 하면 안된다.
    useEffect(() => {
        console.log(user);
    });
    return (            
    <div>
        <b style={{
            color: active ? 'green' : 'black',
            cursor: 'pointer'
        }}
        onClick={()=> onToggle(id)}
        >
            {username}</b> <span>({email})</span>
        {/* 화살표 함수 안쓰면 다 최초 렌더링때 삭제 */}
        &nbsp;
        <button onClick={()=> onRemove(id)}>삭제</button>
    </div>)
}

function UserList({ users,  onRemove, onToggle}) {
    
    return (
        <div>
            {
                users.map(
                    // (user, index) => 비효율적이다. 적거나 자주 업데이트 되지 않거나 그러면 괜찮긴한데 비추
                    user => (<User 
                                user={user}
                                key={user.id}
                                onRemove={onRemove} 
                                onToggle={onToggle}
                            />)
                )
            }
        </div>
    )
}

export default UserList;
```