import React from 'react'

import { useParams } from 'react-router-dom'

export default function Story2() {
  const params = useParams();
  // 전달한 이름이 name 으므로 name값을 사용
  const {name} = useParams(); 
  return (
    <div>
        <h1>{params.name}Story</h1>
        <p>{name}스토리 페이지입니다</p>
        
    </div>
  )
}
