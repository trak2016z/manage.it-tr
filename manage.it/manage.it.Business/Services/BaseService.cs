using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using manage.it.Database;

namespace manage.it.Business.Services
{
    public abstract class BaseService
    {
        private ManageItContext _context;
        protected ManageItContext Context => _context ?? (_context = new ManageItContext());
    }
}
