import React from 'react';
import s from "./Header.module.css"
import arrow from "../../assets/icons/arrow.png"
import headerImg from "../../assets/images/headerImg.png"
import vectors from "../../assets/images/vectors.png"
import location from "../../assets/icons/location.png"
import phone from "../../assets/icons/phone.png"
import mail from "../../assets/icons/mail.png"
import Navbar from "./Navbar/Navbar";
function Header(props) {
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
                        <button className={s.btn}>BUILD YOUR WORLD</button>
                        <div><img src={arrow} alt="Arrow"/></div>
                    </div>
                </div>
                <div className={s.headerImg}>
                    <img src={headerImg} alt=""/>
                </div>
            </div>
            <div className={s.contact}>
                <div className={s.contactItem}>
                    <div className={s.contactIcon}>
                        <img src={location} alt=""/>
                    </div>
                    <div>
                        <h2>Pay Us A Visit</h2>
                        <p>Union St. Seattle, WA 98101, United States</p>
                    </div>
                </div>
                <div className={s.contactItem}>
                    <div className={s.contactIcon}>
                        <img src={phone} alt=""/>
                    </div>
                    <div>
                        <h2>Pay Us A Visit</h2>
                        <p>Union St. Seattle, WA 98101, United States</p>
                    </div>
                </div>
                <div className={s.contactItem}>
                    <div className={s.contactIcon}>
                        <img src={mail} alt=""/>
                    </div>
                    <div>
                        <h2>Pay Us A Visit</h2>
                        <p>Union St. Seattle, WA 98101, United States</p>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
