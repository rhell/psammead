import { MEDIA_QUERY_TYPOGRAPHY } from './breakpoints';
import * as scripts from './scripts/scriptsConfig';

export const GEL_F_REITH_SERIF = `ReithSerif`;
export const GEL_F_REITH_SANS = `ReithSans`;
export const GEL_F_REITH_SANS_COND = `ReithSansCondensed`;

export const getFontFamily = (reithVariant = GEL_F_REITH_SANS, script = '') => {
  const scriptConfig = scripts[`${script}Script`] || scripts.latinScript;
  const { fontFamily, reith } = scriptConfig;
  return reith ? `${reithVariant}, ${fontFamily}` : fontFamily;
};

export const GEL_FF_REITH_SERIF = getFontFamily(GEL_F_REITH_SERIF);
export const GEL_FF_REITH_SANS = getFontFamily(GEL_F_REITH_SANS);
export const GEL_FF_REITH_SANS_COND = getFontFamily(GEL_F_REITH_SANS_COND);

export const GEL_ATLAS = `
  font-size: 4.875rem;
  line-height: 5.25rem;

  ${MEDIA_QUERY_TYPOGRAPHY.SMART_PHONE_ONLY} {
    font-size: 6rem;
    line-height: 6.5rem;
  }

  ${MEDIA_QUERY_TYPOGRAPHY.LAPTOP_AND_LARGER} {
    font-size: 8.75rem;
    line-height: 9.25rem;
  }
`;

export const GEL_ELEPHANT = `
  font-size: 3.75rem;
  line-height: 4rem;

  ${MEDIA_QUERY_TYPOGRAPHY.SMART_PHONE_ONLY} {
    font-size: 4.875rem;
    line-height: 5.25rem;
  }

  ${MEDIA_QUERY_TYPOGRAPHY.LAPTOP_AND_LARGER} {
    font-size: 7.25rem;
    line-height: 7.75rem;
  }
`;

export const GEL_IMPERIAL = `
  font-size: 3.125rem;
  line-height: 3.375rem;

  ${MEDIA_QUERY_TYPOGRAPHY.SMART_PHONE_ONLY} {
    font-size: 4rem;
    line-height: 4.5rem;
  }

  ${MEDIA_QUERY_TYPOGRAPHY.LAPTOP_AND_LARGER} {
    font-size: 6rem;
    line-height: 6.5rem;
  }
`;

export const GEL_ROYAL = `
  font-size: 2.5rem;
  line-height: 2.75rem;

  ${MEDIA_QUERY_TYPOGRAPHY.SMART_PHONE_ONLY} {
    font-size: 3.25rem;
    line-height: 3.75rem;
  }

  ${MEDIA_QUERY_TYPOGRAPHY.LAPTOP_AND_LARGER} {
    font-size: 4.75rem;
    line-height: 5.25rem;
  }
`;

export const GEL_FOOLSCAP = `
  font-size: 2rem;
  line-height: 2.25rem;

  ${MEDIA_QUERY_TYPOGRAPHY.SMART_PHONE_ONLY} {
    font-size: 2.5rem;
    line-height: 2.75rem;
  }

  ${MEDIA_QUERY_TYPOGRAPHY.LAPTOP_AND_LARGER} {
    font-size: 3.5rem;
    line-height: 3.75rem;
  }
`;

export const GEL_CANON = `
  font-size: 1.75rem;
  line-height: 2rem;

  ${MEDIA_QUERY_TYPOGRAPHY.SMART_PHONE_ONLY} {
    font-size: 2rem;
    line-height: 2.25rem;
  }

  ${MEDIA_QUERY_TYPOGRAPHY.LAPTOP_AND_LARGER} {
    font-size: 2.75rem;
    line-height: 3rem;
  }
`;

export const GEL_TRAFALGAR = `
  font-size: 1.25rem;
  line-height: 1.5rem;

  ${MEDIA_QUERY_TYPOGRAPHY.SMART_PHONE_ONLY} {
    font-size: 1.5rem;
    line-height: 1.75rem;
  }

  ${MEDIA_QUERY_TYPOGRAPHY.LAPTOP_AND_LARGER} {
    font-size: 2rem;
    line-height: 2.25rem;
  }
`;

export const GEL_PARAGON = `
  font-size: 1.25rem;
  line-height: 1.5rem;

  ${MEDIA_QUERY_TYPOGRAPHY.SMART_PHONE_ONLY} {
    font-size: 1.375rem;
    line-height: 1.625rem;
  }

  ${MEDIA_QUERY_TYPOGRAPHY.LAPTOP_AND_LARGER} {
    font-size: 1.75rem;
    line-height: 2rem;
  }
`;

export const GEL_DOUBLE_PICA = `
  font-size: 1.25rem;
  line-height: 1.5rem;

  ${MEDIA_QUERY_TYPOGRAPHY.LAPTOP_AND_LARGER} {
    font-size: 1.5rem;
    line-height: 1.75rem;
  }
`;

export const GEL_GREAT_PRIMER = `
  font-size: 1.125rem;
  line-height: 1.375rem;

  ${MEDIA_QUERY_TYPOGRAPHY.LAPTOP_AND_LARGER} {
    font-size: 1.25rem;
    line-height: 1.5rem;
  }
`;

export const GEL_BODY_COPY = `
  font-size: 0.9375rem;
  line-height: 1.25rem;

  ${MEDIA_QUERY_TYPOGRAPHY.SMART_PHONE_AND_LARGER} {
    font-size: 1rem;
    line-height: 1.375rem;
  }
`;

export const GEL_PICA = `
  font-size: 0.9375rem;
  line-height: 1.25rem;

  ${MEDIA_QUERY_TYPOGRAPHY.SMART_PHONE_AND_LARGER} {
    font-size: 1rem;
    line-height: 1.25rem;
  }
`;

export const GEL_LONG_PRIMER = `
  font-size: 0.9375rem;
  line-height: 1.125rem;

  ${MEDIA_QUERY_TYPOGRAPHY.LAPTOP_AND_LARGER} {
    font-size: 0.875rem;
  }
`;

export const GEL_BREVIER = `
  font-size: 0.875rem;
  line-height: 1rem;

  ${MEDIA_QUERY_TYPOGRAPHY.SMART_PHONE_ONLY} {
    line-height: 1.125rem;
  }

  ${MEDIA_QUERY_TYPOGRAPHY.LAPTOP_AND_LARGER} {
    font-size: 0.8125rem;
  }
`;

export const GEL_MINION = `
  font-size: 0.75rem;
  line-height: 1rem;
`;
