import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import DataContext from '../context/DataContext'

export default function NavHeader() {

    const {state} = useContext(DataContext);

    return (
        <div>
            <Link to='/'>Home </Link>
            <Link to='/boardlist'>Board </Link>
            <Link to='/boardwriteform'>Write </Link>
            {/* state user의 login이 false일때 Link */}
            {/* true 일때 : user의 writer 출력 */}

            {
                state.user.login ?
                <span><b>{state.user.writer}</b>님 로그인 성공!</span>
                : <Link to='/loginform'>Login</Link>
            }
        </div>
    )
}