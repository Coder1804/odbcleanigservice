import React from 'react';
import {Link} from "react-router-dom";
import {LocationIcon, TelegramIcon} from "../../data/icons.jsx";
import {logo} from "../../assets/index.js";

const Footer = () => {
    return (

            <div className="_container text-white ">
                <div className="flex flex-col md:flex-row  w-full justify-around md:items-center gap-10 pb-4 border-b-2">
                    <Link to='.' className="flex items-center">
                        <img className="w-16 h-16" src={logo} alt="logo"/>
                        <div className="text-center">
                            <h1 className="text-lg font-bold">XONQA XIMCHISTKA</h1>
                            <p className="text-xs">CLEANING SERVICES</p>
                        </div>
                    </Link>
                    <div className="md:text-center">
                            <span className="flex">
                                <LocationIcon/>&nbsp;
                            Xorazm Viloyati , Xonqa tumani</span>
                            Andalip ko'chasi <br/>
                            Mo'ljal:Al-Xorazmiy litseyi
                    </div>
                    <div className="social-media  flex gap-2 mr-4">
                        <h3>Biz bilan bog'lanish👉🏽</h3>
                        <Link to='https://telegram.com/'><TelegramIcon className="cursor-pointer"/></Link>
                    </div>
                </div>
                <div className="w-full md:text-center mt-6">
                    &copy;&nbsp;2023&nbsp;XONQAXIMCHISTKA.COM
                </div>
            </div>
    );
};

export default Footer;
