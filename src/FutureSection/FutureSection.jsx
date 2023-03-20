import React from "react";
import { motion } from "framer-motion";
import cl from "./FutureSection.module.css"
import FutureBox from "./FutureBox";
import { CgArrowLongRight } from "react-icons/cg";
import TitleAndDesc from "../TitleAndDesc/TitleAndDesc";


const btn = {
    hidden: {
        y: "100%"
    },
    visible: {
        y: "0%",
        transition: {duration: 0.5, delay: 1.3}
    }
}




const FutureSection = () => {


    return(
        <motion.div
        initial="hidden"
        whileInView="visible"
        className={cl.features_section} id="features-section">
            <TitleAndDesc
            nameBlock={"Awesome Features"}
            description={"Mauris a sem vitae enim blandit dignissim sed vel sem. Donec tincidunt mauris eget dui dictum, a tristique ante elementum. Donec ac risus vitae quam ornare euismod eu a urna."}
            />
            <FutureBox/>
            <motion.div className={cl.btnOurFeatures}>
                <motion.a variants={btn} className={cl.btn} href="#" title="Lets See Our Awesome Features">
                    <p>Lets See Our Awesome Features</p>
                    <CgArrowLongRight className={cl.iconBtn}/>
                </motion.a>
            </motion.div>
        </motion.div>
    )
}

export default FutureSection;