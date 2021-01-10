import React from 'react';

import Board from '../src/Board';

export default {
  title: 'tic-tac-toe/Board',
  component: Board
};

const Template = (args) => <Board {...args} />;

export const Default = Template.bind({});