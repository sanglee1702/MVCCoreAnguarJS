using System;
using System.Collections.Generic;

namespace MVCCoreAngularJS.Models
{
    public partial class Product
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int? Price { get; set; }
    }
}
