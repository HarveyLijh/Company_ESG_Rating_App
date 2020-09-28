import React from "react";
import {
  Form,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  FormInput
} from "shards-react";

export default () => (
  <Form className="main-navbar__search w-100 d-md-flex d-lg-flex">
    <InputGroup seamless className="ml-12">
      <InputGroupAddon type="prepend">
        <InputGroupText>
          <i className="material-icons">search</i>
        </InputGroupText>
      </InputGroupAddon>
      <FormInput
        className="navbar-search"
        placeholder="搜索公司名称"
        style={{"fontSize": "1.3rem"}}
      />
    </InputGroup>
  </Form>
);
