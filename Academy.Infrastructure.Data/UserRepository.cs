using Academy.Domain.Entities.Models;
using Academy.Domain.Interfaces;
using Academy.Domain.Interfaces.Infrastructure;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Academy.Domain.Entities.Infrastructure;
using Academy.Domain.Entities.ViewModels;
using MongoDB.Driver;
using Microsoft.AspNet.Identity;
using Academy.Domain.Entities.Enums;

namespace Academy.Infrastructure.Data
{
    public class UserRepository : GenericRepository<ApplicationUser>, IUserRepository
    {
        private readonly ProjectionDefinition<ApplicationUser, ShortUser> ShortUserProjection = Builders<ApplicationUser>.Projection.Expression(x => new ShortUser()
        {
            Id = x.Id,
            Email = x.Email,
            FullName = x.FullName,
            Image = x.Image,
            PhoneNumber = x.PhoneNumber,
            Roles = x.Roles
        });

        public async Task<ShortUser> GetCurrentUser(string userId)
        {
            return await base.FindOneAsync(userId, ShortUserProjection);
        }


    }
}
