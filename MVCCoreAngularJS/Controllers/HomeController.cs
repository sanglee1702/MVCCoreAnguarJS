using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MVCCoreAngularJS.Models;

namespace MVCCoreAngularJS.Controllers
{
    public class HomeController : Controller
    {
        [Route("/", Name = "login")]
        public IActionResult Login()
        {
            return View();
        }
    }
}
