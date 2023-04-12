import React from 'react'
import { Link, Outlet } from 'react-router-dom';

// 배열 리스트를 이용하여 화면 출력
export default function Story2List() {
  const fruits = ['apple', 'orange', 'peach'];
  return (
    <div>
        <h3>Story2 의 목록</h3>
        {
            fruits.map((f, i)=>(
                <Link to={`/story2/${f}`} key={i}>{f} </Link>
                ))
            }
        <Outlet />
    </div>
  )
}
