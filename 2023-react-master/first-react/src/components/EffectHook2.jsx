import React, {useEffect, useState} from 'react'

export default function EffectHook2() {

    // useEffect를 사용해서 useState의 비동기 값을
    // 다른 useState에 담아오는 방법 확인

    const [name, setName] = useState("홍길동");
    const [age, setAge] = useState(29);
    const [profile, setProfile] = useState({
        name : "홍길동", age: 29 
    });


    // 공공데이터를 담을 공간(state)
    const [menuList, setMenuList] = useState([]); // 배열이 확실하다면 [] 넣어주기

    // 공공데이터 요청 시 그 값이 들어왔을 때 확인 할 값
    const [loading, setLoading] = useState(false); // 처음 값은 false로 설정 => 값이 들어왔을 때 true로 확인할 수 있도록


    /////////////////////////////////////////////////////////////////////////////////////

    // name값이 수정되어었을 떄 다른 값도 함께 수정
    // 1. setName 먼저 실행
    // 2. useEffect(()=>{},[name])의 함수가 실행

    useEffect(()=>{
        setProfile({...profile, name});
      },[name])

    // age가 바뀌었을 때 profile의 age값 수정하는 useEffect
    // 보통은 버튼을 눌렀을 떄 그 값이 들어감
    // 지금은 연습을 위해 함께 바꾸는 중
    // 출력방식은 name과 동일하게 작성

    useEffect(()=>{
        setProfile({...profile, age})
    }, [age])



    // 컴포넌트가 생성이 되었을 때 공공데이터를 가져옴
    // useEffect(()=>{
    // await를 사용할 때 async를 이용하여 비동기 함수로 작성

    // useEffect의 함수 자체에는 async를 붙일 수 없음
    // 값을 가져오는 비동기 함수를 따로 작성한 후 호출하여 사용 

    // useEffect(async()=>{
    //     const promise = await fetch("https://busan-food.openapi.redtable.global/api/menu-dscrn/korean?serviceKey=cjhnZv3hQPEUo7Qv9qthhOQlPMszqgrYNqsignU8gprc3imFh4QkBQEDizngJlgg&pageNo=2");
    //     const response = await promise.json();
    //     console.log(response);
    //     setMenuList(response);
    // }, [])


    const getMenu = async()=>{
        const promise = await fetch("https://busan-food.openapi.redtable.global/api/menu-dscrn/korean?serviceKey=cjhnZv3hQPEUo7Qv9qthhOQlPMszqgrYNqsignU8gprc3imFh4QkBQEDizngJlgg&pageNo=2");
        const response = await promise.json();
        // console.log(response);
        console.log(response.body);
        // setMenuList(response);
        setMenuList(response.body);
    }


    useEffect( ()=>{
        // 컴포넌트를 생성할 때 바로 호출해서 사용
        getMenu();
        // getMenu()는 비동기 => getMenu의 내용이 다 실행되지않음
        // 아래 작성한 코드는 바로 실행됨
    }, [])


    useEffect( ()=>{
        // 값이 들어왔다면 true로 바꿔서 화면출력
        // setLoading(true);

        console.log(menuList)
        // menuList를 확인해보면 처음 값이 빈값으로 들어감

        // 빈값이 아닌 값이 들어갔을 때 화면에 출력
        if(menuList.length>0){
            setLoading(true);
        }
    }, [menuList])


    /////////////////////////////////////////////////////////////////////////////////////


    return (
        <div>
            <br />
            <hr />
            <h2>EffectHook2</h2>
            <p>useState의 값은 비동기로 저장(실행순서대로 저장되지않음)</p>
            <label htmlFor="">이름</label>
            <input type="text" 
                onChange={(e)=>{
                    // name의 값을 바꿔줌
                    setName(e.target.value)
                    // name안에 들어가있는 값을 profile에 전달
                    // setProfile({...profile, name : name})과 동일
                    // name = "값" : '변수'와 '값'이 객체의 '속성'과 '값'으로 들어감
                    
                    // setProfile({...profile, name});

                    // profile.name이 한 박자 늦게 값이 들어감 

                    // 같은 이벤트에서 set을 이용하여 수정한 state값을 가져오려고하면
                    // 한 박자 늦게 이전 값을 가져오게 됨(현재 바로 수정한 값에 접근하지않음)

                    // => useEffect의 두번째 값[]에 name값을 넣어서 값이 바뀌었을 때
                    // setProfile이 실행되게 수정해주어야한다
                }}
                />
            <h4>name : {name}, profile의 name :{profile.name} </h4>

            <label htmlFor="">나이</label>
            <input type="number"
                onChange={(e)=>{
                    // setAge(e.target.value) => 숫자값으로 가져오기 parseInt
                    setAge(parseInt(e.target.value))
                    // setProfile({...profile, age})
                }}
            />
            <h4>age : {age}, profile의 age : {profile.age}</h4>

            <br />
            <hr />
            <br />

            {/* 공공데이터로 값을 가져올 때, 그 값이 바로 들어오지 않는다 */}
            {/* 바로 출력하면 오류발생 */}
            {/* <p>공공데이터로 가져온 값 : {menuList[0].MENU_NM}</p> */}
            <p>공공데이터로 가져온 값 : {loading && menuList[0].MENU_NM}</p>

        </div>
    )
}
