using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApiApp.Models;

namespace WebApiApp.Controllers
{
    [Route("api/[controller]")]
    public class RolesController : Controller
    {
        DataContext db;
        public RolesController(DataContext context)
        {
            db = context;
        }

        [HttpGet]
        public IEnumerable<Role> Get()
        {
            return db.Roles.ToList();
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            Role role = db.Roles.FirstOrDefault(x => x.Id == id);

            if (role == null)
            {
                ModelState.AddModelError("", "Роль не найдена");
                return NotFound(ModelState);
            }

            return new ObjectResult(role);
        }

        [HttpPost]
        public IActionResult Post([FromBody]Role role)
        {
            if (role == null || !ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Roles.Add(role);
            db.SaveChanges();
            return Ok(role);
        }

        [HttpPut]
        public IActionResult Put([FromBody]Role role)
        {
            if (role == null || !ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (!db.Roles.Any(x => x.Id == role.Id))
            {
                ModelState.AddModelError("", "Роль не найдена");
                return NotFound(ModelState);
            }

            db.Update(role);
            db.SaveChanges();
            return Ok(role);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            Role role = db.Roles.FirstOrDefault(x => x.Id == id);
            if (role == null)
            {
                ModelState.AddModelError("", "Роль не найдена");
                return NotFound(ModelState);
            }

            db.Roles.Remove(role);
            db.SaveChanges();
            return Ok(role);
        }
    }
}
