import React, { useRef, useState, useEffect } from "react";
import cl from "./MoreApps.module.css"
import TitleAndDesc from "../TitleAndDesc/TitleAndDesc";
import { BsFillRecord2Fill } from "react-icons/bs";


const MoreApps = () => {

    const [brands, setBrands] = useState([
        {id: 1, items: [
            {id: 1, image: <img src="https://jthemes.net/themes/f-html/appon/Templates/Light/Sidebar-Menu/images/moreapps/001.png" alt="" className={cl.image} />},
            {id: 2, image: <img src="https://jthemes.net/themes/f-html/appon/Templates/Light/Sidebar-Menu/images/moreapps/002.png" alt="" className={cl.image}/>},
            {id: 3, image: <img src="https://jthemes.net/themes/f-html/appon/Templates/Light/Sidebar-Menu/images/moreapps/003.png" alt="" className={cl.image}/>},
            {id: 4, image: <img src="https://jthemes.net/themes/f-html/appon/Templates/Light/Sidebar-Menu/images/moreapps/004.png" alt="" className={cl.image}/>},
            {id: 5, image: <img src="https://jthemes.net/themes/f-html/appon/Templates/Light/Sidebar-Menu/images/moreapps/005.png" alt="" className={cl.image}/>},
            {id: 6, image: <img src="https://jthemes.net/themes/f-html/appon/Templates/Light/Sidebar-Menu/images/moreapps/001.png" alt="" className={cl.image}/>},
            ]
        },
        {id: 2, items: [
            {id: 1, image: <img src="https://jthemes.net/themes/f-html/appon/Templates/Light/Sidebar-Menu/images/moreapps/001.png" alt="" className={cl.image} />},
            {id: 2, image: <img src="https://jthemes.net/themes/f-html/appon/Templates/Light/Sidebar-Menu/images/moreapps/002.png" alt="" className={cl.image}/>},
            {id: 3, image: <img src="https://jthemes.net/themes/f-html/appon/Templates/Light/Sidebar-Menu/images/moreapps/003.png" alt="" className={cl.image}/>},
            {id: 4, image: <img src="https://jthemes.net/themes/f-html/appon/Templates/Light/Sidebar-Menu/images/moreapps/004.png" alt="" className={cl.image}/>},
            {id: 5, image: <img src="https://jthemes.net/themes/f-html/appon/Templates/Light/Sidebar-Menu/images/moreapps/005.png" alt="" className={cl.image}/>},
            {id: 6, image: <img src="https://jthemes.net/themes/f-html/appon/Templates/Light/Sidebar-Menu/images/moreapps/001.png" alt="" className={cl.image}/>},
            ]
        },
    ])
    const [markers, setMarkers] = useState([
        {id: 1}, {id: 1} 
    ])
    const [currentSlide, setCurrentSlide] = useState(0)

    const selection = (index) => {
        setCurrentSlide(index)
    }



    useEffect(() => {
        const stepSlider = () => {
            return currentSlide === 1 ? 1 : 0.2
        }
        const intervalId = setInterval(() => {
            setCurrentSlide((currentSlide + stepSlider()) % brands.length)
        }, 2000);
        return () => clearInterval(intervalId)
    }, [currentSlide]);

    return(
        <div 
        className={cl.more_apps_section}>
            <TitleAndDesc
            nameBlock={"More APPs"}
            description={"Mauris a sem vitae enim blandit dignissim sed vel sem. Donec tincidunt mauris eget dui dictum, a tristique ante elementum. Donec ac risus vitae quam ornare euismod eu a urna."}
            />
            <div className={cl.brands}>
                <div className={cl.window_slider} >
                    {brands.map(brand => 
                        <div className={cl.brands_map} >
                            {brand.items.map((item, index) => 
                                <div index={index} className={cl.img} style={{ transform: `translateX(-${currentSlide * 1140}px)` }}>
                                    {item.image}
                                </div>
                            )}
                        </div>    
                    )}
                </div>
            </div>
            <div className={cl.navigation}>
                {markers.map((marker, index) => 
                <div className={cl.marker_box} onClick={() => selection(index)}>
                    {currentSlide === index
                    ? <BsFillRecord2Fill className={cl.custom_marker}/>
                    : <div className={cl.marker}></div>
                    }
                </div>
                )}
            </div>
        </div>
    )
}

export default MoreApps;