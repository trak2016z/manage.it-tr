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
            builder.Entity<UserBoard>().HasKey(x => new { x.UserId, x.BoardId });

            base.OnModelCreating(builder);
            // Customize the ASP.NET Identity model and override the defaults if needed.
            // For example, you can rename the ASP.NET Identity table names and more.
            // Add your customizations after calling base.OnModelCreating(builder);
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            //the same connection string exists in Startup class - G.Niemiec
            var connection = @"Server=tcp:manage-it.database.windows.net,1433;Initial Catalog=manage-it;Persist Security Info=False;User ID=developer;Password=1qaz@WSX;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;";
            optionsBuilder.UseSqlServer(connection);
        }

        public DbSet<Board> Boards { get; set; }
        public DbSet<Column> Columns { get; set; }
        public DbSet<Task> Tasks { get; set; }
        public DbSet<UserBoard> UserBoards { get; set; }
    }
}
