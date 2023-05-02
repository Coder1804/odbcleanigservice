import React from 'react';
import {Button} from '../index.js'

const Wrapper = () => {
    return (
        <div className="wrapper-home w-full min-h-[600px] font-medium flex justify-center items-center mb-4">
            <div className="flex flex-col gap-4 text-white text-center items-center">
                <h1 className="text-5xl">ODB CLEANING SERVISIGA XUSH KELIBSIZ! </h1>
                <h3 className='text-2xl'>Sizning ishonchingiz bizning yutug'umiz</h3>
                <Button  text='Batafsil' link='aboutus'/>
            </div>
        </div>
    );
};

export default Wrapper;
