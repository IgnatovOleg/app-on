import React from "react";
import { motion } from "framer-motion";
import cl from "./RecentPosts.module.css"
import TitleAndDesc from "../TitleAndDesc/TitleAndDesc";



const blogs = {
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

const btn = {
    hidden: {
        y: "100%",
        opacity: 0,
    },
    visible: {
        y: "0%",
        opacity: 1,
        transition: {duration: 0.5, delay: 1, when: "beforeChildren"},
    },
}



const RecentPosts = () => {



    return(
        <motion.div 
        initial="hidden"
        whileInView="visible"
        className={cl.recent_posts_section}>
            <TitleAndDesc
            nameBlock={"Recent Posts"}
            description={"Duis bibendum diam non erat facilaisis tincidunt. Fusce leo neque, lacinia at tempor vitae, porta at arcu. Vestibulum varius non dui at pulvinar. Ut egestas orci in quam sollicitudin aliquet."}
            />
            <motion.div variants={blogs} className={cl.list_blogs}>
                <motion.div custom={1} variants={blogs} className={cl.blog}>
                    <div className={cl.img}>
                        <img src="https://jthemes.net/themes/f-html/appon/Templates/Light/Sidebar-Menu/images/posts/001.jpg" alt="" />
                    </div>
                    <div className={cl.authors_name}>
                        <a href="#">Blog Post Title Here</a>
                    </div>
                    <p>13 APRIL 2014</p>
                    <span>Vivamus ante nulla, ultrices molestie pellentesque, posuere eu ligula. 
                        In porttitor in turpis eu porttitor. [...]
                    </span>
                    <div className={cl.button_blog}>
                        <a href="#">Read More</a>
                    </div>
                </motion.div>
                <motion.div custom={2} variants={blogs} className={cl.blog}>
                    <img src="https://jthemes.net/themes/f-html/appon/Templates/Light/Sidebar-Menu/images/posts/002.jpg" alt="" />
                    <div className={cl.authors_name}>
                        <a href="#">Blog Post Title Here</a>
                    </div>
                    <p>13 APRIL 2014</p>
                    <span>Vivamus ante nulla, ultrices molestie pellentesque, posuere eu ligula. 
                        In porttitor in turpis eu porttitor. [...]
                    </span>
                    <div className={cl.button_blog}>
                        <a href="#">Read More</a>
                    </div>
                </motion.div>
                <motion.div custom={3} variants={blogs} className={cl.blog}>
                    <img src="https://jthemes.net/themes/f-html/appon/Templates/Light/Sidebar-Menu/images/posts/003.jpg" alt="" />
                    <div className={cl.authors_name}>
                        <a href="#">Blog Post Title Here</a>
                    </div>
                    <p>13 APRIL 2014</p>
                    <span>Vivamus ante nulla, ultrices molestie pellentesque, posuere eu ligula. 
                        In porttitor in turpis eu porttitor. [...]
                    </span>
                    <div className={cl.button_blog}>
                        <a href="#">Read More</a>
                    </div>
                </motion.div>
                <motion.div custom={4} variants={blogs} className={cl.blog}>
                    <img src="https://jthemes.net/themes/f-html/appon/Templates/Light/Sidebar-Menu/images/posts/004.jpg" alt="" />
                    <div className={cl.authors_name}>
                        <a href="#">Blog Post Title Here</a>
                    </div>
                    <p>13 APRIL 2014</p>
                    <span>Vivamus ante nulla, ultrices molestie pellentesque, posuere eu ligula. 
                        In porttitor in turpis eu porttitor. [...]
                    </span>
                    <div className={cl.button_blog}>
                        <a href="#">Read More</a>
                    </div>
                </motion.div>
            </motion.div>
            <motion.div variants={btn} className={cl.button_all_posts}>
                <motion.a href="#">See All Posts</motion.a>
            </motion.div>
        </motion.div>
    )
}

export default RecentPosts;