using Academy.Domain.Entities.Models;
using Academy.Domain.Interfaces.Infrastructure;
using System.Threading.Tasks;
using Academy.Domain.Entities.Infrastructure;
using Academy.Domain.Entities.ViewModels;
using Academy.Domain.Entities.Enums;

namespace Academy.Domain.Interfaces
{
    public interface IUserRepository : IRepository<ApplicationUser>
    {
        Task<ShortUser> GetCurrentUser(string userId);
    }
}
