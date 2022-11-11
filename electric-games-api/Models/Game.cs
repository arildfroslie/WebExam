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
    public string Developer { get; set; } = null!;
    public string ReleaseDate { get; set; } = null!;
    public int Price { get; set; }
    public string Rating { get; set; } = null!;
}