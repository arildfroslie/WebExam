using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ElectricGamesApi.Models;
using ElectricGamesApi.Context;

namespace ElectricGamesApi.Controllers;

[ApiController]
[Route("[controller]")]

public class CharacterController : ControllerBase

{
    private readonly ElectricGamesContext context;

    public CharacterController(ElectricGamesContext _context)
    {
        context = _context;
    }

    [HttpGet]
    public async Task<List<Character>> Get()
    {
        List<Character> Characters = await context.Characters.ToListAsync();
        return Characters;
    }

    [HttpGet("{id}")] 
    public async Task<ActionResult<Character>> Get(int id)
    {
        Character? Character = await context.Characters.FindAsync(id);
        if (Character == null)
        {
            return NotFound();
        }
        return Character;
    }
    
    [HttpGet("{name}")] 
    public async Task<ActionResult<Character>> Get(string name)
    {
        Character? Character = await context.Characters.FindAsync(name);
        if (Character == null)
        {
            return NotFound();
        }
        return Character;
    }


    [HttpDelete ("{id}")]
    public async Task<ActionResult<Character>> Delete(int id)
    {
        Character? Character = await context.Characters.FindAsync(id);
        if (Character == null)
        {
            return NotFound();
        }
        context.Characters.Remove(Character);
        await context.SaveChangesAsync();
        return Character;
    }

    [HttpPost]
    public async Task<ActionResult<Character>> Post(Character Character)
    {
        context.Characters.Add(Character);
        await context.SaveChangesAsync();
        return CreatedAtAction(nameof(Get), new { id = Character.Id }, Character);
    }

    [HttpPut("{id}")]
    public async Task<ActionResult<Character>> Put(int id, Character Character)
    {
        if (id != Character.Id)
        {
            return BadRequest();
        }
        context.Entry(Character).State = EntityState.Modified;
        await context.SaveChangesAsync();
        return NoContent();
    }

}