import React from 'react';
import s from "./Footer.module.css"
import g from "../../global.module.css"
import footerLogo from "../../assets/icons/footerLogo.png"
import facebook from "../../assets/icons/facebook.png"
import twitter from "../../assets/icons/twitter.png"
import linkedin from "../../assets/icons/linkedin.png"
import youtube from "../../assets/icons/youtube.png"
import instagram from "../../assets/icons/instagram.png"
import pinterest from "../../assets/icons/pinterest.png"
import vector from "../../assets/images/vector5.png"
function Footer(props) {
    return (
        <footer id={"contact"}>
            <div className={s.footerBlock}>
                <img className={s.vector} src={vector} alt=""/>
                <div className={s.footerItem}>
                    <img src={footerLogo} alt="HYDRA"/>
                </div>
                <div className={s.footerItem}>
                    <ul>
                        <li><a href="#">ABOUT</a></li>
                        <li><a href="#">SERVICES</a></li>
                        <li><a href="#">TECHNOLOGIES</a></li>
                        <li><a href="#">HOW TO</a></li>
                        <li><a href="#">JOIN HYDRA</a></li>
                    </ul>
                </div>
                <div className={s.footerItem}>
                    <ul>
                        <li><a href="#">F.A.Q</a></li>
                        <li><a href="#">SITEMAP</a></li>
                        <li><a href="#">CONDITIONS</a></li>
                        <li><a href="#">LICENSES</a></li>

                    </ul>
                </div>
                <div className={s.footerItem}>
                    <div><h3>SOCIALIZE WITH HYDRA</h3></div>
                    <div>
                        <ul className={s.social}>
                            <li><img src={facebook} alt=""/></li>
                            <li><img src={twitter} alt=""/></li>
                            <li><img src={linkedin} alt=""/></li>
                            <li><img src={youtube} alt=""/></li>
                            <li><img src={instagram} alt=""/></li>
                            <li><img src={pinterest} alt=""/></li>
                        </ul>
                        <div className={s.buildBtn}><button className={g.btn}>BUILD YOUR WORLD</button></div>
                    </div>

                </div>
            </div>
            <div className={s.copyright}>
                <h3>2023 © HYDRA LANDING PAGE - BY ZINE. E. FALOUTI - ALL RIGHTS RESERVED </h3>
            </div>
        </footer>
    );
}

export default Footer;