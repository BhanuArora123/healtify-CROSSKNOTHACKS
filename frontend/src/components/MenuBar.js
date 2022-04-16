import { Menu } from 'antd';
import 'antd/dist/antd.min.css';
import "./FrontSection.css";
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
const { SubMenu } = Menu;
const MenuBar = (props) => {
    return (
        <Menu mode="horizontal" style={ {
            width: props.width,
            backgroundColor: "transparent",
            color: "white",
            fontSize : "18px"
        } }>
            <Menu.Item key="mail1" icon={ <MailOutlined /> } style={ {
                color: "white"
            } }>
                <a href="https://ant.design" style={ {
                    color: "white",
                    fontWeight :"bold"
                } }>
                    HOME
                </a>
            </Menu.Item>
            <Menu.Item key="mail2" icon={ <MailOutlined /> } style={ {
                color: "white"
            } }>
                <a href="https://ant.design" target="_blank" rel="noopener noreferrer" style={ {
                    color: "white",
                    fontWeight :"bold"
                } }>
                    ABOUT US
                </a>
            </Menu.Item>
            <SubMenu key="SubMenu" icon={ <SettingOutlined /> } title="SERVICES" style={{
                fontWeight : "bold",
                color : "white"
            }}>
                <Menu.ItemGroup title="Item 1">
                    <Menu.Item key="setting:1">Option 1</Menu.Item>
                    <Menu.Item key="setting:2">Option 2</Menu.Item>
                </Menu.ItemGroup>
                <Menu.ItemGroup title="Item 2">
                    <Menu.Item key="setting:3">Option 3</Menu.Item>
                    <Menu.Item key="setting:4">Option 4</Menu.Item>
                </Menu.ItemGroup>
            </SubMenu>
            <Menu.Item key="alipay1" style={ {
                color: "white"
            } }>
                <a href="https://ant.design" target="_blank1" rel="noopener noreferrer" style={ {
                    color: "white",
                    fontWeight :"bold"
                } }>
                    CONTACT US
                </a>
            </Menu.Item>
            <Menu.Item key="alipay2" style={ {
                color: "white",
                fontWeight :"bold"
            } }>
                <a href="https://ant.design" target="_blank" rel="noopener noreferrer" style={ {
                    color: "white"
                } }>
                    LOGIN
                </a>
            </Menu.Item>
        </Menu>
    )
}
export default MenuBar;