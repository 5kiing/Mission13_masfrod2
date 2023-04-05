import { useEffect, useState } from 'react';
import { Movie } from '../types/movies';

// this function dynamically displays the list of movies in a dark formatted table
function Collection() {
  const [movieData, setMovieData] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchMovie = async () => {
      const rsp = await fetch('https://localhost:4000/movie');
      const temp = await rsp.json();
      setMovieData(temp);
    };
    fetchMovie();
  }, []);

  return (
    <>
      <div>
        <br></br>
        <br></br>
        <h1>Joel Hilton's Movie Collection</h1>
      </div>

      <div>
        <table className="table table-striped table-dark table-hover">
          <thead>
            <tr>
              <th>MovieId</th>
              <th>Category</th>
              <th>Title</th>
              <th>Year</th>
              <th>Director</th>
              <th>Rating</th>
              <th>Edited</th>
              <th>LentTo</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            {/* Made connection with database using the movies.ts file and dynamically loaded data */}
            {movieData.map((m) => (
              <tr key={m.movieId}>
                <td>{m.movieId}</td>
                <td>{m.category}</td>
                <td>{m.title}</td>
                <td>{m.year}</td>
                <td>{m.director}</td>
                <td>{m.rating}</td>
                <td>{m.edited}</td>
                <td>{m.lentTo}</td>
                <td>{m.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Collection;
