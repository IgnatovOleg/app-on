import React from "react";
import { motion } from "framer-motion";
import cl from "./ContactUse.module.css";
import TitleAndDesc from "../TitleAndDesc/TitleAndDesc";

const leftAnimation = {
    hidden: {
        x: "-100%",
        opacity: 0,
    },
    visible: custom => ({
        x: "0%",
        opacity: 1,
        transition: {duration: 0.5, delay: custom * 0.2, when: "beforeChildren"},
    }),
}
const rightAnimation = {
    hidden: {
        x: "+100%",
        opacity: 0,
    },
    visible: custom => ({
        x: "0%",
        opacity: 1,
        transition: {duration: 0.5, delay: custom * 0.2, when: "beforeChildren"},
    }),
}
const btn = {
    hidden: {
        y: "+100%",
        opacity: 0,
    },
    visible: {
        y: "0%",
        opacity: 1,
        transition: {duration: 0.5, delay: 0.2, when: "beforeChildren"},
    },
}


const ContactUse = () => {



    return(
        <motion.div 
        initial="hidden"
        whileInView="visible"
        className={cl.contact_use_section}>
            <TitleAndDesc
            nameBlock={"Contact Us"}
            description={"Mauris a sem vitae enim blandit dignissim sed vel sem. Donec tincidunt mauris eget dui dictum, a tristique ante elementum. Donec ac risus vitae quam ornare euismod eu a urna."}
            />
            <div className={cl.input}>
                <motion.input custom={1} variants={leftAnimation} type="text" placeholder="Your name * Required"/>
                <motion.input custom={2} variants={rightAnimation} type="text" placeholder="Your email * Required"/>
                <motion.input custom={3} variants={leftAnimation} type="text" placeholder="Subject * Required"/>
                <motion.textarea custom={4} variants={rightAnimation} name="" id="" cols="30" rows="10" placeholder="Your message * Required"></motion.textarea>
                <motion.div variants={btn} className={cl.btn_all_input}>
                    <a href="#">Submit</a>
                </motion.div>
            </div>
        </motion.div>
    )
}


export default ContactUse;