import React, {useEffect , useState} from 'react';
import {ArrowUp} from "../../data/icons";


const ScrollToTop = () => {
    const [buttonShow,setButtonShow] = useState(false);
    useEffect(() => {
        const handleScrollButtonVisibility = () =>{
            window.pageYOffset > 300 ? setButtonShow(true) : setButtonShow(false)
        }
        window.addEventListener('scroll' , handleScrollButtonVisibility )
        return () => {
            window.removeEventListener('scroll' , handleScrollButtonVisibility)
        };
    }, []);
    const handleScrollToTop = () =>{
        window.scrollTo({
            top:0,
            behavior:'smooth'
        })
    }
    return (
        <>
                    <div
                        onClick={handleScrollToTop}
                        className={`scroll-top ${buttonShow && 'active'} bottom-0 right-4 fixed  w-12 h-12 flex justify-center items-center rounded cursor-pointer bg-green text-white`}>
                        <ArrowUp/>
                    </div>
        </>
    );
};

export default ScrollToTop;
