using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ElectricGamesApi.Models;

namespace ElectricGamesApi.Controllers;

[ApiController]
[Route("[controller]")]

public class GameCharacterController : ControllerBase

{
    private readonly ElectricGamesContext context;

    public GameCharacterController(ElectricGamesContext _context)
    {
        context = _context;
    }

    [HttpGet]
    public async Task<List<GameCharacter>> Get()
    {
        List<GameCharacter> gameCharacters = await context.GameCharacters.ToListAsync();
        return gameCharacters;
    }

    [HttpGet("{id}")] 
    public async Task<ActionResult<GameCharacter>> Get(int id)
    {
        GameCharacter? gameCharacter = await context.GameCharacters.FindAsync(id);
        if (gameCharacter == null)
        {
            return NotFound();
        }
        return gameCharacter;
    }
    
    [HttpGet("{name}")] 
    public async Task<ActionResult<GameCharacter>> Get(string name)
    {
        GameCharacter? gameCharacter = await context.GameCharacters.FindAsync(name);
        if (gameCharacter == null)
        {
            return NotFound();
        }
        return gameCharacter;
    }


    [HttpDelete ("{id}")]
    public async Task<ActionResult<GameCharacter>> Delete(int id)
    {
        GameCharacter? gameCharacter = await context.GameCharacters.FindAsync(id);
        if (gameCharacter == null)
        {
            return NotFound();
        }
        context.GameCharacters.Remove(gameCharacter);
        await context.SaveChangesAsync();
        return gameCharacter;
    }

    [HttpPost]
    public async Task<ActionResult<GameCharacter>> Post(GameCharacter gameCharacter)
    {
        context.GameCharacters.Add(gameCharacter);
        await context.SaveChangesAsync();
        return CreatedAtAction(nameof(Get), new { id = gameCharacter.Id }, gameCharacter);
    }

    [HttpPut("{id}")]
    public async Task<ActionResult<GameCharacter>> Put(int id, GameCharacter gameCharacter)
    {
        if (id != gameCharacter.Id)
        {
            return BadRequest();
        }
        context.Entry(gameCharacter).State = EntityState.Modified;
        await context.SaveChangesAsync();
        return NoContent();
    }

}