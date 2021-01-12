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
  activeTab: "All",
};

export const True = Template.bind({});
True.args = {
  label: "test",
  checked: true,
  activeTab: "All",
};

export const Completed = Template.bind({});
Completed.args = {
  label: "test",
  checked: true,
  activeTab: "Completed",
};
