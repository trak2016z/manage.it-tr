using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using manage.it.Business.Services;
using manage.it.Data.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace manage.it.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    public class BoardController : BaseController
    {
        private readonly BoardService _boardService;

        public BoardController()
        {
            _boardService = new BoardService();
        }

        [HttpPost("[action]")]
        [ValidateAntiForgeryToken]
        public IActionResult CreateNewBoard([FromBody]Board board)
        {
            _boardService.CreateNewBoard(board, User.Identity.Name);
            return Ok();
        }

        [HttpGet("[action]")]
        public IActionResult GetProjectsForUser()
        {
            var projects = _boardService.GetProjectForUser(User.Identity.Name);
            return Ok(projects);
        }

        [HttpGet("[action]/{projectId}")]
        public IActionResult GetProject(int projectId)
        {
            var hasUserAccessToProject = _boardService.HasUserAccessToProject(User.Identity.Name, projectId);

            if (!hasUserAccessToProject)
            {
                return Unauthorized();
            }

            var project = _boardService.GetProject(projectId);

            return Ok(project);
        }
    }
}
