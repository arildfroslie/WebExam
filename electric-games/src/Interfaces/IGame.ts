interface IGame {
    id?: number;
    name: string;
    image?: File;
    platform: string;
    genre: string;
    rating: number;
}

export default IGame;