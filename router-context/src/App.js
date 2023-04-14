import './App.css';
import {Route, Routes} from 'react-router-dom'
import Home from './page/Home';
import BoardList from './page/BoardList';
import Layout from './page/Layout';
import Board from './page/Board';

function App() {

  return (

    <div className="App">
      <Routes>

        <Route path='/' element={<Layout/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='/boardlist' element={<BoardList/>}/>
          <Route path='/boardlist/:id' element={<Board/>}/>
        </Route>

      </Routes>
    </div>

  );
}

export default App;
