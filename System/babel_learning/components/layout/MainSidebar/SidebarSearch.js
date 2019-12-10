import React from "react";
import { Form } from "shards-react";
import { Input } from 'antd';
const { Search } = Input;

export default () => (
  <Form className="main-sidebar__search w-100 d-sm-flex d-md-none d-lg-none" style={{ display: "flex", minHeight: "45px" }}>
    <Search
      placeholder="input search text"
      enterButton="Search"
      size="large"
      onSearch={value => console.log(value)}
    />
  </Form>
);
