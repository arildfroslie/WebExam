import { FC, useContext } from "react";
import { PlatformContext } from "../../context/PlatformContext";
import IPlatform from "../../interfaces/IPlatform";
import DeleteFunction from "../DeleteFunction/DeleteFunction";
import scrollFunction from "../UpdateFunction/ScrollFunction";

const PlatformItem: FC<IPlatform> = ({id, name, image, description }) => {
    const platformContext = useContext(PlatformContext);
    
    return (
        <article className="output-item">
            <h3>{name}</h3>
            <img className="output-image" src={`https://localhost:7119/images/${image}`} alt={name} />
            <p>{description}</p>
            <DeleteFunction id={id}/>
            <button className="icon" onClick={() =>
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
