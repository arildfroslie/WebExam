import axios from "axios";

const platformService = (
    () => {
        const endpoints = {
            "Platforms": "https://localhost:7119/Platform",
            "Platform": "https://localhost:7119/Platform/{id}",
        }
        
        const getPlatforms = async () => {
            const response = await axios.get(endpoints.Platforms);
            return response.data;
        }
    
        return {
            getPlatforms,
        }
}
)();
export default platformService;