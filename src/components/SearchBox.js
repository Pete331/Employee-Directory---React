import React from "react";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";

function SearchBox(props) {
  return (
    <Form inline>
      <FormControl
        value={props.search}
        onChange={props.handleInputChange}
        name="term"
        list="term"
        type="text"
        className="form-control"
        placeholder="Search"
        // className=" mr-sm-2"
      />
    </Form>
  );
}

export default SearchBox;
