const TodoItem =(props)=> {

    const {todo2, checkedTodo, deleteTodo} = props

    // 함수의 결과값을 화면에 출력
    // 시간 출력
    const printDate = (date) => {
        return '${date.getMonth()+1}월 ${date.getDate()}일'
    }

    return(

        // <li key={todo2.id} className={todo2.checked ? "checked" : ""}>
        <li className={todo2.checked ? "checked" : ""}>
            <h3>
            {/* {todo2.date.getMonth()+1 + "월" + todo2.date.getDate() + "일"} */}
            {printDate(todo2.date)}
            </h3>
            <input
                type="checkbox"
                checked={todo2.checked}
                readOnly
                // ----------------------------- checked ------------------------------
                onClick={ ()=>{checkedTodo(todo2.id)} }
            />
                {/* {todo2.id} */}
                {todo2.todo}
            <button
            // ----------------------------- delete ------------------------------
            // onClick={deleteTodo} => 아래처럼 변경
            // todo2.id 값을 가져와주고 화살표 함수로 감싸줘야함
            onClick={ ()=>{deleteTodo(todo2.id)} }
            >
            X
            </button>
        </li>
    );

};

export default TodoItem