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
}