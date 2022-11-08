using Microsoft.AspNetCore.Mvc;
namespace ElectricGamesApi.Controllers;

[ApiController]
[Route("[controller]")]

public class UploadImageController : ControllerBase
{
    private readonly IWebHostEnvironment hosting;
    public UploadImageController(IWebHostEnvironment _hosting)
    {
        hosting = _hosting;
    }

    [HttpGet]
    public string Get()
    {
        return "Hello World";
    }

    [HttpPost]
    public IActionResult SaveImage(IFormFile)
    {
        string wwwRootPath = hosting.WebRootPath;
        string absolutePath = Path.Combine($"{wwwRootPath}/Images/{file.FileName}");

        using(var fileStream = new FileStream(absolutePath, FileMode.Create))
        {
            file.CopyTo(fileStream);
        }
        return Ok();
    }

}