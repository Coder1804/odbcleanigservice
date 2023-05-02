import React from 'react';

const ChooseOption = ({title,Icon, slogan}) => {
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
