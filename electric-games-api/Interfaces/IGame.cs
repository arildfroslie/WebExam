namespace ElectricGamesApi.Interfaces;
    public interface IGame
    {
        int Id { get; set; }
        string Name { get; set; }
        string Image { get; set; }
        string Platform {get; set;}
        string Genre { get; set; }
        int Rating { get; set; }
    }