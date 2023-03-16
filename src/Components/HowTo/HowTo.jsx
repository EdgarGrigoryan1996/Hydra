import React from 'react';
import s from "./HowTo.module.css"
import g from "../../global.module.css";
import bigArrow from "../../assets/icons/bigArrow.png";
import arrowRight from "../../assets/icons/arrowRight.png"
function HowTo(props) {
    return (
        <div className={s.howTo}>
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
                <div className={s.itemBlock}>
                    <div className={s.wrapper}>
                        <div className={s.background}>
                            <h2>01</h2>
                        </div>
                    </div>
                    <div className={s.itemTitleBlock}>
                        <img src={arrowRight} alt="ArrowRight"/><h3>3d Conception<br/> & Design</h3>
                    </div>
                </div>
                <div className={s.itemBlock}>
                    <div className={s.wrapper}>
                        <div className={s.background}>
                            <h2>02</h2>
                        </div>
                    </div>
                    <div className={s.itemTitleBlock}>
                        <img src={arrowRight} alt="ArrowRight"/><h3>Interaction<br/>Design</h3>
                    </div>
                </div>
                <div className={s.itemBlock}>
                    <div className={s.wrapper}>
                        <div className={s.background}>
                            <h2>03</h2>
                        </div>
                    </div>
                    <div className={s.itemTitleBlock}>
                        <img src={arrowRight} alt="ArrowRight"/><h3>VR World<br/>User Testing</h3>
                    </div>
                </div>
                <div className={s.itemBlock}>
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
            </div>
        </div>
    );
}

export default HowTo;
