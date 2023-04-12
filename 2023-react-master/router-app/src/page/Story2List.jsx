import React from 'react'
import {Link, Outlet} from 'react-router-dom';

export default function Story2List() {

    const colors = ["red", "yellow", "blue", "purple"]

    return (
        <div>
            <h3>Story2 List</h3>
            <Outlet/>
            {
                colors.map((c, i)=>(
                    <Link to={`/story2List/${c}`} key={i}> {c} </Link>
                ))
            }

        </div>
    )
}
