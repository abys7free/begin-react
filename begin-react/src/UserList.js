import React, { useEffect } from 'react';

const User = React.memo(function User({ user , onRemove, onToggle }){
    const { username, email, id, active} = user;
    // 이렇게하면 전체 리렌더링된다. 이렇게 하면 안된다.
    useEffect(() => {
        console.log(user);
        return () => {
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
    </div>);
});

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

export default React.memo(UserList);
// UserList, (prevProps, nextProps) => nextProps.users === pervProps.users