import React from 'react';
import s from "./About.module.css"
import g from "../../global.module.css"
import bigArrow from "../../assets/icons/bigArrow.png"
import aboutImg from "../../assets/images/aboutImg.png"
function About(props) {
    return (
        <div id={"about"} className={s.about}>
            <div className={g.sectionTitle}>
                <div className={g.title}>
                    <div>
                        <h2>INTRODUTION</h2>
                        <div className={g.arrowBlock}>
                            <h3>TO HYDRA VR</h3>
                            <img src={bigArrow} alt="BigArrow"/>
                        </div>
                    </div>


                </div>
                <div className={g.content}>
                    <p>Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat
                        nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo
                        quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare
                        lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.</p>
                </div>
            </div>
            <div className={s.aboutContent}>
                <div className={s.contentImg}>
                    <div className={s.img}>
                        <img src={aboutImg} alt="AboutImg"/>
                    </div>
                </div>
                <div className={s.content}>
                    <div className={s.contentTitle}>
                        <h2 className={g.title}>ABOUT</h2>
                        <h3 className={g.subTitle}>HYDRA VR</h3>
                    </div>
                    <div>
                        <p>Eget mi proin sed libero enim sed faucibus turpis. Nisl rhoncus mattis rhoncus
                            urna neque viverra justo. Vivamus at augue eget arcu dictum. Ultrices gravida
                            dictum fusce ut placerat orci. Aenean et tortor at risus viverra adipiscing at in.
                            Mattis aliquam faucibus purus in massa. Est placerat in egestas erat imperdiet
                            sed. Consequat semper viverra nam libero justo laoreet sit amet. Aliquam
                            etiam erat velit scelerisque in dictum non consectetur a. Laoreet sit amet
                            cursus sit amet. Vel eros donec ac odio tempor orci dapibus. Sem nulla pha
                            retra diam sit amet nisl suscipit adipiscing bibendum. Leo a diam sollicitudi
                            n tempor.</p>
                    </div>
                    <div>
                        <button className={g.btn}>LET’S GET IN TOUCH</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
