using MongoDB.Bson;
using System.ComponentModel.DataAnnotations;

namespace Academy.Domain.Entities.Models
{
    /// <summary>
    /// Предмет (П)
    /// </summary>
    public class Subject
    {
        [Display(Name="Ідентифікатор предмета")]
        public ObjectId Id { get; set; }
        [Display(Name="Назва предмета")]
        public string Name { get; set; }
    }
}
