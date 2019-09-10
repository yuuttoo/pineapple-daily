import React, { Component } from "react";
import Date from "./Header/DateWidget";

class Footer extends Component {
  render() {
    return (
      <footer>
        <Date />
        <h4>Pineapple Daily</h4>
        <a href="#top">返回頂部</a>
      </footer>
    );
  }
}

export default Footer;
