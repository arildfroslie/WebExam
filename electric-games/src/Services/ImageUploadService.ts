import axios from "axios";

const ImageUploadService = (
    () => {
        const endpoints = "https://localhost:7119/ImageUpload";

        const uploadImage = async (image: File) => {
            
            const formData = new FormData();
            formData.append("image", image);
            
            const response = await axios({
                url: endpoints,
                method: "POST",
                data: formData,
                headers: { "Content-Type": "multipart/form-data" }
            });

            formData.delete("image");
            console.log(response);
    }

    return{
        uploadImage
    }
}
)();

export default ImageUploadService;