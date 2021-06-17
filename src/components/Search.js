import React, { useState } from "react";
import { Navbar } from "react-bootstrap";
import useMovieSearch from "../helpers/useMovieSearch";
import VerHome from "../pages/VerHome";

const Search = () => {
  const [query, setQuery] = useState("cruela");
  const [page, setPage] = useState(1);

  const handleSearch = (e) => {
    console.log(e.target.value);
    // setQuery(e.target.value);
    // setPage(1);
  };

  const { isLoading, error, list, hasMore } = useMovieSearch(query, page);
  const [targetId, setTargetId] = useState("");

  const handleClic = (e) => {
    console.log(e.target.id);
    let content = list.find((dato) => dato.id == e.target.id);
    console.log(content);
    setTargetId(content);
  };
  return (
    <div>
    {/*   <VerHome
        handleClic={handleClic}
        targetId={targetId}
        isLoading={isLoading}
        list={list}
      /> */}
      <div>{isLoading && 'Cargando...'}</div>
      <div>{error && '404...'}</div>
    </div>
  );
};

export default Search;
