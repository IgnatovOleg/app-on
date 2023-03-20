import React from "react";
import { motion } from "framer-motion";
import cl from "./Faqs.module.css"
import { FaRegCheckCircle } from "react-icons/fa";
import TitleAndDesc from "../TitleAndDesc/TitleAndDesc";

const btn = {
    hidden: {
        y: "100%",
    },
    visible: {
        y: "0%",
        transition: {duration: 0.5, delay: 1, when: "beforeChildren"},
    },
}




const Faqs = () => {


    return(
        <motion.div 
        initial="hidden"
        whileInView="visible"
        className={cl.faqs_section}>
            <TitleAndDesc
            nameBlock={"Faqs"}
            description={"Mauris a sem vitae enim blandit dignissim sed vel sem. Donec tincidunt mauris eget dui dictum, a tristique ante elementum. Donec ac risus vitae quam ornare euismod eu a urna."}
            />
            <div className={cl.information}>
                <div className={cl.question}>
                    <div className={cl.btnbox}>
                        <a className={cl.btn} href="#faq1" title="How to Install APP ON ?">
                            How to Install APP ON ?
                        </a>
                    </div>
                    <div className={cl.btnbox}>
                        <a className={cl.btn} href="#faq2" title="How to Make New User ?">
                            How to Make New User ? 
                        </a>
                    </div>
                    <div className={cl.btnbox}>
                        <a className={cl.btn} href="#faq3" title="How to Earn Bitcoin ?">
                            How to Earn Bitcoin ?
                        </a>
                    </div>
                    <div className={cl.btnbox}>
                        <a className={cl.btn} href="#faq4" title="How to Delete My Profile ?">
                            How to Delete My Profile ?
                        </a>
                    </div>
                </div>
                <div className={cl.answer}>
                    <h3>How to Install APP ON ?</h3>
                    <p>Vestibulum sit amet tincidunt urna, eget ullamcorper purus. 
                        Aenean feugiat quis tortor vitae fringilla. 
                        Pellentesque augue nisl, condimentum at sem et, fermentum varius ligula. 
                        Nulla dignissim nulla eget congue cursus.
                    </p>
                    <div className={cl.list}>
                        <p> <FaRegCheckCircle className={cl.icon_list}/> First Awesome Feature</p>
                        <p> <FaRegCheckCircle className={cl.icon_list}/> First Awesome Feature</p>
                        <p> <FaRegCheckCircle className={cl.icon_list}/> First Awesome Feature</p>
                        <p> <FaRegCheckCircle className={cl.icon_list}/> First Awesome Feature</p>
                        <p> <FaRegCheckCircle className={cl.icon_list}/> First Awesome Feature</p>
                        <p> <FaRegCheckCircle className={cl.icon_list}/> First Awesome Feature</p>
                        <p> <FaRegCheckCircle className={cl.icon_list}/> First Awesome Feature</p>
                        <p> <FaRegCheckCircle className={cl.icon_list}/> First Awesome Feature</p>
                </div>
                </div>
            </div>
            <motion.div className={cl.bottom_button}>
                <motion.a variants={btn} className={cl.btn_open} href="" title="Lets See Our Awesome Features">
                    Open A Ticket
                </motion.a>
            </motion.div>
        </motion.div>
    )
}

export default Faqs;