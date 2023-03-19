import React, {useState} from 'react';
import s from "./Header.module.css"
import g from "../../global.module.css"
import arrow from "../../assets/icons/arrow.png"
import headerImg from "../../assets/images/headerImg.png"
import vectors from "../../assets/images/vectors.png"
import location from "../../assets/icons/location.png"
import phone from "../../assets/icons/phone.png"
import mail from "../../assets/icons/mail.png"
import prev from "../../assets/icons/prev.png"
import next from "../../assets/icons/next.png"
import Navbar from "./Navbar/Navbar";
function Header(props) {
    function nextSlide(currentSlide){
        if(currentSlide === 3){
            setActiveSlide(1)
        } else {
            setActiveSlide(activeSlide + 1)
        }
    }
    function prevSlide(currentSlide){
        if(currentSlide === 1){
            setActiveSlide(3)
        } else {
            setActiveSlide(activeSlide - 1)
        }
    }
    const [activeSlide,setActiveSlide] = useState(1)
    return (
        <header>
            <Navbar />
            <div className={s.headerContent}>
                <img className={s.vectors} src={vectors} alt=""/>
                <div className={s.headerTitle}>
                    <h1>
                        <span>Dive</span> Into The Depths <br/>
                        Of <span>Virtual Reality</span>
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        nisl tincidunt eget. Lectus mauris eros in vitae .
                    </p>
                    <div className={s.buttonBlock}>
                        <button className={s.btn + " " + g.btn}>BUILD YOUR WORLD</button>
                        <div><img src={arrow} alt="Arrow"/></div>
                    </div>
                </div>
                <div className={s.headerImg}>
                    <img src={headerImg} alt=""/>
                </div>
            </div>
            <div className={s.contact}>
                <div className={s.prev}><button className={s.prevBtn} onClick={() => {prevSlide(activeSlide)}}><img src={prev} alt=""/> </button></div>
                <div className={s.contactItem + " " + (activeSlide === 1 ? s.active : "")}>
                    <div className={s.contactIcon}>
                        <img src={location} alt=""/>
                    </div>
                    <div>
                        <h2>Pay Us A Visit</h2>
                        <p>Union St. Seattle, WA 98101, United States</p>
                    </div>
                </div>
                <div className={s.contactItem + " " + (activeSlide === 2 ? s.active : "")}>
                    <div className={s.contactIcon}>
                        <img src={phone} alt=""/>
                    </div>
                    <div>
                        <h2>Give Us a Call</h2>
                        <p>(110) 1111-1010</p>
                    </div>
                </div>
                <div className={s.contactItem + " " + (activeSlide === 3 ? s.active : "")}>
                    <div className={s.contactIcon}>
                        <img src={mail} alt=""/>
                    </div>
                    <div>
                        <h2>Send Us a Message</h2>
                        <p>Contact@HydraVTech.com</p>
                    </div>
                </div>
                <div className={s.next}><button className={s.nextBtn} onClick={() => {nextSlide(activeSlide)}}><img src={next} alt=""/> </button></div>
            </div>
        </header>
    );
}

export default Header;
