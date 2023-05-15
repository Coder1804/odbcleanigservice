import React, {useEffect, useState} from 'react';
import {ServicesList} from "../components/index.js";
import {styles} from "../data/styles.js";
import {prices} from "../data/index.js";
import {useLocation} from "react-router-dom";

const Price = () => {
    const location = useLocation();
    const [active,setActive] = useState('')
    const handleChange = (element)=>{

        setActive(prev=>prev === element ? '' : element)
    }

    useEffect(()=>{
        console.log("Active",active)
    },[active])
    return (
            <div className="_container flex gap-10">
                <ServicesList setActiveHash = {handleChange} active={active} />
                <div className="w-full">
                    <h1 className={`${styles.postTitle}`}>NARXLAR</h1>
                    <div className="my-4">
                        {
                            prices.map((category,index)=>(
                            <div
                                 className={`p-2 mb-2`}
                                 id={category.pathId.slice(1,)}
                                 key={category.id}>
                                <h1 className={`${styles.postTitle} my-4`}>{category.name}</h1>
                                {active === category.pathId || active === '' ?
                                    <ul className="flex flex-col gap-4">
                                        {
                                            category.products.map(product=>(
                                                <li className="bg-bg-card-secondary tracking-wider  p-4 flex gap-2 flex-col  items-start  justify-between md:items-center  md:flex-row " key={product.id}>
                                                    <span>{product.name}</span>
                                                    <span className="bg-bg-card-primary  p-2 rounded self-end">{product.price} so'm</span>
                                                </li>
                                            ))
                                        }
                                    </ul> : null
                                }
                            </div>
                        ))
                        }
                    </div>
                </div>
            </div>
    );
};

export default Price;
