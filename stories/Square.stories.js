import React from "react";

import Square from "../src/Square";

export default {
  title: "tic-tac-toe/Square",
  component: Square,
  argTypes: { onClick: { action: "clicked" } },
};

const Template = (args) => <Square {...args} />;

export const Default = Template.bind({});
