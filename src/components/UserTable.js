import React from "react";
import useSortableData from "./UseSortableData";
import Container from 'react-bootstrap/Container';

const UserTable = (props) => {
  const { employees, requestSort, sortConfig } = useSortableData(
    props.employees
  );

  // class name is changed from ascending to descending vise versa when buttons clicked in heading sortconfig has a key and a direction passed in
  const getClassNamesFor = (name) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };

  return (
    <Container >
    <table className="mt-4">
      {/* headings that are sortable */}
      <thead>
        <tr>
          <th>Profile Pic</th>
          <th>
            <button
              type="button"
              onClick={() => requestSort("lastName")}
              className={getClassNamesFor("lastName")}
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
              onClick={() => requestSort("yearDate")}
              className={getClassNamesFor("yearDate")}
            >
              DOB
            </button>
          </th>
        </tr>
      </thead>
      {/* employees list */}
      <tbody>
        {employees.map((employee) => {
          return (
            <tr key={employee.id}>
              <td>
                <img src={employee.pic} alt={employee.firstName}></img>
              </td>
              <td>
                {employee.firstName} {employee.lastName}
              </td>
              <td>{employee.phone}</td>
              <td>{employee.email}</td>
              <td>
                {employee.dayMonthDate}/{employee.yearDate}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
    </Container>
  );
};

export default UserTable;
