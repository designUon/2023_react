import React from 'react'

// Link를 통해서 react-router-dom에서 지정한 주소로 이동
import {Link} from 'react-router-dom'



// import FormComp from '..FormComp/components/FormComp';


import FormComp from '../components/FormComp';
// import Articles from '../components/Articles';



export default function Home() {

    const fruit = "apple";
    const fruits = ["apple", "orange", "peach"];

    return (
        <div>
            <h1>Home</h1>
            <p>현재 화면은 홈입니다</p>

            {/* a태그 대신 컴포넌트의 주소로 이동 */}
            <Link to="/about">About</Link>
            <br />
            <hr />
            {/* <Link to="/story">Story</Link> */}
            {/* to의 속성값으로 자바스크립트의 문자열도 사용가능 */}
            {/* <Link to={"/story"}>Story</Link> */}
            {/* <Link to={"/story/apple"}>Story</Link> */}
            {/* <Link to={`/story/${"apple"}`}>Story</Link> */}
            <Link to={`/story/${fruit}`}>Story</Link>
            <br/>
            
            { /** map을 이용해서 배열의 값을 Link의 to 주소값으로 사용 */}
            {fruits.map((f,i)=>(
                <Link to={`/story/${f}`} key={i}> | {f}Story |</Link>
            ))
            }

            <br />
            <br />
            <hr />

            {/* <Link to={"/story2"}>Story2</Link> */}
            <Link to={`/story2/${fruit}`}> Story2 </Link>

            <br />

            {/* fruits의 map을 사용하여
            /story2/apple, /story2/orange, /stoty2/peach로 이동하는 Link 작성 */}
            {fruits.map((f,i)=>(
                <Link to={`/story2/${f}`} key={i}> {f} - Story2<br/> </Link>
                ))
            }

            <br />
            <hr />
            <br />

            {/* 쿼리스트링값을 Avout에 전달하는 컴포넌트 */}
            <Link to={`/articles`}>Articles</Link>

            <br />
            <hr />
            <br />

            {/* 쿼리스트링값을 Avout에 전달하는 컴포넌트 */}
            <Link to={`/story2List`}>Story2 List</Link>
            
            <br />
            <br />
            <hr />
            <br />

            <FormComp/>

        </div>
    )
}
