using System.ComponentModel.DataAnnotations;
using MongoDB.Bson;

namespace Academy.Domain.Entities.Models
{
    /// <summary>
    /// Група (Г)
    /// </summary>
    public class Group
    {
        [Display(Name="Ідентифікатор групи")]
        public ObjectId Id { get; set; }
        [Display(Name="Назва групи")]
        public string Name { get; set; }
        [Display(Name="Куратор")]
        public int TeacherId { get; set; }
        public Teacher Teacher { get; set; }
    }
}
