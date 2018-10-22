import React from 'react';
import { withInfo } from '@storybook/addon-info';

import { storiesOf } from '@storybook/react';
import { Button } from './Button';

storiesOf('Button', module)
  .addWithJSX(
    'with background', 
    withInfo({
      styles: {
        header: {
          h1: {
            color: 'red'
          }
        }
      },
      text:`
      description of the component
    
      ~~~js
      <Button>Click here</Button>
      ~~~
      `
    })(() => (
    <Button bg="palegoldenrod">Hello World</Button>
  )))
  .addWithJSX('with background green', () => (
    <Button bg="green">Hello World</Button>
  ));

