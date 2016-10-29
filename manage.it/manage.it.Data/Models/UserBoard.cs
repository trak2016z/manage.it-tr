using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace manage.it.Data.Models
{
    public class UserBoard
    {
        public string UserId { get; set; }
        public ApplicationUser User { get; set; }

        public int BoardId { get; set; }
        public Board Board { get; set; }
    }
}