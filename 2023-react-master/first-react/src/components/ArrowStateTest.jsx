import { useState } from "react";

import './arrowState.css'

const ArrowStateTest = (props) => {


    const array = [1, 2, 3, 4, 5, 6, 7];
    const arrayMap1 = array.map(i => i*2 + ", ");
    console.log(`arrayMap1 : ${arrayMap1}`);
    
    const arrayMap2 = array.map(i => toString());
    console.log(`arrayMap2 : ${arrayMap2}`);

    const arrayMap3 = array.map(i => {
            if(i%2 == 0){
                return i*2 + ", ";
            } 
        }
    )
    console.log(`arrayMap3 : ${arrayMap3}`);

    const arrayFilter1 = array.filter(i => i%2 == 0)
    console.log(`arrayFilter1 : ${arrayFilter1}`);

    const arrayFilter2 = array.filter(i => i<5)
    console.log(`arrayFilter2 : ${arrayFilter2}`);

    const arrayFilter3 = array.filter(i => i !== 6)
    console.log(`arrayFilter3 : ${arrayFilter3}`);



    const [pplist, setPplist] = useState(
        [
            { id: 1, name: "홍길동", checked: true }
        ]
    );



    ////////////////////////////////////////////////////////////////




    const [todolist, setTodolist] = useState(
        [
            {num: 1, text: "할일"},
            {num: 2, text: "할일"},
            {num: 3, text: "할일"}
        ]
    );


    // 리스트를 받아올 공간
    const [inputList, setInputList] = useState("");

    const inputChange = (e)=>{setInputList(e.target.value)}

//////////////////////////////////////////////////////////////////

    return(
        <div>

            <h3>ArrowStateTest</h3>
            <input
                type="text"
                onChange={inputChange}
                value={inputList}
            />
            <input
                type="submit"
                value="추가"
                onClick={()=>{
                    const newList = todolist.concat(
                        {
                            num : 4,
                            text : inputList
                        }
                    );
                    setTodolist(newList);
                    setInputList("");
                }}
            />
            
            <ul>
                {
                    todolist.map((todoPrint)=>
                    <li>
                        <input type="checkbox" />
                        {todoPrint.num}. {todoPrint.text}
                        <button>X</button>
                    </li>
                    )
                }
            </ul>


            <p>arrayMap1 = {arrayMap1}</p>
            <p>arrayMap2 = {arrayMap2}</p>
            <p>arrayMap3 = {arrayMap3}</p>

            {/* <p>{pplist({...name})}</p> */}

        </div>
    )
}

export default ArrowStateTest;