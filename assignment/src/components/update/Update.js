import React, {useState} from 'react'
import Heading from '../heading/Heading';
import {
    Form,
    Input,
    Button
} from 'antd';
import axios from 'axios';


const Update = ({ emplyoee, setEmplyoee, setUpdate }) => {
    const [newinfo, setNewInfo] =  useState({
        _id : emplyoee._id,
        fullName :emplyoee.name,
        contact : emplyoee.Contact,
        email :emplyoee.Email,
        password :emplyoee.password
    })
    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewInfo({
            ...newinfo,
            [name]: value,

        })
    }
    const updateUser = () => {
        setUpdate(false);
        setEmplyoee({
            ...emplyoee,
            name:newinfo.fullName,
            Contact :newinfo.contact,
            Email:newinfo.email
        });
        
        axios.post("http://localhost:9002/useroperation/update" , newinfo)
        .then(()=>{
            console.log("update info successfully");
        })
        .catch(()=>{
            console.log("issue while updating")
        })
        

    }
    return (
        <div>
            <Heading text="Update Account" />
            <Form
                labelCol={{ span: 4 }}
                wrapperCol={{ span: 14 }}
                layout="horizontal"
                className="newUser">

                <Form.Item label="Full Name ">
                    <Input name="fullName" value={newinfo.fullName} onChange={handleChange} required />
                </Form.Item>
                <Form.Item
                    label="Contact no"
                >
                    <Input name="contact" type="tel"
                        value={newinfo.contact} onChange={handleChange}
                        maxLength="10" required />
                </Form.Item>

                <Form.Item label="Email"

                    rules={[
                        {
                            required: true,
                            type: 'email',
                            message: 'Please input your email!',
                        },
                    ]}>
                    <Input name="email" value={newinfo.email} onChange={handleChange} required />
                </Form.Item>
                <Form.Item
                    label="Password"
                >
                    <Input.Password name="password" value={newinfo.password} onChange={handleChange} required />
                </Form.Item>

                <Button htmlType="submit" type="primary" onClick={updateUser}>
                    Update profile
                </Button>

            </Form>
        </div>
    )
}

export default Update
