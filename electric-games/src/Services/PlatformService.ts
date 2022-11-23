import axios from "axios";
import IPlatform from "../interfaces/IPlatform";

const platformService = (
    () => {
        const endpoints = {
            "Platforms": "https://localhost:7119/platform",
        }
    
        const getPlatforms = async () => {
            const response = await axios.get(endpoints.Platforms);
            return response.data;
        }

        const getPlatformById = async (id: number) => {
            const response = await axios.get(`${endpoints.Platforms}/${id}`);
            return response.data;
        }
        
        const addPlatform = async (platform: IPlatform) => {
            const response = await axios.post(endpoints.Platforms, platform);
            return response.data;
        }

        const updatePlatform = async (platform: IPlatform) => {
            const response = await axios.put(`${endpoints.Platforms}/${platform.id}`, platform);
            return response.data;
            
        }

        const deletePlatform = async (id: number) => {
            const response = await axios.delete(`${endpoints.Platforms}/${id}`);
            return response.data;
        }
    
        return {
            getPlatforms,
            getPlatformById,
            addPlatform,
            updatePlatform,
            deletePlatform
        }
}
)();
export default platformService;