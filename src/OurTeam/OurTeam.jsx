import React, { useRef, useState, useEffect } from "react";
import cl from "./OurTeam.module.css"
import TitleAndDesc from "../TitleAndDesc/TitleAndDesc";
import Markers from "./Markers";
import TeamSlide from "./TeamSlide";



const OurTeam = () => {

    const [team, setTeam] = useState([
        {id: 1,
            title: "Team Member Name",
            job: "CO-FOUNDER OF APP ON.",
            image: <img src="https://jthemes.net/themes/f-html/appon/Templates/Light/Sidebar-Menu/images/team/001.png" alt="" />,
            desc: "Vestibulum sit amet tincidunt urna, eget ullamcorper purus. Aenean feugiat quis tortor vitae fringilla. Pellentesque augue nisl, condimentum at sem et, fermentum varius ligula. Nulla dignissim nulla eget congue cursus. Phasellus vehicula tortor sit amet nisl dignissim blandit. In adipiscing commodo leo et gravida. In malesuada quam ut dolor vulputate, et pharetra ligula venenatis.",
        },
        {id: 2,
            title: "Team Member Name",
            job: "CO-FOUNDER OF APP ON.",
            image: <img src="https://jthemes.net/themes/f-html/appon/Templates/Light/Sidebar-Menu/images/team/002.png" alt="" />,
            desc: "Vestibulum sit amet tincidunt urna, eget ullamcorper purus. Aenean feugiat quis tortor vitae fringilla. Pellentesque augue nisl, condimentum at sem et, fermentum varius ligula. Nulla dignissim nulla eget congue cursus. Phasellus vehicula tortor sit amet nisl dignissim blandit. In adipiscing commodo leo et gravida. In malesuada quam ut dolor vulputate, et pharetra ligula venenatis.",
        },
        {id: 3,
            title: "Team Member Name",
            job: "CO-FOUNDER OF APP ON.",
            image: <img src="https://jthemes.net/themes/f-html/appon/Templates/Light/Sidebar-Menu/images/team/003.png" alt="" />,
            desc: "Vestibulum sit amet tincidunt urna, eget ullamcorper purus. Aenean feugiat quis tortor vitae fringilla. Pellentesque augue nisl, condimentum at sem et, fermentum varius ligula. Nulla dignissim nulla eget congue cursus. Phasellus vehicula tortor sit amet nisl dignissim blandit. In adipiscing commodo leo et gravida. In malesuada quam ut dolor vulputate, et pharetra ligula venenatis.",
        },
        {id: 3,
            title: "Team Member Name",
            job: "CO-FOUNDER OF APP ON.",
            image: <img src="https://jthemes.net/themes/f-html/appon/Templates/Light/Sidebar-Menu/images/team/004.png" alt="" />,
            desc: "Vestibulum sit amet tincidunt urna, eget ullamcorper purus. Aenean feugiat quis tortor vitae fringilla. Pellentesque augue nisl, condimentum at sem et, fermentum varius ligula. Nulla dignissim nulla eget congue cursus. Phasellus vehicula tortor sit amet nisl dignissim blandit. In adipiscing commodo leo et gravida. In malesuada quam ut dolor vulputate, et pharetra ligula venenatis.",
        },
    ])
    const [allPeople, setAllPeople] = useState([
        {id: 1, image: <img src="https://jthemes.net/themes/f-html/appon/Templates/Light/Sidebar-Menu/images/team/thumb001.png" alt="" className={cl.image_margin}/>},
        {id: 2, image: <img src="https://jthemes.net/themes/f-html/appon/Templates/Light/Sidebar-Menu/images/team/thumb002.png" alt="" className={cl.image_margin}/>},
        {id: 3, image: <img src="https://jthemes.net/themes/f-html/appon/Templates/Light/Sidebar-Menu/images/team/thumb003.png" alt="" className={cl.image_margin}/>},
        {id: 4, image: <img src="https://jthemes.net/themes/f-html/appon/Templates/Light/Sidebar-Menu/images/team/thumb004.png" alt="" className={cl.image_margin}/>},

    ])
    const [markers, setMarkers] = useState([
        {id: 1},{id: 2},{id: 3},{id: 4},
    ])

    const [currentSlide, setCurrentSlide] = useState(0)

    const slideRef = useRef()



    const selection = (index) => {
        setCurrentSlide(index);
    }
    
    const stepSlide = () => {
        return currentSlide > 2 ? 8 : 0
    }

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentSlide((currentSlide + 1) % markers.length)
        }, 4000)
        return() => clearInterval(intervalId)
    }, [currentSlide]);


    return(
        <div className={cl.our_team_section}>
            <TitleAndDesc
            nameBlock={"Our Team"}
            description={"Duis bibendum diam non erat facilaisis tincidunt. Fusce leo neque, lacinia at tempor vitae, porta at arcu. Vestibulum varius non dui at pulvinar. Ut egestas orci in quam sollicitudin aliquet."}
            />
            <div className={cl.all_slider_section} >
                    <div className={cl.slider_map} >
                        {team.map(t =>
                            <div className={cl.map} style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                                <TeamSlide t={t}/>    
                            </div>
                        )}
                    </div>
            </div>
            <div className={cl.slider_section}>
                <div className={cl.all_people}>
                    <div className={cl.marker_people}>
                        {markers.map((marker, index) => 
                            <Markers 
                            marker={marker} 
                            index={index}
                            currentSlide={currentSlide}
                            selection={selection}
                            />
                        )}
                    </div>
                    <div className={cl.photo_people}>
                        <div className={cl.visible_people} style={{ transform: `translateX(-${currentSlide * stepSlide()}%)` }}>
                            {allPeople.map((people, index) => 
                                <div onClick={() => selection(index)}>{people.image}</div>    
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurTeam;