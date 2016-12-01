using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using manage.it.Data.Models;
using Microsoft.EntityFrameworkCore;

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

        public IEnumerable<Board> GetProjectForUser(string identityName)
        {
            var userId = Context.Users.SingleOrDefault(x => x.UserName == identityName).Id;
            var userBoardsIds = Context.UserBoards.Where(x => x.UserId == userId).Select(x => x.BoardId).ToList();
            var userBoards = Context.Boards.Where(x => userBoardsIds.Contains(x.Id)).ToList();

            return userBoards;
        }

        public bool HasUserAccessToProject(string identityName, int projectId)
        {
            var userId = Context.Users.SingleOrDefault(x => x.UserName == identityName).Id;
            var project = Context.UserBoards.SingleOrDefault(x => x.UserId == userId && x.BoardId == projectId);

            return project != null;
        }

        public Board GetProject(int projectId)
        {
            var project = Context.Boards.Where(x => x.Id == projectId)
                .Include(x => x.Columns)
                .ThenInclude(x => x.Tasks)
                .Single();

            return project;
        }

        #region private methods

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

            var columnsList = new List<Column> { columnToDo, columnInProgress, columnDone };
            Context.Columns.AddRange(columnsList);
            Context.SaveChanges();
        }

        #endregion
    }
}
