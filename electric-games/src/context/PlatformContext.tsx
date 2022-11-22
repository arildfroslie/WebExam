import { useEffect, useState, createContext, ReactNode } from "react";
import IPlatformContext from "../interfaces/IPlatformContext";
import IPlatform from "../interfaces/IPlatform";
import platformService from "../services/PlatformService";


export const PlatformContext = createContext<IPlatformContext | null>(null);

type Props = {
    children: ReactNode
}

const PlatformProvider = ({children} : Props) => {
    const [platforms, setPlatforms] = useState<IPlatform[]>([]);
    const [platformToEdit, setPlatformToEdit] = useState<IPlatform | null>(null);

    useEffect(()=>{
        getplatformsFromService();
    }, [])

    const getplatformsFromService = async () => {
        const platformsFromService = await platformService.getPlatforms();
        setPlatforms(platformsFromService);
    }
    
    const deletePlatformById = async (id: number) => {
        await platformService.deletePlatform(id);
    }

    const addPlatform = async (platform: IPlatform) => {
        await platformService.addPlatform(platform);
    }
    

    return(
        <PlatformContext.Provider value={{platforms, platformToEdit, setPlatformToEdit, deletePlatformById, addPlatform}}>
            {children}
        </PlatformContext.Provider>
    )
}

export default PlatformProvider;