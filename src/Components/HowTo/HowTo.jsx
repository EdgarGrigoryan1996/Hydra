import React, {useState} from 'react';
import s from "./HowTo.module.css"
import g from "../../global.module.css";
import bigArrow from "../../assets/icons/bigArrow.png";
import arrowRight from "../../assets/icons/arrowRight.png"
import prev from "../../assets/icons/prev2.png";
import next from "../../assets/icons/next2.png"
import {nextSlide, prevSlide} from "../../Functions/setActiveSlide";
function HowTo(props) {
    const [activeSlide,setActiveSlide] = useState(1)
    return (
        <div id={"howto"} className={s.howTo}>
            <div className={g.sectionTitle}>
                <div className={g.title}>
                    <h2>HOW WE BUILD</h2>
                    <div className={g.arrowBlock}>
                        <h3>WITH HYDRA VR?</h3>
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
            <div className={s.howToItems}>
                <div className={s.prev} onClick={() => {prevSlide(activeSlide,setActiveSlide)}}><button className={g.prevBtn}><img src={prev} alt=""/> </button></div>
                <div className={s.itemBlock + " " + (activeSlide === 1 && s.active)}>
                    <div className={s.wrapper}>
                        <div className={s.background}>
                            <h2>01</h2>
                        </div>
                    </div>
                    <div className={s.itemTitleBlock}>
                        <img src={arrowRight} alt="ArrowRight"/><h3>3d Conception<br/> & Design</h3>
                    </div>
                </div>
                <div className={s.itemBlock + " " + (activeSlide === 2 && s.active)}>
                    <div className={s.wrapper}>
                        <div className={s.background}>
                            <h2>02</h2>
                        </div>
                    </div>
                    <div className={s.itemTitleBlock}>
                        <img src={arrowRight} alt="ArrowRight"/><h3>Interaction<br/>Design</h3>
                    </div>
                </div>
                <div className={s.itemBlock + " " + (activeSlide === 3 && s.active)}>
                    <div className={s.wrapper}>
                        <div className={s.background}>
                            <h2>03</h2>
                        </div>
                    </div>
                    <div className={s.itemTitleBlock}>
                        <img src={arrowRight} alt="ArrowRight"/><h3>VR World<br/>User Testing</h3>
                    </div>
                </div>
                <div className={s.itemBlock + " " + (activeSlide === 4 && s.active)}>
                    <div className={s.wrapper}>
                        <div className={s.background}>
                            <h2>04</h2>
                        </div>
                    </div>
                    <div className={s.itemTitleBlock}>
                        <img src={arrowRight} alt="ArrowRight"/>
                        <h3>Hydra VR<br/> Deploy</h3>
                    </div>
                </div>
                <div className={s.next} onClick={() => {nextSlide(activeSlide,setActiveSlide)}}><button className={g.nextBtn}><img src={next} alt=""/> </button></div>
            </div>
        </div>
    );
}

export default HowTo;
