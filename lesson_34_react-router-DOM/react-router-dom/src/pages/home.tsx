import { useState } from "react";

export const HomePage = () => {
  const [currentPage, setCurrentPage] = useState("home");
  //   return <h1>HomePage...</h1>;
  return (
    <div>
      <button onClick={() => setCurrentPage("about")}>About</button>
      {currentPage === "home" && <h1>HomePage...</h1>}
      {currentPage === "about" && <h1>AboutePage...</h1>}
    </div>
  );
};
