using ElectricGamesApi.Interfaces;
using System.ComponentModel.DataAnnotations;

namespace ElectricGamesApi.Models;

public class GamePlatform : IGamePlatform
{
    [Key]
    public int Id { get; set; }
    public string Name { get; set; } = null!;
    public string Image { get; set; } = null!;
    public string Description { get; set; } = null!;
}