import React, {useState} from 'react';
import s from "./Navbar.module.css"
import g from "../../../global.module.css"
import logo from "../../../assets/icons/logo.png"
import logoText from "../../../assets/icons/logoText.png"
function Navbar(props) {
    function setDefault(){
        setMobileMenuOpened(false)
        setBurgerClose(false)
    }
    const [mobileMenuOpened,setMobileMenuOpened] = useState(false)
    const [burgerClose,setBurgerClose] = useState(false)
    return (
        <nav>
            <div className={s.logo}>
                <img className={s.logoImg} src={logo} alt="HYDRA"/>
                <img src={logoText} alt=""/>
            </div>
            <div className={mobileMenuOpened ? s.test + " " + s.menu : s.menu}>
                <div className={burgerClose ? s.burger + " " + s.burgerClose : s.burger} onClick={() => {
                    setMobileMenuOpened(!mobileMenuOpened)
                    setBurgerClose(!burgerClose)
                }}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <ul className={mobileMenuOpened && s.mobileMenu}>
                    <div>
                        <li onClick={() => {setDefault()}}><a href="#about">ABOUT</a></li>
                        <li onClick={() => {setDefault()}}><a href="#services">SERVICES</a></li>
                        <li onClick={() => {setDefault()}}><a href="#technologies">TECHNOLOGIES</a></li>
                        <li onClick={() => {setDefault()}}><a href="#howto">HOW TO</a></li>
                    </div>
                    <div>
                        <li onClick={() => {setDefault()}} className={g.transparentBtn + " " + s.contactBtn}><a href="#contact">CONTACT US</a></li>
                        <li onClick={() => {setDefault()}} className={g.btn + " " + s.joinBtn}><a href="#join">JOIN HYDRA</a></li>
                    </div>

                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
