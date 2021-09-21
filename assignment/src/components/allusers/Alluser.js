import React, { useEffect, useState, useLayoutEffect } from 'react'
import User from './User';
import axios from 'axios';

const Alluser = () => {
    const heading = {
        textAlign: "left",
        marginLeft: "2%",
    }
    const [data, setData] = useState([]);

    useLayoutEffect(() => {
        fetchData();
    },[])

    const fetchData = () => {
         axios.get('http://localhost:9002/useroperation/allUser')
            .then((res) => {
                setData(res.data.user);
            })
            .catch(() => {
                console.log("error in fetching")
            })
    }

    return (

        <div>
            <h2 style={heading} >All users</h2>
            {
                data.map((current)=>{
                    return (
                        <User current = {current}/>
                    )
                })
            }

        </div>
    )
}

export default Alluser
