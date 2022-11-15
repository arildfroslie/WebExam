using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace electric_games_api.Migrations
{
    public partial class updateCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Developer",
                table: "Games");

            migrationBuilder.DropColumn(
                name: "Price",
                table: "Games");

            migrationBuilder.DropColumn(
                name: "ReleaseDate",
                table: "Games");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Developer",
                table: "Games",
                type: "TEXT",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<int>(
                name: "Price",
                table: "Games",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<string>(
                name: "ReleaseDate",
                table: "Games",
                type: "TEXT",
                nullable: false,
                defaultValue: "");
        }
    }
}
