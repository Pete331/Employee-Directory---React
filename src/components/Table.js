import React, { useState, useEffect } from "react";
import "./styles.css";
import UserTable from "./UserTable";
import API from "../utils/API";
import Nav from "./Nav";
import moment from "moment";

function Table() {
  const [data, setData] = useState();
  const [search, setSearch] = useState();

  useEffect(() => {
    API.getUsers().then((results) => {
      const updatedData = getRequiredData(results);
      setData(updatedData);
    });
  }, []);

  // console.log(data);

  const handleInputChange = (event) => {
    const searchKeys = event.target.value;
    console.log(searchKeys);

    const filteredList = data.filter((item) => {
      let values =
        item.firstName.toLowerCase() +
        " " +
        item.lastName.toLowerCase() +
        item.email.toLowerCase() +
        item.phone.toLowerCase();
      console.log(searchKeys, values);
      if (values.indexOf(searchKeys.toLowerCase()) !== -1) {
        return item;
      }
    });

    setSearch(filteredList);
  };

  function getRequiredData(results) {
    return results.data.results.map((employee) => {
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
  }

  return (
    <div>
      <Nav handleInputChange={handleInputChange} />
      {/* put the loading in on the if otherwise usertable renders without the data */}
      {/* if no searched keys show data(which is all records) otherwise show searched records */}
      {!data ? "Loading..." : <UserTable employees={!search ? data : search} />}
    </div>
  );
}

export default Table;
