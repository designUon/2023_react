import React from 'react'
import {useParams} from 'react-router-dom'

export default function Story2() {

    const params = useParams();
    const {name} = useParams();

    return (
        <div>
            <h1>{params.name} Story2</h1>
            <p>{name} Story2 페이지입니다</p>
        </div>
    )
}
