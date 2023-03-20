import React from "react";
import cl from "./Arrows.module.css"
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";
import { Link } from "react-scroll";


const Arrows = ({previous, next}) => {


    return(
        <div className={cl.arrows}>
            <div className={cl.blockArrow}>
                <Link to={next} duration={1000} smooth={true}>
                    <FaChevronDown className={cl.iconArrowBottom}/>
                </Link>
            </div>
            <div className={cl.blockArrow}>
                <Link to={previous} duration={1000} smooth={true}>
                    <FaChevronUp className={cl.iconArrowTop}/>
                </Link>
            </div>
        </div>
    )
}

export default Arrows;