import { Typography } from "antd";
import MenuBar from "./MenuBar";
const {Title} = Typography;
const Menu = props => {
    return (
        <div style={{
            display : "flex",
            width :"100%",
            height:"100px",
            alignItems:"center",
            zIndex : 100
        }}>
            <Title style={{
                fontFamily:"'Kavoon', cursive",
                width : "40%",
                display : "flex",
                alignItems : "center",
                justifyContent : "center",
                height : "100%",
                margin : 0,
                color : "white",
                fontSize : "3rem"
            }}>Healtify</Title>
            <MenuBar width="60%">

            </MenuBar>
        </div>
    )
}
export default Menu;