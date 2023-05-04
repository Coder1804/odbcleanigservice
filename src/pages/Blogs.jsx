import React from 'react';
import {ServicesList} from "../components/index.js";
import {styles} from "../data/styles.js";
import {SearchHeartIcon} from "../data/icons";



const Blogs = () => {
    function blogs()
    {
        return(
            <>
                <SearchHeartIcon/>
                <h1 className="ml-2">HOZIRCHA BLOGLAR YO'Q!</h1>
            </>


        )
    }


    return (
        <div className="_container flex gap-10">
            <ServicesList/>
            <div className="w-full">
                <h1 className={`${styles.postTitle}`}>BLOGLAR</h1>
                <div className="main-container w-full  flex justify-center items-center">
                    {blogs()}
                </div>
            </div>
        </div>
    );
};

export default Blogs;
