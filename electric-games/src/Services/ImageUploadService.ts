import axios from "axios";

const ImageUploadService = (
    () => {
        const imageUploadEndpoints = "https://localhost:7119/uploadimage";

        const uploadImage = async (image: File) => {
            
            const formData = new FormData();

            formData.append("file", image);
            
            const response = await axios({
                url: imageUploadEndpoints,
                method: "POST",
                data: formData,
                headers: { "Content-Type": "multipart/form-data" }
            });

            formData.delete("image");
            
    }

    return{
        uploadImage

    }
}
)();

export default ImageUploadService;