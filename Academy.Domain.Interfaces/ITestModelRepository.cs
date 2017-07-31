using Academy.Domain.Entities.Models;
using Academy.Domain.Interfaces.Infrastructure;
using System.Threading.Tasks;

namespace Academy.Domain.Interfaces
{
    public interface ITestModelRepository : IRepository<TestModel>
    {
        Task<TestModel> Test();
    }
}
