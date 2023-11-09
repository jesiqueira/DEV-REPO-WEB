import React from "react";

import "./style.css";
import Nav from "./Nav";
import Search from "./Search";

const ManPage = () => {
  const handleLogout = () => {
    console.log("Logout");
  };
  const handleSearch = (e) => {
    console.log("query: ", e);
  };
 
  const handleDeletar = () => {
    console.log("Deletar");
  };
  return (
    <div id="main">
      <Nav onLogout={handleLogout} />
      <Search onSearch={handleSearch} />
      
    </div>
  );
};

export default ManPage;
