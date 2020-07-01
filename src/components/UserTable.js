import React from "react";
import useSortableData from "./UseSortableData";
import moment from "moment";

const UserTable = (props) => {
  const { employees, requestSort, sortConfig } = useSortableData(
    props.employees
  );

  // class name is changed from ascending to descending vise versa when buttons clicked in heading
  const getClassNamesFor = (name) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };

  return (
    <table>
            {/* headings that are sortable */}
      <thead>
        <tr>
          <th>Profile Pic</th>
          <th>
            <button
              type="button"
              onClick={() => requestSort("name")}
              className={getClassNamesFor("name")}
            >
              Name
            </button>
          </th>
          <th>Phone Number</th>
          <th>
            <button
              type="button"
              onClick={() => requestSort("email")}
              className={getClassNamesFor("email")}
            >
              Email Address
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort("dob")}
              className={getClassNamesFor("dob")}
            >
              DOB
            </button>
          </th>
        </tr>
      </thead>
      {/* employees list */}
      <tbody>
        {employees.map((employee) => {
          // format date
          let shortDate = moment(employee.dob.date).format("DD/MM/YYYY");

          return (
            <tr key={employee.login.uuid}>
              <td>
                <img
                  src={employee.picture.medium}
                  alt={employee.name.first}
                ></img>
              </td>
              <td>{employee.name.first}</td>
              <td>{employee.phone}</td>
              <td>{employee.email}</td>
              <td>{shortDate}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default UserTable;
