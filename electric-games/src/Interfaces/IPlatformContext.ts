import IPlatform from "./IPlatform";


interface IPlatformContext {
    platforms: IPlatform[];
    deletePlatformById: (id: number) => void;
    addPlatform: (platform: IPlatform) => void;
    platformToEdit: IPlatform | null;
    setPlatformToEdit: (platform: IPlatform | null) => any;
}

export default IPlatformContext;