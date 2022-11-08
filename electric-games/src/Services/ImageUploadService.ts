import axios from "axios";

const ImageUploadService = (
    () => {
        const endpoints = "https://localhost:7119/ImageUpload";

        const uploadImage = async (image: File) => {
            const formData = new FormData();
            formData.append("image", image);
            const response = await axios({
                method: "post",
                url: endpoints,
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