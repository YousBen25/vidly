import React from "react";

function MovieTable({ movies }) {
  return (
    <table>
      <colgroup span="4" className="columns"></colgroup>
      <tr>
        <th>Title</th>
        <th>Genre</th>
        <th>Stock</th>
        <th>Rate</th>
      </tr>
      {movies.map(movie => {
        return  (<tr key={movie._id}>
                    <td>{movie.title}</td>
                    <td>{movie.genre.name}</td>
                    <td>{movie.numberInStock}</td>
                    <td>{movie.dailyRentalRate}</td>
                    <td><button className="btn btn-danger">Delete</button></td>
                </tr>);
      })}
    </table>
  );
}

export default MovieTable;
