namespace ElectricGamesApi.Interfaces;
    public interface IGame
    {
        int Id { get; set; }
        string Name { get; set; }
        string Image { get; set; }
        string Genre { get; set; }
        string ReleaseDate { get; set; }
        string Price { get; set; }
        string Rating { get; set; }
    }