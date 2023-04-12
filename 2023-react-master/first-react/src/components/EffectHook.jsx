// import React from 'react';
import React, {useEffect, useState} from 'react';

export default function EffectHook(){

    // 함수형 컴포넌트 안에서 hook 사용 가능
    const [count, setCount] = useState(0);
    const [date, setDate] = useState(new Date());

    // useEffect를 사용하여 라이프사이클 메소드의 효과를 낼 수 있다
    // useEffect( ()=>{} )에 함수를 사용하여 내용작성
    // Didmount, DidUpdate를 함께 쓴 효과


    useEffect( ()=>{
        document.title = `${count}번 클릭`;
    } );

    // useEffect를 사용해서 DidMount일때 사용
    // useEffect( ()=>{}, [] ) 빈배열을 넣게되면 실행될때만 출력됨
    // 넣지않으면 과부하가 걸릴 수 있음
    useEffect( ()=>{
        setInterval( ()=>{
            setDate(new Date);
            console.log("실행")
        }, 1000);
    }, [])

    // useEffect의 두번째 인자값에 state의 값이 들어갈 때
    // 특정 state값이 바뀌면, useEffect를 실행 할 수 있음
    // useEffect( ()=>{}, [state/props] )
    // []배열 안에 여러개의 값을 넣어서 사용가능
    // 업데이트 시기 : setState(useState의 함수)가 실행이 될 때
    useEffect( ()=>{
        // setCount는 사용하면 안됨 => setCount값으로 계속 고정되어버림
        // 업데이트에 참고하고 있는 state의 값을 수정하지않음
        // setCount(100);
        console.log("count : ", count );
    }, [count, date])


    // useEffect를 이용하여 생성할 때
    // alert를 사용하여 "컴포넌트 생성" 경고창 띄우기
    useEffect( ()=>{
        alert("컴포넌트 생성");
    }, [0])

    // useEffect를 이용하여 date값이 바뀔 때
    // date의 초를 console.log를 통해 출력
    useEffect( ()=>{
        console.log(`${date.getSeconds()}초입니다`)
        // document.title = `${date.getSeconds()}초입니다`;
    }, [date.getSeconds()])

    ///////////////////////////////////////////////////////////////////

    return(
        <div>
            <br />
            <hr />
            <h2>EffectHook</h2>
            <p>{count}번 클릭</p>
            <button
                onClick={
                    ()=>{setCount(count+1)}
                }
            >
                +1
            </button>
            <h3>{date.getHours()}:{date.getMinutes()}:{date.getSeconds()}</h3>
        </div>
    );
}

// function EffectHook(){

//     return(
//         <div>
//             EffectHook
//         </div>
//     )

// }

// export default EffectHook;