import './navbar.css';
import { Layout, Menu } from 'antd';
import { useHistory } from 'react-router';
import { HomeOutlined, UserOutlined, UsergroupDeleteOutlined, LogoutOutlined } from '@ant-design/icons';
const { Header, Content, Footer, Sider } = Layout;


const Navbar = ({ setEmplyoee, setTab, emplyoee }) => {

    return (
        <Sider
            breakpoint="lg"
            collapsedWidth="0"
            onBreakpoint={broken => {
                console.log(broken);
            }}
            onCollapse={(collapsed, type) => {
                console.log(collapsed, type);
            }}
        >
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                <Menu.Item key="1" icon={<HomeOutlined />} onClick={() => { setTab("Home") }}>
                    Home
                </Menu.Item>
                <Menu.Item key="2" icon={<UserOutlined />} onClick={() => { setTab("Profile") }}>
                    Profile
                </Menu.Item>
                {
                    emplyoee.isAdmin ?
                        <Menu.Item key="3" icon={<UsergroupDeleteOutlined />} onClick={() => { setTab("Allusers") }}>
                            All users
                        </Menu.Item>:
                        null
                }

                <Menu.Item key="4" icon={<LogoutOutlined />} onClick={() => setEmplyoee("")}>
                    Logout
                </Menu.Item>
            </Menu>
        </Sider>

    )
}

export default Navbar
