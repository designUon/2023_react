import './App.css';
import {Route, Routes} from 'react-router-dom'
import Home from './page/Home';
import BoardList from './page/BoardList';
import Layout from './page/Layout';
import Board from './page/Board';

import { DataProvider } from './context/DataContext';
import BoardWriteForm from './page/BoardWriteForm';
import BoardModifyForm from './page/BoardModifyForm';
import LoginForm from './page/LoginForm';

function App() {

  return (

    <div className="App">

      <DataProvider>

        <Routes>

          <Route path='/' element={<Layout/>}>

            <Route path='/' element={<Home/>}/>

            {/* 게시판 */}
            <Route path='/boardlist' element={<BoardList/>}/>
            <Route path='/boardlist/:id' element={<Board/>}/>
            <Route path='/boardwriteform' element={<BoardWriteForm/>}/>
            <Route path='/board-modify-form' element={<BoardModifyForm/>}/>

            {/* 로그인 */}
            <Route path='/loginform' element={<LoginForm/>}/>

          </Route>

        </Routes>

      </DataProvider>
      
    </div>

  );
}

export default App;
