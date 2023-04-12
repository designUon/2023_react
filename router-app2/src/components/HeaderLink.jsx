import React from 'react'
import '../css/headerlink.css'

import { Link, NavLink } from 'react-router-dom'

// 링크들을 모아서 헤더에 고정하기
export default function HeaderLink() {
  const fruit = "banana";
  return (
    <div>
        {/** a태그 대신 컴포넌트의 주소로 이동 */}
        {/* <Link className="link-style" to="/about">About</Link> */}
        <NavLink
          // className="link-style"
          className={({isActive}) => isActive? "link-style" : undefined}
          to="/about">
          About
        </NavLink>

        {/** to의 속성값으로 자바스크립의 문자열 가능 */}
        <NavLink
          className={({isActive}) => isActive? "link-style" : undefined}
          to={`/story/${fruit}`}
        >
          Story
        </NavLink>

        <NavLink
          className={({isActive}) => isActive? "link-style" : undefined}
          to="/articles"
        >
          Articles
        </NavLink>

        <NavLink
          className={({isActive}) => isActive? "link-style" : undefined}
          to="/story2"
        >
          Story2List
        </NavLink>

        <NavLink
          className={({isActive}) => isActive? "link-style" : undefined}
          to="/navigate"
          end // => 주소가 완전히 일치할때만 className 추가
        >
          Navigate
        </NavLink>
    </div>
  )
}
