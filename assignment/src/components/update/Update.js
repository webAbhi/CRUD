import React, {useState} from 'react'
import Heading from '../heading/Heading';
import {
    Form,
    Input,
    Button
} from 'antd';
import axios from 'axios';


const Update = ({ profile, setProfile, setUpdate }) => {
    const [newinfo, setNewInfo] =  useState({
        _id : profile._id,
        fullName :profile.name,
        contact : profile.Contact,
        email :profile.Email,
        password :profile.password
    })
    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewInfo({
            ...newinfo,
            [name]: value,

        })
        console.log(newinfo);
    }
    const updateUser = () => {
        axios.post("http://localhost:9002/update" , newinfo)
        .then(()=>{
            setUpdate(false);
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
                        maxlength="10" required />
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
