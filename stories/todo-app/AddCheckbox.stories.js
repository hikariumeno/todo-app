import React from "react";

import { AddCheckbox } from "../../src/todo-app/AddCheckbox";

export default {
  title: "TodoApp/AddCheckbox",
  component: AddCheckbox,
};

const Template = (args) => <AddCheckbox {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "test",
};
