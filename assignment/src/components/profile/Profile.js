import "./Style.css";
import { useState } from "react";
import Update from "../update/Update"
import { Card, Divider } from 'antd';
import { Button } from "antd";
import { UserOutlined } from '@ant-design/icons';

const Profile = ({ emplyoee, setEmplyoee }) => {
    const [update, setUpdate] = useState(false);

    return (
        <div >
            {
                update ?
                    <Update profile ={emplyoee} setProfile = {setEmplyoee} setUpdate ={setUpdate}/> :
                    <div className="pro">
                        <Card title="Profile" bordered={false}
                            className="info"
                            headStyle={{ backgroundColor: "#628395", color: "white" }}
                            bodyStyle={{ backgroundColor: "#D4ECDD", letterSpacing: "2px" }}>
                            <UserOutlined style={{ fontSize: '90px', color: '#08c', Border: "1px solid grey" }} />
                            <Divider />
                            <div>
                                <h2 style={{ fontWeight: "normal" }}>Name:

                                    {emplyoee.name}

                                </h2>
                                <h2 style={{ fontWeight: "normal" }}>Contact No:

                                    {emplyoee.Contact}

                                </h2>
                                <h2 style={{ fontWeight: "normal" }}>Email:

                                    {emplyoee.Email}

                                </h2>
                            </div>
                            <Button shape="round" onClick={() => setUpdate(true)}>
                                Update profile
                            </Button>
                        </Card>
                    </div>
            }
            </div>
            
    )
}

export default Profile
