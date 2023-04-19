import React, { useState } from "react";

const DataContext = React.createContext("");

// 컴포넌트 밖에서 생성한 값의 경우,
// 자동으로 값이 바뀌지않기에 안에서 메소드를 작성
let cid = 3;

// 데이터값을 가진 Provider 컴포넌트 작성
// DataContext에 들어갈 value값의 특징
// : 2개 이상의 페이지 컴포넌트에서 사용할 때 작성
// : 페이지 컴포넌트 - path로 연결된 컴포넌트

const DataProvider = ({children}) => {
    // 데이터를 저장 및 수정하기위해 useState 사용
    const [boardlist, setBoardlist] = useState(
        [

            {
                id : 1,
                title : "DataContext로 가져온 첫 번째 게시물입니다",
                content : "DataContext로 가져온 내용을 작성하였습니다",
                date : "2023-04-14",
                writer : "green1"
            },
        
            {
                id : 2,
                title : "DataContext로 가져온 두 번째 게시물입니다",
                content : "DataContext로 가져온 내용을 작성하였습니다",
                date : "2023-04-14",
                writer : "green2"
            },

            {
                id : 3,
                title : "DataContext로 가져온 세 번째 게시물입니다",
                content : "DataContext로 가져온 내용을 작성하였습니다",
                date : "2023-04-17",
                writer : "green3"
            }
            
        ]
    );


    // id값을 전달하기위해 useState()로 작성
    const [id, setId] = useState(4);

    // user값을 사용하기위해 useState() 작성
    const [user, setUser] = useState(
        {writer : "익명", login : false}
    )



    // commentlist 값 저장
    // id, boardId, text, date, writer
    const [commentlist, setCommentlist] = useState(
        [
            {
                cid : 1,
                boardId : 1,
                text : "첫번째 게시글의 코멘트입니다",
                date : "2023-04-19",
                writer : "green" 
            },

            {
                cid : 2,
                boardId : 3,
                text : "세번째 게시글의 코멘트입니다",
                date : "2023-04-19",
                writer : "green" 
            }
        ]
    )



    // cid를 사용하기 위한 메소드 (호출하면 1씩 증가)
    const cidCount = () =>{
        cid++;
    }



    // value에 담을 데이터 정리
    const value = {
        state : {boardlist, id, user, commentlist, cid},
        action : {setBoardlist, setId, setUser, setCommentlist, cidCount}
    }

    return <DataContext.Provider value={value}>
        {children}
    </DataContext.Provider>
    
}

//값을 전달하기위해 감싸는 컴포넌트
export {DataProvider};
// 값을 사용하기위해 호출하는 컴포넌트
export default DataContext;