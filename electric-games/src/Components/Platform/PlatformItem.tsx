import { FC } from "react";
import IPlatform from "../../interfaces/IPlatform";
import "../../css/Platform.css";

const PlatformItem: FC<IPlatform> = ({id, name, image, description }) => {
    const onClickAlert = () => {
        const message = alert(`You clicked on ${name}!`);
        return message;
    }
    
    return (
        <article className="platform-item">
            <h3>{name}</h3>
            <img className="platform-image" src={`https://localhost:7119/images/${image}`} alt={name} />
            <p>{description}</p>
            <span onClick={onClickAlert}>
                <i className="fa-solid fa-trash fa-xl" />
            </span>
            <span onClick={onClickAlert}>
            <i className="fa-solid fa-pencil fa-xl"></i>
            </span>
        </article>
    );
};

export default PlatformItem;
