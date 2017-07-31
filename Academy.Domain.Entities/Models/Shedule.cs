using System.ComponentModel.DataAnnotations;
using MongoDB.Bson;

namespace Academy.Domain.Entities.Models
{
    /// <summary>
    /// Розклад (Р)
    /// </summary>
    public class Shedule
    {
        [Display(Name ="Ідентифікатор розкладу")]
        public ObjectId Id { get; set; }
        
        [Display(Name ="Група")]
        public int GroupId { get; set; }
        public Group Group { get; set; }

        [Display(Name ="Викладач")]
        public int TeacherId { get; set; }
        public Teacher Teacher { get; set; }

        [Display(Name ="Предмет")]
        public int SubjectId { get; set; }
        public Subject Subject { get; set; }

        [Display(Name = "№ пари")]
        public int NumberCouple { get; set; }

        [Display(Name ="День тижня")]
        public DayWeek DayWeekShedule { get; set; }

        public enum DayWeek
            {
            Понеділок = 1,
            Вівторок = 2,
            Середа = 3,
            Четвер = 4,
            Пятниця = 5,
            Субота = 6,
            Неділя = 7
            }
    }
}
