using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using manage.it.Data.Models;

namespace manage.it.Business.Services
{
    public class BoardService : BaseService
    {
        public void CreateNewBoard(string boardName)
        {
            Context.Boards.Add(new Board()
            {
                Name = boardName
            });

            Context.SaveChanges();
        }
    }
}
