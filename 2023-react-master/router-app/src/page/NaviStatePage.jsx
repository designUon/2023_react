import React from 'react'
import { useLocation } from 'react-router-dom'

export default function NaviStatePage() {
    const location = useLocatin();
    console.log(location);
  return (
    <div>
        <h3>받아온 값입니다 : {}</h3>
    </div>
  )
}
