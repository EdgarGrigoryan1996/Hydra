import React, {useState} from 'react';
import s from "./Navbar.module.css"
import logo from "../../../assets/icons/logo.png"
import logoText from "../../../assets/icons/logoText.png"
function Navbar(props) {
    const [mobileMenuOpened,setMobileMenuOpened] = useState(false)
    const [burgerClose,setBurgerClose] = useState(false)
    return (
        <nav>
            <div className={s.logo}>
                <img className={s.logoImg} src={logo} alt="HYDRA"/>
                <img src={logoText} alt=""/>
            </div>
            <div className={s.menu}>
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
                        <li><a href="#">ABOUT</a></li>
                        <li><a href="#">SERVICES</a></li>
                        <li><a href="#">TECHNOLOGIES</a></li>
                        <li><a href="#">HOW TO</a></li>
                    </div>
                    <div>
                        <li className={s.btn + " " + s.contactBtn}><a href="#">CONTACT US</a></li>
                        <li className={s.btn + " " + s.joinBtn}><a href="#">JOIN HYDRA</a></li>
                    </div>

                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
