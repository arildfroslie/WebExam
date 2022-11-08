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

    [HttpDelete ("{id}")]
    public async Task<ActionResult<GamePlatform>> Delete(int id)
    {
        GamePlatform? gamePlatform = await context.GamePlatforms.FindAsync(id);
        if (gamePlatform == null)
        {
            return NotFound();
        }
        context.GamePlatforms.Remove(gamePlatform);
        await context.SaveChangesAsync();
        return gamePlatform;
    }

    [HttpPost]
    public async Task<ActionResult<GamePlatform>> Post(GamePlatform gamePlatform)
    {
        context.GamePlatforms.Add(gamePlatform);
        await context.SaveChangesAsync();
        return CreatedAtAction(nameof(Get), new { id = gamePlatform.Id }, gamePlatform);
    }

    [HttpPut("{id}")]
    public async Task<ActionResult<GamePlatform>> Put(int id, GamePlatform gamePlatform)
    {
        if (id != gamePlatform.Id)
        {
            return BadRequest();
        }
        context.Entry(gamePlatform).State = EntityState.Modified;
        await context.SaveChangesAsync();
        return NoContent();
    }   
    

}