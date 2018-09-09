using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace MVCCoreAngularJS.Controllers
{
    public class UserController : Controller
    {
        [Route("/user", Name = "user")]
        public IActionResult Index()
        {
            return View();
        }
    }
}