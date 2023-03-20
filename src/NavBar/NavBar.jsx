import React from "react";
import cl from "./NavBar.module.css"
import { Link } from 'react-scroll';
import { FaBars } from "react-icons/fa";

const NavBar = ({menuActive, setMenuActive}) => {
    


    


    return(
        <div className={menuActive ? cl.nav_bar_section_active : cl.nav_bar_section_passive}>
            <div className={menuActive ? cl.navigation_container_active : cl.navigation_container}>
                <img src="https://jthemes.net/themes/f-html/appon/Templates/Light/Sidebar-Menu/images/logo.png" alt="" />
                <div className={cl.list}>
                    <Link to="home" duration={1000} smooth={true}><li>HOME</li></Link>
                    <Link to="feature" duration={1000} smooth={true}><li>FEATURES</li></Link>
                    <Link to="works" duration={1000} smooth={true}><li>HOW IT WORKS</li></Link>
                    <Link to="screenshots" duration={1000} smooth={true}><li>SCREENSHOTS</li></Link>
                    <Link to="appView" duration={1000} smooth={true}><li>APP VIEW</li></Link>
                    <Link to="ourTeam" duration={1000} smooth={true}><li>OUR TEAM</li></Link>
                    <Link to="moreApps" duration={1000} smooth={true}><li>MORE APPS</li></Link>
                    <Link to="faqs" duration={1000} smooth={true}><li>FAQS</li></Link>
                    <Link to="testimonials" duration={1000} smooth={true}><li>TESTIMONIALS</li></Link>
                    <Link to="prisingTables" duration={1000} smooth={true}><li>PRICING TABLES</li></Link>
                    <Link to="recentPosts" duration={1000} smooth={true}><li>RECENT POSTS</li></Link>
                    <Link to="contactUse" duration={1000} smooth={true}><li>CONTACT USE</li></Link>
                    <Link to="subscribe" duration={1000} smooth={true}><li>SUBSCRIBE</li></Link>
                    <hr />
                    <div className={cl.contacts}>
                        <p>(999) 888-1234</p>
                        <p>name@yourdomain.com</p>
                    </div>
                </div>
            </div>
            <div className={cl.icon_open_navbar} onClick={() => setMenuActive(!menuActive)}>
                    <FaBars className={cl.icon}/>
                </div>
        </div>
    )
}

export default NavBar;