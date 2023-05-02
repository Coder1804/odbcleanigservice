import React from 'react';
import {Link , NavLink} from "react-router-dom";
import {navLinks} from "../../data/index.js";
import {TelegramIcon} from "../../data/icons.jsx";

const Header = () => {
    return (
        <header className="_container flex  justify-between items-center py-2 mb-3">
            <Link to='.' className="text-5xl" >Logo</Link>

            <nav >
                <ul className="flex ">
                    {navLinks.map(link=>(
                        <li key={link.id} className="px-2 font-medium">
                            <NavLink to={`${link.link}`} className={({isActive})=>
                                isActive ? 'active' : null
                            }>
                                {link.linkName.toLocaleUpperCase()}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
