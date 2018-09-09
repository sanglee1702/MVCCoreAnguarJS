using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace MVCCoreAngularJS.Controllers
{
    public class ProductController : Controller
    {
        [Route("/product", Name = "product")]
        public IActionResult Index()
        {
            return View();
        }
    }
}