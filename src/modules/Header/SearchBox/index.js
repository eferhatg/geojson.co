import React, { Component } from 'react';

import { Icon, Input, AutoComplete } from 'antd';
import { css } from "emotion";
import axios from "axios"

const Option = AutoComplete.Option;


export class SearchBox extends Component {

  constructor(){
    super();
    this.state={dataSource:[]}
    this.searchResult = this.searchResult.bind(this);
    this.renderOption=this.renderOption.bind(this);
    this.handleSearch=this.handleSearch.bind(this);
  }


  async searchResult(query) {
    let queryResult=await axios('https://geocoder.tilehosting.com/q/'+query+'.js?key=jd7e6gjEP1kz0aDtn5zk');
    this.setState(queryResult.data.results);
    
  }

  handleSearch= (value)=> {
    this.setState({
     // dataSource: value ? await this.searchResult(value) : [],
      dataSource:  [],
    });
  }


  renderOption() {
    return (
      this.state.dataSource.map((item)=>{
        return <Option key={item.id} text={item.display_name} value={item.display_name}>
                {item.display_name}
        </Option>
      })

    );
  }


    render() {    
      const searchBoxWrapper= css`
    float: right;
    
  `;
        return (    
        
        <div className={searchBoxWrapper} style={{ width: 250 }}>
          <AutoComplete
            className="certain-category-search"
            dropdownClassName="certain-category-search-dropdown"
            dropdownMatchSelectWidth={false}
            dropdownStyle={{ width: 300 }}
            onSearch={this.handleSearch}
            style={{ width: '100%' }}
            dataSource={this.renderOption()}
            placeholder="Search on map"
            optionLabelProp="value"
          >
            <Input suffix={<Icon type="search" className="certain-category-icon" />} />
          </AutoComplete>
        </div>
           
        );
    }
}

