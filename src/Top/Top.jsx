import React from "react";
import cl from "./Top.module.css"
import SloganAndDesc from "./SloganAndDesc/SloganAndDesc";
import TopInfo from "./TopInfo/TopInfo";
import TitleAndDesc from "../TitleAndDesc/TitleAndDesc";

const Top = () => {



    return(
        <section>
        <div className={cl.background_image}>
            <div className={cl.container_top}>
                <SloganAndDesc/>
                <TopInfo/>
            </div>
        </div>
        </section>
    )
}

export default Top;