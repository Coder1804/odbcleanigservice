import React from 'react';
import {servicesList} from "../../data/index.js";
import {Link , NavLink} from "react-router-dom";

const ServicesList = () => {
    return (
        <aside className="hidden lg:block">
            <div className="w-[300px] bg-bg-card-secondary max-h-max">
                <h1 className="text-lg font-medium px-4 py-2 bg-bg-card-primary tracking-wider">BIZNING XIZMATLAR</h1>
                <ul>
                    {servicesList.map(service=>(
                        <li key={service.id}>
                            <NavLink to={`/price/${service.pathId}`} className="px-2 py-2 flex items-center gap-2 border-black border-b">
                                <img loading="lazy" className="w-12 h-12" src={service.img} alt={service.service}/>
                                <span className="text-md tracking-wider">{service.service.toUpperCase()}</span>
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </aside>
    );
};

export default ServicesList;
