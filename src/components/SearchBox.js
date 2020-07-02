import React from "react";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";

function SearchBox() {
  return (
    <Form inline>
      <FormControl type="text" placeholder="Search" className=" mr-sm-2" />
    </Form>
  );
}

export default SearchBox;
