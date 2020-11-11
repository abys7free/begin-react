
```jsx
import React, { useState } from 'react';

function InputSample() {
    const [text, setText] = useState("");

    //이벤트 객체, 이벤트의 내용이 파라메터로 나옴
    const onChange = (e) => {
        //이벤트가 일어난 dom이 나옴
        //console.log(e.target.value);
        setText(e.target.value);
    }
    const onReset = () => {
        setText("");
    }
    return (
        <div>
        <!-- value를 안넣어주면 같이 안사라짐-->
            <input onChange={onChange} value={text}/>
            <button onClick={onReset}>초기화</button> 
        </div>
        <div>
            <b>값: </b>
            {text}
        </div>
    );
}

export default InputSample;
```

```jsx
function App() {
    return (
        <InputSample />
    );
}

export default App;
```


```jsx
import React, { useState } from 'react';

function InputSample() {
    const [inputs, setInputs] = useState({
        name: ''.
        nickname: '',
    });
    const { name, nickname } = inputs;
    //이벤트 객체, 이벤트의 내용이 파라메터로 나옴
    const onChange = (e) => {
        //console.log(e.target.name);
        //console.log(e.target.value);
        const { name, value } = e.target;
        
        // 1. 기존의 객체를 복사, 스프레드 문법(자바스크립트)
        // const nextInputs = {
        //     ..inputs
        //     [name]: value
        // };
        // setInputs(nextInputs)
        // 여기서 name은 input에 있는 props, 즉 클릭되는 것에 따라서 name or nickname 객체이다.
        // 이렇게 하지 않으면 rendering이 일어나지 않는다.
        //TODO: 노마드코더에서 원리 설명해준거 정리 필요
        setInputs({
            ..inputs
            [name]: value
        })
    }
    const onReset = () => {
        setInputs({
            name: "",
            nickname: ""
        });
    }
    return (
        <div>
            <input name={name} placeholder="이름" onChange={onChange} value={name}/>
            <input name={nickname} placeholder="닉네임" onChange={onChange} value={nickname}/>
            <button onClick={onReset}>초기화</button> 
        </div>
        <div>
            <b>값: </b>
            {name} ({nickname})
        </div>
    );
}

export default InputSample;
```

```jsx
function App() {
    return (
        <InputSample />
    );
}

export default App;
```