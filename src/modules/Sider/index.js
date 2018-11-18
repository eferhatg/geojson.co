import React, { Component } from "react";
import {  Layout } from "antd";
import { Accordion } from "./Accordion";
import {connect} from 'react-redux';

const { Sider } = Layout;

class SiderWrapper extends Component {
  render() {
    return (
      <Sider className="Sider" collapsible={true}>
       <Accordion/>
      </Sider>
    );
  }
}

export const SiderModule = SiderWrapper;
