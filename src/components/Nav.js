import React from "react";
import SearchBox from "./SearchBox";
import Header from "./Header";
import Navbar from 'react-bootstrap/Navbar';

function Nav() {
  return (
    <Navbar className="bg-light justify-content-between">
      <Header />
      <SearchBox />
    </Navbar>
  );
}
export default Nav;
