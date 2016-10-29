using manage.it.Data.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace manage.it.Database
{
    public class ManageItContext : IdentityDbContext<ApplicationUser>
    {
        public ManageItContext()
        {            
        }

        public ManageItContext(DbContextOptions<ManageItContext> options)
            : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
            // Customize the ASP.NET Identity model and override the defaults if needed.
            // For example, you can rename the ASP.NET Identity table names and more.
            // Add your customizations after calling base.OnModelCreating(builder);
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            //the same connection string exists in Startup class - G.Niemiec
            var connection = @"Server=(localdb)\mssqllocaldb;Database=manage.it;Trusted_Connection=True;";
            optionsBuilder.UseSqlServer(connection);
        }

        public DbSet<Board> Boards { get; set; }
    }
}
