import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

// json 내용대신에 DataContext에 있는 boardlist 들고와서 화면에 출력하기
import data from '../data/dummy.json'

import { useContext } from 'react';
import DataContext from '../context/DataContext';
import CommentComp from '../components/CommentComp';


// id로 구분하기위해 board에 data의 내용이 필요함
export default function Board() {

    // useNavigate를 사용하면 함수를 이용해서 화면이동가능
    const navigate = useNavigate();

    const { id } = useParams();


    // Context의 값을 가져옴
    // 삭제를 위해 action 속성도 가져옴
    const { state, action } = useContext(DataContext);
    const { boardlist } = state;


    // comment로 작성된 글을 저장할 공간
    const [text, setText] = useState("");



    //배열의 함수인 find를 이용하여
    // 함수의 조건이 참인 하나의 값을 가져온다
    // find로 가져온 값은 배열 안에 있는 하나의 값
    // find로 값을 찾지 못할 경우 undefined 출력 >> 오류

    // const boardData = data.find((d)=>(d.id == id))
    const boardData = boardlist.find((d) => (d.id == id))

    // state의 commentlist에서 boardId와 param의 id값이 같은 새로운 배열 작성(filter)
    const boardCommentlist = state.commentlist.filter(
        (comment)=>(comment.boardId == id)
    )

    // useEffect를 사용해서
    // boardData값이 undefind면 오류페이지 컴포넌트로 이동
    // 혹은 목록으로 이동할 수 있도록 작성

    // 두번째 인자값이 빈 배열이라면 컴포넌트 생성 시에 실행
    useEffect(() => {
        if (boardData == undefined) {
            navigate('/boardlist');
        }
    }, [])


    // 게시물 삭제 메소드
    const deleteBoard = () => {

        if (window.confirm("정말로 삭제하시겠습니까?")) {
            // 1. 현재 id를 들고온다 => useParam을 통해 가져온 id를 들고온다

            // 2. id와 동일한 객체를 제외한 새로운 배열을 만든다
            // (filter)
            // const newBoardlist = boardlist.filter((board)=>(board.id !== id))
            // (board.id !== id) => board.id(Number) / id(String) => 자료형이 다르기 때문에 삭제가 되지 않는다
            // 일치 비교연산자를 사용할 때는 자료형까지 동일해야한다
            const newBoardlist = boardlist.filter((board) => (board.id !== Number(id)))

            // 3. 새로운 배열을 set메소드를 통해 넣어준다
            action.setBoardlist(newBoardlist);

            // 삭제한 이후 boardlist로 이동
            navigate('/boardlist');
        }

    }




    // comment를 추가하는 버튼 메소드
    const addComment = () => {
        // 1. 추가할 코멘트 객체 생성
        const newComment = {
            // cid : 3,
            cid : state.cid,
            boardId : boardData.id,
            text : text,
            date : "2023-04-19",
            writer : state.user.writer
        }

        // 1-1. cid값 증가를 위한 메소드 실행
        action.cidCount();

        // 2. 코멘트가 추가된 새로운 배열 => concat() 으로 생성
        // state => DataContext에서 가져온 값
        const newCommentlist = state.commentlist.concat(newComment);

        // 3. 새로운 배열을 set 메소드를 통해서 값 할당
        // action => DataContext에서 가져온 값
        action.setCommentlist(newCommentlist);
    }



    // 코멘트를 삭제하기위한 메소드
    const deleteComment = (cid) => {
        // 1. 삭제/수정을 할 때는 값의 id(유일한 값)을 통해 확인
        // boardCommentlist의 각 객체에 cid가 있음
        // => map으로 객체를 하나씩 출력할 때 cid값을 가져옴


        // 2. filter를 통해서 id값을 제외한 새로운 배열생성
        // state.commentlist(전체배열)를 통해서 새로운 배열 생성!
        const newCommentlist = state.commentlist.filter(
            (comment)=>(comment.cid !== cid)
        )
        
        // 3. 그 배열을 set메소드를 통해 값을 할당
        action.setCommentlist(newCommentlist);
    }



    return (

        <div>
            {   //화면이 먼저 화면에 렌더되고, useEffect 실행
                //화면 상에서 나타나는 오류를 제거하고
                // useEffect로 이동
                boardData && (
                    <div>
                        <h3>제목 : {boardData.title}</h3>
                        <p>작성자 : {boardData.writer}</p>
                        <p>내용 : {boardData.content}</p>
                        <p>날짜 : {boardData.date}</p>
                    </div>
                )
            }

            {/* writer의 값이 같을 때만 아래 버튼들이 보이도록 => 삼항연산자로 작성 */}
            {/* boardData의 값이 있을 때 비교! */}
            {/* 먼저는 boardData가 있는지 확인한 후에 출력 */}
            {/* 연달아서 확인하기위해 && 연산자 사용 */}
            {/* 1) boardData가 있는지 확인하고(있으면 true / 없으면 false)
                2) writer 비교 */}
            {
                boardData &&
                (state.user.writer === boardData.writer &&
                    <div>
                        
                        <button
                            onClick={deleteBoard}
                        >
                            게시글 삭제
                        </button>

                        <button
                            // navigate의 state를 이용하여 boardData 객체를 전달
                            onClick={() => { navigate('/board-modify-form', { state: boardData }) }}
                        >
                            게시글 수정
                        </button>

                    </div>
                )
            }

            <hr />


            {/* 코멘트를 작성할 공간 */}
            <input type="text"
                onChange={(e)=>{setText(e.target.value)}}
            />
            <button
                onClick={addComment}
            >comment +</button>


            <hr />

            {/* <CommentComp
                writer={"green"}
                date={"2023-04-19"}
                text={"코멘트"}
            /> */}

            {
                // 값을 넘길 형태가 객체로 주어져있으면 객체로 넘길 수 있다
                // state의 commentlist를 그대로 쓰게되면 전체가 나옴
                // => 동일한 boardId를 가진 commentlist를 만들어야함
                
                // state.commentlist.map((commnet)=>(
                boardCommentlist.map((comment)=>(
                    <CommentComp
                        key = {comment.cid}
                        comment={comment}
                        deleteComment={deleteComment}
                    />
                ))
            }



        </div>

    )

}
