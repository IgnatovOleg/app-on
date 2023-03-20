import React from "react";
import { motion } from "framer-motion";
import cl from "./FutureSection.module.css"
import { MdOutlineWatchLater } from "react-icons/md";
import { FaInbox, FaBullseye } from "react-icons/fa";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { FaHeadphones } from "react-icons/fa";
import { FaCoffee } from "react-icons/fa";

const leftContent = {
    hidden: {
        x: "-110%",
    },
    visible: custom => ({
        x: 0,
        transition: {duration: 0.7, delay: custom * 0.5, when: "beforeChildren" },
    }),
}
const centerContent = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {duration: 0.8, delay: 0.7, when: "beforeChildren"}
    },
}

const rightContent = {
    hidden: {
        x: "110%",
    },
    visible: custom => ({
        x: 0,
        transition: {duration: 0.7, delay: custom * 0.5, when: "beforeChildren"},
    }),
}


const FutureBox = () => {


    return(
        <motion.div 
        initial="hidden"
        whileInView="visible"
        className={cl.features_box}>
            <motion.div 
            custom={1} variants={leftContent} 
            className={cl.features}
            >
                <div className={cl.featuresicon}>
                        <MdOutlineWatchLater className={cl.icon}/>
                    </div>
                <div className={cl.features_desc}>
                    <h4>Unlimated Lifetime</h4>
                    <p>Ut egestas orci in quam sollicitudin aliquet.Duis bibendum diam non erat facilaisis tincidunt. 
                        Fusce leo neque, lacinia at tempor vitae.
                    </p>
                </div>
            </motion.div>
            <motion.div 
            custom={1} variants={centerContent} 
            className={cl.features}
            >
                <div className={cl.featuresicon}>
                        <FaBullseye className={cl.icon}/>
                    </div>
                <div className={cl.features_desc}>
                    <h4>Our Mission</h4>
                    <p>Ut egestas orci in quam sollicitudin aliquet.Duis bibendum diam non erat facilaisis tincidunt. 
                        Fusce leo neque, lacinia at tempor vitae.
                    </p>
                </div>
            </motion.div>
            <motion.div 
            custom={1} variants={rightContent} 
            className={cl.features}>
                <div className={cl.featuresicon}>
                        <FaInbox className={cl.icon}/>
                    </div>
                <div className={cl.features_desc}>
                    <h4>Find Your Docs</h4>
                    <p>Ut egestas orci in quam sollicitudin aliquet.Duis bibendum diam non erat facilaisis tincidunt. 
                        Fusce leo neque, lacinia at tempor vitae.
                    </p>
                </div>
            </motion.div>
            <motion.div 
            custom={2} variants={leftContent} 
            className={cl.features}
            >
                <div className={cl.featuresicon}>
                        <FaRegMoneyBillAlt className={cl.icon}/>
                    </div>
                <div className={cl.features_desc}>
                    <h4>Calculate Your Coins</h4>
                    <p>Ut egestas orci in quam sollicitudin aliquet.Duis bibendum diam non erat facilaisis tincidunt. 
                        Fusce leo neque, lacinia at tempor vitae.
                    </p>
                </div>
            </motion.div>
            <motion.div 
            custom={2} variants={centerContent}
            className={cl.features}
            >
                <div className={cl.featuresicon}>
                        <FaHeadphones className={cl.icon}/>
                    </div>
                <div className={cl.features_desc}>
                    <h4>Great App Musics</h4>
                    <p>Ut egestas orci in quam sollicitudin aliquet.Duis bibendum diam non erat facilaisis tincidunt. 
                        Fusce leo neque, lacinia at tempor vitae.
                    </p>
                </div>
            </motion.div>
            <motion.div 
            custom={2} variants={rightContent}
            className={cl.features}
            >
                <div className={cl.featuresicon}>
                        <FaCoffee className={cl.icon}/>
                    </div>
                <div className={cl.features_desc}>
                    <h4>Take Your Coffe</h4>
                    <p>Ut egestas orci in quam sollicitudin aliquet.Duis bibendum diam non erat facilaisis tincidunt. 
                        Fusce leo neque, lacinia at tempor vitae.
                    </p>
                </div>
            </motion.div>
        </motion.div>
    )
}

export default FutureBox;