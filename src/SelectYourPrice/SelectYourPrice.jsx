import React from "react";
import { motion } from "framer-motion";
import cl from "./SelectYourPrice.module.css"
import TitleAndDesc from "../TitleAndDesc/TitleAndDesc";

const board = {
    hidden: {
        y: "100%",
        opacity: 0,
    },
    visible: custom => ({
        y: "0%",
        opacity: 1,
        transition: {duration: 0.5, delay: custom * 0.2, when: "beforeChildren"},
    })
}




const SelectYourPrice = () => {



    return(
        <motion.div 
        initial="hidden"
        whileInView="visible"
        className={cl.select_your_price_section}>
            <TitleAndDesc
            nameBlock={"Select Your Price"}
            description={"Mauris a sem vitae enim blandit dignissim sed vel sem. Donec tincidunt mauris eget dui dictum, a tristique ante elementum. Donec ac risus vitae quam ornare euismod eu a urna."}
            />
            <div className={cl.prices_block}>
                <motion.div custom={1} variants={board} className={cl.price_board}>
                    <h1>Bronze</h1>
                    <p>Nulla dignissim nulla eget congue.</p>
                    <div className={cl.price}><h1>$29/M</h1></div>
                    <li>Free 100 Bitcoin</li>
                    <li>300 Mb Storage</li>
                    <li>Unlimited Lifetime Support</li>
                    <li>One Page App Lending Theme</li>
                    <div className={cl.button_register}>
                        <a href="#">Register</a>
                    </div>
                </motion.div>
                <motion.div custom={2} variants={board} className={cl.price_board}>
                    <h1>Silver</h1>
                    <p>Nulla dignissim nulla eget congue.</p>
                    <div className={cl.price}><h1>$49/M</h1></div>
                    <li>Free 100 Bitcoin</li>
                    <li>300 Mb Storage</li>
                    <li>Unlimited Lifetime Support</li>
                    <li>One Page App Lending Theme</li>
                    <div className={cl.button_register}>
                        <a href="#">Register</a>
                    </div>
                </motion.div>
                <motion.div custom={3} variants={board} className={cl.price_board} style={{backgroundColor: "#ff3131"}}>
                    <h1 style={{color: "white", fontWeight: "700"}}>Gold</h1>
                    <p style={{color: "white"}}>Nulla dignissim nulla eget congue.</p>
                    <div className={cl.price} style={{backgroundColor: "white"}}>
                        <h1 style={{color: "#ff3131", fontWeight: "700"}}>$69/M</h1>
                    </div>
                    <li style={{color: "white"}}>Free 100 Bitcoin</li>
                    <li style={{color: "white"}}>300 Mb Storage</li>
                    <li style={{color: "white"}}>Unlimited Lifetime Support</li>
                    <li style={{color: "white"}}>One Page App Lending Theme</li>
                    <div className={cl.button_register} style={{border: "1px solid white"}}>
                        <a href="#" style={{color: "white"}}>Register</a>
                    </div>
                </motion.div>
                <motion.div custom={4} variants={board} className={cl.price_board}>
                    <h1>Platinum</h1>
                    <p>Nulla dignissim nulla eget congue.</p>
                    <div className={cl.price}><h1>$89/M</h1></div>
                    <li>Free 100 Bitcoin</li>
                    <li>300 Mb Storage</li>
                    <li>Unlimited Lifetime Support</li>
                    <li>One Page App Lending Theme</li>
                    <div className={cl.button_register}>
                        <a href="#">Register</a>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    )
}

export default SelectYourPrice;