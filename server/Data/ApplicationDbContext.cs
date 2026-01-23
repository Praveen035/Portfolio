using API.Models;
using Microsoft.EntityFrameworkCore;

namespace PortfolioAPI.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        public DbSet<Portfolio> Portfolios { get; set; }
        public DbSet<Skill> Skills { get; set; }
        public DbSet<Contact> Contacts { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // Seed initial data
            modelBuilder.Entity<Skill>().HasData(
                new Skill { Id = 1, Name = "Angular", Proficiency = 90, Category = "Frontend" },
                new Skill { Id = 2, Name = ".NET Core", Proficiency = 85, Category = "Backend" },
                new Skill { Id = 3, Name = "SQL Server", Proficiency = 80, Category = "Database" }
            );

            modelBuilder.Entity<Portfolio>().HasData(
                new Portfolio
                {
                    Id = 1,
                    Title = "E-Commerce Platform",
                    Description = "Full-stack e-commerce solution with payment integration",
                    ImageUrl = "https://via.placeholder.com/400x300",
                    ProjectUrl = "https://github.com/yourusername/ecommerce",
                    Technologies = "Angular, .NET Core, SQL Server",
                    CreatedDate = new DateTime(2024, 1, 1),
                    IsActive = true
                }
            );
        }
    }
}