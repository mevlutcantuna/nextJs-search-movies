import {connect, useDispatch, useSelector} from "react-redux";
import {GETSEARCHMOVIES, HANDLECHANGE} from "../Store/SearchConstant";
import {getSearchData} from "../Store/SearchAction";

function SearchBar(props) {
  const name = useSelector((state) => state.SearchReducer.name);
  const year = useSelector((state) => state.SearchReducer.year);
  const type = useSelector((state) => state.SearchReducer.type);

  const dispatch = useDispatch();

  const handleClick = () => {
      props.getSearchData(name,year,type)
  };

  return (
    <div>
      <input
        onChange={(e) =>
          dispatch({ type: HANDLECHANGE.HANDLE_NAME, payload: e.target.value })
        }
        value={name}
        type={"text"}
        placeholder={"name"}
      />
      <input
        onChange={(e) =>
          dispatch({ type: HANDLECHANGE.HANDLE_YEAR, payload: e.target.value })
        }
        value={year}
        type={"number"}
        placeholder={"year"}
      />
      <select onChange={(e) => dispatch({type:HANDLECHANGE.HANDLE_TYPE,payload:e.target.value})} value={type}>
        <option>Movies</option>
        <option>Series</option>
      </select>
      <button onClick={handleClick}>Search</button>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
    console.log(dispatch);
    return{
        getSearchData : (name,year,type) => dispatch(getSearchData(name,year,type))
    }
}

export default connect(null,mapDispatchToProps)(SearchBar);
