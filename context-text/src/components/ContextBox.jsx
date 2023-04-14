import React from 'react'
import { useContext } from 'react';

import ThemeContext from '../context/ThemeContext';

export default function ContextBox() {
    return (
        <div>
            <ContextText></ContextText>
        </div>
    )
}

function ContextText(){
    // useContext() ThemeContext를 가져와서 출력하시오
    // const context2 = useContext(ThemeContext);
    const text = useContext(ThemeContext)
    return <div>
        <p>{text}</p>
    </div>
}
