// DataContext는 값(value)을 App에서 넣어주는 것이 아니라
// DataContext안에서 작성하는 방법

import React from "react";
import { useState } from "react";

// DataContext 작성
const DataContext = React.createContext(null);

// App.js에서 값 전달할때
// DataContext.Provider를 이용하여 값 전달


// 이 공간에서 값을 추가한 Provider 작성 후 내보냄
// provider는 컴포넌트 형태 
// children : DataContext.Provider 사이에 컴포넌트
const DataProvider = ({children}) => {
    // 사용할 데이터 > useState() 
    // 함수형 컴포넌트에서 받아서 사용
    const [login, setLogin] = useState(true);
    const [name, setName] = useState("홍길동");

    // state로 작성한 값들을 value에 넣기
    const value = {
        state : { login, name },
        action : { setLogin, setName }
    }

    // return을 통해서 provider에서 쓰도록 내보내줌
    return <DataContext.Provider value={value}>
                {children}
            </DataContext.Provider>
}


// 감싸서 값을 전달하기 위한 컴포넌트
export { DataProvider};
// 값을 가져오기위해 접근하는 값
export default DataContext;