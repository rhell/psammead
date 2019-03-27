import React from 'react';
import { storiesOf } from '@storybook/react';
import notes from '../README.md';
import IndexCard from './index';

storiesOf('Index Card', module)
  .add(
    'default',
    () => (
      <IndexCard
        imgSrc="https://bit.ly/2CE2NZW"
        href="https://www.bbc.co.uk/news/business-47715415"
        headline="UK set to adopt vehicle speed limiters"
        intro="Speed limiting technology looks set to become mandatory for all vehicles sold in Europe from 2022, after new rules were provisionally agreed by the EU."
        timestamp="27 March 2019"
      />
    ),
    { notes },
  )
  .add(
    'long intro',
    () => (
      <IndexCard
        imgSrc="https://ichef.bbci.co.uk/news/660/cpsprodpb/65AD/production/_106192062_d2e15a8c-d47f-417a-954a-eeae4967ce47.jpg"
        href="https://www.bbc.com/mundo/noticias-47606716"
        headline="El boliviano que dejó su trabajo como exitoso hombre de negocios para alimentar a perros callejeros"
        intro="Cada día, justo antes del amanecer, Fernando Kushner se sube a su viejo minibús y se adentra en las calles de La Paz para alimentar a los perros callejeros de esta ciudad boliviana."
        timestamp="27 marzo 2019"
      />
    ),
    { notes },
  );
