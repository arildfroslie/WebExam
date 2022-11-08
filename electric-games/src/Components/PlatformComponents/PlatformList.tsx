import { useState, useEffect } from "react";
import PlatformItem from "./PlatformItem";
import PlatformService from "../../Services/PlatformService";
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
        <section>
            <h1>Her kommer Platforms</h1>
            <section>{ getPlatformItems() }</section>
        </section>
    )
};

export default PlatformList;