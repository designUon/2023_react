import React from 'react'
import HeaderLink from '../components/HeaderLink'
import { Outlet } from 'react-router-dom'

// 웹페이지의 레이아웃을 중첩라우트를 이용하여 작성
export default function Layout() {
  return (
    <div>
        <HeaderLink />

        <Outlet />
        
        <footer>
            푸터입니다
        </footer>
    </div>
  )
}
