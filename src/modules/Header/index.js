import React, { Component } from 'react';
import {  Layout } from "antd";
import { SearchBox } from './SearchBox';
import { TileSelector } from './TileSelector';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
const { Header } = Layout;
class HeaderWrapper extends Component {



    render() {


    
        return (
            <Header   className="Header" >
            <div>
            <SearchBox />
            <TileSelector tileProviders={this.props.tileProviders}/>

             </div>
        
            </Header>
        );
    }
}

const mapStateToProps = state => ({
    tileProviders:state.tile.tileProviders.providers
});
  
  const mapDispatchToProps = dispatch => bindActionCreators({

  }, dispatch);
  

export const HeaderModule= connect(mapStateToProps, mapDispatchToProps)(HeaderWrapper);
