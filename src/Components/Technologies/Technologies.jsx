import React, {useState} from 'react';
import s from "./Technologies.module.css"
import arrow from "../../assets/icons/arrowDown.png"
import unrealImg from "../../assets/images/unreal.png"
import unityImg from "../../assets/images/unity.png"
import oculusImg from "../../assets/images/oculus.png"
import viveImg from "../../assets/images/vive.png"
import prev from "../../assets/icons/prev2.png";
import next from "../../assets/icons/next2.png";
import {nextSlide, prevSlide} from "../../Functions/setActiveSlide";
function Technologies(props) {

    const [activeSlide,setActiveSlide] = useState(1)
    return (
        <div id={"technologies"} className={s.technologies}>
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
                <div className={s.prev} onClick={() => {prevSlide(activeSlide,setActiveSlide)}}><button className={s.prevBtn}><img src={prev} alt=""/> </button></div>
                <div className={s.item + " " + (activeSlide === 1 && s.active)}><img src={unrealImg} alt=""/></div>
                <div className={s.item + " " + (activeSlide === 2 && s.active)}><img src={unityImg} alt=""/></div>
                <div className={s.item + " " + (activeSlide === 3 && s.active)}><img src={oculusImg} alt=""/></div>
                <div className={s.item + " " + (activeSlide === 4 && s.active)}><img src={viveImg} alt=""/></div>
                <div className={s.next} onClick={() => {nextSlide(activeSlide,setActiveSlide)}}><button className={s.prevBtn}><img src={next} alt=""/> </button></div>
            </div>
        </div>
    );
}

export default Technologies;
