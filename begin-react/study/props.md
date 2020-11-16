# PROPS
1. 기본적인 props 활용법
    ```jsx
    // App.js
    function App(){
        return (
            <Hello name="react" color="red"/>
        )
    } 
    ```

    ```jsx
    // Hello.js
    function Hello(props){
        return <div style={{
            color: props.color
            }}>안녕하세요 {props.name}</div> 
    ```

2. 구조분해
    ```jsx
    // App.js
    function App(){
        return (
            <Hello name="react" color="red"/>
        )
    } 
    ```

    ```jsx
    // Hello.js
    function Hello({{ color, name}}){
        // color는 생략 가능
        return <div style={{
            color: color
            }}>안녕하세요 {name}</div> 
    ```

3. default 설정
    ```jsx
    // App.js
    function App(){
        return (
            <Hello name="react" color="red" />
            <Hello color="pink" />

        )
    } 

    Hello.defaultProps = {
        name: '이름없음'
    };
    ```

    ```jsx
    // Hello.js
    function Hello({{ color, name}}){
        // color는 생략 가능
        return <div style={{
            color: color
            }}>안녕하세요 {name}</div> 
    ```


 4. Props Children
    ```jsx
    // App.js
    function App(){
        return (
            <Wrapper>
                <Hello name="react" color="red" />
                <Hello color="pink" />
            </Wrapper>
        )
    } 

    Hello.defaultProps = {
        name: '이름없음'
    };
    ```

    ```jsx
    // Hello.js
    function Hello({{ color, name}}){
        // color는 생략 가능
        return <div style={{
            color: color
            }}>안녕하세요 {name}</div> 
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