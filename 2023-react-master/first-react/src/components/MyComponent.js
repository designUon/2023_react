// 파일의 이름과 클래스 이름을 동일하게 사용

// 클래스형 컴포넌트
// react의 component를 상속받아와서 사용
// 상속을 받아와서 사용하게되면 component의 내용을 사용가능

import {Component} from 'react'

class MyComponent extends Component {
    // 클래스형 컴포넌트의 특징
    // render 함수에서 return을 통해 html을 내보냄
    render(){

        // 변수작성
        const name = "React";

        // html 내용 출력
        return(
            <div>
                <h1>MyComponent 클래스형 컴포넌트입니다</h1>
                <p>MyComponent {name}공부를 하고있습니다</p>
            </div>
        )

    }
}


const ArrowComponent = () => {
    return
            <div>
            <h3>로그인에 성공하였습니다2</h3>
            <p>홍길동입니다2</p>
            </div>
        // {login === true ? (
        //     <div>
        //     <h3>로그인에 성공하였습니다</h3>
        //     <p>홍길동입니다</p>
        //     </div>
        // ) : (
        //     <div>
        //     <h3>로그인이 필요합니다</h3>
        //     <p>리액트를 시작하였습니다</p>
        //     </div>
        // )};
}

export default MyComponent;
export {ArrowComponent};