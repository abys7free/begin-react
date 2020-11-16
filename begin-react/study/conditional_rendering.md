# 조건부 렌더링

1. 조건부 렌더링
```jsx
// App.js
function App(){
    return (
        <Wrapper>
            <!-- isSpecial의 값을 생략하면 true로 디폴트 처리된다.-->
            <Hello name="react" color="red" isSpecial={true} />
            <Hello color="pink" />
        </Wrapper>
    )
}

export default App;

```

```jsx
// Hello.js
function Hello({{ color, name, isSpecial}}){
    // color는 생략 가능
    return (
        <div style={{
            color: color
        }}>
            <!-- null, false, undefined는 렌더링 했을 때 안나타난다. 0은 예외이다. 사망 연산자는 내용이 달라질때 보통 사용한다. 그렇기 때문에 이 상황에서는 && 연산자를 사용하는 것이 더 좋다.<b>{isSpecial ? '스페셜하다' : '낫스페셜'}</b>
            {isSpecial ? <b>*</b> : null}-->
            {isSpecial && <b>*</b>}
            안녕하세요 {name}
        </div> 
    )
}
```
    
    ```jsx
    // Wrapper.js

    function Wrapper({{ children }}){
        const style = {
            border: '2px solid black',
        };
        // children을 rendering 해주지 않으면 화면에 나오지 않음
        return <div style={style}>{children}</div>
    }

    export defualt Wrapper;

    ```    