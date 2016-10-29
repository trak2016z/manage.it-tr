using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace manage.it.Data.Models
{
    public class Board
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public List<Column> Columns { get; set; }

        public List<UserBoard> UserBoards { get; set; }
    }
}