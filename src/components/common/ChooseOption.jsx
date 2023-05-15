import React from 'react';
import {Link} from "react-router-dom";
const ChooseOption = ({title,Icon, slogan , id}) => {
    if(id === 1) return (
        <Link to="../price" className="flex items-center flex-1 flex-col gap-2 bg-white p-3 rounded-lg">
            <div className="text-text-dark-primary">
                <Icon/>
            </div>
            <div>{title}</div>
            <p>{slogan}</p>
        </Link>
    )
    return (
        <div className="flex items-center flex-1 flex-col gap-2 bg-white p-3 rounded-lg">
           <div className="text-text-dark-primary">
               <Icon/>
           </div>
            <div>{title}</div>
            <p>{slogan}</p>
        </div>
    );
};

export default ChooseOption;
