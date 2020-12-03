import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, boolean } from '@storybook/addon-knobs'
import { React as Button } from 'components/Button'
import ModalBackdrop from './react'
import Readme from './react.README.md'

storiesOf('ModalBackdrop', module)
  .addParameters({ readme: { sidebar: Readme } })
  .add('default', () => {
    const [show, setShow] = useState(true)

    const onOutsideClick = () => console.log('click') || setShow(false)

    return (
      <>
        <ModalBackdrop onOutsideClick={onOutsideClick} show={show}>
          <div>Content shows in center</div>
        </ModalBackdrop>
        <Button onClick={() => setShow(true)}>Show Modal</Button>
      </>
    )
  })
