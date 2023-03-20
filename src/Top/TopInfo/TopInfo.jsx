import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import cl from "./TopInfo.module.css"
import { FaRegCheckCircle } from "react-icons/fa";

const leftContent = {
    hidden: {
        x: "-100%",
    },
    visible: custom => ({
        x: 0,
        transition: {duration: 0.7, delay: custom * 0.5, when: "beforeChildren" },
    }),
}
const centerContent = {
    hidden: {
        y: 0,
    },
    visible: {
        y: -515,
        transition: {duration: 0.7, delay: 0.4, when: "beforeChildren"}
    },
}

const rightContent = {
    hidden: {
        x: "100%",
    },
    visible: custom => ({
        x: 0,
        transition: {duration: 0.7, delay: custom * 0.5, when: "beforeChildren"},
    }),
}


const TopInfo = () => {


    return(
        <motion.div 
        initial="hidden"
        whileInView="visible"
        className={cl.container_info}>
            <div className={cl.leftBlock}>
                <motion.div custom={1} variants={leftContent} className={cl.firstLeft}>
                    <div className={cl.content}>
                        <h4>First Awesome Feature</h4> 
                        <p>Mauris a sem vitae enim blandit dignissim sed vel sem. Donec tincidunt mauris eget dui dictum, a tristique ante elementum.</p>
                    </div>
                    <div>
                        <FaRegCheckCircle className={cl.icon}/>
                    </div>
                </motion.div>
                <motion.div custom={2} variants={leftContent} className={cl.secondLeft}>
                    <div className={cl.content}>
                        <h4>First Awesome Feature</h4> 
                        <p>Mauris a sem vitae enim blandit dignissim sed vel sem. Donec tincidunt mauris eget dui dictum, a tristique ante elementum.</p>
                    </div>
                    <div>
                        <FaRegCheckCircle className={cl.icon}/>
                    </div>
                </motion.div>
            </div>
            <motion.div  
            variants={centerContent} className={cl.phoneImg}
            >
                <img src="https://jthemes.net/themes/f-html/appon/Templates/Light/Sidebar-Menu/images/feature-images/001.png" alt="" />
            </motion.div>
            <div className={cl.rightBlock}>
                <motion.div custom={1} variants={rightContent} className={cl.firstRight}>
                    <div>
                        <FaRegCheckCircle className={cl.icon}/>
                    </div>
                    <div>
                        <h4>Third Awesome Feature</h4>
                        <p>Mauris a sem vitae enim blandit dignissim sed vel sem. Donec tincidunt mauris eget dui dictum, a tristique ante elementum.</p>
                    </div>
                </motion.div>
                <motion.div custom={2} variants={rightContent} className={cl.secondRight}>
                    <div>
                        <FaRegCheckCircle className={cl.icon}/>
                    </div>
                    <div>
                        <h4>Fourth Awesome Feature</h4>
                        <p>Mauris a sem vitae enim blandit dignissim sed vel sem. Donec tincidunt mauris eget dui dictum, a tristique ante elementum.</p>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    )
}

export default TopInfo;