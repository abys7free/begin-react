# JSX 주의사항
1. 태그는 꼭 닫아줘야한다. <br/>
    ex)
    ```jsx
    function App(){
        const name = 'react';

        return (
        <div></div>
        <br />
        <input />:
    ```

2. 두 개 이상의 태그는 꼭 감싸져 있어야 한다.
    ```jsx
    function App(){
        const name = 'react';

        return (
        <>
            <Hello />
            <div></div>
        </>
    ```

3. return에 괄호는 가독성을 위한 것이다. 없어도 된다.<br/><br/>


4. 중괄호로 감싸면 자바스크립트 값을 보여줄 수 있다.

    ```jsx
    function App(){
        const name = 'react';

        return (
        <>
            <Hello />
            <div>{name}</div>
        </>
        )
    }
    ```

5. style은 객체를 만들어서 넣어야한다. class는 className이라고 쓰는 것이 올바른 방법이다.

    ```jsx
    function App(){
        const name = 'react';
        const style = {
            // 하이픈이 있는 경우에는 카멜케이스로 입력
            backgroundColor: 'black',
            color: 'aqua',
            fontSize: 24,
            padding: '1rem'
        };

        return (
        <>
            <Hello />
            <div style={style}>{name}</div>
            <div className:"gray-box"></div>
        </>
        )
    }
    ```


6. 주석을 작성하는 방법

    ```jsx
    function App(){
        const name = 'react';
        const style = {
            // 하이픈이 있는 경우에는 카멜케이스로 입력
            backgroundColor: 'black',
            color: 'aqua',
            fontSize: 24,
            padding: '1rem'
        };

        return (
        <>
            {/* 어쩌고 저쩌고 */}
            <Hello 
            // 이런식으로 작성하는 주석은 화면에 나타나지 않는다.
            />
            <div style={style}>{name}</div>
            <div className:"gray-box"></div>
        </>
        )
    }
    ```