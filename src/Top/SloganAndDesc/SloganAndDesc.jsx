import React from "react";
import { motion } from "framer-motion";
import cl from "./SloganAndDesc.module.css"
import { DiAndroid } from "react-icons/di";
import { BsApple } from "react-icons/bs";



const title = {
    hidden: {
        y: -100,
    },
    visible: {
        y: 0,
        transition: {duration: 1, delay: 0.4},
    },
}

const desc = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {duration: 0.8, delay: 0.4},
    }
}




const descAndButtons = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {duration: 0.8, delay: 0.4},
    }
}


const SloganAndDesc = () => {



    return(
        <motion.div
        initial="hidden"
        whileInView="visible"
        className={cl.container_navbar}>
            <div className={cl.top}>
                <div className={cl.slogan}>
                    <motion.h1 variants={title}>Publish Your App With App Presentation Page</motion.h1>
                </div>
                <div className={cl.desc}>
                    <motion.p variants={desc}>Mauris a sem vitae enim blandit dignissim sed vel sem. Donec tincidunt mauris eget dui dictum, a tristique ante elementum. Donec ac risus vitae quam ornare euismod eu a urna.</motion.p>
                </div>
            </div>
                <motion.div variants={descAndButtons} className={cl.topButtons}>
                    <div className={cl.buttonApple}>
                        <BsApple className={cl.appleIcon}/>
                        <a href="" title="Buy In App Store">
                            <span>Buy In App Store</span>
                        </a>
                    </div>
                    <div className={cl.buttonAndroid}>
                        <DiAndroid className={cl.androidIcon}/>
                        <a href="" title="Buy In Goole Play">
                            <span>Buy In Google Play</span>
                        </a>
                    </div>
                </motion.div>
        </motion.div>
    )
}

export default SloganAndDesc;