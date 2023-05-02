import React from 'react';
import {ChooseOptions, Order, Wrapper} from "../components/index.js";

const Home = () => {
    return (
        <div>
            <div className="_container">
                <Wrapper/>
                <ChooseOptions/>
                <Order/>
            </div>


        </div>
    );
};

export default Home;
