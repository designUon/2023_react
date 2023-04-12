import React from 'react'
import { Link } from 'react-router-dom';
// 쿼리스트링을 사용해서 이 주소로 접근했을 때
// 쿼리스트링 값 가져오기
import { useLocation, useSearchParams } from 'react-router-dom';

export default function About() {
    // location을 이용하여 값을 가져오면 다른 값들도 함께 들고온다
    // 단점 : 쿼리스트링을 그대로 들고오기때문에, 값을 구분하여 작성해야함

    const location = useLocation();
    // 내용 확인을 위한 console.log()
    // console.log(location);

    // 쿼리스트링의 값을 구분해서 사용하기 위함
    const [searchParams, setSearchParams] = useSearchParams();
    // get을 통해서 ?이름=값&이름=값 으로 작성된 쿼리스트링 중
    // 이름을 적어서 값을 가져올 수 있다

    const nameText = searchParams.get("name");



    return (
        <div>
            
            <h1>About</h1>
            <p>About 페이지입니다</p>

            <p>{location.search} : 쿼리스트링으로 가져온 값입니다</p>
            <p>{nameText} : 쿼리스트링으로 가져온 값입니다</p>

            {/* home과 story로 이동하는 Link작성 */}
            {/* to의 작성된 내용이 App.js에서 작성 path이름과 동일 */}
            <Link to="/">Home</Link>
            <br />
            <Link to="/story">Story</Link>
            <Link to="/story2">Story2</Link>

        </div>
    )
}
