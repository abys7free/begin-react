import React from 'react';

function Hello({ color, name, isSpecial }){
    console.log(color, name);
return (
    <div style = {{
        color
    }}>
        {isSpecial && <b>*</b>}{/*보여주고 안보여주고는 &&연산자가 좋음*/ }
        안녕하세요 {name}
    </div>
    );
}
Hello.defaultProps = {
    name: '이름없음'
}


// 헬로라는 컨포넌트를 만들고 내보내주겠다.
export default Hello;