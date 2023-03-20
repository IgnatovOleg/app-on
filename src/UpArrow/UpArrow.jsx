import React from "react";
import cl from "./UpArrow.module.css"
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";


const UpArrow = () => {


    return(
        <div className={cl.arrows}>
            <div className={cl.blockArrow}>
                <a href="#features-section">
                    <FaChevronUp className={cl.iconArrowTop}/>
                </a>
            </div>
        </div>
    )
}

export default UpArrow;