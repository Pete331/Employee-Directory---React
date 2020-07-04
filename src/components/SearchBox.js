import React from "react";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";

function SearchBox(props) {
  return (
    <Form inline>
      <Form.Text className="text-white">
        Search by name, email or phone number
      </Form.Text>

      <FormControl
        value={props.search}
        onChange={props.handleInputChange}
        type="text"
        className="m-3 form-control"
        placeholder="Search"
      />
    </Form>
  );
}

export default SearchBox;
