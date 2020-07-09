using System;
using System.Collections.Generic;
using System.Linq;
using DatingApp.API.Models;
using Newtonsoft.Json;

namespace DatingApp.API.Data
{
    public class Seed
    {
        public static void SeedUsers(DataContext context){
            Console.WriteLine("Calling SeedUsers...");
            if(!context.Users.Any()){
                var userData = System.IO.File.ReadAllText("Data/UserSeedData.json");
                var users = JsonConvert.DeserializeObject<List<User>>(userData);
                Console.WriteLine("Hallo there");
                foreach (var user in users){
                    byte[] passwordHash, passwordSalt;
                    CreatePasswordHash("password", out passwordHash, out passwordSalt);

                    user.PasswordHash = passwordHash;
                    user.PasswordSalt = passwordSalt;
                    user.Username = user.Username.ToLower();
                    context.Users.Add(user);
                    Console.WriteLine("IN FOREACH");
                }

                context.SaveChanges();
            }
        }

        // copied from AuthRepository
        private static void CreatePasswordHash(string password, out byte[] passwordHash, out byte[] passwordSalt)
        {
            // creates randomly generated key which can be used as password salt
            using (var hmac = new System.Security.Cryptography.HMACSHA512()) {
                //changes vals in "register" method thanks to pass by reference
                passwordSalt = hmac.Key;
                passwordHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
            }
            
        }
    }
}