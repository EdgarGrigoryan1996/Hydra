import React from 'react';
import s from "./Services.module.css"
import g from "../../global.module.css"
import bigArrow from "../../assets/icons/bigArrow.png";
import simulationImg from "../../assets/images/simulation.png"
import educationImg from "../../assets/images/education.png"
import selfCareImg from "../../assets/images/salfCare.png"
import outdoorImg from "../../assets/images/outdoor.png"
import vector from "../../assets/images/vector3.png"
function Services(props) {
    const services = [
        {
            img:simulationImg,
            title:"SIMULATION",
            content:"Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet porttitor rhoncus libero justo laoreet sit amet vitae."
        },
        {
            img:educationImg,
            title:"EDUCATION",
            content:"Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet porttitor rhoncus libero justo laoreet sit amet vitae."
        },
        {
            img:selfCareImg,
            title:"SELF-CARE",
            content:"Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet porttitor rhoncus libero justo laoreet sit amet vitae."
        },
        {
            img:outdoorImg,
            title:"OUTDOOR",
            content:"Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet porttitor rhoncus libero justo laoreet sit amet vitae."
        }
    ]
    return (
        <div className={s.services}>
            <img className={s.vector} src={vector} alt=""/>
            <div className={g.sectionTitle}>
                <div className={g.title}>
                    <h2>INTRODUTION</h2>
                    <div className={g.arrowBlock}>
                        <h3>TO HYDRA VR</h3>
                        <img src={bigArrow} alt="BigArrow"/>
                    </div>

                </div>
                <div>
                    <p>Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat
                        nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo
                        quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare
                        lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.</p>
                </div>
            </div>
            <div className={s.servicesBlock}>
                {services.map((service) => {
                    return (
                        <div className={s.service}>
                            <div className={s.serviceImg}>
                                <img src={service.img} alt="Simulation"/>
                            </div>
                            <div className={s.serviceTitle}>
                                <h2>{service.title}</h2>
                            </div>
                            <div className={s.serviceContent}>
                                <p>{service.content}</p>
                            </div>
                            <div><button className={g.btn}>TRY IT NOW</button></div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default Services;
