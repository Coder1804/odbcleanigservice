import React from 'react';
import {Link} from "react-router-dom";
import {LocationIcon, PhoneIcon, TelegramIcon} from "../../data/icons.jsx";

const ContactInfo = () => {
    return (
        <div className="contact-info p-4 bg-primary">
            <div className="_container flex flex-col md:flex-row gap-2 justify-evenly items-center">
                <div className="social-media  flex gap-2 mr-4">
                    <h3>Biz bilan bog'lanish👉🏽</h3>
                    <Link to='https://t.me/Anvar_Allaberganov'><TelegramIcon className="cursor-pointer"/></Link>
                </div>
                <div className="contact-info-loc-parent my-4  md:my-0 flex gap-2 items-center relative ">
                    <LocationIcon/>

                    <h3>Mo'ljal:Al-Xorazmiy litseyi</h3>
                    <div  className="contact-info-loc p-2 text-center">
                        Xorazm viloyati,<br/>
                        Xonqa tumani,<br/>
                        Andalip ko'chasi
                    </div>
                </div>
                <div className="flex gap-2 items-center">
                    <PhoneIcon/>
                    <h1 ><Link to = 'tel:+998975265677'>+99862-399-27-75</Link></h1>
                </div>
            </div>
        </div>
    );
};

export default ContactInfo;
