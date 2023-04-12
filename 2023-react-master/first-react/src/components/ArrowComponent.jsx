const ArrowComponent = (props) => {

    // 변수를 넣어서 사용가능
    const {text, children} = props;

    // 여러줄로 작성할 때 ( )로 묶어주기
    return (
        <div>
            <h3>함수형 컴포넌트입니다</h3>
            <p>하나의 부모태그로 전달</p>
            <p>text 속성으로 가져온 props값 {props.text}, {text}</p>
            <p>{props.children}, {children}</p>
        </div>
    );
}

export default ArrowComponent;