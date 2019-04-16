using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace WebApiApp.Controllers
{
    public class HomeController : Controller
    {
        IHostingEnvironment env;
        public HomeController(IHostingEnvironment env)
        {
            this.env = env;
        }

        public IActionResult Index()
        {
            return new PhysicalFileResult(Path.Combine(env.WebRootPath, "index.html"), "text/html");
        }
    }
}
