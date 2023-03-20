import React from "react";
import cl from "./Navigation.module.css"


const Marker = ({marker, selection, index, currentSlide}) => {




    return(
        <div className={cl.marker}  onClick={() => selection(index)}>
            <div className={cl.line}>
                {currentSlide === index
                ? <div className={cl.icon_box}>{marker.icon}</div>
                : <div className={cl.circle}/>   
                }
            </div>
            <p>{marker.title}</p>
        </div>
    )
}

export default Marker;