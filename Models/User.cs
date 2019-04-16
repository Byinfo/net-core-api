using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WebApiApp.Models
{
    public class User
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "Укажите имя пользователя")]
        public string Name { get; set; }

        [Range(1, 100, ErrorMessage = "Возраст должен быть в промежутке от 1 до 100")]
        [Required(ErrorMessage = "Укажите возраст пользователя")]
        public int Age { get; set; }

        [Required(ErrorMessage = "Укажите email пользователя")]
        [DataType(DataType.EmailAddress)]
        [EmailAddress]
        public string Email { get; set; }

        public List<UserRole> UserRoles { get; set; }

        public User()
        {
            UserRoles = new List<UserRole>();
        }

        public List<int> getRolesIds()
        {
            List<int> ids = new List<int>();

            foreach(var elem in UserRoles)
            {
                ids.Add(elem.RoleId);
            }

            return ids;
        }
    }
}
