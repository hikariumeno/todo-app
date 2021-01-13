import React from "react";

import { Checkbox } from "../../src/todo-app/Checkbox";

export default {
  title: "TodoApp/Checkbox",
  component: Checkbox,
  argTypes: {
    onChange: { aciton: "changed" },
    onClick: { aciton: "clicked" },
  },
};

const Template = (args) => <Checkbox {...args} />;

export const False = Template.bind({});
False.args = {
  label: "test",
  checked: false,
  activeTab: "All",
  id: 0,
};

export const True = Template.bind({});
True.args = {
  label: "test",
  checked: true,
  activeTab: "All",
  id: 0,
};

export const Completed = Template.bind({});
Completed.args = {
  label: "test",
  checked: true,
  activeTab: "Completed",
  id: 0,
};
