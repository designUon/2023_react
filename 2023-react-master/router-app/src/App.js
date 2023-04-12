import './App.css';

// 라우터를 가져오기위해 router-dom에서 컴포넌트 가져옴
import {Routes, Route} from 'react-router-dom';

// 각각의 페이지(하나의 주소에 보일 컴포넌트)
import Home from './page/Home';
import About from './page/About';
import Story from './page/Story';
import Story2 from './page/Story2';
import Articles from './page/Articles';
import Story2List from './page/Story2List';
import Error from './page/Error';
import HeaderLink from './components/HeaderLink';
import Layout from './page/Layout';
import NavigatePage from './page/NavigatePage';

function App() {

  return (
    // Routes를 이용하여 컴포넌트와 주소를 연결하는 Route를 정리
    // div안에 Routes를 넣어서도 사용 가능
    <div>
      {/* Routes안에 들어가지않는 컴포넌트를 사용해서 화면에 계속 띄워둘 수 있다 */}
      <HeaderLink />

      <Route>

        <Routes path='/' element={<Layout/>}>


          {/* app.js안에서 Route를 이용해서 주소와 컴포넌트 연결
          path = 주소
          element = {<컴포넌트/>} => 컴포넌트 형식으로 연결 */} 
          {/* <Route path='/' element = {<Home/>} /> */}
          <Route index element = {<Home/>} />
          <Route path='/about' element={<About/>}/>

          {/* <Stroy/> 컴포넌트를 만들어서, '/story' 주소로 연결 */}
          {/* <Route path='/story' element={<Story/>}/> */}

          {/* URL 파라미터를 이용한 값 전달
          path의 주소에 값이 들어갈 공간에 이름작성
          값은 브라우저 주소창에 입력했을 때 값이 들어감 */}
          <Route path='/story/:value' element={<Story/>}/>

          {/* <Story />를 복사하여 <Story2/>로 수정하여 사용
          URL 파라미터 이름을 name으로 작성해서
          useParams를 이용해 화면에 출력 */}
          <Route path='/story2'>
            <Route path='/story2/:name' element={<Story2/>}/>
          </Route>
          
          {/* page폴더에 story2List.jsx를 만들고
          fruit 배열을 들고와서 Link 작성
          Link를 클릭했을 때 Story2가 보일 수 있게 작성하세요 */}
          {/* <Route path='/story2' element={<Story2List/>}> */}
          <Route path='/story2List'>
            <Route path='/story2List/' element={<Story2List/>}/>
          </Route>



          {/* 관련된 페이지는 주소로 분류해서 사용가능 */}
          {/* <Route path='/articles' element={<Articles/>} />
          <Route path='/articles:id' element={<Articles/>} /> */}
          <Route path='/articles' element={<Articles/>}>
            {/* 중첩라우터 - Outlet */}
            <Route path='/articles:id' element={<Articles/>} />
          </Route>


          {/* navigate를 이용한 값 전달
          NavigatePage.jsx > 버튼을 클릭하고 이동하면 값 전달
          NaviStatePage.jsx > 전달받은 값 출력 */}
          <Route path="/navigate" element={<NavigatePage/>}>
          <Route path="/navigate/state" element={<NaviStatePage/>}></Route>

          {/* 지정되지 않은 주소 전부 => * */}
          {/* path에 *을 넣으면 지정된 주소 외에는 전부 element로 연결된 컴포넌트가 출력이 된다 */}
          <Route path='*' element={<Error/>}/>

        </Route>

      </Routes>

    </div>
  
    );
}

export default App;
