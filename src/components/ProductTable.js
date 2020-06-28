import React from "react";
import useSortableData from "./UseSortableData";

const ProductTable = (props) => {
  const { employees, requestSort, sortConfig } = useSortableData(props.products);
  const getClassNamesFor = (name) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };
  return (
    <table>
      <caption>Products</caption>
      {/* headings that are sortable */}
      <thead>
        <tr>
          <th>
            <button
              type="button"
              onClick={() => requestSort("name")}
              className={getClassNamesFor("name")}
            >
              Name
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort("weeklyresult")}
              className={getClassNamesFor("weeklyresult")}
            >
              Weekly Result
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort("email")}
              className={getClassNamesFor("email")}
            >
              Email Address
            </button>
          </th>
        </tr>
      </thead>
      {/* employees list */}
      <tbody>
        {employees.map((employee) => (
          <tr key={employee.name}>
            <td>{employee.name}</td>
            <td>${employee.weeklyresult}</td>
            <td>{employee.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductTable;
