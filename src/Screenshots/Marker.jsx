import React from "react";
import cl from "./Screenshots.module.css"

const Marker = ({marker, index, currentSlide, setCurrentSlide, selection}) => {



    return(
        <div>
            {currentSlide === index
            ? <div>{marker.icon}</div>
            : <div className={cl.marker} onClick={() => selection(index)}></div>
            }
        </div>
    )
}
export default Marker;