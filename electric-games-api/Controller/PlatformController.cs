using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ElectricGamesApi.Models;
using ElectricGamesApi.Context;

namespace ElectricGamesApi.Controllers;

[ApiController]
[Route("[controller]")]
public class PlatformController : ControllerBase

{
    private readonly ElectricGamesContext context;

    public PlatformController(ElectricGamesContext _context)
    {
        context = _context;
    }

    [HttpGet]
    public async Task<List<Platform>> Get()
    {
        List<Platform> Platforms = await context.Platforms.ToListAsync();
        return Platforms;
    }

    [HttpGet("{id}")] 
    public async Task<ActionResult<Platform>> Get(int id)
    {
        Platform? Platform = await context.Platforms.FindAsync(id);
        if (Platform == null)
        {
            return NotFound();
        }
        return Platform;
    }

    [HttpDelete ("{id}")]
    public async Task<ActionResult<Platform>> Delete(int id)
    {
        Platform? Platform = await context.Platforms.FindAsync(id);
        if (Platform == null)
        {
            return NotFound();
        }
        context.Platforms.Remove(Platform);
        await context.SaveChangesAsync();
        return Platform;
    }

    [HttpPost]
    public async Task<ActionResult<Platform>> Post(Platform Platform)
    {
        context.Platforms.Add(Platform);
        await context.SaveChangesAsync();
        return CreatedAtAction(nameof(Get), new { id = Platform.Id }, Platform);
    }

    [HttpPut("{id}")]
    public async Task<ActionResult<Platform>> Put(int id, Platform Platform)
    {
        if (id != Platform.Id)
        {
            return BadRequest();
        }
        context.Entry(Platform).State = EntityState.Modified;
        await context.SaveChangesAsync();
        return NoContent();
    }   
    

}