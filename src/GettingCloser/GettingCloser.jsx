import React from "react";
import cl from "./GettingCloser.module.css"
import TitleAndDesc from "../TitleAndDesc/TitleAndDesc";


const GettingCloser = () => {


    return (
        <div className={cl.getting_closer_section}>
            <TitleAndDesc
            nameBlock={"Getting Closer to App"}
            description={"Duis bibendum diam non erat facilaisis tincidunt. Fusce leo neque, lacinia at tempor vitae, porta at arcu. Vestibulum varius non dui at pulvinar. Ut egestas orci in quam sollicitudin aliquet."}
            />
            <div className={cl.img}>
                <img src="https://jthemes.net/themes/f-html/appon/Templates/Light/Sidebar-Menu/images/feature-images/003-1.png" alt="" />
            </div>
        </div>
    )
}

export default GettingCloser;