import React, {useState,  useEffect } from "react";
import cl from "./WorksSlider.module.css";
import SlideInfo from "./SlideInfo/SlideInfo";
import Navigation from "./Navigation/Navigation";
import { FiTarget } from "react-icons/fi";
import { FaHeadphones } from "react-icons/fa";
import { BsFillRecord2Fill } from "react-icons/bs";




const WorksSlider = () => {

    const [slides, setSlides] = useState([
        {   
            id: 1,
            image: <img src="https://jthemes.net/themes/f-html/appon/Templates/Light/Sidebar-Menu/images/feature-images/002.png" className={cl.imgSlide}/>,
            title: "Tell to The People How to Install",
            desc: "Fusce leo neque, lacinia at tempor vitae, porta at arcu. Vestibulum varius non dui at pulvinar. Ut egestas orci in quam sollicitudin aliquet.",
            items: [
            {
                icon: <FiTarget className={cl.icon}/>,
                title: "Our Mission",
                desc: "Ut egestas orci in quam sollicitudin aliquet.Duis bibendum diam non erat facilaisis tincidunt. Fusce leo neque, lacinia at tempor vitae.",
            },
            {
                icon: <FaHeadphones className={cl.icon}/>,
                title: "Our Mission",
                desc: "Ut egestas orci in quam sollicitudin aliquet.Duis bibendum diam non erat facilaisis tincidunt. Fusce leo neque, lacinia at tempor vitae.",
            }
            ]
        },
        {   
            id: 2,
            image: <img src="https://jthemes.net/themes/f-html/appon/Templates/Light/Sidebar-Menu/images/feature-images/002.png" className={cl.imgSlide}/>,
            title: "Tell to The People How to Login",
            desc: "Fusce leo neque, lacinia at tempor vitae, porta at arcu. Vestibulum varius non dui at pulvinar. Ut egestas orci in quam sollicitudin aliquet.",
            items: [
            {
                icon: <FiTarget className={cl.icon}/>,
                title: "Our Mission",
                desc: "Ut egestas orci in quam sollicitudin aliquet.Duis bibendum diam non erat facilaisis tincidunt. Fusce leo neque, lacinia at tempor vitae.",
            },
            {
                icon: <FaHeadphones className={cl.icon}/>,
                title: "Our Mission",
                desc: "Ut egestas orci in quam sollicitudin aliquet.Duis bibendum diam non erat facilaisis tincidunt. Fusce leo neque, lacinia at tempor vitae.",
            }
            ]
        },
        {   
            id: 3,
            image: <img src="https://jthemes.net/themes/f-html/appon/Templates/Light/Sidebar-Menu/images/feature-images/002.png" className={cl.imgSlide}/>,
            title: "Tell to The People How to Share",
            desc: "Fusce leo neque, lacinia at tempor vitae, porta at arcu. Vestibulum varius non dui at pulvinar. Ut egestas orci in quam sollicitudin aliquet.",
            items: [
            {
                icon: <FiTarget className={cl.icon}/>,
                title: "Our Mission",
                desc: "Ut egestas orci in quam sollicitudin aliquet.Duis bibendum diam non erat facilaisis tincidunt. Fusce leo neque, lacinia at tempor vitae.",
            },
            {
                icon: <FaHeadphones className={cl.icon}/>,
                title: "Our Mission",
                desc: "Ut egestas orci in quam sollicitudin aliquet.Duis bibendum diam non erat facilaisis tincidunt. Fusce leo neque, lacinia at tempor vitae.",
            }
            ]
        },
        {   
            id: 4,
            image: <img src="https://jthemes.net/themes/f-html/appon/Templates/Light/Sidebar-Menu/images/feature-images/002.png" className={cl.imgSlide}/>,
            title: "Tell to The People How to Find Friend",
            desc: "Fusce leo neque, lacinia at tempor vitae, porta at arcu. Vestibulum varius non dui at pulvinar. Ut egestas orci in quam sollicitudin aliquet.",
            items: [
            {
                icon: <FiTarget className={cl.icon}/>,
                title: "Our Mission",
                desc: "Ut egestas orci in quam sollicitudin aliquet.Duis bibendum diam non erat facilaisis tincidunt. Fusce leo neque, lacinia at tempor vitae.",
            },
            {
                icon: <FaHeadphones className={cl.icon}/>,
                title: "Our Mission",
                desc: "Ut egestas orci in quam sollicitudin aliquet.Duis bibendum diam non erat facilaisis tincidunt. Fusce leo neque, lacinia at tempor vitae.",
            }
            ]
        },
    ])
    const [markers, setMarkers] = useState([
        {id: 1, title: "How To Install", icon: <BsFillRecord2Fill className={cl.custom_marker}/>},
        {id: 2, title: "How To Login", icon: <BsFillRecord2Fill className={cl.custom_marker}/>},
        {id: 3, title: "How To Share", icon: <BsFillRecord2Fill className={cl.custom_marker}/>},
        {id: 4, title: "How To Find Friend", icon: <BsFillRecord2Fill className={cl.custom_marker}/>},
    ])
    const [currentSlide, setCurrentSlide] = useState(0)
    

    const prevSlide = () => {
        const lastIndex = slides.length - 1;
        const shouldResetIndex = currentSlide === 0;
        const index = shouldResetIndex ? lastIndex : currentSlide - 1;
        setCurrentSlide(index);
      };
    
    const nextSlide = () => {
        const lastIndex = slides.length - 1;
        const shouldResetIndex = currentSlide === lastIndex;
        const index = shouldResetIndex ? 0 : currentSlide + 1;
        setCurrentSlide(index);
      };
    
      useEffect(() => {
        const intervalId = setInterval(() => {
          setCurrentSlide((currentSlide + 1) % slides.length);
        }, 4000);
    
        return () => clearInterval(intervalId);
      }, [currentSlide]);
    
    const selection = (index) => {
        setCurrentSlide(index)
    }

    
      
    return(
        <div className={cl.slider_section}>
            <Navigation
            prevSlide={prevSlide}
            nextSlide={nextSlide}
            selection={selection}
            currentSlide={currentSlide}
            setCurrentSlide={setCurrentSlide}
            markers={markers}
            setMarkers={setMarkers}
            />
            <div className={cl.positionSlider}>
                <div className={cl.sliderInfo} style={{ transform: `translateX(-${currentSlide * 1145}px)` }}>
                    {slides.map((slide, index) => 
                        <SlideInfo index={index} slide={slide}/>
                    )}
                </div>
            </div>
        </div>
    )
}

export default WorksSlider;