using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ElectricGamesApi.Models;
using ElectricGamesApi.Context;

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
    public async Task<ActionResult<List<Game>>> Get()
    {
        try
        {
            List<Game> games = await context.Games.ToListAsync();
            return Ok(games);
        }
        catch
        {
            return StatusCode(500);
        }
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Game>> Get(int id)
    {
        try
        {
            Game? game = await context.Games.FindAsync(id);
            if (game == null)
            {
                return NotFound();
            }
            return Ok(game);
        }
        catch
        {
            return StatusCode(500);
        }
    }
    
    [HttpPost]
    public IActionResult Post(Game newGame)
    {
        try
        {
            context.Games.Add(newGame);
            context.SaveChanges();
            return CreatedAtAction("Get", new { id = newGame.Id }, newGame);
        }
        catch
        {
            return StatusCode(500);
        }
    }

    [HttpPut("{id}")]
    public IActionResult Put(Game editedGame)
    {
        try
        {
            context.Entry(editedGame).State = EntityState.Modified;
            context.SaveChanges();
            return NoContent();
        }
        catch
        {
            return StatusCode(500);
        }
    }

    [HttpDelete("{id}")]
    public IActionResult Delete(int id)
    {
        try
        {
            Game? gameToDelete = context.Games.Find(id);
            if (gameToDelete != null)
            {
                context.Games.Remove(gameToDelete);
                context.SaveChanges();
                return NoContent();
            }
            else
            {
                return NotFound();
            }
        }
        catch
        {
            return StatusCode(500);
        }
    }
}