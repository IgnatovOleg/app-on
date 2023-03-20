import React from "react";
import { motion } from "framer-motion";
import cl from "./LikeThisAPP.module.css"
import { BsApple } from "react-icons/bs";
import { DiAndroid } from "react-icons/di";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaSkype } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import TitleAndDesc from "../TitleAndDesc/TitleAndDesc";

const btns = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {duration: 0.8, delay: 0.4},
    }
}


const LikeThisAPP = () => {



    return(
        <motion.div 
        initial="hidden"
        whileInView="visible"
        className={cl.like_this_app_section}>
            <TitleAndDesc
            nameBlock={"Like This APP"}
            description={"Duis bibendum diam non erat facilaisis tincidunt. Fusce leo neque, lacinia at tempor vitae, porta at arcu. Vestibulum varius non dui at pulvinar. Ut egestas orci in quam sollicitudin aliquet."}
            />
            <div variants={btns} className={cl.btns}>
                <motion.div variants={btns} className={cl.btnOurFeatures}>
                    <a className={cl.btn} href="" title="Lets See Our Awesome Features">
                        <BsApple className={cl.iconBtn}/>
                        Buy In App Store
                    </a>
                </motion.div>
                <motion.div variants={btns} className={cl.btnOurFeatures}>
                    <a className={cl.btn} href="" title="Lets See Our Awesome Features">
                        <DiAndroid className={cl.iconBtn}/>
                        Buy In Google Play
                    </a>
                </motion.div>
            </div>
            <div className={cl.contacts}>
                <div className={cl.social_media} style={{borderLeft: "1px solid #b2c4d696", borderRight: "1px solid #b2c4d696"}}>   <FaFacebookF className={cl.facebook}/>   </div>
                <div className={cl.social_media} style={{borderRight: "1px solid #b2c4d696"}}>   <FaTwitter className={cl.twitter}/>    </div>
                <div className={cl.social_media} style={{borderRight: "1px solid #b2c4d696"}}>   <FaLinkedinIn className={cl.instagram}/>   </div>
                <div className={cl.social_media} style={{borderRight: "1px solid #b2c4d696"}}>   <FaSkype className={cl.skype}/>   </div>
                <div className={cl.social_media} style={{borderRight: "1px solid #b2c4d696"}}>   <FaGooglePlusG className={cl.google}/>   </div>
            </div>
        </motion.div>
    )
}

export default LikeThisAPP;