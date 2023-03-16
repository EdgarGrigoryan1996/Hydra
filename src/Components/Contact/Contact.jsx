import React from 'react';
import s from "./Contact.module.css"
import g from "../../global.module.css"
function Contact(props) {
    return (
        <div className={s.contact}>
            <div className={s.contactBlock}>
                <div className={s.formTitle}>
                    <h2>JOIN HYDRA</h2>
                    <div className={s.border}></div>
                    <h3>Let’s Build Your VR Experience</h3>
                </div>
                <div className={s.form}>
                    <form>
                        <div className={s.inputGroup}>
                            <div className={g.mr10}><input type="text" placeholder="First Name"/></div>
                            <div><input type="text" placeholder="Last Name"/></div>
                        </div>
                        <div className={s.inputGroup}>
                            <div className={g.mr10}><input type="text" placeholder="Email"/></div>
                            <div><input type="text" placeholder="Phone Number"/></div>
                        </div>
                        <div className={s.maxWidth}>
                            <div><input type="text" placeholder="Subject"/></div>
                        </div>
                        <div className={s.maxWidth}>
                            <div><textarea name="" id="" cols="30" rows="10" placeholder="Tell Us Something..."></textarea></div>
                        </div>
                        <div className={g.textCenter}>
                            <button className={g.btn}>SEND TO HYDRA</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;
