import React from 'react';
import { wInfo } from './utils'

import { storiesOf } from '@storybook/react';
import { Button } from './Button';

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
    <Button bg="green">Hello World</Button>
  ));

