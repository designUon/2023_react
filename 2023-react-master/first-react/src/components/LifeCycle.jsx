import React, { Component } from 'react'

// 클래스형 컴포넌트에서 라이프 사이클 작성
export class LifeCycle extends Component {

    constructor(props){
        super(props);

        this.state = {
            count : 0,
            date : new Date()
        }
        
    }

    // 라이프사이클메소드 - 마운트 되었을 때(시작했을 때) 실행
    // 컴포넌트가 보이는 한 번만 실행

    // index.js 에서 엄격모드로 설정이 되어있어서 두번씩 출력이 됨
    componentDidMount(){
        console.log("마운트가 되었습니다")

        // setInterval(()=>{
            //     this.setState({date: new Date()})
            // },1000)
            
        // 위 방법이랑 아래 방법(tick 빼서 작성)이랑 두가지 다 사용가능!
        
        setInterval(this.tick, 1000);
        // 처음 한 번 실행하는 내용 작성
        // 또는 외부에서 값을 한 번만 가져올 때
    }

    // 라이프 사이클 메소드 => 업데이트가 되었을 때(화면이 바뀌었을 때) 실행
    // 현재 컴포넌트가 업데이트 될 때마다 실행
    // props의 값이 바뀔 때, setState를 통해서 값이 바뀔 때
    componentDidUpdate(){
        // 모든 업데이트 마다 실행할 내용 작성가능
        console.log("업데이트가 되었습니다")
    }

    componentWillUnmount(){
        console.log("컴포넌트가 언마운트 되었습니다")
    }


    // 화면에 시간을 출력하는 메소드
    printClock = (time)=> {
        const hours = time.getHours().toString().padStart(2, '0');
        const minutes = time.getMinutes().toString().padStart(2, '0');
        const seconds = time.getSeconds().toString().padStart(2, '0');
        return `${hours}:${minutes}:${seconds}`
    }


    // 시간 값을 다시 할당하는 메소드
    tick=()=>{
        // setState를 사용할 떄 마다 업데이트가 발생됨
        this.setState({date: new Date()})
        // 속성 또는 필드라고 이야기
        this.timerID = "";
    }


    //////////////////////////////////////////////////////////////////

    render() {
    
        return (
        <div>
            <h3>라이프 사이클</h3>
            <h3>{this.state.count}</h3>

            <button
            onClick={ ()=>{this.setState({count:this.state.count+1})} }>
                +1
            </button>

            <br />
            <hr />
            <br />

            <h3>시계 {this.state.date.getHours()}시</h3>
            <h3>시계 {this.printClock(this.state.date)}</h3>


            <br />
            <br />
            <br />
            <br />

        </div>
    )
    }
}

export default LifeCycle