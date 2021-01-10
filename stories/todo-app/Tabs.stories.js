import React from "react";

import { MenuTabs } from "../../src/todo-app/Tabs";

export default {
  title: "TodoApp/Tabs",
  component: MenuTabs,
};

const Template = (args) => <MenuTabs {...args} />;

export const Default = Template.bind({});
