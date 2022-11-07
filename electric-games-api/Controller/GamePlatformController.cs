using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ElectricGamesApi.Models;

namespace ElectricGamesApi.Controllers;

[ApiController]
[Route("[controller]")]
public class GamePlatformController : ControllerBase

{
    private readonly ElectricGamesContext context;

    public GamePlatformController(ElectricGamesContext _context)
    {
        context = _context;
    }

    [HttpGet]
    public async Task<List<GamePlatform>> Get()
    {
        List<GamePlatform> gamePlatforms = await context.GamePlatforms.ToListAsync();
        return gamePlatforms;
    }
}