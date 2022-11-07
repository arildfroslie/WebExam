using ElectricGamesApi.Interfaces;

namespace ElectricGamesApi.Models;

public class GameCharacter : IGameCharacter
{
    public int Id { get; set; }
    public string Name { get; set; } = null!;
    public string Image { get; set; } = null!;

}