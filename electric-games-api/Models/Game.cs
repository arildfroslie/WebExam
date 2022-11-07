using ElectricGamesApi.Interfaces;

namespace ElectricGamesApi.Models;

public class Game : IGame
{
    public int Id { get; set; }
    public string Name { get; set; } = null!;
    public string Image { get; set; } = null!;
    public string Genre { get; set; } = null!;
    public string Developer { get; set; } = null!;
    public string ReleaseDate { get; set; } = null!;
    public string Price { get; set; } = null!;
    public string Rating { get; set; } = null!;
}