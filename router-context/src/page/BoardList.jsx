import React from 'react'
import data from '../data/dummy.json'

import {useState} from 'react'

export default function BoardList() {

    const [dataList, setDataList] = useState(data);

    return (
    <div>
        <h3>BoardList</h3>
        <ul>
            {
                dataList.map((data)=>(
                    <li>{data.title}</li>
                ))
            }
        </ul>
    </div>
    )
}
