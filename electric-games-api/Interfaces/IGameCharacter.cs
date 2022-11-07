namespace ElectricGamesApi.Interfaces;

    public interface IGameCharacter 
    {
        int Id { get; set; }
        string Name { get; set; }
        string Image { get; set; }
        string Game {get; set;}
        string Description { get; set; }
    }