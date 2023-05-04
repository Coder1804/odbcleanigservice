import React from 'react';
import {ServicesList} from "../components/index.js";
import {styles} from "../data/styles.js";

const About = () => {
    return (
        <div className="_container flex gap-10">
            <ServicesList/>
            <div className="w-full">
                <h1 className={`${styles.postTitle}`}>BIZ HAQIMIZDA</h1>

            </div>
        </div>
    );
};

export default About;
