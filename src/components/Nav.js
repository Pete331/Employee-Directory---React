import React from "react";
import SearchBox from "./SearchBox";
import Header from "./Header";
import Navbar from 'react-bootstrap/Navbar';

function Nav(props) {
  return (
    <Navbar className="bg-nav border-10 justify-content-between">
      <Header />
      <SearchBox handleInputChange={props.handleInputChange} results={props.search}/>
    </Navbar>
  );
}
export default Nav;
