using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WebApiApp.Models
{
    public class Role
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "Укажите имя роли")]
        public string Name { get; set; }

        public List<UserRole> UserRoles { get; set; }

        public Role()
        {
            UserRoles = new List<UserRole>();
        }
    }
}
