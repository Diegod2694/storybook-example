import React from 'react';
import { wInfo } from './utils'

import { storiesOf } from '@storybook/react';
import { Button } from './Button';
import { color } from '@storybook/addon-knobs/react';

storiesOf('Button', module)
  .addWithJSX(
    'with background', 
    wInfo(`
      description of the component
    
      ~~~js
      <Button>Click here</Button>
      ~~~
      `
    )(() => (
    <Button bg="palegoldenrod">Hello World</Button>
  )))
  .addWithJSX('with background green', () => (
    <Button bg={color('bg', 'green', 'group1')}>Hello World</Button>
  ));

