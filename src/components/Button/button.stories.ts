import { html } from 'lit';
import './button';

export default {
  title: 'Button',
  component: 'my-button',
  argTypes: {
    label: { control: 'text' },
    variant: { control: { type: 'select', options: ['primary', 'outline', 'tertiary', 'add', 'destructive'] } },
    size: { control: { type: 'select', options: ['sm', 'md', 'lg'] } },
    type: { control: { type: 'select', options: ['pill', 'brick'] } },
   // disabled: { control: 'boolean' },
  },
};

const Template = ({ label, variant, size, type, disabled }) => html`
  <my-button label="${label}" variant="${variant}" type="${type}" size="${size}" ?disabled="${disabled}"></my-button>
`;

export const Default = Template.bind({});
Default.args = {
  label: 'Button',
  variant: 'primary',
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
  type: 'pill',
  variant: 'primary',
};

export const OutlinedPill = Template.bind({});
OutlinedPill.args = {
  label: 'Button',
  type: 'pill',
  variant: 'outline',
};


