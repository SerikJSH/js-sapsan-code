import { useState } from "react";

export const HomePage = () => {
  function handleClick(){
    dispatch 
  }
  return (
    <div>
      <button onClick={() => setCurrentPage("about")}>About</button>
      {currentPage === "home" && <h1>HomePage...</h1>}
      {currentPage === "about" && <h1>AboutePage...</h1>}
    </div>
  );
};


