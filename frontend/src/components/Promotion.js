import { DeliveredProcedureOutlined } from "@ant-design/icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAmbulance , faKitMedical, faNotesMedical, faUserDoctor } from '@fortawesome/free-solid-svg-icons'
import Title from "antd/lib/typography/Title"
const Promotion = props => {
    return (
        <section>
            <Title style={{
                width : "100%",
                textAlign : "center",
                height : "70px",
                display:"flex",
                alignItems : "center",
                justifyContent : "center"
            }}>
                Why Choose Us?
            </Title>
            <section style={{
            width : "100%",
            height : "250px",
            display : "flex",
            justifyContent :"space-evenly"
        }}>
            <div style={{
                width : "25%",
                height :"90%",
                display : "flex",
                flexDirection : "column",
                justifyContent:"space-evenly",
                alignItems:"center"
            }}>
                <div>
                <FontAwesomeIcon icon={faAmbulance} size="3x" color="#44cccc"/>
                </div>
                <Title style={{
                    fontSize : "21px"
                }} >Lorem ipsum dolor sit.</Title>
                <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit </div>
            </div>
            <div style={{
                width : "25%",
                height :"90%",
                display : "flex",
                flexDirection : "column",
                justifyContent:"space-evenly",
                alignItems:"center"
            }}>
                <div>
                    <FontAwesomeIcon icon={faUserDoctor} size="3x" color="#44cccc"></FontAwesomeIcon>
                </div>
                <Title style={{
                    fontSize : "21px"
                }} >Lorem ipsum dolor sit.</Title>
                <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit</div>
            </div>
            <div style={{
                width : "25%",
                height :"90%",
                display : "flex",
                flexDirection : "column",
                justifyContent:"space-evenly",
                alignItems:"center"
            }}>
                <div>
                    <FontAwesomeIcon icon={faNotesMedical} size="3x" color="#44cccc"></FontAwesomeIcon>
                </div>
                <Title style={{
                    fontSize : "21px"
                }} >Lorem ipsum dolor sit.</Title>
                <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit</div>
            </div>
        </section>
        </section>
    )
}
export default Promotion;