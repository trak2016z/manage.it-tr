using manage.it.Data.Models;
using Microsoft.EntityFrameworkCore;

namespace manage.it.Database
{
    public class ManageItContext : DbContext
    {
        public ManageItContext()
        { }

        public ManageItContext(DbContextOptions<ManageItContext> options)
            : base(options)
        { }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            var connection = @"Server=(localdb)\mssqllocaldb;Database=manage.it;Trusted_Connection=True;";
            optionsBuilder.UseSqlServer(connection);
        }

        public DbSet<Board> Boards { get; set; }
    }
}
