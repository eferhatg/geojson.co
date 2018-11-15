import React, { Component } from "react";
import { Button, Layout } from "antd";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import {css} from 'emotion'
import 'leaflet/dist/leaflet.css'

const { Header, Sider, Content } = Layout;

class App extends Component {
  render() {
    const mapStyle = css `
    width: 100%; height: 100%; position:relative; left: 0px;
    top: 0px;
  `
    const position = [51.505, -0.09];
    return (
      <Layout className="App">
        <Header className="Header">Header</Header>
        <Layout className="Wrapper">
          <Content className="Content">
            <Map 
            ref="map"
            className={mapStyle}
            center={position} zoom={13}>
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={position}>
                <Popup>
                  A pretty CSS3 popup.
                  <br />
                  Easily customizable.
                </Popup>
              </Marker>
            </Map>
          </Content>
          <Sider className="Sider">
            <Button type="primary">Button</Button>
          </Sider>
        </Layout>
      </Layout>
    );
  }
}

export default App;
