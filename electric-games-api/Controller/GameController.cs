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
}