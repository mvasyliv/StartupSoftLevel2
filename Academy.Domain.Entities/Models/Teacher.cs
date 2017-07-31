using System.Collections.Generic;
using MongoDB.Bson;
using System.ComponentModel.DataAnnotations;

namespace Academy.Domain.Entities.Models
{
    /// <summary>
    /// Викладач (В)
    /// </summary>
    public class Teacher: Person
    {
        [Display(Name="Ідентифікатор викладача")]
        public ObjectId Id { get; set; }
        [Display(Name="Стаж роботи (к-сть років)")]
        public int Experienсe { get; set; }
        [Display(Name="Список предметів")]
        public List<string> Subject { get; set; }
    }
}
