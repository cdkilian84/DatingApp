using DatingApp.API.Models;
using Microsoft.EntityFrameworkCore;

namespace DatingApp.API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {}
        //Note that table name is based on property name - IE "Values" property will result in "Values" table
        public DbSet<Value> Values { get; set; }
    }
}