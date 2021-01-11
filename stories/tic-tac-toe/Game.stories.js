import React from "react";

import Game from "../../src/tic-tac-toe/Game";

export default {
  title: "tic-tac-toe/Game",
  component: Game,
};

const Template = (args) => <Game {...args} />;

export const Default = Template.bind({});
