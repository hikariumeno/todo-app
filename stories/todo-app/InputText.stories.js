import React from "react";

import { InputText } from "../../src/todo-app/InputText";

export default {
  title: "TodoApp/InputText",
  component: InputText,
};

const Template = (args) => <InputText {...args} />;

export const Default = Template.bind({});
