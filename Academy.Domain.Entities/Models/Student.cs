using System.ComponentModel.DataAnnotations;
using MongoDB.Bson;

namespace Academy.Domain.Entities.Models
{
    /// <summary>
    /// Студент (С)
    /// </summary>
    public class Student: Person
    {
        [Display(Name="Ідентифікатор студента")]
        public ObjectId Id { get; set; }
        [Display(Name="№ заліковки")]
        public string NumberAccount { get; set; }
        [Display(Name="Курс")]
        public int Course { get; set; }
        [Display(Name="Середні оцінки за рік по предметах")]
        public decimal AverageRating { get; set; }
    }
}
