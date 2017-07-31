using System;
using MongoDB.Bson;
using System.ComponentModel.DataAnnotations;

namespace Academy.Domain.Entities.Models
{
    /// <summary>
    /// Базовий клас Персона(П)
    /// </summary>
    public class Person
    {
        [Display(Name="Ім'я")]
        public string Name { get; set; }
        [Display(Name="Прізвище")]
        public string FirstName { get; set; }
        [Display(Name="День народження")]
        public DateTime BirthDate { get; set; }
        [Display(Name="Стать")]
        public Sex SexPerson {get; set; }    

        public enum Sex
        {
            man = 1,
            woman = 2
        }
    }
}
