import { FC } from "react";
import IPlatform from "../../interfaces/IPlatform";

const PlatformItem: FC<IPlatform> = ({id, name, image, description }) => {
    return (
        <article>
            <h3>{name} ({id})</h3>
            <img src={image} alt={name} />
            <p>{description}</p>
        </article>
    );
};

export default PlatformItem;
