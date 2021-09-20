import React, { useState } from 'react'
import { Button } from 'antd';
import axios from 'axios';
import { useHistory } from 'react-router';

const User = ({ current }) => {
    const [remove, setRemove] = useState(false);
    const history = useHistory();
    const main = {
        float: "left",
        width: "30%",
        border: "1px solid black",
        borderRadius: "5%",
        margin: "1%",
        padding: "1%"
    }


    const removeElement = (_id) => {
        axios.post('http://localhost:9002/delete', { id: _id })
            .then(() => {
                setRemove(true);
            })
    }

    return (
        <>
            {
                !remove ?
                    <div style={main}>
                        <h2> {current.name}{
                            current.isAdmin ?
                                "(Admin)" : null
                        }</h2>
                        <p>{current.Email}</p>
                        <p>{current.Contact}</p>
                        <div>
                            <Button type="primary" onClick={() => removeElement(current._id)} danger block>
                                Delete User
                            </Button>
                        </div>
                    </div> :
                    null
            }
        </>
    )
}

export default User
