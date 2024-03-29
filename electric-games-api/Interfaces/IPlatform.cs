namespace ElectricGamesApi.Interfaces
{
    public interface IPlatform
    {
        int Id { get; set; }
        string Name { get; set; }
        string Image { get; set; }
        string Description { get; set; }
    }
}