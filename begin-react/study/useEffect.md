```jsx
import React, { useEffect } from 'react';

function User({ user , onRemove, onToggle }){
    const { username, email, id, active} = user;
    useEffect(() => {
        console.log('컴포넌트가 화면에 나타남');
        // props -> state
        // REST API
        // D3 Video.js
        // setInterval, setTimeout
        return () => {
            // clearInterval, clearTimeout
            // 라이브러리 인스턴스 제거
            console.log('컴포넌트가 화면에서 사라짐');
        }
    }, []);
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