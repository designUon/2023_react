// 코멘트 하나가 보여질 공간 작성
import React from 'react'

// 삭제버튼에 쓸 메소드를 Board에서 작성 후 전달해서 사용
// >> state와 action을 필요한 공간에서 쓰기위함

export default function CommentComp(props) {


    // props로 전달한 comment를 구조분해를 통해서 쓰기 쉽게 작성
    const {writer, text, date, cid} = props.comment;

    //작성한 메소드를 들고와서 사용
    const {deleteComment} = props;

    return (
        <div>
            <h4>{cid}번째 코멘트. {writer}</h4>
            <p>{text}
                <button
                    // onClick={deleteComment}
                    
                    // 메소드를 사용할 때, cid를 전달해야하기때문에
                    // 화살표 함수로 감싸서 사용함
                    onClick={()=>{deleteComment(cid)}}
                >X</button>
            </p>
            <span>{date}</span>
        </div>
    )
}
