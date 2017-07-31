using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Academy.Domain.Entities.Infrastructure
{
    public interface IBaseEntity
    {
        string Id { get; set; }
    }
}
