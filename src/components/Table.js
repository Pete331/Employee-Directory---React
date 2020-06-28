import React from "react";
import "./styles.css";
import ProductTable from "./ProductTable";
import makeEmployees from "../utils/fakerEmployees";

const EMPLOYEES = makeEmployees()
console.log(EMPLOYEES);

export default function App() {
  return (
    <div className="App">
      <ProductTable products={EMPLOYEES} />
    </div>
  );
}
