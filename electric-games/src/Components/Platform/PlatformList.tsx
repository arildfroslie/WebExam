import { useState, useEffect } from "react";
import PlatformItem from "./PlatformItem";
import PlatformService from "../../services/PlatformService";
import IPlatform from "../../interfaces/IPlatform";

const PlatformList = () => {
    const [Platforms, setPlatforms] = useState<IPlatform[]>([]);

    useEffect(() => {
        const fetchPlatforms = async () => {
            const Platforms = await PlatformService.getPlatforms();
            setPlatforms(Platforms);
        };
        fetchPlatforms();
    }, []);

    const getPlatformItems = () => {
        console.log(Platforms);
        return Platforms?.map( (Platform, i) => (
            <PlatformItem 
                key={`Platform-${i}`}
                id={Platform.id}
                name={Platform.name}
                image={Platform.image}
                description={Platform.description}
                />
        ) )
    }

    return(
        <section className="output-container">{ getPlatformItems() }</section>
    )
};

export default PlatformList;