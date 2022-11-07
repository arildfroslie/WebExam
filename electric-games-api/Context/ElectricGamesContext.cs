using Microsoft.EntityFrameworkCore;
using ElectricGamesApi.Models;

#nullable disable

public class ElectricGamesContext : DbContext
{
    public ElectricGamesContext(DbContextOptions<ElectricGamesContext> options) : base(options){}

    public DbSet<Game> Games { get; set; }
    public DbSet<GameCharacter> GameCharacters { get; set; }
    public DbSet<GamePlatform> GamePlatforms { get; set; }
}