import './login.css'
import 'antd/dist/antd.css';
import axios from 'axios';
import { useHistory } from 'react-router';
import { useState } from 'react';
import Heading from '../heading/Heading'
import {
    Form,
    Input,
    Button,
    Checkbox
} from 'antd';

const Login = ({setEmplyoee}) => {

    const history = useHistory();
    const [profile, setProfile] = useState({
        email: "abhijeetk9911@gmail.com",
        password: "abhijeet121@"
    })

    const loginUser = () => {
        axios.post('http://localhost:9002/login', profile)
            .then((res) => {
                setEmplyoee(res.data.user);
                console.log(res.data);
                history.push("/");
            })
            .catch(()=>{
                alert("wrong credentials");
            })
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfile({
            ...profile,
            [name]: value
        })
    }

    const tailLayout = {
        wrapperCol: { offset: 8, span: 16 },
    };


    return (
        <div>
            <Heading text="Please Login" />
            <Form
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                initialValues={{
                    remember: false,
                }}
                autoComplete="off"
                className="login"
            >
                <Form.Item
                    label="Email"
                    rules={[
                        {
                            required: true,
                            type: 'email',
                            message: 'Please input your email!',
                        },
                    ]}
                >
                    <Input name="email"
                        value={profile.email} onChange={handleChange} required />
                </Form.Item>

                <Form.Item
                    label="Password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input.Password name="password"
                        value={profile.password} onChange={handleChange} required />
                </Form.Item>

                <Form.Item
                    name="remember"
                    valuePropName="checked"
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>


                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit" onClick={loginUser}>
                        Login
                    </Button>
                    <Button htmlType="button" style={{ margin: '0 8px' }}
                        onClick={() => history.push("/Create")}>
                        Sign up
                    </Button>

                </Form.Item>
            </Form>

        </div>
    )
}

export default Login
