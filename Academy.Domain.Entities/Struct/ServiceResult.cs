using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Academy.Domain.Entities.Struct
{
    public struct ServiceResult<T> where T : class
    {
        public string Name { get; set; }
        public bool Success { get; set; }
        public string Error { get; set; }
        public string Message { get; set; }

        public T Result { get; set; }
    }
}
