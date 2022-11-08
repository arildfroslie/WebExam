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

    [HttpGet("{id}")] 
    public async Task<ActionResult<GamePlatform>> Get(int id)
    {
        GamePlatform? gamePlatform = await context.GamePlatforms.FindAsync(id);
        if (gamePlatform == null)
        {
            return NotFound();
        }
        return gamePlatform;
    }

    [HttpGet("{name}")] 
    public async Task<ActionResult<GamePlatform>> Get(string name)
    {
        GamePlatform? gamePlatform = await context.GamePlatforms.FindAsync(name);
        if (gamePlatform == null)
        {
            return NotFound();
        }
        return gamePlatform;
    }
}