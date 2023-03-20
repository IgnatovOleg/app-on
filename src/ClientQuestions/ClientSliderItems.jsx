import React from "react";
import cl from "./ClientQuestions.module.css"


const ClientSliderItems = ({client}) => {





    return(
        <div className={cl.clients}>
                <div className={cl.client_question}>
                    <p>{client.desc}</p>
                    <h3>{client.name}</h3>
                </div>
                <div className={cl.slider}>
                    <div className={cl.client_image}>
                        {client.image}
                    </div>
                </div>
            </div>
    )
}

export default ClientSliderItems;