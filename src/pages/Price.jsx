import React from 'react';
import {ServicesList} from "../components/index.js";
import {styles} from "../data/styles.js";

const Price = () => {
    return (
            <div className="_container flex gap-10">
                <ServicesList/>
                <div className="w-full">
                    <h1 className={`${styles.postTitle}`}>NARXLAR</h1>

                </div>
            </div>
    );
};

export default Price;
