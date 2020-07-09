using System.Collections.Generic;
using System.Threading.Tasks;
using DatingApp.API.Models;

namespace DatingApp.API.Data
{
    public interface IDatingRepository
    {
        // generics used to handle both Photos and Users types with one method
         void Add<T>(T entity) where T: class;
         void Delete<T>(T entity) where T: class;
         // boolean Task return for if zero or more than zero changes made
         Task<bool> SaveAll();
         Task<IEnumerable<User>> GetUsers();
         Task<User> GetUser(int id);
    }
}