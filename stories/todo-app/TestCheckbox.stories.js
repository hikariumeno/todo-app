import React from "react";

import { TestCheckbox } from "../../src/todo-app/TestCheckbox";

export default {
  title: "TodoApp/TestCheckbox",
  component: TestCheckbox,
};

const Template = (args) => <TestCheckbox {...args} />;

export const Default = Template.bind({});
