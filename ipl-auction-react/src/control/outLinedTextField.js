import React from "react";
import PropTypes from "prop-types";
import "./outLinedTextField.css";

const OutLinedTextFiled = (props) => {
  const {
    id,
    type,
    value,
    checked,
    disabled,
    placeholder,
    onChange,
    fieldName,
  } = props;
  return (
    <div className="textfield">
      <input
        id={id}
        type={type}
        value={value}
        checked={checked}
        disabled={disabled}
        placeholder={placeholder}
        onChange={onChange}
      />
      <label>{fieldName}</label>
    </div>
  );
};

OutLinedTextFiled.propTypes = {
  type: PropTypes.string,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
};

export default OutLinedTextFiled;
