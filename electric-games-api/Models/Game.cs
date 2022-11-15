using ElectricGamesApi.Interfaces;
using System.ComponentModel.DataAnnotations;

namespace ElectricGamesApi.Models;

public class Game : IGame
{
    [Key]
    public int Id { get; set; }
    public string Name { get; set; } = null!;
    public string Image { get; set; } = null!;
    public string Genre { get; set; } = null!;
    public string Platform { get; set; } = null!;
    public string Rating { get; set; } = null!;
}