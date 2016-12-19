using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace manage.it.Data.ViewModels
{
    public class NewTaskViewModel
    {
        public string Name { get; set; }

        public string Description { get; set; }

        public int ProjectId { get; set; }
    }
}
