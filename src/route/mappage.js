import React, { Component } from 'react';

import { MapModule } from "../modules/Map";
import { SiderModule } from "../modules/Sider";
import { HeaderModule } from "../modules/Header";


import 'leaflet/dist/leaflet.css'
import {  Layout } from "antd";

const { Content } = Layout;

class MapPage extends Component {
    render() {
        return (
        <Layout className="App">
            <HeaderModule/>
            <Layout className="Wrapper">
                <Content className="Content">
                    <MapModule/>
                </Content>
                <SiderModule/>
            </Layout>
        </Layout>
        );
    }
}
export default MapPage;