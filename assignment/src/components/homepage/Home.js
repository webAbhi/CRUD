import 'antd/dist/antd.css';
import { Layout } from 'antd';
import { useState } from 'react';
import { Button } from 'antd';
import Alluser from '../allusers/Alluser';
import Profile from '../profile/Profile';
import Cardcomponent from './Cardcomponent';
import { Row, Col } from 'antd';
import Navbar from '../navbar/Navbar';
const { Content } = Layout;

const Home = ({ setEmplyoee , emplyoee}) => {
    const [tab, setTab] = useState("Home");
    return (
        <Layout style={{ height: "100vh" }}>
            <Navbar setEmplyoee={setEmplyoee} setTab={setTab} emplyoee ={emplyoee}/>
            <Layout>
                <Content style={{ textAlign: "center", margin: "1%", overflowY:"scroll" }}>
                    {
                        tab === "Home" ?
                        <div style ={{marginTop:"10%"}}>
                             <h2 > Welcome to homepage</h2> 
                             <Button type= "primary">Learn more</Button>
                        </div>
                           :
                            (tab === "Profile" ?
                                 <Profile emplyoee ={emplyoee} setEmplyoee ={setEmplyoee} />:
                                <Alluser />
                            )
                    }
                </Content>
            </Layout>
        </Layout>
    )
}

export default Home
