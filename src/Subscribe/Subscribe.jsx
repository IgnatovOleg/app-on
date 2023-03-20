import React from "react";
import { motion } from "framer-motion";
import cl from "./Subscribe.module.css"
import TitleAndDesc from "../TitleAndDesc/TitleAndDesc";

const animate = {
    hidden: {
        y: "100%",
        opacity: 0,
    },
    visible: {
        y: "0%",
        opacity: 1,
        transition: {duration: 0.7, delay: 0.3, when: "beforeChildren"},
    }
}


const Subscribe = () => {


    return(
        <motion.div 
        initial="hidden"
        whileInView="visible"
        className={cl.subscribe_section}>
            <TitleAndDesc
            nameBlock={"Subscribe"}
            description={"Duis bibendum diam non erat facilaisis tincidunt. Fusce leo neque, lacinia at tempor vitae, porta at arcu. Vestibulum varius non dui at pulvinar. Ut egestas orci in quam sollicitudin aliquet."}
            />
            <motion.div variants={animate} className={cl.input}>
                <input type="text" placeholder="Enter your email" />
                <button><p>Subscribe</p></button>
            </motion.div>
        </motion.div>
    )
}
export default Subscribe;