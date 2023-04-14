import React from 'react'
import { useContext, useState } from 'react'
import DataContext from '../context/DataContext'

export default function DataBox() {
    return (
        <div>
        <DataText></DataText>
        </div>
    )
}

function DataText() {
  // useContext와 작성한 Context를 가져와서 사용
    const value = useContext(DataContext);

  // input 태그의 값 받아와서 input에 저장
  // 버튼을 눌렀을 때 Context에 있는 이름이 바뀌게 작성
    const [input, setInput] = useState("");



  // value 값이 null 또는 값
  // null일 때는 false 이므로 값을 출력하지 않게 하고
    return (
        <div>
        {value && <h3>{value.state.name}</h3>}
        <button
            onClick={()=>{value.action.setName("Green")}}
        >
            버튼을 누르면 name 수정
        </button>
        <br />
        <input 
            type="text" 
            onChange={(e)=>{setInput(e.target.value)}}
            value={input}
        />
        <button
            onClick={()=>value.action.setName(input)}
        > 버튼을 누르면 name을 입력값으로 수정 </button>
        </div>
    )
}