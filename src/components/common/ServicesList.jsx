import React from 'react';
import {prices} from "../../data/index.js";
import {NavLink, useLocation} from "react-router-dom";

const ServicesList = ({setActiveHash , active = ''}) => {
    const location = useLocation();
    return (
        <aside className="hidden lg:block">
            <div className="w-[300px] bg-bg-card-secondary max-h-max">
                <h1 className="text-lg font-medium px-4 py-2 bg-bg-card-primary tracking-wider border-black border-b">BIZNING XIZMATLAR</h1>
                <ul>
                    {prices.map(service=>(
                        <li onClick={()=>setActiveHash(service.pathId)}
                            key={service.id}
                        >
                            <NavLink
                                to={`../price${service.pathId}`}
                                className={`${active === location.hash && active === service.pathId && 'bg-primary text-white'} duration-300 px-2 py-2 flex items-center gap-2 border-black border-b`}>
                                <img loading="lazy" className="w-12 h-12" src={service.img} alt={service.service}/>
                                <span className="text-md tracking-wider">{service.name.toUpperCase()}</span>
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </aside>
    );
};

export default ServicesList;
