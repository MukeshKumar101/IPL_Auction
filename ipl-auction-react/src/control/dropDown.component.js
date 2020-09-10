import React from "react";
import PropTypes from "prop-types";
import classes from "./dropDown.css";

const DropDown = (props) => {
  const {
    id,
    value,
    onChange,
    option,
    isPlaceholderHidden,
    customizeClassName,
  } = props;

  return (
    <div className={classes.contanier}>
      <select
        className={customizeClassName ? [customizeClassName] : classes.select}
        id={id}
        value={value}
        onChange={onChange}
      >
        {option.length !== 0 ? (
          option.map((data, index) => (
            <option
              key={index}
              hidden={isPlaceholderHidden && index === 0}
              value={data}
            >
              {data}
            </option>
          ))
        ) : (
          <option>No data found</option>
        )}
      </select>
    </div>
  );
};

DropDown.propTypes = {
  id: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  option: PropTypes.array,
  isPlaceholderHidden: PropTypes.bool,
  customizeClassName: PropTypes.string,
}

export default DropDown;