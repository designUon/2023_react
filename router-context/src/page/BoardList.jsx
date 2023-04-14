import React from 'react'
import data from '../data/dummy.json'

import {useState} from 'react'
import {Link} from 'react-router-dom'

export default function BoardList() {

    const [dataList, setDataList] = useState(data);

    return (
    <div>
        <h3>BoardList</h3>
        <ul>
            {
                dataList.map((data)=>(
                    <li key={data.id}>
                        <Link to={`/boardlist/${data.id}`}>
                        {data.title}
                    </Link></li>
                ))
            }
        </ul>
    </div>
    )
}
