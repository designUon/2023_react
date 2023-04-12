import React from 'react'
import { Link } from 'react-router-dom'

// 링크들을 모아서 헤더에 고정하기
export default function HeaderLink() {

    const fruit = "apple";
    const fruits = ["apple", "orange", "peach"];

    return (
        <div>
            {/* a태그 대신 컴포넌트의 주소로 이동 */}
            <Link to="/about">About</Link>
            <br />
            <hr />
            <Link to={`/story/${fruit}`}>Story</Link>
            <br/>
            
            {fruits.map((f,i)=>(
                <Link to={`/story/${f}`} key={i}> | {f}Story |</Link>
            ))
            }

            <br />

            {/* <Link to={"/story2"}>Story2</Link> */}
            <Link to={`/story2/${fruit}`}> Story2 </Link>

            <br />

            {fruits.map((f,i)=>(
                <Link to={`/story2/${f}`} key={i}> {f} - Story2<br/> </Link>
                ))
            }

            <br />

            {/* 쿼리스트링값을 Avout에 전달하는 컴포넌트 */}
            <Link to={`/articles`}>Articles</Link>

            <br />

            {/* 쿼리스트링값을 Avout에 전달하는 컴포넌트 */}
            <Link to={`/story2List`}>Story2 List</Link>

        </div>
    )
}
