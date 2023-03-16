import React from 'react';
import s from "./Technologies.module.css"
import arrow from "../../assets/icons/arrowDown.png"
import unrealImg from "../../assets/images/unreal.png"
import unityImg from "../../assets/images/unity.png"
import oculusImg from "../../assets/images/oculus.png"
import viveImg from "../../assets/images/vive.png"
function Technologies(props) {
    return (
        <div className={s.technologies}>
            <div className={s.technologiesTitle}>
                <div className={s.titleBackground}>
                    <div>
                        <h2>TECHNOLOGIES & HARDWARE</h2>
                        <h3>USED BY HYDRA VR.</h3>
                    </div>
                    <div className={s.arrow}>
                        <div className={s.arrowIcon}>
                            <img src={arrow} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
            <div className={s.technologiesItems}>
                <div><img src={unrealImg} alt=""/></div>
                <div><img src={unityImg} alt=""/></div>
                <div><img src={oculusImg} alt=""/></div>
                <div><img src={viveImg} alt=""/></div>
            </div>
        </div>
    );
}

export default Technologies;
