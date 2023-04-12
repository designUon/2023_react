import { Component } from "react";

class StateComp extends Component {

    // state 컴포넌트 안에서 사용되는 변수
    constructor(props) {
        // constructor를 사용하면 props를 따로 연결해줘야함
        super(props);
        // this.state안에 객체 형태로 값을 작성 할 수 있다
        this.state = {
            number : 0,
            name : "꿀이"
        }
    }

    // 화면에 출력되는 html
    // 가상돔을 화면에 출력하기위해서는 render()를 호출
    // 호출 시 render안에서 사용한 변수는 초기화된다
    // 초기화가 되지않으려면 전역변수 또는 this.state 사용해야됨

    render() {
        // this.state의 값을 비구조화 할당을 통해 사용
        const {number, name} = this.state;
        let count = 0;
        // return의 html안에서 직접 불러와서 사용
        return (
            <div>
                <h3>{name}</h3>
                <h3>state의 값 : {number}, 변수값 : {count}</h3>
                <h3>{this.state.number}</h3>

                {/* 버튼을 눌렀을 때 number 값이 -1씩 감소
                number 값이 0이 되는 버튼 만들기 */}

                {/* <button
                    onClick={ ()=>{
                        this.setState( {number : number - 1} );
                    } }
                >
                    -1
                </button> */}

                <button
                onClick={ ()=> {
                    
                    // 하나의 이벤트에서 setState를 여러번 부를 경우
                    // 원하지 않는 값으로 나올 수 있다
                    // -1을 두번넣으면 -2가 출력될꺼같지만 -1이 한번만 적용됨
                    this.setState({number:number-1})
                    this.setState({number:number-1})

                    // 이전에 있던 state값을 prevState로 들고와서 수정가능
                    // 값이 바뀐 후에 들고오기에 동기적으로 값이 수정
                    // ()=>()의 형태로 사용하는 이유 : return으로 객체형태로 전달하기 위함
                    // (prevState)=>( {state속성:state값} )
                    this.setState((prevState)=>({number:prevState.number-1}))
                }}
                >
                    -1
                </button>
                


                <button
                    onClick={ ()=> {
                        this.setState( {number : 0} );
                    }}
                >
                    set 0
                </button>

                {/* setState를 사용안했을때는 console에만 값이 적용됨 */}
                <button
                    onClick={ ()=> {
                        count++;
                        console.log(count);
                    } }
                >
                    count+1 setState X
                </button>


                <button // 리액트에서는 화살표 함수를 사용
                    onClick={ ()=>{
                        this.setState( {number : number + 1} );
                        // this.setState( {name : "밤이"} );
                    } }
                >
                    +1
                </button>



            </div>
        )
    };

}

export default StateComp;