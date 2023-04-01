import React, { useState } from 'react';
import data from '../MovieData.json';

const MDS = data.MovieData;

// this function dynamically displays the list of movies in a dark formatted table
function Collection() {
  const [listOMovies, setListOMovies] = useState(MDS);
  return (
    <>
      <div>
        <h1>Joel Hilton's Movie Collection</h1>
      </div>
      <br></br>
      <br></br>
      <div>
        <table className="table table-striped table-dark table-hover">
          <thead>
            <tr>
              <th>Title</th>
              <th>Year</th>
              <th>Director</th>
              <th>Rating</th>
              <th>Category</th>
              <th>Edited</th>
            </tr>
          </thead>
          <tbody>
            {listOMovies.map((m) => (
              <tr>
                <td>{m.Title}</td>
                <td>{m.Year}</td>
                <td>{m.Director}</td>
                <td>{m.Rating}</td>
                <td>{m.Category}</td>
                <td>{m.Edited}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Collection;
