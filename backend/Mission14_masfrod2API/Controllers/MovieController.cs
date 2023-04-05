using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Mission14_masfrod2API.Models;

namespace Mission14_masfrod2API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MovieController : Controller
    {
        private Models.JoelHiltonMovieCollectionContext context;
        public MovieController(JoelHiltonMovieCollectionContext temp)
        {
            context = temp;
        }

        // this created my connection with the database and filtered the data to be displayed
        public IEnumerable<Movie> Get()
        {
            return context.Movies
                .ToArray()
                .Where(m => m.Edited == "Yes")
                .OrderBy(m => m.Title);
        }
    }
}

