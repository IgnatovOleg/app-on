import React from "react";
import { motion } from "framer-motion";
import cl from "./TitleAndDesc.module.css"


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



const TitleAndDesc = ({nameBlock, description}) => {



    return(
        <motion.div
        initial="hidden"
        whileInView="visible"
        className={cl.container_navbar}>
            <div className={cl.top}>
                <div className={cl.slogan}>
                    <motion.h1 variants={title}>{nameBlock}</motion.h1>
                </div>
                <div className={cl.desc}>
                    <motion.p variants={desc}>{description}</motion.p>
                </div>
            </div>
        </motion.div>
    )
}

export default TitleAndDesc;