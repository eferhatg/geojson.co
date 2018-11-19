import React, { PureComponent } from "react";
import { generateOptionsArray } from "./utils";
import PropTypes from "prop-types";
import { css } from "emotion";
import { Select } from "antd";

const { Option, OptGroup } = Select;

export class TileSelector extends PureComponent {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    this.props.changeTile(value);
  }

  render() {
    const searchBoxWrapper = css`
      float: right;
    `;

    let optionMap = this.props.tileProviders
      ? generateOptionsArray(this.props.tileProviders)
      : {};

    return (
      <div className={searchBoxWrapper} style={{ width: 250 }}>
        <Select
          defaultValue="Mapnik"
          style={{ width: 200 }}
          onChange={this.handleChange}
        >
          {Object.keys(optionMap).map((key, i) => (
            <OptGroup label={key} key={key}>
              {optionMap[key].map((item, i) => (
                <Option key={item.value + i.toString()} value={item.value}>
                  {item.text}
                </Option>
              ))}
            </OptGroup>
          ))}
        </Select>
      </div>
    );
  }
}

TileSelector.propTypes = {
  tileProviders: PropTypes.array,
  changeTile: PropTypes.func
};
