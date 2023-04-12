// 16.8버전 이후로 함수형에서 state 사용 가능
import { useState} from "react";

// css 파일 들고오기
import './arrowState.css'


// 함수형 컴포넌트의 특징
// 1) this를 사용하지않는다
// 2) 안에 값을 넣어줄 때 변수로 할당하므로 const나 let 사용

// 화면의 업데이트에 상관없이 사용하는 변수
// 현재 컴포넌트에서 사용할 전역변수
let globalId = 5;


const ArrowState = (props) => {
    //useState는 항상 함수(컴포넌트)안에 작성


    // const [message, setMessage] = useState("내용을 적습니다");
    const [message, setMessage] = useState(
        {
            time:"10:53",
            text: "메세지입니다"
        });

    // useState는 여러번 사용할 수 있다

    const [number, setNumber] = useState(0);
    const [array, setArray] = useState([1,2,3,4]);

    const [students, setStudents] = useState(
        [
            {id: 1, name: "꾸리", checked:true},
            {id: 2, name: "바미", checked:false},
            {id: 3, name: "으니", checked:false},
            {id: 4, name: "주니", checked:false}
        ]
    );


    // 학생 이름을 받아올 공간
    const [inputName, setInputName] = useState("");


    // 클래스형에서 render()안에 값이 계속 초기화
    // 함수형 클래스에서는 함수 안에 있는 내용이 계속 초기화
    // let id = 5;


    // 메소드 작성
    // 화살표함수의 특징 : this를 사용하지 않는다
    const inputChange = (e)=>{setInputName(e.target.value)}


    const addStudents = ()=>{
        // 값을 받아와서 새로운 배열로 만들기
        // 새로운 배열 students 할당
        const newStudents = students.concat(
            {
                // id : 5,
                id : globalId++,
                // id를 ctrl + 클릭해서 확인해보면 선언된 id값이 선택됨
                name : inputName
            }
        );
        // globalId++;
        setStudents(newStudents);
        // 버튼을 눌렀을 때 빈값으로 변경
        setInputName("");

    }


    // 삭제
    // deleteStudent=(student)=>{
    //     const newStudents = this.state.students.filter((s) => s.id !== students.id);
    //     this.setState({students : newStudents})
    // }
    // id값을 전달하여 메소드 안에서 사용
    const deleteStudent =(id)=>{
        //클릭한 id값을 제외하고 새로운 배열작성
        // filter
        const newStudents = students.filter(
            (s)=>s.id !== id
        )
        setStudents(newStudents);
    }


    /////////////////////////////////////////////////////////////////////////////////////



    return(

        <div>

            <br />
            <br />
            <br />

            {/* <p>{message}</p> */}
            <p>{number}, {message.text}</p>
            <button
                // 주의할 점!!
                // useState로 작성한 함수를 통해서 값을 넣어줄 때
                // 그 값의 자료형이 같지않아도 넣어주게된다
                // => 작성할 때 그 값의 자료형을 확인하고 동일한 형태로 할당
                // onClick={()=>{setMessage("수정된 내용")}}

                // 객체/배열의 일부분만 수정해서 넣을 때 사용하는 연산자 => ...
                // ...(스프레드 연산자) => 객체나 배열안에 있는 값(요소)을 꺼내서 사용
                onClick={()=>{setMessage({...message, text:"...으로 수정된 내용"})}}

            >
                글자값 수정
            </button>

            {
                array.map((num,i)=><li key={i}>{num}</li>)
            }


            <br />
            {/* /////////////////////////////////////////////////////////////////////////// */}
            <br />


            <h3>학생 추가</h3>
            <input
                type="text"
                // onChange={(e)=>{setInputName(e.target.value)}}

                // 화살표함수의 특징 : this를 사용하지 않아도된다
                onChange={inputChange}
                // input 창 빈값으로 만들기 위해 추가
                value={inputName}
            />
        
            <button
                onClick={addStudents
                    // ()=>{
                    //     // 값을 받아와서 새로운 배열로 만들기
                    //     // 새로운 배열 students 할당
                    //     const newStudents = students.concat(
                    //         {
                    //             id : 5,
                    //             name : inputName
                    //         }
                    //     );
                    //     setStudents(newStudents);
                    //     // 버튼을 눌렀을 때 빈값으로 변경
                    //     setInputName("");
                    // }
                }
            >
                추가
            </button>


            <ul>
                {
                    students.map((student)=>
                        <li 
                            key={student.id}
                            className={ student.checked ? "on" : "" }
                        >
                            <input type="checkbox" 
                                checked={student.checked}
                                readOnly
                                onClick={()=>{
                                    // 체크박스를 클릭하면, 클릭한 객체의 checked 값이 바뀜
                                    // map을 이용하여 작성
                                    // map() : 배열안의 요소의 값을 return을 통해 새로운 배열만듬
                                    // 클릭한 객체를 찾았다면 > 그객체의 checked 값을 수정해서 return
                                    const newStudents = students.map((s)=>{
                                        // s통해서 각각의 객체값 확인
                                        // 1) 클릭한 체크박스의 id값과 모든 s의id와 비교
                                        // 2) id 값이 같지않다면 원래 객체 
                                        // 3) id 값이 같다면 checked 값을 !을 이용하여 수정한 객체
                                        if(student.id !== s.id) {
                                            return s;
                                        } else {
                                            // 원래 객체에서 checked 값만 수정하기 위해서
                                            // s안에있는 속성을 ...(스프레드 연산자)를 이용해서 추가
                                            // 수정할 속성인 checked를 작성해서 수정
                                            return {...s, checked: !s.checked }
                                        }

                                    })
                                    setStudents(newStudents);
                                }}
                            />
                            {student.id}, {student.name}
                            <button
                                // 클릭했을때 배열 삭제 > 클래스형 컴포넌트 내용 참고
                                onClick={()=>{deleteStudent(student.id)}}
                            >
                                X
                            </button>
                        </li>
                    )
                }
            </ul>

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        </div>
    )
}

export default ArrowState;