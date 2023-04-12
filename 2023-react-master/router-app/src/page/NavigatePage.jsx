import React from 'react'

// 버튼을 클릭했을때 다른 페이지로 이동하면서 값 전달
// useNavigate 사용
import { useNavigate } from 'react-router-dom'

export default function NavigatePage() {

    const navigate = useNavigate();

    return (
        <div>
            <button
                onClick={()=>{
                    // 두번째 인자값의 객체형태로 들어감
                    // 값을 전달하기위해 state: 사용
                    // state에 전달할 내용이 많다면 객체값으로 묶어서 전달
                    navigate(`/navigate/state`, {state:{10}})
                }}
            >
                숫자 값 10 전달
            </button>
        </div>
    )
}
