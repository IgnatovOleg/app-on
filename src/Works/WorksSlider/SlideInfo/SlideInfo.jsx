import React from "react";
import cl from "./SlideInfo.module.css";
import { BsApple } from "react-icons/bs";
import { DiAndroid } from "react-icons/di";









const SlideInfo = ({slide}) => {


    return(
        <div className={cl.infoSlide}>
            <div className={cl.slide}>
                <div className={cl.slide_text}>
                    <div className={cl.title_and_desc}>
                        <h4>{slide.title}</h4> 
                        <p>{slide.desc}</p>
                    </div>
                    {slide.items.map(item =>
                    <div className={cl.position_info_feature}>
                        <div className={cl.blockIcon}>
                            {item.icon}
                        </div>
                        <div className={cl.title_and_desc_feature}>
                            <h4>{item.title}</h4>
                            <p>{item.desc}</p>
                        </div>
                    </div>
                    )}
                </div>
                <div className={cl.btns}>
                    <div className={cl.btnOurFeatures}>
                        <a className={cl.btn} href="" title="Lets See Our Awesome Features">
                            <BsApple className={cl.iconBtn}/>
                            Buy In App Store
                        </a>
                    </div>
                    <div className={cl.btnOurFeatures}>
                        <a className={cl.btn} href="" title="Lets See Our Awesome Features">
                            <DiAndroid className={cl.iconBtn}/>
                            Buy In Google Play
                        </a>
                    </div>
                </div>
            </div>
            <div className={cl.imageSlide}>
                {slide.image}
            </div>
        </div>
    )
}


export default SlideInfo;