import React, { useState } from 'react'
import 'antd/dist/antd.css';
import './signup.css';
import Heading from '../heading/Heading';
import axios from 'axios';
import {
    Form,
    Input,
    Button,
    Switch,
} from 'antd';
import { useHistory } from 'react-router';

const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};

const Signup = ({ setEmplyoee }) => {
    const history = useHistory();
    const [profile, setProfile] = useState({
        fullName: "",
        email: "",
        password: "",
        isAdmin: false,
        confirmPassword: "",
        contact: ""
    })

    const handleChange = (e) => {
        if (e.target === undefined) {
            setProfile({
                ...profile,
                isAdmin: e
            })
        }
        else {
            const { name, value } = e.target;
            setProfile({
                ...profile,
                [name]: value,
            })
        }
    }
    const createUser = () => {
        const { password, confirmPassword, fullName, contact } = profile;
        if ( password  && password === confirmPassword && fullName && contact) {
            axios.post('http://localhost:9002/userauth/create', profile)
                .then((res) => {
                    setEmplyoee(res.data.oj);
                    history.push('/');
                })
                .catch(()=>{
                    alert("invalid input");

                })
        }
        else {
            
        }
    }


    return (
        <div>

            <Heading text="Create Account" />
            <Form
                labelCol={{ span: 4 }}
                wrapperCol={{ span: 14 }}
                layout="horizontal"
                className="newUser">

                <Form.Item label="Full Name "
                    rules={[
                        {
                            required: true,
                            message: 'Please enter your Name',
                        },
                    ]}>
                    <Input name="fullName" value={profile.name} onChange={handleChange} required />
                </Form.Item>
                <Form.Item
                    label="Contact no"
                >
                    <Input name="contact" type = "tel" 
                    button={profile.contact} onChange={handleChange} 
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
                    <Input name="email" value={profile.email} onChange={handleChange} required />
                </Form.Item>
                <Form.Item
                    label="Password"
                >
                    <Input.Password name="password" value={profile.password} onChange={handleChange} required />
                </Form.Item>

                <Form.Item
                    label="confirm Password"
                >
                    <Input.Password name="confirmPassword" value={profile.confirmPassword} onChange={handleChange} required />
                </Form.Item>


                <Form.Item label="Admin account" valuePropName="checked">
                    <Switch name="isAdmin" onChange={handleChange} />
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Button htmlType="submit" type="primary" onClick={createUser}>
                        Sign up
                    </Button>
                    <Button htmlType="button" style={{ margin: '0 8px' }}
                        onClick={() => history.push('/')} >
                        Login
                    </Button>
                </Form.Item>

            </Form>
        </div >
    )
}

export default Signup
