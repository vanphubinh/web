import {
  createTheme,
  Button,
  TextInput,
  rem,
  Textarea,
  Select,
  Radio,
  RadioGroup,
  NumberInput,
} from '@mantine/core';
import buttonClasses from '@/components/ui/Button/Button.module.css';
import inputClasses from '@/components/ui/Input/Input.module.css';
import radioClasses from '@/components/ui/Radio/Radio.module.css';

export const theme = createTheme({
  breakpoints: {
    xs: '32.5em',
    sm: '48em',
    md: '62em',
    lg: '75em',
    xl: '88em',
  },
  colors: {
    blue: [
      '#f4f5f8',
      '#eef1f9',
      '#e1e8f8',
      '#d3e0fb',
      '#c4d6ff',
      '#b4ccff',
      '#a1bdfe',
      '#82a6fb',
      '#061346',
      '#1a2c61',
      '#3956a4',
      '#112256',
    ],
  },
  primaryShade: 8,

  components: {
    Button: Button.extend({
      classNames: buttonClasses,
    }),
    TextInput: TextInput.extend({
      classNames: inputClasses,
      defaultProps: {
        size: 'sm',
      },
    }),
    Textarea: Textarea.extend({
      classNames: inputClasses,
      defaultProps: {
        size: 'sm',
      },
    }),
    Select: Select.extend({
      classNames: inputClasses,
      defaultProps: {
        size: 'sm',
      },
    }),
    Radio: Radio.extend({
      classNames: radioClasses,
    }),
    RadioGroup: RadioGroup.extend({
      classNames: {
        root: radioClasses.groupRoot,
      },
    }),
    NumberInput: NumberInput.extend({
      classNames: inputClasses,
      defaultProps: {
        size: 'sm',
      },
    }),
  },
});
