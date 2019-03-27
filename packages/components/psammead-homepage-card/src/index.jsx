import React from 'react';
import styled from 'styled-components';
import { string } from 'prop-types';
import { C_SHADOW, C_CLOUD_DARK, C_RHINO } from '@bbc/psammead-styles/colours';
import { GEL_SPACING_DBL } from '@bbc/gel-foundations/spacings';
import {
  GEL_BODY_COPY,
  GEL_FF_REITH_SERIF,
  GEL_FF_REITH_SANS,
} from '@bbc/gel-foundations/typography';

const IndexCardStyled = styled.div`
  color: ${C_SHADOW};
  padding-bottom: ${GEL_SPACING_DBL};
  margin: 0; /* Reset */
  ${GEL_BODY_COPY}
  display: inline-block;
`;

const Story = styled.div`
  font-family: ${GEL_FF_REITH_SANS};
`;

const Headline = styled.div`
  font-family: ${GEL_FF_REITH_SERIF};
  font-size: 20px;
  line-height: 24px;
  padding-bottom: 8px;
`;

const Intro = styled.div`
  color: ${C_CLOUD_DARK};
  font-size: 14px;
  line-height: 18px;
  padding-bottom: 8px;
`;

const TimeStamp = styled.div`
  color: ${C_RHINO};
  font-size: 13px;
  line-height: 16px;
`;

const Image = styled.img`
  box-sizing: border-box;
  float: left;
  padding-right: 16px;
  max-width: 30%;
`;

const IndexCard = ({ imgSrc, headline, intro, timestamp }) => (
  <IndexCardStyled>
    <Image src={imgSrc} />
    <Story>
      <Headline>{headline}</Headline>
      <Intro>{intro}</Intro>
      <TimeStamp>{timestamp}</TimeStamp>
    </Story>
  </IndexCardStyled>
);

IndexCard.propTypes = {
  imgSrc: string.isRequired,
  headline: string.isRequired,
  intro: string.isRequired,
  timestamp: string.isRequired,
};

export default IndexCard;
