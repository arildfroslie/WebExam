using Microsoft.EntityFrameworkCore;
using ElectricGamesApi.Models;

#nullable disable

namespace ElectricGamesApi.Context;

public class ElectricGamesContext : DbContext
{
    public ElectricGamesContext(DbContextOptions<ElectricGamesContext> options) : base(options){}

    public DbSet<Game> Games { get; set; }
    public DbSet<Character> Characters { get; set; }
    public DbSet<Platform> Platforms { get; set; }
}