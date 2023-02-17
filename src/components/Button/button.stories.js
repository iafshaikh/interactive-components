import { html } from 'lit-element';
import { MyButton } from './button';

export default {
  title: 'Button',
  component: 'my-button',
  argTypes: {
    label: { control: 'text', defaultValue: 'Button' },
    type: { options: ['button', 'submit', 'reset'], control: 'inline-radio' },
    variant: { options: ['primary', 'outline', 'tertiary', 'destructive', 'add'], control: 'select' },
    pill: { control: 'boolean', defaultValue: false, },
    size: { options: ['s', 'm', 'l'], defaultValue: 'm', control: 'inline-radio' },
  },
};

const Template = ({ label, type, variant, size, pill, disabled }) => {
  return html`
    <my-button
      type=${type}
      variant=${variant}
      size=${size}
      ?pill=${pill}
      ?disabled=${disabled}
    >
      ${label}
    </my-button>
  `;
};

export const Default = Template.bind({});
Default.args = {
  type: 'button',
  variant: 'primary',
  size: 'm',
};

export const Outlined = Template.bind({});
Outlined.args = {
  label: 'Button',
  variant: 'outline',
};


export const Tertiary = Template.bind({});
Tertiary.args = {
  label: 'Button',
  variant: 'tertiary',
};


export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Button',
  variant: 'disabled',
  disabled: true,
};

export const Destructive = Template.bind({});
Destructive.args = {
  label: 'Button',
  variant: 'destructive',
};

export const Add = Template.bind({});
Add.args = {
  label: 'Button',
  variant: 'add',
};

export const Pill = Template.bind({});
Pill.args = {
  label: 'Button',
  pill: true,
  variant: 'primary',
};

export const OutlinedPill = Template.bind({});
OutlinedPill.args = {
  label: 'Button',
  pill: true,
  variant: 'outline',
};