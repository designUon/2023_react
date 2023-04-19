import React, {useState, useContext} from 'react'
import DataContext from '../context/DataContext';
import { useNavigate } from 'react-router-dom';

export default function LoginForm() {

    const navigate = useNavigate();

    const [writer, setWriter] = useState();

    // 객체의 구조 분해를 통해서 원하는 속성만 가져옴(action)
    const {action} = useContext(DataContext)

    // 로그인 메소드
    // 변수로 자주사용하는 이름이라면 구분하기위해
    // 앞이나 뒤에 동사를 붙여주기
    const onlogin =()=>{
        // 1. user의 객체를 만들고
        const newUser = {
            writer : writer,
            login : true
        }
        // 2. set메소드를 통해서 수정 => DataContext값 가져옴
        action.setUser(newUser);

        // home으로 이동
        navigate('/');
    }

    return (
        <div>
            <h3>LoginForm</h3>
            <label htmlFor="">ID </label>
            <input type="text"
                onChange={(e)=>{setWriter(e.target.value)}}
            />
            <button
                onClick={onlogin}
            >
                Login
            </button>
        </div>
    )
}
