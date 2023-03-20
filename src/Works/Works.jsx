import React from "react";
import TitleAndDesc from "../TitleAndDesc/TitleAndDesc";
import cl from "./Works.module.css"
import WorksSlider from "./WorksSlider/WorksSlider";


const Works = () => {


    return(
        <div className={cl.works_section}>
            <TitleAndDesc
            nameBlock={"How It Works"}
            description={"Duis bibendum diam non erat facilaisis tincidunt. Fusce leo neque, lacinia at tempor vitae, porta at arcu. Vestibulum varius non dui at pulvinar. Ut egestas orci in quam sollicitudin aliquet."}
            />
            <div className={cl.container_slider}>
                <WorksSlider/>
            </div>
        </div>
    )
}
export default Works;