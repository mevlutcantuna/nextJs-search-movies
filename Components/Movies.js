import { useSelector } from "react-redux";

function Movies(props) {
  const movies = useSelector((state) =>
    state.SearchReducer.search
  );
  console.log(movies);

  return (
    <div>
          <div style={{display:'flex',flexDirection:'column'}}>
              {movies.map((item) => (
                  <div>{item.Title}</div>
              ))}
          </div>
    </div>
  );
}

export default Movies;
