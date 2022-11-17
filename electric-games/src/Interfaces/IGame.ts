interface IGame {
    id: number;
    name: string;
    image: File | string;
    platform: string;
    genre: string;
    rating: number;
}

export default IGame;