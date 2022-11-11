namespace ElectricGamesApi.Interfaces;

    public interface ICharacter 
    {
        int Id { get; set; }
        string Name { get; set; }
        string Image { get; set; }
        string Game {get; set;}
        string Description { get; set; }
    }