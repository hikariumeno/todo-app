import React from "react";

import { MenuTabs } from "../../src/todo-app/MenuTabs";

export default {
  title: "TodoApp/MenuTabs",
  component: MenuTabs,
  argTypes: { onSelect: { aciton: "selected" } },
};

const Template = (args) => <MenuTabs {...args} />;

export const Default = Template.bind({});
Default.args = {
  activeKey: "All",
};
