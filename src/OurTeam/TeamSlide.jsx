import React from "react";
import cl from "./OurTeam.module.css"
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaSkype } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";

const TeamSlide = ({t}) => {



    return(
        <div className={cl.slider_container}>
                <div className={cl.img}>
                    {t.image}
                </div>
                <div className={cl.info_container}>
                    <h1>{t.title}</h1>
                    <p>{t.job}</p>
                    <span>
                        {t.desc}
                    </span>
                    <div className={cl.contacts}>
                        <div className={cl.social_media}>   <FaFacebookF className={cl.facebook}/>   </div>
                        <div className={cl.social_media}>   <FaTwitter className={cl.twitter}/>    </div>
                        <div className={cl.social_media}>   <FaLinkedinIn className={cl.instagram}/>   </div>
                        <div className={cl.social_media}>   <FaSkype className={cl.skype}/>   </div>
                        <div className={cl.social_media}>   <FaGooglePlusG className={cl.google}/>   </div>
                    </div>
                </div>
        </div>
    )
}
export default TeamSlide;