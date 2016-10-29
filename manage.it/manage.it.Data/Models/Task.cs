using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace manage.it.Data.Models
{
    public class Task
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public int Sequence { get; set; }

        public string UserId { get; set; }
        public ApplicationUser User { get; set; }

        public int ColumnId { get; set; }
        public Column Column { get; set; }
    }
}