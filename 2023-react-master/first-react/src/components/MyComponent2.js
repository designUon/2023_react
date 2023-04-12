import {Component} from 'react'

class MyComponent2 extends Component {

    render() {
        
        const login = true;
        // const login = false;

        // 변수 작성
        // 클래스에서 props값을 가져올 때는 this.props를 통해 들고옴
        // this.props는 Component에서 상속받아온 속성
        // this.props = {login:true, name:"홍길동"};

        // 비구조화 할당 (구조 분해)

        // 구조화 할당 : 배열이나 객체와 같이 값이 여러개인 자료형을
        // 안에 있는 요소를 꺼내서 각각의 변수에 따로 저장하는 방법
        const prop = this.props;
        // const {login2, name} = this.props;
        const {log, name, children} = this.props;
        // const prop = this.props;
        console.log(prop.login2);
        console.log(prop);
        // console.log(login2);
        console.log(log);
        console.log(name);
        
        return(
            
            <div>
                
                <h1>{name}</h1>
                <p>{children}</p>

                {login ? (
                    <LoginText/>
                ) : (
                    <div>
                    <h3>MyComponent2 로그인이 필요합니다</h3>
                    <p>MyComponent2 리액트를 시작하였습니다</p>
                    </div>
                )}

            </div>

        )

    }

}


// 하나의 컴포넌트 작성 파일 안에
// 클래스형 또는 함수형 컴넌트를 만들어서 위 내용에 대체 가능
// 여러개 작성가능
class LoginText extends Component {

    render(){

        return(
            <div>
            <h3>LoginText 로그인에 성공하였습니다</h3>
            <p>LoginText 홍길동입니다</p>
            </div>
        )

    }
}


// 주로 하나의 컴포넌트 작성파일에서 하나의 컴포넌트를 내보냄 => default
export default MyComponent2;

// 다른 내용을 export를 통해 내보낼때
// export를 이용하여 내보내주지않으면 외부에서는 사용할 수 없다
// { }를 사용해서 추가로 내보내기 가능
export {LoginText};