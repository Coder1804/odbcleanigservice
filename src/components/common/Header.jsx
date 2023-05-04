import React, {useState} from 'react';
import {Link , NavLink} from "react-router-dom";
import {navLinks} from "../../data/index.js";
import {CancelIcon, TelegramIcon, ToggleIcon} from "../../data/icons.jsx";

const Header = () => {
    const [toggle,setToggle] = useState(false)
    return (
        <header className="_container ">
            <div className="flex  justify-between items-center py-2 mb-3">
                <Link to='.' className="text-5xl" >Logo</Link>
                <div
                    onClick={()=>setToggle(!toggle)}
                    className="md:hidden">
                    {toggle ? <CancelIcon/> : <ToggleIcon/>}
                </div>
                <nav className="hidden md:block">

                    <ul className="flex">
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
            </div>
            <nav className={`nav-mobile w-full md:hidden bg-white p-2 ${toggle && 'active'}`}>
                <ul className="flex flex-col">
                    {navLinks.map(link=>(
                        <li key={link.id} className="px-2 py-4 border-b font-medium">
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
