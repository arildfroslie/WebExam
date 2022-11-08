using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ElectricGamesApi.Models;

namespace ElectricGamesApi.Controllers;

[ApiController]
[Route("[controller]")]

public class GameController : ControllerBase

{
    private readonly ElectricGamesContext context;

    public GameController(ElectricGamesContext _context)
    {
        context = _context;
    }

    [HttpGet]
    public async Task<List<Game>> Get()
    {
        List<Game> games = await context.Games.ToListAsync();
        return games;
    }

    [HttpGet("{id}")] 
    public async Task<ActionResult<Game>> Get(int id)
    {
        Game? game = await context.Games.FindAsync(id);
        if (game == null)
        {
            return NotFound();
        }
        return game;
    }

    [HttpGet("{name}")] 
    public async Task<ActionResult<Game>> Get(string name)
    {
        Game? game = await context.Games.FindAsync(name);
        if (game == null)
        {
            return NotFound();
        }
        return game;
    }

    [HttpDelete ("{id}")]
    public async Task<ActionResult<Game>> Delete(int id)
    {
        Game? game = await context.Games.FindAsync(id);
        if (game == null)
        {
            return NotFound();
        }
        context.Games.Remove(game);
        await context.SaveChangesAsync();
        return game;
    }

    [HttpPost]
    public async Task<ActionResult<Game>> Post(Game game)
    {
        context.Games.Add(game);
        await context.SaveChangesAsync();
        return CreatedAtAction(nameof(Get), new { id = game.Id }, game);
    }

    [HttpPut("{id}")]
    public async Task<ActionResult<Game>> Put(int id, Game game)
    {
        if (id != game.Id)
        {
            return BadRequest();
        }
        context.Entry(game).State = EntityState.Modified;
        await context.SaveChangesAsync();
        return NoContent();
    }
}