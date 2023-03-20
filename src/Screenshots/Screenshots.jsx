import React, {useState, useEffect} from "react";
import cl from "./Screenshots.module.css"
import TitleAndDesc from "../TitleAndDesc/TitleAndDesc";
import { BsFillRecord2Fill } from "react-icons/bs";
import Marker from "./Marker";



const Screenshots = () => {

    const [screenshots, setScreenshots] = useState([
        {id: 1, items: [
            {image: <img src="https://jthemes.net/themes/f-html/appon/Templates/Light/Sidebar-Menu/images/portfolio/001.jpg" className={cl.img}/>},
            {image: <img src="https://jthemes.net/themes/f-html/appon/Templates/Light/Sidebar-Menu/images/portfolio/001.jpg" className={cl.img}/>},
            {image: <img src="https://jthemes.net/themes/f-html/appon/Templates/Light/Sidebar-Menu/images/portfolio/001.jpg" className={cl.img}/>},
            {image: <img src="https://jthemes.net/themes/f-html/appon/Templates/Light/Sidebar-Menu/images/portfolio/001.jpg" className={cl.img}/>},
            ]
        },
        {id: 2, items: [
            {image: <img src="https://jthemes.net/themes/f-html/appon/Templates/Light/Sidebar-Menu/images/portfolio/002.jpg" className={cl.img}/>},
            {image: <img src="https://jthemes.net/themes/f-html/appon/Templates/Light/Sidebar-Menu/images/portfolio/002.jpg" className={cl.img}/>},
            {image: <img src="https://jthemes.net/themes/f-html/appon/Templates/Light/Sidebar-Menu/images/portfolio/002.jpg" className={cl.img}/>},
            {image: <img src="https://jthemes.net/themes/f-html/appon/Templates/Light/Sidebar-Menu/images/portfolio/002.jpg" className={cl.img}/>},
            ]
        },
        {id: 3, items: [
            {image: <img src="https://jthemes.net/themes/f-html/appon/Templates/Light/Sidebar-Menu/images/portfolio/003.jpg" className={cl.img}/>},
            {image: <img src="https://jthemes.net/themes/f-html/appon/Templates/Light/Sidebar-Menu/images/portfolio/003.jpg" className={cl.img}/>},
            {image: <img src="https://jthemes.net/themes/f-html/appon/Templates/Light/Sidebar-Menu/images/portfolio/003.jpg" className={cl.img}/>},
            {image: <img src="https://jthemes.net/themes/f-html/appon/Templates/Light/Sidebar-Menu/images/portfolio/003.jpg" className={cl.img}/>},
            ]
        },
    ])
    const [markers, setmarkers] = useState([
        {id: 1, icon: <BsFillRecord2Fill className={cl.custom_marker}/>},
        {id: 2, icon: <BsFillRecord2Fill className={cl.custom_marker}/>},
        {id: 3, icon: <BsFillRecord2Fill className={cl.custom_marker}/>},
    ])

    const [currentSlide, setCurrentSlide] = useState(0)

    useEffect(() => {
        const stepSlider = () => {
            return currentSlide === 2 ? 1 : 1/4
        }
        const intervalId = setInterval(() => {
          setCurrentSlide((currentSlide + stepSlider()) % screenshots.length);
        }, 4000);
    
        return () => clearInterval(intervalId);
      }, [currentSlide]);

    const selection = (index) => {
         setCurrentSlide(index)
    }
    

    return (
        <div className={cl.screenshots_section}>
            <TitleAndDesc
            nameBlock={"Screenshots of App"}
            description={"Duis bibendum diam non erat facilaisis tincidunt. Fusce leo neque, lacinia at tempor vitae, porta at arcu. Vestibulum varius non dui at pulvinar. Ut egestas orci in quam sollicitudin aliquet."}
            />
            <div className={cl.slider_section}>
                <div className={cl.slider_map}>
                    <div className={cl.a} draggable="true">
                    {screenshots.map(screenshot => 
                            <div className={cl.images_map}  style={{ transform: `translateX(-${currentSlide * 100}%)`}}>
                                {screenshot.items.map(item => 
                                    <div className={cl.image}>
                                        {item.image}
                                    </div>    
                                )}
                            </div>
                    )}
                    </div>
                </div>
            </div>
            <div className={cl.navigation_marker}>
                <div className={cl.pos_marker}>
                {markers.map((marker, index) => 
                        <Marker selection={selection} marker={marker} index={index} currentSlide={currentSlide} setCurrentSlide={setCurrentSlide}/>
                )}
                </div>
            </div>
        </div>
    )
}

export default Screenshots;