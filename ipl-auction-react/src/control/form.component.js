import React, { Component } from "react";
import DropDown from "./dropDown.component";
import OutLinedTextField from "./outLinedTextField.component";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: {},
    };
    this.onRenderComponents = this.onRenderComponents.bind(this);
    this.onValidateValue = this.onValidateValue.bind(this);
  }

  onRenderComponents = (fieldConfiguration) => {
    switch (fieldConfiguration.component) {
      case "input":
        return (
          <div>
            <OutLinedTextField
              id={fieldConfiguration.bindingKey}
              type={fieldConfiguration.type}
              fieldName={fieldConfiguration.fieldName}
              disabled={fieldConfiguration.disabled ? "disabled" : false}
              onChange={(event) => {
                this.onValidateValue(event, fieldConfiguration);
              }}
              value={fieldConfiguration.value}
              customizeClassNameForInput={
                fieldConfiguration.customizeClassNameForInput
              }
              customizeClassNameForLabel={
                fieldConfiguration.customizeClassNameForLabel
              }
            />
            <span style={{ color: "red" }}>
              {this.state.error[fieldConfiguration.bindingKey]}
            </span>
          </div>
        );
      case "dropDown":
        return (
          <div>
            <DropDown
              option={fieldConfiguration.option}
              value={fieldConfiguration.value}
              onChange={fieldConfiguration.onChange}
              id={fieldConfiguration.bindingKey}
              isPlaceholderHidden={fieldConfiguration.isPlaceholderHidden}
              customizeClassName={fieldConfiguration.customizeClassName}
            />
          </div>
        );
      default:
        break;
    }
  };

  onValidateValue = (event, field) => {
    const error = {
      ...this.state.error,
    };

    const value = event.target.value;

    if (
      !field.defaultValidation &&
      field.isCustomValidationNeeded &&
      !field.customValidation()
    ) {
      error[field.bindingKey] = field.message["customValidationErrorMessage"];
      return field.onChange(event, error[field.bindingKey] === "");
    } else if (!field.defaultValidation && !field.isCustomValidationNeeded) {
      return field.onChange(event, error[field.bindingKey] === "");
    }

    if (field.validation["required"] && !value) {
      error[field.bindingKey] = field.message["required"];
    } else if (
      field.validation["min"] &&
      value &&
      value.length < field.validation["min"]
    ) {
      error[field.bindingKey] = field.message["min"];
    } else if (
      field.validation["max"] &&
      value &&
      value.length > field.validation["max"]
    ) {
      error[field.bindingKey] = field.message["max"];
    } else if (
      field.validation["isEmail"] &&
      value &&
      !/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(value)
    ) {
      error[field.bindingKey] = field.message["isEmail"];
    } else {
      error[field.bindingKey] = "";
    }

    this.setState({ error });
    return field.onChange(event, error[field.bindingKey] === "");
  };

  render() {
    const { field } = this.props;

    return (
      <form>
        {field.map((fieldConfiguration) =>
          this.onRenderComponents(fieldConfiguration)
        )}
      </form>
    );
  }
}

export default Form;