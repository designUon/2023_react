import React, { Component } from 'react'

// 컴포넌트에서 원하는 컴포넌트를 들고와서 사용가능
import EventComp from './EventComp';


export class RefDomEvent extends Component {

    constructor(props){

        super(props);
        // 1. input 태그가 들어갈 공간(변수)
        this.textInput = null;
        // 2. ref  콜백함수를 통해 DOM에 접근
            // 1) ref에 들어갈 함수 작성
        this.setTextInputRef = (element)=>{
            // 2) element를 통해서 ref를 통해 DOM 가져옴
            // 3) 저장해서 쓰기위해 만든 공간에 할당
            this.textInput = element;
        }

        // createRef를 통한 설정 => 16.3 버전 이후 사용 가능
        this.myRef = React.createRef();

        // 콜백함수와 createRef를 통한 ref 설정 실습
        this.testRef = React.createRef();


        // 직접 작성한 컴포넌트도 ref를 통해 들고 올 수 있다
        this.myComp = React.createRef();

    }

    
    // this.textInput에 접근하는 메소드

    textInputEvent=()=>{
        if(this.textInput) {
            // ref를 통해서 DOM을 가져와서 그 안에 있는 내용에 JS에서 가져온 것처럼 접근할 수 있다
            this.textInput.focus();
        }
    }



    // myRef 확인
    myRefEvent=()=>{
        if(this.myRef.current){
            this.myRef.current.focus();
        }
    }


    // 콜백함수와 createRef를 통한 ref 설정 실습
    testRefStyle=()=>{
        if(this.testRef.current) {
            // this.testRef.current.focus();
            this.testRef.current.style.backgroundColor='red';
        }
    }

    //////////////////////////////////////////////////////////////////////////////


    render() {
    return (
        <div>
            <h1>Ref를 통해 input 가져오기</h1>
            <input
            type="text"
            // 3. ref속성을 이용해서 setTextInputRef를 호출
            ref={this.setTextInputRef}
            />
            {/* <button onClick={()=>{console.log(this.textInput)}}> */}
            <button onClick={()=>{console.dir(this.textInput)}}>
                console에 textInput값 출력
            </button>

            <button
                // onClick={()=>{
                //     if(this.textInput) {
                //         this.textInput.focus();
                //     }
                // }}
                // 화살표함수 내용을 빼서 this.textInput에 접근하는 메소드로 작성
                // render위쪽에
                onClick={this.textInputEvent}
            >
                버튼을 누르면 input에 focus
            </button>

            {/* createRef */}
            <input
                type="text"
                ref={this.myRef}
            />

            <button
                // onClick={ ()=>{console.log(this.myRef)} }
                onClick={ ()=>{console.log(this.myRef.current)} }
            >
                myRef의 값 확인
            </button>


            <button
                // onClick={()=>{
                //     if(this.myRef.current){
                //         this.myRef.current.focus();
                //     }
                // }}
                // 화살표함수 내용을 빼서 this.myRefEvent에 접근하는 메소드로 작성
                // render위쪽에
                onClick={this.myRefEvent}
            >
                myRef에 focus
            </button>

            <br />
            <br />
            <br />
            <hr />
            <br />
            <br />


            <h3>Ref 연습</h3>
            {/* 콜백함수와 createRef를 통한 ref 설정 실습 */}
            <input
                type="text"
                ref={this.testRef}
            />
            <button
                // onClick={ ()=>{
                //     if(this.testRef.current) {
                //         // this.testRef.current.focus();
                //         this.testRef.current.style.backgroundColor='red';
                //     }
                //  }}
                onClick={this.testRefStyle}
            >
                색을 바꿉니다
            </button>
            
            <br />
            <br />
            <br />
            <hr />
            <br />
            <br />

            <h2>컴포넌트를 불러와서 ref를 통해 가져올 수 있다</h2>
            <EventComp
                ref={this.myComp}
            />
            <button
            // 컴포넌트를 ref로 들고오게 되면 그 컴포넌트에 있는 method, state, props에 다 접근 가능
            // state와 props의 경우 값을 가져 올 수 있고
            // method의 경우 실행 가능

            // 화살표 함수를 사용하는 이유
            onClick={ ()=>{console.dir(this.myComp.current)} }
            
            // onClick={console.dir(this.myComp.current)}
            // 화살표 함수가 없이 작성하게되면 이미 출력이 되어서 실행되지 않음
            >
                ref로 들고 온 myComp 확인
            </button>

            <br />
            <br />
            <br />
            <hr />
            <br />
            <br />

            <h3>
                리액트에서 이벤트를 사용할 때 화살표함수/익명함수에 넣어서 사용하는 이유?
            </h3>

            <p>자바스크립트에서 addEventListener를 사용할 때와 동일한 이유</p>
            <p>addEventListener를 사용할 때 함수를 넣을 때,
                함수 이름을 넣어서 실행 <br/><br/>
                그래서 함수이름() 실행한 결과를 넣어주면, <br/>
                이벤트가 실행 할 때마다 되는 것이 아니라 화면이 렌더할 때 실행
            </p>

            <br />
            <br />
            <br />
            <br />
            <br />

        </div>
        )
    }
}

export default RefDomEvent