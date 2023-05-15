import React from 'react';
import {ChooseOption} from "../index.js";
import {chooseOptions} from "../../data/index.js";

const ChooseOptions = () => {
    return (
        <div className="text-center">
            <h1 className="text-4xl font-medium mb-6">NIMA UCHUN AYNAN BIZNI TANLASHADI</h1>
           <div className="flex flex-col sm:flex-row justify-evenly gap-3 my-6">
               {chooseOptions.map(option=>(
                   <ChooseOption key={option.id} {...option} ida={option.id}/>
               ))}
           </div>
        </div>
    );
};

export default ChooseOptions;
