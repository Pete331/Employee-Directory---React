import React, { useState, useEffect } from "react";
import "./styles.css";
import UserTable from "./UserTable";
import API from "../utils/API";
import Navbar from './Navbar';

function Table() {
  const [data, setData] = useState();

  useEffect(() => {
    API.getUsers().then((results) => {
      setData(results.data.results);
    });
  }, []);

  console.log(data);

  return (
    <div>
      <Navbar/>
      {/* put the loading in on the if otherwise usertable renders without the data */}
      {!data ? "Loading..." : <UserTable employees={data} />}
    </div>
  );
}

export default Table;
