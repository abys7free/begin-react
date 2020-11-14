1. ref
2. useRef
3. 클래스 컴포넌트에서는 React.createRef()

```jsx
<!-- useRef 추가 -->
import React, { useState , useRef } from 'react';

function InputSample(){
    const [inputs, setInputs] = useState({
        name: '',
        nickname:''
    });
    const { name, nickname } = inputs;
    <!-- useRef 추가-->
    const nameInput = useRef();
    const onChange = (e) =>{
        const { name, value } = e.target;

        setInputs({
            ...inputs,
            [name]: value,
        });
    }
const onReset = () => {
    setInputs({
        name: '',
        nickname: ''
    });
    // 포커스
    nameInput.current.focus();
}
    return (
        <div>
            <!-- ref={nameInput}-->
            <input name="name" placeholder="이름" onChange={onChange} value={name} ref={nameInput}/>
            <input name="nickname" placeholder="닉네임" onChange={onChange} value={nickname}/>
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값: </b>
                {!name ? "이름" : name } ({!nickname ? "닉네임" : nickname})
            </div>
        </div>

    )
}

export default InputSample;


```