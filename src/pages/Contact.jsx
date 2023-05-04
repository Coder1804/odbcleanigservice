import React from 'react';
import {HomeIcon, LocationIcon} from "../data/icons";

const Contact = () => {
    return (
        <div className="_container  flex flex-col lg:flex-row gap-10 my-20">
            <div>
                <div className="rounded-lg  px-6 py-2 bg-green text-white font-normal tracking-wider flex items-center w-fit">
                    <div className="flex flex-col gap-2 ">
                        <span>Xorazm Viloyati , Xonqa tumani</span>
                        <span>Andalip ko'chasi,</span>
                        <div className="flex gap-2">
                            <HomeIcon/>
                            <span>MO'LJAL:Al-XORAZMIY LITSEYI</span>
                        </div>
                        <div className="flex gap-4">
                            <div>
                        <span className="block text-text-mute">
                            Raqam:
                        </span>
                                <span>
                            +99897-526-56-77
                        </span>
                            </div>
                            <div>
                        <span className="block text-text-mute">
                            Ish kunlari:
                        </span>
                                <span>
                            Du-Sha: 09:00 : 18:00
                        </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d223.77316794079906!2d60.7689659036279!3d41.4812787612936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41dfc50f4928f695%3A0x3f5b89eebadb6d8f!2sODBCleaningService!5e0!3m2!1suz!2s!4v1683215860993!5m2!1suz!2s"
                    style={{
                        width: '100%',
                        minHeight:'500px',
                        height: '100%',
                        flex:'1'
                    }} allowFullScreen="" loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
    );
};

export default Contact;
