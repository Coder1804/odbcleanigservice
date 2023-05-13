import React from 'react';
import {Button} from '../index.js'
import homebg from '../../assets/homeBg.png'
const Wrapper = () => {
    return (
        <div style={{
            backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.3) 100%, rgba(0, 0, 0, 0.1) 100%), url(${homebg})`
        }} className="wrapper-home w-full min-h-[600px] font-medium flex  justify-center items-center mb-4">
            <div className="flex flex-col gap-4 text-white text-center items-center">
                <h1 className="text-5xl">XONQA XIMCHISTKA CLEANING SERVISIGA <br/> XUSH KELIBSIZ! </h1>
                <h3 className='text-2xl'>Sizning ishonchingiz bizning yutug'umiz</h3>
                <Button  text='Batafsil' link='aboutus'/>
            </div>
        </div>
    );
};

export default Wrapper;
