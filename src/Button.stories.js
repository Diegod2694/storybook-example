import React from 'react'

import { storiesOf } from '@storybook/react'
import { Button } from './Button'

storiesOf('Button', module).add('with background', () => <Button bg="palegoldenrod">Hello World</Button>)
storiesOf('Button', module).add('with background green', () => <Button bg="green">Hello World</Button>)

