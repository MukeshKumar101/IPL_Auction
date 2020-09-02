import React from "react";
import PropTypes from "prop-types";
import classes from "./outLinedTextField.css";

const OutLinedTextField = (props) => {
  const {
    id,
    type,
    value,
    checked,
    disabled,
    onChange,
    fieldName,
    customizeClassNameForInput,
    customizeClassNameForLabel,
    isClassNameProvidedForInput,
    isClassNameProvidedForLabel,
  } = props;
  return (
    <div className={classes.textfield}>
      <input
        className={
          isClassNameProvidedForInput
            ? { customizeClassNameForInput }
            : classes.input
        }
        id={id}
        type={type}
        value={value}
        checked={checked}
        disabled={disabled}
        onChange={onChange}
        placeholder=" "
      />
      <label
        className={
          isClassNameProvidedForLabel
            ? { customizeClassNameForLabel }
            : classes.label
        }
      >
        {fieldName}
      </label>
    </div>
  );
};

OutLinedTextField.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  fieldName: PropTypes.string,
  isClassNameProvidedForInput: PropTypes.bool,
  isClassNameProvidedForLabel: PropTypes.bool,
};

export default OutLinedTextField;