import React from "react";

import { Page } from "../../src/todo-app/Page";

export default {
  title: "TodoApp/Page",
  component: Page,
};

const Template = (args) => <Page {...args} />;

export const Default = Template.bind({});
