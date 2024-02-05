export default class Builder {
  constructor() {
    this.formFields = [];
  }

  addTextField(name, label, placeholder, maxLength = 5) {
    const textField = {
      type: "text",
      name,
      label,
      placeholder,
      maxLength,
    };
    this.formFields.push(textField);
  }

  addCheckbox(name, label, initValue = false) {
    const checkBox = {
      type: "checkbox",
      name,
      label,
      value: initValue,
    };
    this.formFields.push(checkBox);
  }

  build() {
    return this.formFields;
  }
}
