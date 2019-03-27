import React from 'react';
import styled from 'styled-components';
import { string } from 'prop-types';
import {
  C_SHADOW,
  C_CLOUD_DARK,
  C_RHINO,
  C_EBON,
  C_POSTBOX,
} from '@bbc/psammead-styles/colours';
import { GEL_SPACING_DBL } from '@bbc/gel-foundations/spacings';
import {
  GEL_BODY_COPY,
  GEL_FF_REITH_SERIF,
  GEL_FF_REITH_SANS,
} from '@bbc/gel-foundations/typography';

import '../test.css';

const IndexCardStyled = styled.div`
  color: ${C_SHADOW};
  padding-bottom: ${GEL_SPACING_DBL};
  margin: 0; /* Reset */
  ${GEL_BODY_COPY}
  display: inline-block;
`;

const Story = styled.a`
  font-family: ${GEL_FF_REITH_SANS};
  text-decoration: none;
  color: ${C_EBON};

  &:visited {
    color: ${C_CLOUD_DARK};
    border-bottom: 1px solid ${C_CLOUD_DARK};
  }

  &:focus {
    color: ${C_POSTBOX};
    border-bottom: 2px solid ${C_POSTBOX};
  }

  &:hover {
    color: ${C_POSTBOX};
    border-bottom: 2px solid ${C_POSTBOX};
  }
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

const IndexCard = ({ imgSrc, href, headline, intro, timestamp }) => (
  <IndexCardStyled className="gs-o-faux-block-link">
    <Image src={imgSrc} />
    <Story href={href} className="gs-o-faux-block-link__overlay-link">
      <Headline>{headline}</Headline>
      <Intro>{intro}</Intro>
      <TimeStamp>{timestamp}</TimeStamp>
    </Story>
  </IndexCardStyled>
);

IndexCard.propTypes = {
  imgSrc: string.isRequired,
  href: string.isRequired,
  headline: string.isRequired,
  intro: string.isRequired,
  timestamp: string.isRequired,
};

export default IndexCard;
