import React from "react";
import { motion } from "framer-motion";
import cl from "./Ready.module.css"
import { FaRegCheckCircle } from "react-icons/fa";
import { BsApple } from "react-icons/bs";
import { DiAndroid } from "react-icons/di";

const title = {
    hidden: {
        y: -100,
    },
    visible: {
        y: 0,
        transition: {duration: 0.8, when: "beforeChildren"},
    },
}

const desc = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {duration: 0.8, delay: 0.7, when: "beforeChildren"},
    }
}

const leftContent = {
    hidden: {
        x: "-100%",
    },
    visible: {
        x: "0%",
        transition: {duration: 0.8, delay: 0.9, when: "beforeChildren"},
    },
}

const rightContent = {
    hidden: {
        x: "+100%",
        opacity: 0,
    },
    visible: {
        x: "0%",
        opacity: 1,
        transition: {duration: 0.8, delay: 0.9, when: "beforeChildren"},
    },
}
const img = {
    hidden: {
        x: "+100%",
        opacity: 0,
    },
    visible: {
        x: "0%",
        opacity: 1,
        transition: {duration: 0.8, delay: 0.9, when: "beforeChildren"},

    },
}
const btn = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {duration: 0.7, delay: 1, when: "beforeChildren"},
    },
}





const Ready = () => {


    return(
        <motion.div 
        initial="hidden"
        whileInView="visible"
        className={cl.ready_section}>
            <div className={cl.information}>
                <div className={cl.name_and_desc_section}>
                    <motion.h1
                    variants={title}
                    >Ready for iPhone and iPad</motion.h1>
                    <motion.p
                    variants={desc}
                    >Fusce leo neque, lacinia at tempor vitae, porta at arcu. 
                        Vestibulum varius non dui at pulvinar. Ut egestas orci in quam sollicitudin aliquet.
                    </motion.p>
                </div>
                <motion.div className={cl.list}>
                    <motion.p variants={leftContent}> <FaRegCheckCircle className={cl.icon_list}/> First Awesome Feature</motion.p>
                    <motion.p variants={rightContent}> <FaRegCheckCircle className={cl.icon_list}/> First Awesome Feature</motion.p>
                    <motion.p variants={leftContent}> <FaRegCheckCircle className={cl.icon_list}/> First Awesome Feature</motion.p>
                    <motion.p variants={rightContent}> <FaRegCheckCircle className={cl.icon_list}/> First Awesome Feature</motion.p>
                    <motion.p variants={leftContent}> <FaRegCheckCircle className={cl.icon_list}/> First Awesome Feature</motion.p>
                    <motion.p variants={rightContent}> <FaRegCheckCircle className={cl.icon_list}/> First Awesome Feature</motion.p>
                    <motion.p variants={leftContent}> <FaRegCheckCircle className={cl.icon_list}/> First Awesome Feature</motion.p>
                    <motion.p variants={rightContent}> <FaRegCheckCircle className={cl.icon_list}/> First Awesome Feature</motion.p>
                    <motion.p variants={leftContent}> <FaRegCheckCircle className={cl.icon_list}/> First Awesome Feature</motion.p>
                    <motion.p variants={rightContent}> <FaRegCheckCircle className={cl.icon_list}/> First Awesome Feature</motion.p>
                </motion.div>
                <motion.div className={cl.btns}>
                    <motion.div className={cl.btnOurFeatures}>
                        <motion.a variants={btn} className={cl.btn} href="" title="Lets See Our Awesome Features">
                            <BsApple className={cl.iconBtn}/>
                            Buy In App Store
                        </motion.a>
                    </motion.div>
                    <motion.div className={cl.btnOurFeatures}>
                        <motion.a variants={btn} className={cl.btn} href="" title="Lets See Our Awesome Features">
                            <DiAndroid className={cl.iconBtn}/>
                            Buy In Google Play
                        </motion.a>
                    </motion.div>
                </motion.div>
            </div>
            <motion.div className={cl.image}>
                    <motion.img variants={img} src="https://jthemes.net/themes/f-html/appon/Templates/Light/Sidebar-Menu/images/feature-images/004.png" alt="" />
            </motion.div>
        </motion.div>
    )
}

export default Ready;