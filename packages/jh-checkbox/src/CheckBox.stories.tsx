import React from 'react';
import { CheckBox } from './CheckBox';

export default {
  title: 'Components/CheckBox',
  component: CheckBox,
};

export const Primary = () => <CheckBox variant="primary">Primary CheckBox</CheckBox>;
export const Secondary = () => <CheckBox variant="secondary">Secondary CheckBox</CheckBox>;