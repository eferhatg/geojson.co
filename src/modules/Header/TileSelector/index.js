import React, { Component } from "react";
import {generateOptionsArray} from './utils'
import PropTypes from 'prop-types';
import { css } from "emotion";
import { Select } from "antd";
const { Option, OptGroup } = Select;

function handleChange(value) {
  console.log(`selected ${value}`);
}

export class TileSelector extends Component {
    



  render() {
    const searchBoxWrapper= css`
    float: right;
    
  `;

  let optionMap=this.props.tileProviders?generateOptionsArray(this.props.tileProviders):{}
    return (
        <div className={searchBoxWrapper} style={{ width: 250 }}>
        <Select
          defaultValue="Mapnik"
          style={{ width: 200 }}
          onChange={handleChange}
        >
        {
          Object.keys(optionMap).map((key,i)=>(
              <OptGroup label={key} key={key}>
                {optionMap[key].map((item,i)=>(
                  <Option key={item.value+i.toString()} value={item.value}>{item.text}</Option>
                ))}
              </OptGroup>
          ))
        }
        </Select>
</div>
    );
  }
}

TileSelector.propTypes = {
  tileProviders:PropTypes.array
};

