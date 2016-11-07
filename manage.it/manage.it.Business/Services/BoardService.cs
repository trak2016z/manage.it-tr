using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using manage.it.Data.Models;

namespace manage.it.Business.Services
{
    public class BoardService : BaseService
    {
        public void CreateNewBoard(Board board, string userName)
        {
            var currentUserId = Context.Users.Single(x => x.UserName == userName).Id;

            Context.Boards.Add(board);
            Context.SaveChanges();

            var userBoard = new UserBoard()
            {
                BoardId = board.Id,
                UserId = currentUserId
            };

            Context.UserBoards.Add(userBoard);
            Context.SaveChanges();

            AddDefaultColumsToBoard(board.Id);
        }

        private void AddDefaultColumsToBoard(int boardId)
        {
            var columnToDo = new Column()
            {
                Name = "To do",
                BoardId = boardId,
                Sequence = 1
            };

            var columnInProgress = new Column()
            {
                Name = "In progress",
                BoardId = boardId,
                Sequence = 2
            };

            var columnDone = new Column()
            {
                Name = "Done",
                BoardId = boardId,
                Sequence = 3
            };

            var columnsList = new List<Column> {columnToDo, columnInProgress, columnDone};
            Context.Columns.AddRange(columnsList);
            Context.SaveChanges();
        }
    }
}
