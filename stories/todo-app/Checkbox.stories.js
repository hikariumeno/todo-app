import React from "react";

import { Checkbox } from "../../src/todo-app/Checkbox";

export default {
  title: "TodoApp/Checkbox",
  component: Checkbox,
};

const Template = (args) => <Checkbox {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "test",
};
