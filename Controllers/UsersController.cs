using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApiApp.Models;
using WebApiApp.ViewModels;

namespace WebApiApp.Controllers
{
    [Route("api/[controller]")]
    public class UsersController : Controller
    {
        DataContext db;
        public UsersController(DataContext context)
        {
            db = context;
        }

        [HttpGet]
        public IActionResult Get()
        {
            var mapper = new MapperConfiguration(cfg => cfg.CreateMap<User, IndexUser>()).CreateMapper();
            var users = mapper.Map<IEnumerable<User>, List<IndexUser>>(db.Users.ToList());

            return new ObjectResult(users);
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id, EditUser model)
        {
            var mapper = new MapperConfiguration(cfg => cfg.CreateMap<User, DetailUser>()
                .ForMember("Login", opt => opt.MapFrom(src => src.Email))
                .ForMember("UserRoles", opt => opt.MapFrom(src => src.getRolesIds()))).CreateMapper();
            var user = mapper.Map<User, DetailUser>(db.Users.Include(t => t.UserRoles).FirstOrDefault(x => x.Id == id));

            if (user == null)
            {
                ModelState.AddModelError("", "Пользователь не найден");
                return NotFound(ModelState);
            }

            return new ObjectResult(user);
        }

        [HttpPost]
        public IActionResult Post([FromBody]CreateUser model)
        {
            if (model == null || !ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            List<int> roles = model.UserRoles.ToList();
            model.UserRoles.Clear();

            var mapper = new MapperConfiguration(cfg => cfg.CreateMap<CreateUser, User>()
                .ForMember("Name", opt => opt.MapFrom(c => c.FirstName + " " + c.LastName))
                .ForMember("Email", opt => opt.MapFrom(src => src.Login))).CreateMapper();

            User user = mapper.Map<CreateUser, User>(model);
            db.Users.Add(user);
            db.SaveChanges();

            foreach (int role in roles)
            {
                user.UserRoles.Add(new UserRole { UserId = user.Id, RoleId = role });
            }

            db.SaveChanges();
            return Ok(user);
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody]EditUser model)
        {
            if (model == null || !ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            List<int> roles = model.UserRoles.ToList();
            model.UserRoles.Clear();

            var mapper = new MapperConfiguration(cfg => cfg.CreateMap<EditUser, User>()
                .ForMember("Email", opt => opt.MapFrom(src => src.Login))).CreateMapper();

            User user = mapper.Map<EditUser, User>(model);

            if (!db.Users.Any(x => x.Id == user.Id))
            {
                ModelState.AddModelError("", "Пользователь не найден");
                return NotFound(ModelState);
            }

            db.Update(user);
            db.SaveChanges();

            User temp = db.Users.Include(t => t.UserRoles).FirstOrDefault(u => u.Id == id);
            if (temp.UserRoles.Count > 0)
            {
                foreach (UserRole u in temp.UserRoles)
                {
                    db.Entry(u).State = EntityState.Deleted;
                }

                db.SaveChanges();
            }

            foreach (int role in roles)
            {
                user.UserRoles.Add(new UserRole { UserId = user.Id, RoleId = role });
            }

            db.SaveChanges();
            return Ok(user);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            User user = db.Users.FirstOrDefault(x => x.Id == id);
            if (user == null)
            {
                ModelState.AddModelError("", "Пользователь не найден");
                return NotFound(ModelState);
            }

            db.Users.Remove(user);
            db.SaveChanges();
            return Ok(user);
        }
    }
}