import React from "react";
import {
  Container,
  InputGroup,
  InputGroupText,
  InputGroupAddon,
  FormInput,
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu
} from "shards-react";

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      open: false
    };
  }

  toggle() {
    this.setState({ open: !this.state.open });
  }


  render(){
    return(
      <Container className=" w-100 d-block d-md-flex d-lg-flex" style={{maxWidth:'700px'}}>
        <InputGroup seamless>
          <InputGroupAddon type="prepend">
            <InputGroupText>
              <i className="material-icons">search</i>
            </InputGroupText>
          </InputGroupAddon>
          <FormInput />
            <Dropdown
              addonType="append"
              open={this.state.open}
              toggle={this.toggle}
            >
              <DropdownToggle caret>Category</DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Courses</DropdownItem>
                <DropdownItem>Instructors</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </InputGroup>
      </Container>
    );
  }
}


