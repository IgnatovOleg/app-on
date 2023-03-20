import React from "react";
import cl from "./OurTeam.module.css"
import { BsFillRecord2Fill } from "react-icons/bs";




const Markers = ({marker, index, currentSlide, selection}) => {




    return(
        <div  onClick={() => selection(index)}>
            {currentSlide === index
            ? <BsFillRecord2Fill className={cl.custom_marker}/>
            : <div className={cl.marker}/>
            }
        </div>
    )
}

export default Markers;