using Microsoft.EntityFrameworkCore;
using ElectricGamesApi.Models;

public class ElectricGamesContext : DbContext
{
    public ElectricGamesContext(DbContextOptions<ElectricGamesContext> options) : base(options)
    {
    }

    public DbSet<Game> Games { get; set; }
    public DbSet<GameCharacter> GameCharacters { get; set; }
}