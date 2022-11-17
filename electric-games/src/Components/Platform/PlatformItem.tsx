import { FC } from "react";
import IPlatform from "../../interfaces/IPlatform";
import "./Platform.css"

const PlatformItem: FC<IPlatform> = ({id, name, image, description }) => {
    return (
        <article className="platform-item">
            <h3>{name}</h3>
            <img className="platform-image" src={`https://localhost:7119/images/Platform/${image}`} alt={name} />
            <p>{description}</p>
        </article>
    );
};

export default PlatformItem;
