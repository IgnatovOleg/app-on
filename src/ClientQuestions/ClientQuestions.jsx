import React, { useState, useRef, useEffect } from "react";
import cl from "./ClientQuestions.module.css"
import { MdKeyboardArrowLeft } from "react-icons/md";
import TitleAndDesc from "../TitleAndDesc/TitleAndDesc";
import { MdKeyboardArrowRight } from "react-icons/md";
import ClientSliderItems from "./ClientSliderItems";



const ClientQuestions = () => {

    const [clients, setClients] = useState([
        {id: 1, 
            name: "Client Name", 
            desc: "Vivamus enim nisi, dictum vel cursus a, pulvinar a neque. Aenean interdum, tellus ut congue rutrum, urna leo bibendum erat, vel ullamcorper eros tellus vitae libero. Nulla tellus vitae nibh , a viverra est malesuada. Nam malesuada quis tellus eu laoreet.",
            image: <img src="https://jthemes.net/themes/f-html/appon/Templates/Light/Sidebar-Menu/images/clients/001.jpg" alt="" />
        },
        {id: 2, 
            name: "Client Name", 
            desc: "Vivamus enim nisi, dictum vel cursus a, pulvinar a neque. Aenean interdum, tellus ut congue rutrum, urna leo bibendum erat, vel ullamcorper eros tellus vitae libero. Nulla tellus vitae nibh , a viverra est malesuada. Nam malesuada quis tellus eu laoreet.",
            image: <img src="https://jthemes.net/themes/f-html/appon/Templates/Light/Sidebar-Menu/images/clients/002.jpg" alt="" />
        },
        {id: 3, 
            name: "Client Name", 
            desc: "Vivamus enim nisi, dictum vel cursus a, pulvinar a neque. Aenean interdum, tellus ut congue rutrum, urna leo bibendum erat, vel ullamcorper eros tellus vitae libero. Nulla tellus vitae nibh , a viverra est malesuada. Nam malesuada quis tellus eu laoreet.",
            image: <img src="https://jthemes.net/themes/f-html/appon/Templates/Light/Sidebar-Menu/images/clients/003.jpg" alt="" />
        },
    ])
    const [clientsSlide, setClientsSlide] = useState(0)
    const slideRef = useRef()




    const prevSlide = () => {
        const lastIndex = clients.length - 1;
        const shouldResetIndex = clientsSlide === 0;
        const index = shouldResetIndex ? lastIndex : clientsSlide - 1;
        setClientsSlide(index);
      };
    
      const nextSlide = () => {
        const lastIndex = clients.length - 1;
        const shouldResetIndex = clientsSlide === lastIndex;
        const index = shouldResetIndex ? 0 : clientsSlide + 1;
        setClientsSlide(index);
      };

      useEffect(() => {
        const intervalId = setInterval(() => {
            setClientsSlide((clientsSlide + 1) % clients.length)
        }, 4000)
        return () => clearInterval(intervalId)
      }, [clientsSlide]);

    return(
        <div className={cl.clients_questions_section}>
            <TitleAndDesc
            nameBlock={"What Clients Say"}
            description={"Mauris a sem vitae enim blandit dignissim sed vel sem. Donec tincidunt mauris eget dui dictum, a tristique ante elementum. Donec ac risus vitae quam ornare euismod eu a urna."}
            />
                <div className={cl.slider_section}>
                    <div ref={slideRef} className={cl.clients_map} style={{ transform: `translateX(-${clientsSlide * 100}%)`}}>
                        {clients.map(client =>
                                <ClientSliderItems client={client}/>
                        )}
                    </div>
                </div>
                <MdKeyboardArrowLeft 
                className={cl.left_arrow} 
                onClick={prevSlide}
                />
                <MdKeyboardArrowRight 
                className={cl.right_arrow} 
                onClick={() => nextSlide()}
                />
        </div>
    )
}


export default ClientQuestions;