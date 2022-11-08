import axios from "axios";

const platformService = (
    () => {
        const endpoints = {
            "platforms": "https://localhost:7119/Platform",
            "platform": "https://localhost:7119/Platform/{id}",
        }
    
        const getPlatforms = async () => { 
            const response = await axios.get(endpoints.platforms);
            return response.data.results;
        }
    
        const getPlatformById = async (id: number) => {
            const response = await axios.get(`${endpoints.platform}/${id}`);
            return response.data.results;
        }
    
        const createPlatform = async (platform: any) => {
            const response = await axios.post(endpoints.platform, platform);
            return response.data.results;
        }
    
        const updatePlatform = async (platform: any) => {
            const response = await axios.put(endpoints.platform, platform);
            return response.data.results;
        }
    
        const deletePlatform = async (id: number) => {
            const response = await axios.delete(`${endpoints.platform}/${id}`);
            return response.data.results;
        }
    
        return {
            getPlatforms,
            getPlatformById,
            createPlatform,
            updatePlatform,
            deletePlatform
        }
}
)();
export default platformService;