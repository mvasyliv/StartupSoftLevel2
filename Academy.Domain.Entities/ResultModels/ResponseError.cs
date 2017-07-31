using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Academy.Domain.Entities.Enums;

namespace Academy.Domain.Entities.ResultModels
{
    public class ResponseError
    {
        public string Message { get; set; }
        public ServerError StatusCode { get; set; }
    }
}
