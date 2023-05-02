import React from 'react';
import {Link} from "react-router-dom";

const Button = ({text , link}) => {
    return (

            <button  className="bg-btn-primary p-3 text-base text-text-secondary w-max  duration-500 hover:tracking-wider" type="button">
                <Link to={link}>
                    {text}
                </Link>
            </button>
    );
};

export default Button;
