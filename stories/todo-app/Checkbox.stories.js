import React from "react";

import { Checkbox } from "../../src/todo-app/Checkbox";

export default {
  title: "TodoApp/Checkbox",
  component: Checkbox,
  argTypes: { onChange: { aciton: "changed" } },
};

const Template = (args) => <Checkbox {...args} />;

export const False = Template.bind({});
False.args = {
  label: "test",
  checked: false,
};

export const True = Template.bind({});
True.args = {
  label: "test",
  checked: true,
};
