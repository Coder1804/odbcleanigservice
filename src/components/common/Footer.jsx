import React from 'react';
import {Link} from "react-router-dom";
import {LocationIcon, TelegramIcon} from "../../data/icons.jsx";

const Footer = () => {
    return (

            <div className="_container text-white ">
                <div className="flex w-full justify-evenly items-center gap-10 pb-4 border-b-2">
                    <Link to='.' className="text-5xl" >Logo</Link>
                    <div className="flex gap-2 items-center relative">
                        <LocationIcon/>
                        <h3>
                            Qandaydir manzil <br/>
                            adasd  <br/>
                            asdasd <br/>
                        </h3>
                    </div>
                    <div className="social-media  flex gap-2 mr-4">
                        <h3>Biz bilan bog'lanish👉🏽</h3>
                        <Link to='https://telegram.com/'><TelegramIcon className="cursor-pointer"/></Link>
                    </div>
                </div>
                <div className="w-full text-center mt-6">
                    &copy;&nbsp;2023&nbsp;ODBCLEANIGSERVICE.UZ
                </div>
            </div>
    );
};

export default Footer;
