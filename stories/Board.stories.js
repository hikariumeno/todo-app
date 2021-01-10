import React from "react";

import Board from "../src/Board";

export default {
  title: "tic-tac-toe/Board",
  component: Board,
};

const Template = (args) => <Board {...args} />;

export const Filled = Template.bind({});
Filled.args = {
  squares: ["X", "X", "X", "X", "X", "X", "X", "X", "X"],
};

export const NotFilled = Template.bind({});
NotFilled.args = {
  squares: [],
};
