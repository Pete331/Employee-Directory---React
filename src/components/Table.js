import React, { useState, useEffect } from "react";
import "./styles.css";
import UserTable from "./UserTable";
import API from "../utils/API";
import Nav from "./Nav";
import moment from "moment";

function Table() {
  const [data, setData] = useState();

  useEffect(() => {
    API.getUsers().then((results) => {
      
      const updatedData = results.data.results.map((employee) => {
        let dayMonthDate = moment(employee.dob.date).format("DD/MM");
        let yearDate = moment(employee.dob.date).format("YYYY");
        return {
          firstName: employee.name.first,
          lastName: employee.name.last,
          email: employee.email,
          phone: employee.phone,
          id: employee.login.uuid,
          pic: employee.picture.medium,
          dayMonthDate: dayMonthDate,
          yearDate: yearDate,
        };
      });

      setData(updatedData);
    });
  }, []);

  console.log(data);

  return (
    <div>
      <Nav />
      {/* put the loading in on the if otherwise usertable renders without the data */}
      {!data ? "Loading..." : <UserTable employees={data} />}
    </div>
  );
}

export default Table;
