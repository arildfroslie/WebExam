import { FC, useContext } from "react";
import { PlatformContext } from "../../context/PlatformContext";
import IPlatform from "../../interfaces/IPlatform";
import DeleteFunction from "../DeleteFunction/DeleteGame";
import DeletePlatform from "../DeleteFunction/DeletePlatform";
import scrollFunction from "../ScrollFunction/ScrollFunction";

const PlatformItem: FC<IPlatform> = ({id, name, image, description }) => {
    const platformContext = useContext(PlatformContext);
    
    return (
        <article className="output-item">
            <h3 className="output-header">{name}</h3>
            <img className="output-image" src={`https://localhost:7119/images/${image}`} alt={name} />
            <p className="output-description">{description}</p>
            <DeletePlatform id={id}/>
            <button className="edit-icon" onClick={() =>
                {
                    scrollFunction("update-platform")
                    platformContext?.setPlatformToEdit({id, name, image, description})
                }}>
                <i className="fa-regular fa-pen-to-square fa-xl"></i>
            </button>
        </article>
    );
};

export default PlatformItem;
