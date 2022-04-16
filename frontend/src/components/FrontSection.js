import { Button } from "antd";
import Title from "antd/lib/typography/Title";
import image from "../img.jpeg";
import Menu from "./Menu";
const FrontSection = props => {
    return (
        <section style={{
            width : "100%",
            height : "600px",
            position : "relative"
        }}>
            <img src={image} alt="front section" style={{
                width : "100%",
                height : "600px",
                position : "absolute",
                top : 0,
                left : 0,
                zIndex : -1
            }}></img>
            <Menu></Menu>
            <Title style={{
                width : "60%",
                color : "white",
                fontSize : "3rem",
                display : "flex",
                justifyContent : "flex-start",
                textAlign : "left",
                height : "350px",
                alignItems:"flex-end",
                boxSizing : "border-box",
                padding : "100px"
            }}>Stuck In A Emergency Situation</Title>
            <div style={{
                width : "80%",
                height : "100px",
                display : "flex",
                justifyContent : "flex-start",
                marginLeft : "100px",
                alignItems:"flex-start",
                marginTop : "-70px"
            }}>
            <Button style={{
                width : "40%",
                height : "80px",
                backgroundColor:"#44cccc",
                color : "white",
                fontSize:"2.2rem",
                fontWeight : "bold",
                borderRadius : "7px",
                outline : "none",
                border : "none"
            }}>Book A Ambulance</Button>
            </div>
        </section>
    )
}
export default FrontSection;