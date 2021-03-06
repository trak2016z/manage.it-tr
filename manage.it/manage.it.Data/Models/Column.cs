﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace manage.it.Data.Models
{
    public class Column
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public int Sequence { get; set; }

        public List<Task> Tasks { get; set; }

        public int BoardId { get; set; }
        public Board Board { get; set; }
    }
}
