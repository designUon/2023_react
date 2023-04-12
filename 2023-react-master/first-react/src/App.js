import logo from './logo.svg';
import './App.css';
import MyComponent from './components/MyComponent'
// import {ArrowComponent} from './components/MyComponent'

// 동일한 파일에서 두개이상 내보냈을 때, 각각의 값을 각각 가져와야 사용가능
import MyComponent2 from './components/MyComponent2'
import {LoginText} from './components/MyComponent2'

import TextComp from './components/TextComp'
import OtherComp from './components/OtherComp'

import StateComp from './components/StateComp'

import EventComp from './components/EventComp'

import RefDomEvent from './components/RefDomEvent'

import MapComp from './components/MapComp'

// import {TableComp} from './components/MapComp'

import LifeCycle from './components/LifeCycle'

import ArrowComponent from './components/ArrowComponent'

import ArrowTest from './components/ArrowTest'

import ArrowState from './components/ArrowState';

import ArrowStateTest from './components/ArrowStateTest';

import EffectHook from './components/EffectHook';
import EffectHook2 from './components/EffectHook2';

import Footer from './components/Footer';



/* 리액트에서 오류가 자주 뜨는 이유들

1. 존재하지 않는 컴포넌트 출력 => 가능하면 이름 바꾸지 말 것!
=> 바꿔야 할 경우에는 바꾼 이름으로 모든 컴포넌트 수정 필수!

2. {}를 닫지않았을 경우

>> 오류코드를 보면서 각 line에 있는 코드들을 주석/삭제하면서 처리

*/


function App() {
  return (

    <div className="App">
      <h1>App.js 리액트 프로젝트를 수정해서 사용합니다</h1>
      <MyComponent/>
      {/* <ArrowComponent/> */}
      {/* 만든 컴포넌트에 속석 = 값을 */}
      <MyComponent2 login2={true} name="prop 홍길동"/>
      <LoginText/>

      {/* props의 children으로 전달 */}
      {/* props값을 전달하지 않으면 undifined로 들어감 */}
      <MyComponent2>props의 children으로 전달된 내용</MyComponent2>

      {/* 새로운 TextComp를 만들어서 children에 들어간 값을 h1태그에 넣어서 출력하고
      name값을 받아와서 p태그에 name님을 출력 */}
      <TextComp name="TextComp의 name값1">TextComp의 children값1</TextComp>
      <TextComp name="TextComp의 name값2">TextComp의 children값2</TextComp>

      <OtherComp name={123}/>

      {/* State를 가진 컴포넌트
      state를 가진 컴포넌트는 다시 사용해도 각각 별개의 값으로 사용이 된다 */}
      <StateComp/>
      <StateComp/>

      <EventComp/>

      <RefDomEvent/>

      <MapComp/>

      {/* <TableComp/> */}

      <LifeCycle/>

      {/* <ArrowComponent/> */}
      <ArrowComponent text="문자열을 전달"/>
      <ArrowComponent>children으로 전달</ArrowComponent>

      {/* 함수형 컴포넌트 실습
      * 아래 컴포넌트를 함수형으로 만들고 출력하기
      * name="green" : h3 태그 출력
      * check={true} : check값이 true일 때 name 출력
    * children = "환영합니다* : p 태그로 출력 */}

    <ArrowTest>환영합니다</ArrowTest>

    {/* 함수형 컴포넌트의 state 사용 */}
    <ArrowState/>

    <ArrowStateTest/>

    {/* 함수형 컴포넌트의 hook 사용 */}
    {/* <EffectHook/> */}
    <EffectHook2/>

    <footer/>

    </div>
  );
}

// import를 이용하여 다른 파일에서 값을 가져올때
// export를 이용해서 내보내는 값
export default App;
