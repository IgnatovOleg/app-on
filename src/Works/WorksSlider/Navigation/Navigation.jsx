import React, { useState } from "react";
import cl from "./Navigation.module.css"
import { RiArrowLeftSFill } from "react-icons/ri";
import { RiArrowRightSFill } from "react-icons/ri";
import Marker from "./Marker";

const Navigation = ({prevSlide, nextSlide, selection, currentSlide, setCurrentSlide, markers, setMarkers}) => {

    


    return(
        <div className={cl.navigation_box}>
            <RiArrowLeftSFill 
            className={cl.arrowsLeft}
            onClick={prevSlide}
            />
            {markers.map((marker, index) => 
                <Marker 
                marker={marker}
                selection={selection}
                index={index}
                currentSlide={currentSlide}
                />
                )}
            <RiArrowRightSFill 
            className={cl.arrowsRight}
            onClick={nextSlide}
            />
        </div>
    )
}

export default Navigation;