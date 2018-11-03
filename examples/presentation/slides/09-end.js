import React from 'react';
import { storiesOf, forceReRender } from '@storybook/react';

import { Spaced } from '@storybook/components';

import { TitlePage } from '../components/page';
import Heading from '../components/heading';
import WrappingInline from '../components/layout/wrapping-inline';
import Avatar from '../components/avatar';

const pictures = [];
const req = require.context('../other/team', true, /\.(jpg|png)$/);
req.keys().forEach(filename => pictures.push(req(filename)));

storiesOf('Slides|end', module)
  .add('thanks', () => (
    <TitlePage>
      <Heading type="main" mods={['centered']}>
        👋
      </Heading>
      <Heading type="main">Thank you for your time!</Heading>
    </TitlePage>
  ))
  .add('thanks to the community', () => (
    <TitlePage>
      <Spaced>
        <Heading type="main" mods={['centered']}>
          🙇‍
        </Heading>
        <WrappingInline align="center" onClick={() => forceReRender()}>
          {pictures
            .slice(0, 10)
            .sort((a, b) => (Math.random() > 0.5 ? 1 : -1))
            .map(p => (
              <Avatar size={3} src={p} />
            ))}
        </WrappingInline>
        <Heading type="main" mods={['centered']}>
          Thank you for your absolute awesomeness!
        </Heading>
        <WrappingInline align="center" onClick={() => forceReRender()}>
          {pictures
            .slice(10)
            .sort((a, b) => (Math.random() > 0.5 ? 1 : -1))
            .map(p => (
              <Avatar size={3} src={p} />
            ))}
        </WrappingInline>
      </Spaced>
    </TitlePage>
  ));
