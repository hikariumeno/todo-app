import React from "react";

import Game from "../src/Game";

export default {
  title: "tic-tac-toe/Game",
  component: Game,
  onClick: { action: "handleCheck" },
};

const Template = (args) => <Game {...args} />;

export const Default = Template.bind({});
Default.args = {
  history: [
    {
      squares: [null, null, null, null, null, null, null, null, null],
    },
    {
      squares: ["X", null, null, null, null, null, null, null, null],
    },
  ],
  current: history[1],
};
